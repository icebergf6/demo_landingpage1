# Sangtau "eRTe" Karawang — Official Landing Page UMKM

[![Netlify Ready](https://img.shields.io/badge/Netlify-Ready-00C7B7?style=flat&logo=netlify&logoColor=white)](https://netlify.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

> Website profil dan platform pemesanan digital kuliner legendaris khas Karawang, **Sangtau "eRTe"** (Sejak 1997). Dibangun dengan arsitektur modern responsif (Mobile-First), performa kilat, dan integrasi pemesanan WhatsApp terotomatisasi.

---

## 🌟 Fitur Utama

- **1. Beranda (Home):**
  - Hero section dengan *interactive real photo switcher* (4 momen kedai otentik).
  - *Continuous Smooth Infinite Marquee Carousel* untuk ulasan pelanggan terverifikasi tanpa jeda.
  - Snapshot informasi kehalalan, harga merakyat (Rp 15.000/porsi), dan jam operasional.
- **2. Daftar Menu & Varian:**
  - *Live Search* dan filter kategori dinamis dengan penghitung item (*badge pills*).
  - Dialog pop-up interaktif detail menu, rincian bahan, dan catatan kepedasan.
  - *Floating bottom checkout drawer* yang otomatis muncul saat item dipilih.
- **3. Cerita Warisan (Heritage Story):**
  - Linimasa sejarah interaktif dengan tata letak zigzag rapi (1997 – Sekarang).
  - Bar navigasi cepat (*quick jump*) per tahun milestone.
  - Galeri arsip foto historis dengan *lightbox modal* resolusi tinggi.
- **4. Lokasi Kedai & Simulator Pemesanan:**
  - Status jam operasional dinamis (*Buka/Tutup* otomatis sesuai waktu lokal).
  - *Interactive Order Simulator* dengan preset porsi cepat (Solo, Berdua, Rapat Kantor).
  - Penghitungan estimasi biaya digital struk otomatis.
  - Integrasi pesan otomatis ke WhatsApp resmi kedai.
  - Dual tab pratinjau kedai fisik & penyematan peta interaktif Google Maps.
  - Fitur salin alamat dan format teks pesanan satu klik.
- **5. Mobile-First Optimization:**
  - Navigasi *sliding drawer* samping yang ramah ibu jari.
  - *Safe area padding* untuk perangkat modern (iOS Home Indicator).
  - Perlindungan *overflow* horizontal dan *zero layout squishing* pada layar 360px+.

---

## 🚀 Menjalankan Secara Lokal

```bash
# 1. Clone repository
git clone https://github.com/icebergf6/demo_landingpage1.git
cd demo_landingpage1

# 2. Install dependencies
npm install

# 3. Jalankan server pengembang
npm run dev

# 4. Verifikasi linting & build produksi
npm run lint
npm run build
```

---

## 🌐 Panduan Deployment di Netlify

Proyek ini telah dikonfigurasi dengan file [`netlify.toml`](./netlify.toml) dan [`public/_redirects`](./public/_redirects):

1. Masuk ke dashboard [Netlify](https://app.netlify.com).
2. Pilih **"Add new site"** > **"Import an existing project"** > **GitHub**.
3. Pilih repository `icebergf6/demo_landingpage1`.
4. Netlify secara otomatis mendeteksi konfigurasi:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Klik **"Deploy site"** — situs Anda akan aktif dalam hitungan detik dengan dukungan routing SPA dan HTTPS gratis.

---

## 📄 Hak Cipta & Lisensi

© 2025 Sangtau Karawang. Seluruh hak cipta dilindungi.
Inisiatif digitalisasi kuliner lokal UMKM Karawang.
