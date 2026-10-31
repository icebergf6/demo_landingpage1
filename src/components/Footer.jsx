import React from 'react';
import { CONTACT_INFO } from '../data/menuData';

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
              Kuliner otentik legendaris khas Karawang dengan tahu Cina khusus tanpa pengawet yang selalu diganti segar setiap hari. Cita rasa gurih legit mulai Rp 13.000 s/d Rp 18.000 per porsi.
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
              Patokan: 5 menit dari Stasiun Karawang
            </span>
          </div>

          {/* Contacts & Hours */}
          <div className="flex flex-col gap-3">
            <span className="font-bold text-sm text-[#1e1b19] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#005c27] text-[20px]">contacts</span>
              Kontak Resmi Kedai
            </span>
            <div className="flex flex-col gap-2 text-xs sm:text-sm">
              <a
                href={CONTACT_INFO.lapak.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-[#e0bfb9]/40 hover:border-[#96220e] transition-colors flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <span className="font-bold text-[#1e1b19]">{CONTACT_INFO.lapak.label}</span>
                  <span className="text-[11px] text-[#59413c]">Pesanan: {CONTACT_INFO.lapak.phone}</span>
                </div>
                <span className="material-symbols-outlined text-[#007735] text-[18px]">chat</span>
              </a>

              <a
                href={CONTACT_INFO.owner.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-[#e0bfb9]/40 hover:border-[#005c27] transition-colors flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <span className="font-bold text-[#1e1b19]">{CONTACT_INFO.owner.label}</span>
                  <span className="text-[11px] text-[#59413c]">Pengelola: {CONTACT_INFO.owner.phone}</span>
                </div>
                <span className="material-symbols-outlined text-[#007735] text-[18px]">chat</span>
              </a>
            </div>
            <div className="text-[11px] text-[#59413c]">
              <strong>Buka Setiap Hari:</strong> 08.00 - 21.00 WIB
            </div>
          </div>

          {/* Links & Gov UMKM Initiative */}
          <div className="flex flex-col gap-3">
            <span className="font-bold text-sm text-[#1e1b19] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#904d00] text-[20px]">share</span>
              Tautan & Kemitraan
            </span>
            <div className="flex flex-col gap-1.5 text-xs sm:text-sm">
              <button
                type="button"
                onClick={() => onNavigateTab('menu')}
                className="text-[#59413c] hover:text-[#96220e] transition-colors flex items-center gap-1.5 text-left cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">restaurant_menu</span>
                Katalog Menu & Porsi
              </button>
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
                className="text-[#59413c] hover:text-[#96220e] transition-colors flex items-center gap-1.5 text-left cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                Galeri & Kisah Tahu Cina
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
          <p>© 2026 Sangtau Karawang • Kuliner Legendaris Karawang Sejak 1997. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigateTab('cerita')}
              className="hover:text-[#96220e] transition-colors cursor-pointer"
            >
              Kisah Warisan
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onNavigateTab('lokasi')}
              className="hover:text-[#96220e] transition-colors cursor-pointer"
            >
              Lokasi & Pesanan
            </button>
            <span>•</span>
            <a
              href={CONTACT_INFO.lapak.waLink}
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
