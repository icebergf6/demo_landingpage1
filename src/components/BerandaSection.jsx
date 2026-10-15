import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/menuData';

export default function BerandaSection({ onNavigateMenu, onNavigateCerita, onNavigateLokasi }) {
  // Interactive Hero Photo Switcher
  const heroPhotos = [
    {
      id: "hero-1",
      title: "Sepiring Sangtau \"eRTe\"",
      subtitle: "Tahu sutra empuk, bumbu kacang legit & taburan bawang goreng",
      src: "./image/sangtau-sepiring.png",
      tag: "Porsi Siap Santap"
    },
    {
      id: "hero-2",
      title: "Siraman Bumbu & Kecap Legendaris",
      subtitle: "Aksi meracik kuah bumbu kacang hangat dengan kecap manis khas",
      src: "./image/tuang-kecap-bumbu.png",
      tag: "Racikan Otentik"
    },
    {
      id: "hero-3",
      title: "Tahu Putih Goreng Dadakan",
      subtitle: "Digoreng segar langsung di wajan panas saat ada pesanan",
      src: "./image/tahu-goreng-wajan.png",
      tag: "Fresh di Wajan"
    },
    {
      id: "hero-4",
      title: "Gerobak Kayu Sejak 1997",
      subtitle: "Jejak sejarah asli di sudut Jl. K.H. Dewantara Nagasari",
      src: "./image/gerobak-perintis.png",
      tag: "Warisan Sejak 1997"
    }
  ];

  const [activeHeroPhoto, setActiveHeroPhoto] = useState(0);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  // Duplicate testimonials for smooth seamless infinite marquee loop
  const marqueeReviews = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#faf2ee] py-12 lg:py-20">
        {/* Ambient Warm Glows */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#96220e]/10 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#fe932c]/15 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headlines & Action */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ffdcc3] text-[#6e3900] shadow-xs">
                  <span className="material-symbols-outlined text-[18px] text-[#904d00]">verified</span>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Sangtau "eRTe" • Sejak 1997 Karawang
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#95f8a7] text-[#00210a] text-xs font-bold">
                  <span className="material-symbols-outlined text-[16px] text-[#005c27]">verified_user</span>
                  <span>Halal ID 32110003079180623</span>
                </div>
              </div>

              <h1 className="font-['Epilogue'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e1b19] leading-tight tracking-tight">
                Cita Rasa Otentik <br className="hidden sm:inline" />
                <span className="text-[#96220e] underline decoration-[#fe932c] decoration-wavy underline-offset-8">
                  Sangtau "eRTe" Karawang
                </span> <br className="hidden sm:inline" />
                Legenda Sejak 1997.
              </h1>

              <p className="text-[#59413c] text-base sm:text-lg leading-relaxed max-w-2xl">
                Nikmati kelezatan tahu sutra lembut dipadu bumbu kacang gurih legit, kucuran kecap manis khas, dan taburan bawang goreng renyah melimpah. Disajikan hangat dadakan hanya{' '}
                <strong className="text-[#96220e] font-extrabold">Rp 15.000</strong> per porsi.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onNavigateMenu}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#96220e] text-white rounded-xl text-sm sm:text-base font-bold hover:bg-[#b83a24] transition-all shadow-[0_8px_20px_rgba(150,34,14,0.28)] active:scale-95 cursor-pointer w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined text-[20px]">restaurant_menu</span>
                  <span>Lihat Menu & Harga</span>
                </button>

                <a
                  href="https://wa.me/6281234567890?text=Halo%20Sangtau%20eRTe%20Karawang,%20saya%20ingin%20memesan%20porsi%20hangat%20hari%20ini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#007735] text-white rounded-xl text-sm sm:text-base font-bold hover:bg-[#005c27] transition-all shadow-[0_8px_20px_rgba(0,119,53,0.22)] active:scale-95 w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Pesan via WhatsApp</span>
                </a>
              </div>

              {/* Trust Badges Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="flex items-center gap-2.5 p-3 bg-[#f4ece8] rounded-xl border border-[#e0bfb9]/30">
                  <span className="material-symbols-outlined text-[#904d00] text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-[#1e1b19] leading-none">4.9 / 5</span>
                    <span className="text-xs text-[#59413c] mt-0.5">1.200+ Ulasan</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 bg-[#f4ece8] rounded-xl border border-[#e0bfb9]/30">
                  <span className="material-symbols-outlined text-[#96220e] text-[22px]">history_edu</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-[#1e1b19] leading-none">28+ Tahun</span>
                    <span className="text-xs text-[#59413c] mt-0.5">Resep Asli 1997</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 bg-[#f4ece8] rounded-xl border border-[#e0bfb9]/30">
                  <span className="material-symbols-outlined text-[#005c27] text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-[#1e1b19] leading-none">100% Halal</span>
                    <span className="text-xs text-[#59413c] mt-0.5">Sertifikat Resmi</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 bg-[#f4ece8] rounded-xl border border-[#e0bfb9]/30">
                  <span className="material-symbols-outlined text-[#904d00] text-[22px]">pin_drop</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-[#1e1b19] leading-none">Nagasari</span>
                    <span className="text-xs text-[#59413c] mt-0.5">Blok Yanten No. 2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Authentic Photo Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Layered Backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#fe932c]/20 to-[#96220e]/10 rounded-2xl transform rotate-2"></div>
                
                {/* Main Showcase Card */}
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-[0_16px_36px_-6px_rgba(150,34,14,0.18)] border border-[#e0bfb9]/40">
                  <div className="relative h-[340px] sm:h-[390px] overflow-hidden bg-[#241410]">
                    <img
                      src={heroPhotos[activeHeroPhoto].src}
                      alt={heroPhotos[activeHeroPhoto].title}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                    />
                    
                    {/* Top Status Pill */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-xs rounded-full text-xs font-bold text-[#1e1b19] flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#007735] animate-pulse"></span>
                      <span>{heroPhotos[activeHeroPhoto].tag}</span>
                    </div>

                    {/* Bottom Caption Pill */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-[#e0bfb9]/30 flex items-center justify-between">
                      <div className="flex flex-col pr-2">
                        <span className="font-bold text-sm text-[#1e1b19] leading-tight">
                          {heroPhotos[activeHeroPhoto].title}
                        </span>
                        <span className="text-xs text-[#59413c] mt-0.5 line-clamp-1">
                          {heroPhotos[activeHeroPhoto].subtitle}
                        </span>
                      </div>
                      <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[#96220e] text-base shrink-0">
                        Rp 15.000
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail Selector Strip (Clickable Real Photos) */}
                  <div className="p-3 bg-[#fff8f5] border-t border-[#e0bfb9]/30">
                    <span className="text-[11px] font-bold text-[#8d716b] uppercase tracking-wider block mb-2 px-1">
                      Pilih Foto Dokumentasi Asli Kedai:
                    </span>
                    <div className="grid grid-cols-4 gap-2">
                      {heroPhotos.map((item, idx) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveHeroPhoto(idx)}
                          className={`relative rounded-lg overflow-hidden border-2 transition-all p-0.5 cursor-pointer group ${
                            activeHeroPhoto === idx
                              ? 'border-[#96220e] ring-2 ring-[#96220e]/20 scale-102'
                              : 'border-[#e0bfb9]/50 opacity-70 hover:opacity-100 hover:border-[#96220e]/60'
                          }`}
                          aria-label={`Lihat foto ${item.title}`}
                        >
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-14 object-cover rounded-sm"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Mengapa Sangtau eRTe Menjadi Legenda */}
      <section className="w-full py-16 bg-[#fff8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-[#904d00] uppercase tracking-widest block mb-1">
                Dedikasi Rasa Karawang
              </span>
              <h2 className="font-['Epilogue'] text-2xl sm:text-3xl font-bold text-[#1e1b19]">
                Mengapa Sangtau "eRTe" Dicintai Warga Karawang?
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#59413c] max-w-md">
              Lebih dari sekadar sepiring tahu bumbu, Sangtau "eRTe" adalah ikatan rasa yang terus dijaga kemurniannya tanpa bahan pengawet buatan sejak 1997.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col p-6 bg-[#faf2ee] rounded-2xl hover:bg-[#f4ece8] transition-all group border border-[#e0bfb9]/30">
              <div className="w-14 h-14 rounded-xl bg-[#ffdcc3] text-[#904d00] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-xs">
                <span className="material-symbols-outlined text-[30px]">hourglass_top</span>
              </div>
              <span className="text-xs text-[#904d00] font-bold uppercase tracking-wider mb-1">
                Resep Asli 1997
              </span>
              <h3 className="font-['Epilogue'] text-lg font-bold text-[#1e1b19] mb-2">
                Bumbu Kacang & Kecap Racikan Sendiri
              </h3>
              <p className="text-sm text-[#59413c] leading-relaxed flex-grow">
                Racikan kacang tanah sangrai pilihan yang diulek lembut bersama rempah alami dan kucuran kecap manis khas, menghasilkan paduan gurih legit yang konsisten selama 28 tahun.
              </p>
              <div className="mt-4 pt-3 flex items-center gap-1.5 text-[#96220e] text-xs font-bold">
                <span>Rasa otentik tak pernah berubah</span>
                <span className="material-symbols-outlined text-[16px]">verified</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col p-6 bg-[#faf2ee] rounded-2xl hover:bg-[#f4ece8] transition-all group border border-[#e0bfb9]/30">
              <div className="w-14 h-14 rounded-xl bg-[#ffdad3] text-[#96220e] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-xs">
                <span className="material-symbols-outlined text-[30px]">savings</span>
              </div>
              <span className="text-xs text-[#96220e] font-bold uppercase tracking-wider mb-1">
                Harga Merakyat
              </span>
              <h3 className="font-['Epilogue'] text-lg font-bold text-[#1e1b19] mb-2">
                Porsi Kenyang Cuma Rp 15.000
              </h3>
              <p className="text-sm text-[#59413c] leading-relaxed flex-grow">
                Komitmen kami agar semua kalangan—pekerja pabrik kawasan industri, anak sekolah, mahasiswa Unsika, hingga lansia—bisa menikmati santapan bergizi yang mengenyangkan.
              </p>
              <div className="mt-4 pt-3 flex items-center gap-1.5 text-[#904d00] text-xs font-bold">
                <span>Porsi mantap & terjangkau</span>
                <span className="material-symbols-outlined text-[16px]">thumb_up</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col p-6 bg-[#faf2ee] rounded-2xl hover:bg-[#f4ece8] transition-all group border border-[#e0bfb9]/30">
              <div className="w-14 h-14 rounded-xl bg-[#95f8a7] text-[#005c27] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-xs">
                <span className="material-symbols-outlined text-[30px]">skillet</span>
              </div>
              <span className="text-xs text-[#005c27] font-bold uppercase tracking-wider mb-1">
                Goreng Dadakan
              </span>
              <h3 className="font-['Epilogue'] text-lg font-bold text-[#1e1b19] mb-2">
                Tahu Putih Segar di Wajan Panas
              </h3>
              <p className="text-sm text-[#59413c] leading-relaxed flex-grow">
                Tahu putih berkualitas dipotong dadu dan digoreng dadakan saat Anda memesan. Kulit luar gurih renyah dengan bagian dalam super lembut yang langsung meleleh di mulut.
              </p>
              <div className="mt-4 pt-3 flex items-center gap-1.5 text-[#005c27] text-xs font-bold">
                <span>Disajikan panas mengepul</span>
                <span className="material-symbols-outlined text-[16px]">spa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sekilas Menu Populer (Featured Menu Teaser with Real Photos) */}
      <section className="w-full py-16 bg-[#faf2ee] scroll-mt-24" id="menu-populer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
            <div>
              <span className="text-xs font-bold text-[#96220e] uppercase tracking-widest block mb-1">
                Pilihan Terfavorit Pengunjung
              </span>
              <h2 className="font-['Epilogue'] text-2xl sm:text-3xl font-bold text-[#1e1b19]">
                Menu Andalan Sangtau "eRTe"
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f4ece8] rounded-full text-[#59413c] text-xs font-semibold">
              <span className="material-symbols-outlined text-[18px] text-[#005c27]">verified</span>
              <span>Resmi Halal Indonesia & Bayar QRIS</span>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group border border-[#e0bfb9]/40">
              <div className="relative h-60 overflow-hidden bg-[#241410]">
                <img
                  src="./image/sangtau-sepiring.png"
                  alt="Sepiring Sangtau eRTe Nasi Tahu Bumbu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-[#fe932c] text-[#663500] font-extrabold text-sm shadow-md">
                  Rp 15.000
                </div>
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#1e1b19] text-xs font-bold flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[16px] text-[#904d00]">star</span>
                  Best Seller Sejak 1997
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-base text-[#1e1b19]">Sangtau "eRTe" Spesial</h3>
                  <span className="text-xs font-bold text-[#005c27] bg-[#95f8a7]/40 px-2 py-0.5 rounded">Tersedia</span>
                </div>
                <p className="text-xs sm:text-sm text-[#59413c] leading-relaxed flex-grow mb-4">
                  Sajian nasi putih hangat berpadu tahu sutra empuk, siraman bumbu kacang gurih legit, kucuran kecap manis khas, dan taburan melimpah bawang goreng renyah.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#e9e1dd]">
                  <span className="text-xs text-[#8d716b]">Nasi + Tahu + Bumbu</span>
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Sangtau%20eRTe,%20saya%20pesan%20Sangtau%20Spesial%20Rp15.000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-1.5 bg-[#96220e] text-white rounded-lg text-xs font-bold hover:bg-[#b83a24] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                    <span>Pesan</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group border border-[#e0bfb9]/40">
              <div className="relative h-60 overflow-hidden bg-[#241410]">
                <img
                  src="./image/tuang-kecap-bumbu.png"
                  alt="Kupat Tahu Bumbu Otentik"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-[#fe932c] text-[#663500] font-extrabold text-sm shadow-md">
                  Rp 15.000
                </div>
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-[#96220e] text-white text-xs font-bold flex items-center gap-1 shadow-xs">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  Siraman Bumbu Khas
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-base text-[#1e1b19]">Kupat Tahu Bumbu Otentik</h3>
                  <span className="text-xs font-bold text-[#005c27] bg-[#95f8a7]/40 px-2 py-0.5 rounded">Tersedia</span>
                </div>
                <p className="text-xs sm:text-sm text-[#59413c] leading-relaxed flex-grow mb-4">
                  Kupat kenyal lembut dipotong pas suap, disandingkan tahu sutra goreng dadakan, diguyur bumbu kacang rempah kental dan kucuran kecap istimewa.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#e9e1dd]">
                  <span className="text-xs text-[#8d716b]">Kupat + Tahu + Bumbu</span>
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Sangtau%20eRTe,%20saya%20pesan%20Kupat%20Tahu%20Bumbu%20Rp15.000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-1.5 bg-[#96220e] text-white rounded-lg text-xs font-bold hover:bg-[#b83a24] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                    <span>Pesan</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group border border-[#e0bfb9]/40">
              <div className="relative h-60 overflow-hidden bg-[#241410]">
                <img
                  src="./image/tahu-goreng-wajan.png"
                  alt="Tahu Goreng Dadakan di Wajan Panas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-[#fe932c] text-[#663500] font-extrabold text-sm shadow-md">
                  Rp 15.000
                </div>
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#1e1b19] text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#005c27]">skillet</span>
                  Goreng Segar Dadakan
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-base text-[#1e1b19]">Tahu Bumbu Dadakan Hangat</h3>
                  <span className="text-xs font-bold text-[#005c27] bg-[#95f8a7]/40 px-2 py-0.5 rounded">Tersedia</span>
                </div>
                <p className="text-xs sm:text-sm text-[#59413c] leading-relaxed flex-grow mb-4">
                  Tahu putih pilihan digoreng langsung di minyak panas bersih. Kulit luar gurih dengan tekstur dalam super lembut, siap disantap hangat bersama bumbu legit.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#e9e1dd]">
                  <span className="text-xs text-[#8d716b]">Tahu Fresh di Wajan</span>
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Sangtau%20eRTe,%20saya%20pesan%20Tahu%20Bumbu%20Dadakan%20Rp15.000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-1.5 bg-[#96220e] text-white rounded-lg text-xs font-bold hover:bg-[#b83a24] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                    <span>Pesan</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* View All Menu CTA */}
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={onNavigateMenu}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#96220e] text-[#96220e] hover:bg-[#96220e] hover:text-white font-bold text-sm sm:text-base shadow-sm transition-all cursor-pointer"
            >
              <span>Lihat Menu Lengkap & Lauk Pelengkap (Telur Asin, Bakwan, Emping)</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. Cerita Singkat Kami (Story Teaser with Real Vintage Cart Photo) */}
      <section className="w-full py-16 bg-[#fff8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Vintage Cart Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-[#ffdcc3]/50 transform -rotate-1"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#eee7e3] border border-[#e0bfb9]/40">
                  <img
                    src="./image/gerobak-perintis.png"
                    alt="Gerobak kayu perintis Sangtau eRTe sejak 1997"
                    className="w-full h-80 sm:h-96 object-cover object-top"
                  />
                  <div className="p-4 bg-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-[#96220e] uppercase block">Gerobak Kayu Otentik</span>
                        <span className="font-bold text-sm text-[#1e1b19]">Sudut Jl. K.H. Dewantara Nagasari</span>
                      </div>
                      <span className="px-3 py-1 bg-[#ffdcc3] text-[#6e3900] text-xs font-bold rounded-full">
                        Est. 1997
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Story Content */}
            <div className="lg:col-span-7 flex flex-col gap-4 order-1 lg:order-2">
              <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#f4ece8] text-[#96220e] text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
                <span>Jejak Warisan Rasa Karawang</span>
              </div>
              <h2 className="font-['Epilogue'] text-2xl sm:text-3xl font-bold text-[#1e1b19] leading-snug">
                Dari Gerobak Kayu di Nagasari, Menjadi Rasa Kebanggaan Karawang.
              </h2>
              <p className="text-base text-[#59413c] leading-relaxed">
                Perjalanan rasa Sangtau "eRTe" bermula pada akhir tahun 1997 di sudut Jl. K.H. Dewantara Nagasari. Di tengah pesatnya pertumbuhan industri kota Karawang, resep bumbu kacang sangrai, tahu sutra lembut, dan kucuran kecap manis kami tetap dirawat murni tanpa sedikit pun kompromi.
              </p>
              <p className="text-sm text-[#59413c] leading-relaxed">
                Bagi ribuan warga Karawang, semangkuk Sangtau bukan sekadar pengisi perut di jam istirahat kerja atau santap pagi. Ia adalah semerbak kenikmatan yang menenangkan hati, merawat nostalgia masa kecil, dan mempererat silaturahmi lintas generasi.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onNavigateCerita}
                  className="inline-flex items-center gap-2 text-[#96220e] hover:text-[#b83a24] font-bold text-sm sm:text-base transition-colors group cursor-pointer"
                >
                  <span>Baca Selengkapnya Kisah Sangtau eRTe 1997</span>
                  <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Ulasan Pelanggan: Continuous Smooth Infinite Marquee Carousel */}
      <section className="w-full py-16 bg-[#eee7e3]/40 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-[#904d00] uppercase tracking-widest">
                  Suara Pelanggan Setia
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#904d00]"></span>
                <span className="text-xs font-bold text-[#005c27] flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[15px]">verified</span>
                  1.200+ Ulasan Terverifikasi
                </span>
              </div>
              <h2 className="font-['Epilogue'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e1b19]">
                Dicintai dari Generasi ke Generasi
              </h2>
              <p className="text-xs sm:text-sm text-[#59413c] mt-2 max-w-xl leading-relaxed">
                Kisah nyata pelanggan lintas generasi: mulai dari buruh pabrik kawasan industri, sesepuh Nagasari, tenaga medis, mahasiswa, hingga perantau.
              </p>
            </div>

            {/* Marquee status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e0bfb9]/60 shadow-xs self-start md:self-end">
              <span className="w-2.5 h-2.5 rounded-full bg-[#007735] animate-ping"></span>
              <span className="text-xs font-semibold text-[#59413c]">
                Animasi Berjalan Halus Tanpa Henti
              </span>
            </div>
          </div>
        </div>

        {/* Infinite Marquee Track with Edge Gradient Fades */}
        <div className="relative w-full overflow-hidden">
          {/* Left & Right Subtle Gradient Masks for High-End Look */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#eee7e3] to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#eee7e3] to-transparent z-10"></div>

          {/* Marquee Container (Pauses when user hovers or taps) */}
          <div
            className={`flex flex-row flex-nowrap w-max animate-marquee-infinite py-3 ${isMarqueePaused ? 'paused' : ''}`}
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              width: 'max-content',
            }}
            onMouseEnter={() => setIsMarqueePaused(true)}
            onMouseLeave={() => setIsMarqueePaused(false)}
            onTouchStart={() => setIsMarqueePaused(true)}
            onTouchEnd={() => setIsMarqueePaused(false)}
          >
            {marqueeReviews.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="w-[285px] sm:w-[380px] shrink-0 px-2 sm:px-3"
              >
                <div className="h-full p-6 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#e0bfb9]/50 relative overflow-hidden group">
                  {/* Decorative Watermark */}
                  <div className="pointer-events-none absolute -top-2 -right-2 text-[#f4ece8] select-none text-[80px] font-serif leading-none opacity-60 group-hover:scale-110 transition-transform">
                    ”
                  </div>

                  <div className="relative z-10 flex flex-col gap-3">
                    {/* Stars + Tag */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-0.5 text-[#fe932c]">
                        {[...Array(review.rating)].map((_, i) => (
                          <span
                            key={i}
                            className="material-symbols-outlined text-[18px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            star
                          </span>
                        ))}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#ffdcc3] text-[#6e3900] text-[11px] font-bold">
                        {review.tag}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-xs sm:text-sm text-[#1e1b19] leading-relaxed italic my-1 font-medium">
                      "{review.quote}"
                    </p>
                  </div>

                  {/* Author Meta */}
                  <div className="relative z-10 flex items-center justify-between gap-3 pt-4 border-t border-[#f4ece8] mt-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-xs shrink-0 ${review.bgClass}`}
                      >
                        {review.initials}
                      </div>
                      <div className="flex flex-col leading-tight">
                        <h4 className="font-bold text-sm text-[#1e1b19]">
                          {review.author}
                        </h4>
                        <span className="text-[11px] text-[#59413c] mt-0.5">
                          {review.role}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] text-[#8d716b] shrink-0 font-medium">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Helpful micro text */}
        <div className="text-center text-[11px] text-[#8d716b] mt-4 flex items-center justify-center gap-1.5">
          <span className="material-symbols-outlined text-[15px]">touch_app</span>
          <span>Arahkan kursor atau sentuh layar untuk menjeda ulasan dan membaca lebih santai</span>
        </div>
      </section>

      {/* 6. Banner Pemesanan Cepat & Rute Lokasi Kedai Fisik */}
      <section className="w-full py-16 bg-[#fff8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#96220e] text-white shadow-2xl p-6 sm:p-10 lg:p-12">
            {/* Background Organic Glows */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-[#fe932c]/20 blur-2xl"></div>
            <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-2xl"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-white/15 text-[#ffded8] text-xs font-bold uppercase">
                  <span className="material-symbols-outlined text-[16px]">storefront</span>
                  <span>Kedai Fisik & Layanan Antar</span>
                </div>
                <h2 className="font-['Epilogue'] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Santap Hangat Hari Ini di Kedai Sangtau "eRTe"?
                </h2>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  Kunjungi kedai kami langsung di <strong className="text-[#ffdcc3]">Blok Yanten No. 2, Jl. K.H. Dewantara Nagasari Karawang</strong>, atau pesan sekarang via WhatsApp untuk pengiriman kilat ke kantor/rumah Anda.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Sangtau%20eRTe%20Karawang,%20saya%20mau%20pesan%20antar%20sekarang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#007735] text-white rounded-xl text-sm font-bold hover:bg-[#005c27] transition-transform active:scale-95 shadow-md"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    <span>Chat WhatsApp Cepat</span>
                  </a>
                  <button
                    type="button"
                    onClick={onNavigateLokasi}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#fff8f5] text-[#96220e] rounded-xl text-sm font-bold hover:bg-[#f4ece8] transition-transform active:scale-95 shadow-md cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">directions</span>
                    <span>Lihat Lokasi & Rute</span>
                  </button>
                </div>
              </div>

              {/* Location Snapshot Card using Real Kedai Photo */}
              <div className="lg:col-span-5">
                <div className="bg-white text-[#1e1b19] p-5 rounded-2xl shadow-lg flex flex-col gap-3">
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#96220e] text-[24px]">storefront</span>
                      <span className="font-bold text-sm sm:text-base">Kedai Sangtau "eRTe"</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#95f8a7] text-[#00210a] text-xs font-bold">
                      Buka s/d 21.00 WIB
                    </span>
                  </div>

                  {/* Real Photo of Storefront */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden border border-[#e0bfb9]/40 shadow-inner">
                    <img
                      src="./image/kedai-tampak-depan.png"
                      alt="Tampak depan kedai Sangtau eRTe di Nagasari Karawang"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-[#fff8f5]/95 backdrop-blur-xs text-[#1e1b19] text-xs font-bold flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-[16px] text-[#96220e]">pin_drop</span>
                      Blok Yanten No. 2, Nagasari
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-xs text-[#59413c] pt-1">
                    <p><strong className="text-[#1e1b19]">Alamat:</strong> Jl. K.H. Dewantara, Nagasari, Kec. Karawang Barat</p>
                    <p><strong className="text-[#1e1b19]">Jam Buka:</strong> Setiap Hari (08.00 - 21.00 WIB)</p>
                    <p><strong className="text-[#1e1b19]">Parkir:</strong> Bahu jalan nyaman untuk motor & mobil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
