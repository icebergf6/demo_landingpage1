import React from 'react';

export default function Footer({ onNavigateTab }) {
  return (
    <footer className="w-full bg-[#faf2ee] text-[#1e1b19] border-t border-[#e0bfb9]/40 mt-12 pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="font-['Epilogue'] text-xl font-bold text-[#96220e]">
                Sangtau "eRTe" Karawang
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#59413c] leading-relaxed">
              Kuliner otentik legendaris khas Karawang yang senantiasa menjaga keaslian bumbu warisan sejak 1997. Cita rasa gurih legit, higienis, dan merakyat hanya Rp 15.000 per porsi.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-3 py-1 rounded-md bg-[#ffdcc3] text-[#6e3900] text-xs font-bold">
                Sejak 1997
              </span>
              <span className="px-3 py-1 rounded-md bg-[#95f8a7] text-[#00210a] text-xs font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#005c27]">verified_user</span>
                Halal ID 32110003079180623
              </span>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-3">
            <span className="font-bold text-sm text-[#1e1b19] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#96220e] text-[20px]">location_on</span>
              Alamat Kedai
            </span>
            <p className="text-xs sm:text-sm text-[#59413c] leading-relaxed">
              Blok Yanten No. 2, Jl. K.H. Dewantara, Kel. Nagasari, Kec. Karawang Barat, Kab. Karawang, Jawa Barat 41312
            </p>
            <span className="text-xs text-[#8d716b]">
              Patokan: Dekat kawasan pusat kota Karawang
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-3">
            <span className="font-bold text-sm text-[#1e1b19] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#005c27] text-[20px]">schedule</span>
              Jam Operasional
            </span>
            <p className="text-xs sm:text-sm text-[#59413c]">
              <strong className="text-[#1e1b19]">Setiap Hari (Senin - Minggu)</strong>
              <br />
              08.00 - 21.00 WIB
            </p>
            <div className="pt-1">
              <span className="text-xs text-[#59413c] block mb-1.5">Layanan Pesanan:</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-full bg-[#f4ece8] text-[#1e1b19] text-[11px] font-semibold">
                  Makan di Tempat
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#f4ece8] text-[#1e1b19] text-[11px] font-semibold">
                  Bungkus / Takeaway
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#f4ece8] text-[#1e1b19] text-[11px] font-semibold">
                  Pesan Antar WA
                </span>
              </div>
            </div>
          </div>

          {/* Links & Gov UMKM Initiative */}
          <div className="flex flex-col gap-3">
            <span className="font-bold text-sm text-[#1e1b19] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#904d00] text-[20px]">share</span>
              Tautan & Kemitraan
            </span>
            <div className="flex flex-col gap-1.5 text-xs sm:text-sm">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#59413c] hover:text-[#96220e] transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px]">storefront</span>
                Katalog Menu WhatsApp
              </a>
              <a
                href="https://maps.google.com/?q=Blok+Yanten+No.2+Jl.+K.H.+Dewantara+Nagasari+Karawang+Barat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#59413c] hover:text-[#96220e] transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px]">map</span>
                Petunjuk Google Maps
              </a>
              <button
                type="button"
                onClick={() => onNavigateTab('cerita')}
                className="text-[#59413c] hover:text-[#96220e] transition-colors flex items-center gap-1.5 text-left"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                Galeri & Dokumentasi Sejarah
              </button>
            </div>

            <div className="mt-2 p-3 rounded-xl bg-[#f4ece8] flex flex-col gap-1 border border-[#e0bfb9]/30">
              <span className="text-[11px] font-bold text-[#96220e] uppercase">
                Inisiatif Transformasi Digital
              </span>
              <span className="text-[11px] text-[#59413c] leading-tight">
                Didukung kolaborasi program literasi UMKM BPSDM Komdigi bersama BPS Kabupaten Karawang.
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-[#e0bfb9]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-[#59413c]">
          <p>© 2025 Sangtau Karawang • Kuliner Legendaris Karawang Sejak 1997. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigateTab('cerita')}
              className="hover:text-[#96220e] transition-colors"
            >
              Kisah Warisan
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onNavigateTab('lokasi')}
              className="hover:text-[#96220e] transition-colors"
            >
              Lokasi & Pesanan
            </button>
            <span>•</span>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#96220e] transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
