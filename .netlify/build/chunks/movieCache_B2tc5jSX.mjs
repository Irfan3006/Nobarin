const cache = /* @__PURE__ */ new Map();
const DEFAULT_TTL = 10 * 60 * 1e3;
async function fetchWithCache(url, ttl = DEFAULT_TTL) {
  const now = Date.now();
  if (cache.has(url)) {
    const cachedItem = cache.get(url);
    if (cachedItem && cachedItem.expiry > now) {
      console.log(`[CACHE HIT] ${url}`);
      return cachedItem.data;
    }
  }
  console.log(`[FETCH SERVER] ${url}`);
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
  });
  if (!res.ok) {
    throw new Error(`API Error: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  if (data.success) {
    cache.set(url, {
      data,
      expiry: now + ttl
    });
  }
  return data;
}

export { fetchWithCache as f };
