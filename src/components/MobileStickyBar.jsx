import React from 'react';
import { CONTACT_INFO } from '../data/menuData';

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-4 left-3 right-3 sm:left-4 sm:right-4 z-30 pointer-events-auto pb-[env(safe-area-inset-bottom,0px)]">
      <a
        href={`${CONTACT_INFO.lapak.waLink}?text=${encodeURIComponent('Halo Sangtau eRTe Karawang, saya ingin memesan porsi hangat hari ini')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 py-3 px-4 sm:px-5 bg-[#007735] text-white rounded-2xl font-bold text-xs sm:text-sm shadow-[0_8px_24px_rgba(0,119,53,0.35)] active:scale-[0.98] transition-transform border border-white/20"
      >
        <span className="material-symbols-outlined text-[19px] sm:text-[20px]">chat</span>
        <span>Pesan via WhatsApp Sekarang • Mulai Rp 13.000</span>
      </a>
    </div>
  );
}
