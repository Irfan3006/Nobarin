# 🎬 Nobarin - Streaming Platform

![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-success?style=for-the-badge&logo=vercel)
![Tech Stack](https://img.shields.io/badge/Tech_Stack-Astro_|_Tailwind_|_Node.js-orange?style=for-the-badge&logo=astro)
![Security](https://img.shields.io/badge/Security-CSP_Hardened-blueviolet?style=for-the-badge&logo=dependabot)

**Nobarin** adalah platform agregator streaming film dan series modern yang dibangun menggunakan **Astro** (Server-Side Rendering) dengan fokus pada performa dan SEO. Project ini menggunakan API pihak ketiga untuk menyajikan konten terbaru dengan interface yang bersih dan responsif.

---

## 🚀 Fitur Unggulan

* **Server-Side Rendering (SSR):** Fetching data dilakukan di server untuk performa maksimal dan SEO Friendly.
* **Psychological Loading (The Labor Illusion):** Menggunakan trik psikologi UI dengan counter milidetik dan pesan enkripsi dinamis.
* **Resume Watching (Local Storage):** Menyimpan histori tontonan terakhir (film & episode) secara otomatis di browser pengguna tanpa perlu database.
* **Dynamic Routing:** Menggunakan routing dinamis Astro untuk generate halaman film secara otomatis.
* **Security Hardened:** Aman dari Mixed Content Block karena menggunakan proxy server-side untuk request API.
* **Modern UI/UX:** Desain *Glassmorphism* dengan skema warna *Purple Dark Theme* yang nyaman di mata.
* **Responsive Design:** Optimal diakses melalui Smartphone, Tablet, maupun Desktop.

---

## 🛠️ Tech Stack

* **Framework:** [Astro](https://astro.build/) (SSR Mode)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Runtime:** Node.js (Vercel Adapter)
* **Animations:** [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/), [SweetAlert2](https://sweetalert2.github.io/)
* **Slider:** [Swiper.js](https://swiperjs.com/)
* **Deployment:** [Vercel](https://vercel.com/)

---

## 🛡️ Security Headers (vercel.json)

Project ini mengimplementasikan beberapa lapisan keamanan pada level HTTP Header:
- `Content-Security-Policy`: Membatasi sumber script, frame, dan media hanya dari domain terpercaya.
- `X-Frame-Options`: Mencegah situs dibajak melalui teknik UI Redressing.
- `Strict-Transport-Security`: Memaksa koneksi HTTPS yang aman.

---
## 🌐 Demo
- Link Utama : https://nobarin-one.vercel.app/
- Link Alternatif : https://nobarin.netlify.app/
---


## 📜 Disclaimer
Nobarin adalah proyek edukasi untuk tujuan pembelajaran pengembangan web. Kami tidak menyimpan atau meng-host file video apapun di server kami. Semua konten bersumber dari API pihak ketiga. Silakan baca file [dmca](https://nobarin-one.vercel.app/dmca.html) untuk informasi lebih lanjut.

---

## ☕ Credits & Acknowledgements

Proyek ini menggunakan data dan infrastruktur API yang disediakan oleh:
* **[yontrisnaa](https://github.com/yontrisnaa)** - Terima kasih atas free API-nya yang sangat membantu pengembangan Nobarin.