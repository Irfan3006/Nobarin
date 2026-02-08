// src/pages/api/initial-home/+server.ts  (atau src/pages/api/initial-home.ts depending astro setup)
import type { APIRoute } from "astro";
import { fetchWithCache } from "../../lib/movieCache";

type Item = {
  title: string;
  poster?: string;
  year?: string|number;
  detailPath?: string;
  description?: string;
  rating?: number|string;
  type?: string;
};

type TrendingResponse = {
  success: boolean;
  items?: Item[];
  error?: string;
};

const DEFAULT_ITEMS: Item[] = [
 
  { title: "Konten Tidak Tersedia", poster: "../../public/logo.png", year: "—", detailPath: "#", description: "Data belum tersedia", rating: "N/A", type: "movie" },
];

export const GET: APIRoute = async () => {
  try {
   
    const data = await fetchWithCache("https://rgsordertracking.com/apiv3/api.php?action=trending&page=1", 15 * 60 * 1000) as TrendingResponse;

   
    if (!data || !data.success || !Array.isArray((data as any).items)) {
     
      return new Response(JSON.stringify({
        success: false,
        items: DEFAULT_ITEMS,
        error: "External API returned invalid data"
      } as TrendingResponse), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=60, s-maxage=900, stale-while-revalidate=300"
        }
      });
    }
   
    return new Response(JSON.stringify({ success: true, items: data.items } as TrendingResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60, s-maxage=900, stale-while-revalidate=300"
      }
    });

  } catch (err: unknown) {
   
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[initial-home] fetch error:", msg);

    return new Response(JSON.stringify({
      success: false,
      items: DEFAULT_ITEMS,
      error: `Failed to fetch external API: ${msg}`
    } as TrendingResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=10, s-maxage=60, stale-while-revalidate=300"
      }
    });
  }
};
