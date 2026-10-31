import React, { useState } from 'react';
import { TIMELINE_EVENTS, AUTHENTIC_GALLERY } from '../data/menuData';

export default function CeritaSection({ onNavigateMenu }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const threePillars = [
    {
      icon: 'verified',
      colorBg: 'bg-[#ffdcc3]',
      colorText: 'text-[#904d00]',
      title: 'Tahu Cina Khusus Tanpa Pengawet',
      desc: 'Dipesan khusus (request) langsung tanpa bahan pengawet kimia. Lebih lembut dan stok diganti baru setiap hari agar kualitas rasa dan kesegarannya selalu terjaga.',
    },
    {
      icon: 'savings',
      colorBg: 'bg-[#ffdad3]',
      colorText: 'text-[#96220e]',
      title: 'Pilihan Porsi Fleksibel & Merakyat',
      desc: 'Mulai Porsi Setengah (Rp 13k), Porsi Normal (Rp 15k), hingga Porsi Jumbo (Rp 18k). Komitmen kami agar semua kalangan masyarakat senantiasa dapat menikmati santap lezat bernutrisi.',
    },
    {
      icon: 'diversity_3',
      colorBg: 'bg-[#95f8a7]',
      colorText: 'text-[#005c27]',
      title: 'Kehangatan Silaturahmi',
      desc: 'Kedai kami bukan sekadar tempat transaksi makanan, tetapi wadah temu penuh keakraban bagi para perantau dan warga lokal di sudut Nagasari.',
    },
  ];

  const scrollToMilestone = (year) => {
    const el = document.getElementById(`milestone-${year}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="flex flex-col w-full pb-24">
      {/* 1. Heritage Hero Section */}
      <section className="relative overflow-hidden bg-[#faf2ee] py-12 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e0bfb9]/30">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          
          {/* Narrative Column */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffdcc3] text-[#6e3900] text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[15px]">history_edu</span>
                Kisah Perjalanan • 1997 - 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#95f8a7] text-[#00210a] text-xs font-bold">
                <span className="material-symbols-outlined text-[15px] text-[#005c27]">verified_user</span>
                Halal ID 32110003079180623
              </span>
            </div>

            <h1 className="font-['Epilogue'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#96220e] tracking-tight leading-tight">
              Menjaga Cita Rasa Khas Karawang Sejak 1997
            </h1>

            <p className="text-[#59413c] text-base sm:text-lg leading-relaxed max-w-2xl">
              Lebih dari dua dekade menyajikan kehangatan sepiring Sangtau "eRTe" legendaris bagi masyarakat Karawang dan para pecinta kuliner tradisional. Sebuah dedikasi resep warisan yang tak lekang oleh pesatnya modernisasi kota lumbung padi dan industri.
            </p>

            {/* Quick Facts Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-md">
              <div className="p-4 bg-white rounded-2xl shadow-xs border border-[#e0bfb9]/40 flex flex-col">
                <span className="font-['Epilogue'] text-2xl sm:text-3xl font-extrabold text-[#96220e] leading-none">
                  28+
                </span>
                <span className="text-xs text-[#59413c] mt-1 font-semibold">
                  Tahun Tradisi
                </span>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-xs border border-[#e0bfb9]/40 flex flex-col">
                <span className="font-['Epilogue'] text-xl sm:text-2xl font-extrabold text-[#904d00] leading-none">
                  13k - 18k
                </span>
                <span className="text-xs text-[#59413c] mt-1 font-semibold">
                  Pilihan Porsi
                </span>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-xs border border-[#e0bfb9]/40 flex flex-col">
                <span className="font-['Epilogue'] text-2xl sm:text-3xl font-extrabold text-[#005c27] leading-none">
                  100%
                </span>
                <span className="text-xs text-[#59413c] mt-1 font-semibold">
                  Bahan Halal
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onNavigateMenu}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#96220e] text-white rounded-xl text-sm font-bold hover:bg-[#b83a24] shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">restaurant</span>
                <span>Cicipi Sangtau Legendaris</span>
              </button>
              <a
                href="#linimasa"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#1e1b19] border border-[#e0bfb9]/50 rounded-xl text-sm font-semibold hover:bg-[#f4ece8] transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">timeline</span>
                <span>Telusuri Linimasa Zigzag</span>
              </a>
            </div>
          </div>

          {/* Editorial Visual Showcase with Real Photo */}
          <div className="flex-1 w-full relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-[#241410] border border-[#e0bfb9]/40">
              <img
                src="./image/sangtau-sepiring.png"
                alt="Sepiring Sangtau eRTe Otentik Sejak 1997"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b19]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs text-[#ffdcc3] uppercase tracking-wider font-bold">
                  Warisan Rasa Sejak 1997
                </span>
                <p className="font-bold text-base sm:text-lg text-white">
                  Sepiring Tahu Bumbu Legit dengan Taburan Bawang Goreng Renyah
                </p>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 p-4 bg-white rounded-2xl shadow-xl items-center gap-3 max-w-xs border border-[#e0bfb9]/40">
              <div className="w-12 h-12 rounded-xl bg-[#ffdcc3] flex items-center justify-center shrink-0 text-[#904d00]">
                <span className="material-symbols-outlined text-[26px]">verified</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#1e1b19]">Tanpa Pengawet</span>
                <span className="text-xs text-[#59413c]">
                  Tahu sutra segar & racikan bumbu kacang murni turun-temurun
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. The Heritage Story Narrative */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#fff8f5]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
          
          {/* Historical Narrative Left Box */}
          <div className="flex-1 bg-[#faf2ee] rounded-3xl p-6 sm:p-10 flex flex-col justify-between border border-[#e0bfb9]/40 shadow-xs">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1.5 text-[#96220e] text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[20px]">auto_stories</span>
                <span>Kisah Awal Mula</span>
              </div>
              <h2 className="font-['Epilogue'] text-2xl sm:text-3xl font-bold text-[#1e1b19]">
                Teguh Menjaga Resep Asli di Tengah Pusaran Zaman
              </h2>
              <div className="flex flex-col gap-3 text-sm sm:text-base text-[#59413c] leading-relaxed">
                <p>
                  Tahun 1997 menjadi tonggak awal kehadiran Sangtau "eRTe" di Karawang. Berawal dari kecintaan mendalam untuk merawat makanan khas lokal yang bersahaja, sepiring Sangtau lahir sebagai perpaduan harmonis antara kelembutan tahu Cina pilihan, siraman bumbu kacang gurih legit, kucuran kecap manis khas, dan taburan bawang goreng renyah melimpah.
                </p>
                <p>
                  Kabupaten Karawang telah bertransformasi pesat dari kota lumbung padi menjadi pusat industri modern terbesar di Asia Tenggara. Namun di balik gegap gempita modernisasi tersebut, dapur Sangtau "eRTe" tetap setia mempertahankan racikan tradisional, bumbu rempah asli nusantara, dan tata cara memasak tradisional tanpa sedikit pun menggunakan bahan pengawet buatan.
                </p>

                {/* Highlight Khusus Tahu Cina Tanpa Pengawet & Pergantian Stok */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#ffdcc3]/40 border border-[#fe932c]/50 flex flex-col gap-2.5 my-2">
                  <div className="flex items-center gap-2 text-[#904d00]">
                    <span className="material-symbols-outlined text-[22px]">eco</span>
                    <h3 className="font-bold text-sm sm:text-base text-[#1e1b19]">
                      Keistimewaan Bahan: Tahu Cina Khusus (Custom Request)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#59413c] leading-relaxed">
                    Tahu yang kami gunakan <strong>bukan tahu sembarangan</strong> seperti yang lazim dijumpai di pedagang sayur keliling atau pasar umum. Kami memesan langsung (*custom request*) <strong>Tahu Cina pilihan</strong> murni tanpa bahan pengawet kimiawi (bebas formalin/asam pengawet).
                  </p>
                  <div className="pt-2 border-t border-[#e0bfb9]/60 flex items-start gap-2 text-xs text-[#6e3900]">
                    <span className="material-symbols-outlined text-[18px] text-[#96220e] shrink-0 mt-0.5">change_circle</span>
                    <span>
                      <strong>Daya Tahan & Pergantian Stok Harian:</strong> Karena diproduksi murni tanpa pengawet, teksturnya super lembut namun lebih cepat basi / tidak tahan lama. Oleh karena itu, <strong>stok tahu kedai selalu diganti baru setiap hari</strong>. Tahu yang tersisa tidak pernah disimpan untuk hari esok demi memastikan kualitas dan kesegaran 100% terjaga.
                    </span>
                  </div>
                </div>

                <p>
                  Bagi kami, sepiring Sangtau bukan sekadar makanan pengganjal lapar harian, melainkan identitas kultural, amanah kejujuran rasa, dan saksi bisu kehangatan persaudaraan warga Karawang dari masa ke masa.
                </p>
              </div>

              {/* Founder Family Quote Callout */}
              <div className="p-4 rounded-2xl bg-[#ffdcc3]/50 border-l-4 border-[#904d00] my-2">
                <p className="text-xs sm:text-sm font-semibold italic text-[#6e3900]">
                  "Kami tidak pernah berani mengurangi takaran bumbu kacang atau mengganti bahan segar dengan penyedap instan hanya demi laba sesaat. Bagi keluarga kami, rasa adalah amanah kejujuran."
                </p>
                <span className="text-[11px] font-bold text-[#904d00] block mt-1.5">
                  — Keluarga Perintis Sangtau "eRTe" Karawang (1997)
                </span>
              </div>
            </div>

            {/* Authenticity Stamp Card */}
            <div className="mt-6 p-4 bg-white rounded-2xl flex items-center justify-between gap-4 border border-[#e0bfb9]/40">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#96220e] text-[28px]">soup_kitchen</span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1e1b19]">Proses Olah Tradisional</span>
                  <span className="text-xs text-[#59413c]">Tahu digoreng dadakan saat pesanan dibuat</span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#005c27] bg-[#95f8a7] px-3 py-1 rounded-full shrink-0">
                100% Halal
              </span>
            </div>
          </div>

          {/* Atmospheric Heritage Gallery Grid with Real Photos */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              onClick={() => setSelectedPhoto(AUTHENTIC_GALLERY[2])}
              className="relative rounded-3xl overflow-hidden shadow-sm bg-[#241410] min-h-[200px] border border-[#e0bfb9]/30 cursor-pointer group"
            >
              <img
                src="./image/tahu-goreng-wajan.png"
                alt="Tahu putih digoreng dadakan di wajan panas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b19]/85 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                <span className="font-bold text-sm text-white">Goreng Dadakan</span>
                <span className="text-xs text-[#ffdcc3]">Tahu putih segar wajan minyak bersih</span>
              </div>
            </div>

            <div
              onClick={() => setSelectedPhoto(AUTHENTIC_GALLERY[3])}
              className="relative rounded-3xl overflow-hidden shadow-sm bg-[#241410] min-h-[200px] border border-[#e0bfb9]/30 cursor-pointer group"
            >
              <img
                src="./image/tabur-bawang-goreng.png"
                alt="Taburan bawang goreng Brebes gurih wangi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b19]/85 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                <span className="font-bold text-sm text-white">Bawang Goreng Melimpah</span>
                <span className="text-xs text-[#ffdcc3]">Kriuk harum penyempurna rasa</span>
              </div>
            </div>

            <div
              onClick={() => setSelectedPhoto(AUTHENTIC_GALLERY[4])}
              className="sm:col-span-2 relative rounded-3xl overflow-hidden shadow-sm bg-[#241410] min-h-[210px] border border-[#e0bfb9]/30 cursor-pointer group"
            >
              <img
                src="./image/gerobak-perintis.png"
                alt="Gerobak kayu perintis Sangtau eRTe 1997"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b19]/85 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                <span className="font-bold text-sm text-white">Gerobak Kayu Sejarah 1997</span>
                <span className="text-xs text-[#f4ece8]">
                  Menyatukan buruh pabrik, ASN, pelajar, hingga para sesepuh Nagasari Karawang
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Tiga Pilar UMKM */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f4ece8]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1 max-w-xl">
              <span className="text-xs font-bold text-[#96220e] uppercase tracking-wider">
                Prinsip & Nilai Dasar
              </span>
              <h2 className="font-['Epilogue'] text-2xl sm:text-3xl font-bold text-[#1e1b19]">
                Tiga Pilar yang Menghidupkan Sangtau "eRTe"
              </h2>
            </div>
            <p className="text-sm text-[#59413c] max-w-md">
              Prinsip teguh yang kami pegang sejak porsi pertama disajikan di pinggir jalan Karawang pada tahun 1997.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {threePillars.map((p, i) => (
              <div
                key={i}
                className="flex flex-col p-6 bg-white rounded-3xl shadow-xs border border-[#e0bfb9]/40 hover:shadow-md transition-all group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${p.colorBg} ${p.colorText} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}
                >
                  <span className="material-symbols-outlined text-[28px]">
                    {p.icon}
                  </span>
                </div>
                <h3 className="font-['Epilogue'] text-lg font-bold text-[#1e1b19] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[#59413c] leading-relaxed flex-grow">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Zigzag Timeline Section with Quick Jump Bar */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#fff8f5] relative overflow-hidden" id="linimasa">
        {/* Background Vintage Watermark */}
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 text-[#f4ece8] font-['Epilogue'] text-[140px] font-extrabold select-none opacity-40 leading-none">
          1997
        </div>

        <div className="max-w-5xl mx-auto flex flex-col gap-10 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#904d00] uppercase tracking-widest block mb-1">
              Perjalanan Waktu & Milestone
            </span>
            <h2 className="font-['Epilogue'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e1b19]">
              Linimasa Jejak Sangtau Karawang
            </h2>
            <p className="text-xs sm:text-sm text-[#59413c] mt-2">
              Jejak langkah keteguhan rasa: bertumbuh dari satu gerobak kayu sederhana hingga menjadi legenda kuliner kebanggaan warga lumbung padi dan industri.
            </p>
          </div>

          {/* Quick Jump Year Pills Bar */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-[#8d716b] uppercase mr-1">
              Pilih Tahun:
            </span>
            {TIMELINE_EVENTS.map((evt) => (
              <button
                key={evt.year}
                type="button"
                onClick={() => scrollToMilestone(evt.year)}
                className="px-3.5 py-1.5 rounded-full bg-white text-[#1e1b19] border border-[#e0bfb9]/60 hover:bg-[#96220e] hover:text-white hover:border-[#96220e] text-xs font-bold transition-all shadow-2xs active:scale-95 cursor-pointer"
              >
                {evt.year}
              </button>
            ))}
          </div>

          {/* Zigzag Timeline Container */}
          <div className="relative pt-4">
            
            {/* Desktop Central Spine Line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#96220e] via-[#fe932c] to-[#007735] rounded-full"></div>

            {/* Mobile Left Spine Line */}
            <div className="md:hidden absolute left-5 top-4 bottom-4 w-1 bg-gradient-to-b from-[#96220e] via-[#fe932c] to-[#007735] rounded-full"></div>

            {/* Timeline Items */}
            <div className="flex flex-col gap-10 md:gap-14">
              {TIMELINE_EVENTS.map((evt, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    id={`milestone-${evt.year}`}
                    className="relative flex flex-col md:flex-row items-center group scroll-mt-28"
                  >
                    {/* Node Marker: Center on Desktop, Left on Mobile */}
                    <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 md:top-8 w-11 h-11 rounded-full bg-white border-4 border-[#96220e] text-[#96220e] flex items-center justify-center shadow-md z-20 group-hover:bg-[#96220e] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <span className="material-symbols-outlined text-[20px]">
                        {evt.icon}
                      </span>
                    </div>

                    {/* Mobile Card Layout (Offset from Left Spine) */}
                    <div className="md:hidden w-full pl-14 pt-1">
                      <div className="bg-[#faf2ee] p-5 sm:p-6 rounded-3xl border border-[#e0bfb9]/40 shadow-xs hover:shadow-md transition-all overflow-hidden">
                        {/* Real Photo Thumbnail */}
                        {evt.image && (
                          <div
                            onClick={() => setSelectedPhoto({ title: evt.title, caption: evt.description, image: evt.image, tag: evt.year })}
                            className="w-full h-36 rounded-2xl overflow-hidden mb-3 border border-[#e0bfb9]/30 cursor-pointer"
                          >
                            <img
                              src={evt.image}
                              alt={evt.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        {/* Top Year & Badge */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="px-3 py-1 bg-[#96220e] text-white text-xs font-extrabold rounded-full font-['Epilogue'] shadow-xs">
                            {evt.year}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#ffdcc3] text-[#6e3900] text-[11px] font-bold">
                            {evt.badge}
                          </span>
                        </div>

                        <h3 className="font-bold text-base text-[#1e1b19] mb-1.5 leading-snug">
                          {evt.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#59413c] leading-relaxed mb-3">
                          {evt.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#e0bfb9]/30">
                          <span className="px-2.5 py-1 rounded-xl bg-white text-[#96220e] text-[11px] font-bold shadow-2xs flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">stars</span>
                            {evt.highlight}
                          </span>
                          <span className="text-[11px] text-[#8d716b] font-medium">
                            {evt.stats}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Zigzag Layout: Left Side Card (if Even) */}
                    <div className="hidden md:grid md:grid-cols-2 md:gap-16 w-full items-center">
                      
                      {isEven ? (
                        <div className="pr-4 text-right">
                          <div className="bg-[#faf2ee] p-6 rounded-3xl border border-[#e0bfb9]/40 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group/card">
                            
                            {/* Card Pointer Arrow */}
                            <div className="absolute top-9 -right-2.5 w-5 h-5 bg-[#faf2ee] border-t border-r border-[#e0bfb9]/40 rotate-45"></div>

                            {/* Real Photo Thumbnail */}
                            {evt.image && (
                              <div
                                onClick={() => setSelectedPhoto({ title: evt.title, caption: evt.description, image: evt.image, tag: evt.year })}
                                className="w-full h-40 rounded-2xl overflow-hidden mb-4 border border-[#e0bfb9]/30 cursor-pointer"
                              >
                                <img
                                  src={evt.image}
                                  alt={evt.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}

                            {/* Top Year & Badge */}
                            <div className="flex items-center justify-end gap-2 mb-2">
                              <span className="px-2.5 py-0.5 rounded-full bg-[#ffdcc3] text-[#6e3900] text-xs font-bold">
                                {evt.badge}
                              </span>
                              <span className="px-3.5 py-1 bg-[#96220e] text-white text-sm font-extrabold rounded-full font-['Epilogue'] shadow-xs">
                                {evt.year}
                              </span>
                            </div>

                            <h3 className="font-bold text-lg text-[#1e1b19] mb-2 leading-snug">
                              {evt.title}
                            </h3>

                            <p className="text-sm text-[#59413c] leading-relaxed mb-4">
                              {evt.description}
                            </p>

                            <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#e0bfb9]/30">
                              <span className="text-xs text-[#8d716b] font-medium">
                                {evt.stats}
                              </span>
                              <span className="px-3 py-1 rounded-xl bg-white text-[#96220e] text-xs font-bold shadow-xs flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px]">stars</span>
                                {evt.highlight}
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}

                      {/* Desktop Zigzag Layout: Right Side Card (if Odd) */}
                      {!isEven ? (
                        <div className="pl-4 text-left">
                          <div className="bg-[#faf2ee] p-6 rounded-3xl border border-[#e0bfb9]/40 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group/card">
                            
                            {/* Card Pointer Arrow */}
                            <div className="absolute top-9 -left-2.5 w-5 h-5 bg-[#faf2ee] border-b border-l border-[#e0bfb9]/40 rotate-45"></div>

                            {/* Real Photo Thumbnail */}
                            {evt.image && (
                              <div
                                onClick={() => setSelectedPhoto({ title: evt.title, caption: evt.description, image: evt.image, tag: evt.year })}
                                className="w-full h-40 rounded-2xl overflow-hidden mb-4 border border-[#e0bfb9]/30 cursor-pointer"
                              >
                                <img
                                  src={evt.image}
                                  alt={evt.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}

                            {/* Top Year & Badge */}
                            <div className="flex items-center justify-start gap-2 mb-2">
                              <span className="px-3.5 py-1 bg-[#96220e] text-white text-sm font-extrabold rounded-full font-['Epilogue'] shadow-xs">
                                {evt.year}
                              </span>
                              <span className="px-2.5 py-0.5 rounded-full bg-[#ffdcc3] text-[#6e3900] text-xs font-bold">
                                {evt.badge}
                              </span>
                            </div>

                            <h3 className="font-bold text-lg text-[#1e1b19] mb-2 leading-snug">
                              {evt.title}
                            </h3>

                            <p className="text-sm text-[#59413c] leading-relaxed mb-4">
                              {evt.description}
                            </p>

                            <div className="flex items-center justify-start gap-2 pt-3 border-t border-[#e0bfb9]/30">
                              <span className="px-3 py-1 rounded-xl bg-white text-[#96220e] text-xs font-bold shadow-xs flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px]">stars</span>
                                {evt.highlight}
                              </span>
                              <span className="text-xs text-[#8d716b] font-medium">
                                {evt.stats}
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}

                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Bottom Heritage Pledge Card */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#96220e] to-[#b83a24] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white text-[32px]">workspace_premium</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-['Epilogue'] text-lg font-bold">
                  Komitmen Kami untuk Masa Depan Kuliner Karawang
                </h4>
                <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-xl">
                  Seiring berjalannya tahun, kami berjanji menjaga rasa otentik ini tetap sama: hangat, bumbu melimpah, dan harga merakyat untuk anak cucu kita kelak.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onNavigateMenu}
              className="px-6 py-3 rounded-xl bg-white text-[#96220e] hover:bg-[#ffdcc3] font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Pesan Porsi Hangat Hari Ini</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

        </div>
      </section>

      {/* 5. Authentic Photo Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-xl w-full shadow-2xl border border-[#e0bfb9]/40 flex flex-col max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#241410]">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Tutup"
              >
                ✕
              </button>
              {selectedPhoto.tag && (
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-[#96220e] text-white font-bold text-xs shadow-md">
                  {selectedPhoto.tag}
                </span>
              )}
            </div>
            <div className="p-6 flex flex-col gap-2">
              <h3 className="font-['Epilogue'] font-bold text-xl text-[#1e1b19]">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#59413c] leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
