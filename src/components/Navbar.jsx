import React, { useState, useEffect } from 'react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile sidebar is open & support Escape key
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sidebarOpen]);

  const navLinks = [
    { id: 'beranda', label: 'Beranda', icon: 'home' },
    { id: 'menu', label: 'Menu & Varian', icon: 'restaurant_menu' },
    { id: 'cerita', label: 'Cerita Warisan', icon: 'history_edu' },
    { id: 'lokasi', label: 'Lokasi & Kontak', icon: 'storefront' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Header Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#fff8f5]/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(184,58,36,0.12)]'
            : 'bg-[#fff8f5]/90 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(184,58,36,0.06)]'
        }`}
      >
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Mobile Hamburger Button + Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-[#f4ece8] text-[#96220e] hover:bg-[#eee7e3] active:scale-95 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#96220e] cursor-pointer"
              aria-label="Buka Menu Navigasi"
            >
              <span className="material-symbols-outlined text-[26px]">menu</span>
            </button>

            {/* Brand Logo & Title */}
            <button
              type="button"
              onClick={() => handleNavClick('beranda')}
              className="flex items-center gap-2.5 text-left group focus:outline-none shrink-0 cursor-pointer"
            >
              <img
                src="./image/sangtau-sepiring.png"
                alt="Sangtau eRTe Logo"
                className="h-10 w-10 rounded-full object-cover group-hover:scale-105 transition-transform border-2 border-[#96220e] shadow-xs shrink-0"
              />
              <div className="flex flex-col shrink-0">
                <div className="flex items-center gap-1.5 flex-nowrap whitespace-nowrap">
                  <span className="font-['Epilogue'] font-extrabold text-lg sm:text-xl text-[#96220e] group-hover:text-[#b83a24] transition-colors leading-none">
                    Sangtau "eRTe"
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#ffdcc3] text-[#6e3900] text-[10px] font-extrabold tracking-wider uppercase">
                    Sejak 1997
                  </span>
                </div>
                <span className="text-xs text-[#59413c] hidden sm:inline-block leading-tight mt-0.5 font-medium whitespace-nowrap">
                  Kuliner Khas Karawang
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-[#faf2ee] rounded-xl border border-[#e0bfb9]/40 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs xl:text-sm transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#b83a24] text-white font-bold shadow-sm'
                      : 'text-[#59413c] font-semibold hover:bg-[#eee7e3] hover:text-[#1e1b19]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Header Controls (Hours + WhatsApp CTA + Avatar) */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden xl:flex flex-col text-right shrink-0">
              <span className="text-xs text-[#005c27] font-bold flex items-center justify-end gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#007735] animate-pulse"></span>
                Buka Hari Ini
              </span>
              <span className="text-xs text-[#59413c]">08.00 - 21.00 WIB</span>
            </div>

            <a
              href="https://wa.me/6281234567890?text=Halo%20Sangtau%20eRTe%20Karawang,%20saya%20ingin%20memesan%20porsi%20hangat%20hari%20ini"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 bg-[#007735] text-white rounded-lg text-xs sm:text-sm font-bold hover:bg-[#005c27] transition-all shadow-[0_4px_14px_rgba(0,119,53,0.25)] active:scale-95 whitespace-nowrap shrink-0"
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                chat
              </span>
              <span className="hidden sm:inline">Pesan via WhatsApp</span>
              <span className="sm:hidden">Pesan WA</span>
            </a>

            <div className="hidden sm:flex w-8 h-8 rounded-full bg-[#96220e] items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-white text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sliding Sidebar Drawer & Backdrop */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          sidebarOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!sidebarOpen}
      >
        {/* Backdrop Overlay */}
        <div
          onClick={() => setSidebarOpen(false)}
          className={`absolute inset-0 bg-[#1e1b19]/60 backdrop-blur-xs transition-opacity duration-300 ${
            sidebarOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Sidebar Drawer Panel */}
        <aside
          className={`absolute top-0 left-0 bottom-0 w-[290px] sm:w-[320px] bg-[#fff8f5] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out z-10 border-r border-[#e0bfb9]/50 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Sidebar Top: Brand & Close */}
          <div className="p-5 border-b border-[#e9e1dd] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src="./image/sangtau-sepiring.png"
                  alt="Logo"
                  className="h-9 w-9 rounded-full object-cover border-2 border-[#96220e]"
                />
                <span className="font-['Epilogue'] font-bold text-lg text-[#96220e]">
                  Sangtau "eRTe"
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="w-9 h-9 rounded-full bg-[#f4ece8] text-[#59413c] hover:bg-[#e9e1dd] hover:text-[#1e1b19] flex items-center justify-center transition-colors active:scale-90 cursor-pointer"
                aria-label="Tutup Menu"
              >
                <span className="material-symbols-outlined text-[20px]">
                  close
                </span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#ffdcc3] text-[#6e3900] text-[11px] font-bold uppercase tracking-wider">
                Legenda Sejak 1997
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#95f8a7] text-[#00210a] text-[11px] font-bold">
                100% Halal
              </span>
            </div>
          </div>

          {/* Sidebar Navigation Items */}
          <nav className="p-4 flex flex-col gap-1.5 flex-1 overflow-y-auto">
            <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#8d716b]">
              Menu Navigasi
            </div>
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#b83a24] text-white shadow-md font-bold'
                      : 'text-[#1e1b19] hover:bg-[#f4ece8] hover:text-[#96220e]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`material-symbols-outlined text-[22px] ${
                        isActive ? 'text-white' : 'text-[#96220e]'
                      }`}
                    >
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </div>
                  <span
                    className={`material-symbols-outlined text-[18px] opacity-70 ${
                      isActive ? 'text-white' : 'text-[#8d716b]'
                    }`}
                  >
                    chevron_right
                  </span>
                </button>
              );
            })}

            {/* Hours Snapshot Card */}
            <div className="mt-4 p-3.5 bg-[#f4ece8] rounded-xl flex flex-col gap-1.5 border border-[#e0bfb9]/30">
              <span className="text-xs font-bold text-[#005c27] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#007735] animate-ping"></span>
                Kedai Buka Hari Ini
              </span>
              <span className="text-xs font-semibold text-[#1e1b19]">
                08.00 - 21.00 WIB (Senin - Minggu)
              </span>
              <span className="text-[11px] text-[#59413c]">
                Blok Yanten No. 2, Nagasari, Karawang Barat
              </span>
            </div>
          </nav>

          {/* Sidebar Bottom: Order via WhatsApp & Maps Shortcut */}
          <div className="p-4 border-t border-[#e9e1dd] bg-[#faf2ee] flex flex-col gap-2">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Sangtau%20eRTe%20Karawang,%20saya%20ingin%20memesan%20porsi%20hangat%20hari%20ini"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#007735] text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#005c27] shadow-[0_4px_16px_rgba(0,119,53,0.3)] transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">
                chat
              </span>
              <span>Pesan via WhatsApp Sekarang</span>
            </a>

            <a
              href="https://maps.google.com/?q=Blok+Yanten+No.2+Jl.+K.H.+Dewantara+Nagasari+Karawang+Barat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white text-[#96220e] border border-[#e0bfb9]/60 text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#ffdcc3] transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">
                directions
              </span>
              <span>Petunjuk Rute Google Maps</span>
            </a>

            <div className="text-center text-[11px] text-[#8d716b] mt-1">
              Kedai Pusat Nagasari • Rp 15.000 / Porsi
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
