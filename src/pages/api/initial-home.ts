// src/pages/api/initial-home/+server.ts
import type { APIRoute } from "astro";
import { fetchWithCache } from "../../lib/movieCache";

type Item = {
  title: string;
  poster?: string;
  year?: string | number;
  detailPath?: string;
  description?: string;
  rating?: number | string;
  type?: string;
};

type TrendingResponse = {
  success: boolean;
  items?: Item[];
  error?: string;
};

const DEFAULT_ITEMS: Item[] = [
  { 
    title: "Konten Tidak Tersedia", 
    poster: "../../public/logo.png", 
    year: "—", 
    detailPath: "#", 
    description: "Data belum tersedia", 
    rating: "N/A", 
    type: "movie" 
  },
];

const API_ENDPOINTS = [
  "https://rgsordertracking.com/apiv3/api.php?action=trending&page=1", // UTAMA
  "https://zeldvorik.ru/apiv3/api.php?action=trending&page=1"          // BACKUP
];

// Batas waktu tunggu dalam milidetik (30 detik)
const TIMEOUT_MS = 30000; 

// Fungsi Helper: Membungkus fetch dengan timeout
const fetchWithTimeout = (promise: Promise<any>, ms: number) => {
  let timeoutId: NodeJS.Timeout;
  
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(`Request timed out after ${ms}ms`));
    }, ms);
  });

  return Promise.race([
    promise,
    timeoutPromise
  ]).then((res) => {
    clearTimeout(timeoutId!); // Bersihkan timer jika fetch berhasil duluan
    return res;
  });
};

export const GET: APIRoute = async () => {
  let lastError: string = "Unknown error";

  for (const endpoint of API_ENDPOINTS) {
    try {
      console.log(`[initial-home] Trying to fetch: ${endpoint} (Timeout: ${TIMEOUT_MS}ms)`);
      
      // KITA GUNAKAN WRAPPER TIMEOUT DI SINI
      // Jika fetchWithCache memakan waktu > 30 detik, ini akan melempar Error "Request timed out"
      const data = await fetchWithTimeout(
        fetchWithCache(endpoint, 15 * 60 * 1000), 
        TIMEOUT_MS
      ) as TrendingResponse;

      if (data && data.success && Array.isArray((data as any).items)) {
        console.log(`[initial-home] Success fetching from ${endpoint}`);
        
        return new Response(JSON.stringify({ 
          success: true, 
          items: data.items 
        } as TrendingResponse), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=60, s-maxage=900, stale-while-revalidate=300"
          }
        });
      } else {
        console.warn(`[initial-home] Invalid data structure from ${endpoint}, trying next...`);
        lastError = "Invalid data structure";
      }

    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      lastError = msg;
      // Pesan ini akan muncul jika timeout atau server error
      console.warn(`[initial-home] Failed/Timeout fetching ${endpoint}: ${msg}. Switching to backup...`);
      // Loop otomatis lanjut ke URL berikutnya
    }
  }

  // JIKA SEMUA GAGAL
  console.error("[initial-home] All endpoints failed. Returning default items.");
  
  return new Response(JSON.stringify({
    success: false,
    items: DEFAULT_ITEMS,
    error: `All providers failed. Last error: ${lastError}`
  } as TrendingResponse), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=10, s-maxage=60, stale-while-revalidate=300"
    }
  });
};