import { c as createComponent, i as renderComponent, r as renderTemplate, f as createAstro, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_BHTwyJnf.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../chunks/MainLayout_jYN9VHFs.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("q");
  let searchResults = [];
  if (query) {
    try {
      const url = `https://zeldvorik.ru/apiv3/api.php?action=search&q=${encodeURIComponent(query)}`;
      const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0" }
      });
      const data = await res.json();
      if (data.success && data.items) {
        searchResults = data.items;
      }
    } catch (e) {
      console.error("Search Error:", e);
    }
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Pencarian: ${query || "Film"} - Nobarin` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-6 py-24 min-h-screen"> <div class="mb-8 border-b border-white/10 pb-4"> <h1 class="text-2xl md:text-3xl font-bold text-white flex items-center"> <svg class="w-8 h-8 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
Hasil Pencarian: <span class="text-purple-400 ml-2">"${query}"</span> </h1> <p class="text-gray-400 text-sm mt-2">Ditemukan ${searchResults.length} hasil.</p> </div> ${query ? searchResults.length > 0 ? renderTemplate`<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8"> ${searchResults.map((item) => renderTemplate`<a${addAttribute(`/nonton/${item.detailPath}`, "href")} class="group relative bg-white/5 rounded-xl overflow-hidden cursor-pointer movie-card shadow-xl block hover:ring-2 hover:ring-purple-500 transition-all" data-aos="fade-up"> <div class="aspect-[2/3] overflow-hidden"> <img${addAttribute(item.poster, "src")}${addAttribute(item.title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition duration-500" loading="lazy"> </div> <div class="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80"></div> <div class="absolute bottom-0 p-4 w-full"> <div class="flex items-center space-x-2 text-xs mb-1"> <span class="bg-purple-600 px-2 py-0.5 rounded text-white">${item.rating || "N/A"} ⭐</span> <span class="text-gray-300">${item.year}</span> </div> <h3 class="font-semibold truncate text-white">${item.title}</h3> <p class="text-xs text-gray-400 capitalize">${item.type}</p> </div> </a>`)} </div>` : renderTemplate`<div class="flex flex-col items-center justify-center py-20 text-center glass rounded-3xl"> <div class="text-6xl mb-4">😔</div> <h3 class="text-2xl font-bold text-white mb-2">Tidak ditemukan</h3> <p class="text-gray-400">Maaf, kami tidak menemukan film dengan kata kunci "${query}".</p> <p class="text-gray-500 text-sm mt-2">Coba gunakan judul bahasa Inggris atau kata kunci lain.</p> </div>` : renderTemplate`<div class="text-center py-20"> <p class="text-gray-400">Silakan ketik judul film di kolom pencarian di atas.</p> </div>`} </div> ` })}`;
}, "D:/FILE_IRFAN/Coding/nobar-astro/src/pages/search.astro", void 0);

const $$file = "D:/FILE_IRFAN/Coding/nobar-astro/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
