import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BHTwyJnf.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../chunks/MainLayout_jYN9VHFs.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "404 - Halaman Tidak Ditemukan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-screen flex flex-col items-center justify-center text-center px-6"> <div class="relative mb-8"> <div class="absolute inset-0 bg-purple-600 blur-3xl opacity-20 rounded-full"></div> <h1 class="relative text-9xl font-black text-white/10 select-none">404</h1> <div class="absolute inset-0 flex items-center justify-center"> <span class="text-4xl">🤔</span> </div> </div> <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Film Tidak Ditemukan</h2> <p class="text-gray-400 max-w-md mb-8">
Halaman yang Anda cari mungkin sudah dihapus, link rusak, atau judul film tersebut belum tersedia.
</p> <a href="/" class="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold transition-all shadow-lg shadow-purple-600/30 flex items-center"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
Kembali ke Beranda
</a> </div> ` })}`;
}, "D:/FILE_IRFAN/Coding/nobar-astro/src/pages/404.astro", void 0);

const $$file = "D:/FILE_IRFAN/Coding/nobar-astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
