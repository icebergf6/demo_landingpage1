import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/menuData';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMenuItem, setSelectedMenuItem] = useState(null); // for detail modal

  const [quantities, setQuantities] = useState({
    'item-1': 0,
    'item-2': 0,
    'item-3': 0,
    'item-4': 0,
    'item-5': 0,
    'item-6': 0,
    'item-7': 0,
  });

  const categories = [
    { id: 'all', label: 'Semua Menu' },
    { id: 'utama', label: 'Menu Utama' },
    { id: 'spesial', label: 'Varian Spesial & Lauk' },
    { id: 'minuman', label: 'Minuman Segar' },
    { id: 'paket', label: 'Paket Katering' },
  ];

  // Filter by category AND search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.spicyNote && item.spicyNote.toLowerCase().includes(query)) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(query)));
      return matchCat && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  const handleAdjustQty = (id, delta) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const totalSelectedQty = Object.values(quantities).reduce((a, b) => a + b, 0);

  const calculateTotalCost = () => {
    return MENU_ITEMS.reduce((sum, item) => {
      const qty = quantities[item.id] || 0;
      return sum + qty * item.price;
    }, 0);
  };

  const handleOrderSingle = (item) => {
    const qty = quantities[item.id] > 0 ? quantities[item.id] : 1;
    const text = encodeURIComponent(
      `Halo Sangtau "eRTe" Karawang, saya ingin memesan:\n- ${qty}x ${item.name} (${item.priceFormatted})\nTotal: Rp ${(
        qty * item.price
      ).toLocaleString('id-ID')}\nMohon info ketersediaan dan prosesnya. Terima kasih!`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  const handleOrderAllSelected = () => {
    if (totalSelectedQty === 0) return;
    const itemsList = MENU_ITEMS.filter((item) => (quantities[item.id] || 0) > 0)
      .map(
        (item) =>
          `- ${quantities[item.id]}x ${item.name} = Rp ${(
            quantities[item.id] * item.price
          ).toLocaleString('id-ID')}`
      )
      .join('\n');

    const total = calculateTotalCost();
    const text = encodeURIComponent(
      `Halo Sangtau "eRTe" Karawang, saya ingin memesan beberapa menu:\n${itemsList}\n\nTotal Estimasi: Rp ${total.toLocaleString(
        'id-ID'
      )}\nMohon diproses untuk pesanan saya. Terima kasih!`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full pb-28">
      {/* 1. Hero Intro Section */}
      <section className="relative overflow-hidden bg-[#faf2ee] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#e0bfb9]/30">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#ffdcc3] text-[#6e3900] text-xs font-bold uppercase tracking-wider">
                Resep Asli Sejak 1997
              </span>
              <span className="px-3 py-1 rounded-full bg-[#95f8a7] text-[#00210a] text-xs font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Halal ID 32110003079180623
              </span>
            </div>

            <h1 className="font-['Epilogue'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e1b19] tracking-tight">
              Daftar Menu & Varian Sangtau "eRTe"
            </h1>

            <p className="text-[#59413c] text-sm sm:text-base leading-relaxed">
              Sajian hangat dengan bumbu gurih khas Karawang, diracik mendadak setiap pesanan. Semua varian dibuat dengan bahan segar pilihan, tahu putih lembut, bumbu kacang gurih legit, dan kucuran kecap istimewa.
            </p>

            <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-[#eee7e3] text-[#1e1b19] shadow-xs self-start">
              <span className="material-symbols-outlined text-[#96220e] text-[22px]">savings</span>
              <span className="font-bold text-sm">Harga Merakyat Rp 15.000 / Porsi</span>
              <span className="text-xs text-[#59413c] hidden sm:inline">• Porsi Pas & Mengenyangkan</span>
            </div>
          </div>

          {/* Quick Highlights: Spicy Levels */}
          <div className="w-full lg:w-80 p-5 rounded-2xl bg-white shadow-md flex flex-col gap-3 border border-[#e0bfb9]/40">
            <div className="flex items-center gap-2 text-[#96220e]">
              <span className="material-symbols-outlined text-[24px]">local_fire_department</span>
              <span className="font-bold text-sm text-[#1e1b19]">Pedas Sesuai Selera</span>
            </div>
            <p className="text-xs text-[#59413c]">
              Pilih tingkat pedas sambal ulek cabe rawit segar langsung di kedai kami:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-lg bg-[#f4ece8] text-center">
                <span className="text-[11px] font-bold block text-[#005c27]">Level 0</span>
                <span className="text-xs font-semibold text-[#1e1b19]">Tanpa Cabai</span>
              </div>
              <div className="p-2 rounded-lg bg-[#f4ece8] text-center">
                <span className="text-[11px] font-bold block text-[#904d00]">Level 1</span>
                <span className="text-xs font-semibold text-[#1e1b19]">Sedang Gurih</span>
              </div>
              <div className="p-2 rounded-lg bg-[#ffdcc3] text-center">
                <span className="text-[11px] font-bold block text-[#6e3900]">Level 2</span>
                <span className="text-xs font-bold text-[#6e3900]">Pedas Nampol</span>
              </div>
              <div className="p-2 rounded-lg bg-[#96220e] text-center">
                <span className="text-[11px] font-bold block text-white">Level 3</span>
                <span className="text-xs font-bold text-white">Ekstrem Karawang</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter & Live Search Bar */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex flex-col gap-4">
          
          {/* Search Input Box */}
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8d716b] text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Cari menu (cth: kupat, tahu bumbu, telur asin, pedas...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-white text-[#1e1b19] rounded-2xl border border-[#e0bfb9]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#96220e] shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8d716b] hover:text-[#1e1b19] text-xs font-bold"
                aria-label="Hapus pencarian"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar w-full sm:w-auto">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count =
                  cat.id === 'all'
                    ? MENU_ITEMS.length
                    : MENU_ITEMS.filter((m) => m.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#96220e] text-white shadow-md'
                        : 'bg-[#f4ece8] text-[#59413c] hover:bg-[#eee7e3]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#e0bfb9]/40 text-[#59413c]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Count Info */}
            <span className="text-xs text-[#8d716b] hidden sm:inline">
              Menampilkan {filteredItems.length} pilihan menu
            </span>
          </div>

        </div>
      </section>

      {/* 3. Menu Cards Catalog Grid */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const qty = quantities[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#e0bfb9]/40 group"
                >
                  <div>
                    {/* Image & Badges (Clickable to open Detail Dialog) */}
                    <div
                      onClick={() => setSelectedMenuItem(item)}
                      className="relative w-full h-56 overflow-hidden bg-[#241410] cursor-pointer"
                      title="Klik untuk melihat detail menu & bahan"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#ffdcc3] text-[#6e3900] text-xs font-bold uppercase tracking-wide shadow-xs">
                        {item.badge}
                      </span>
                      <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-[#fe932c] text-[#663500] font-['Plus_Jakarta_Sans'] font-extrabold text-sm shadow-sm">
                        {item.priceFormatted}
                      </div>
                      <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-black/60 text-white text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 backdrop-blur-xs">
                        <span className="material-symbols-outlined text-[14px]">info</span>
                        <span>Klik untuk Detail</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-5 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h3
                          onClick={() => setSelectedMenuItem(item)}
                          className="font-bold text-base text-[#1e1b19] leading-snug cursor-pointer hover:text-[#96220e] transition-colors"
                        >
                          {item.name}
                        </h3>
                        {item.halal && (
                          <span className="flex items-center text-[#005c27] text-xs font-bold gap-0.5 shrink-0">
                            <span className="material-symbols-outlined text-[16px]">eco</span>
                            Halal
                          </span>
                        )}
                        {item.subBadge && (
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#ffdcc3] text-[#6e3900] shrink-0">
                            {item.subBadge}
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-[#59413c] leading-relaxed">
                        {item.description}
                      </p>

                      {item.spicyNote && (
                        <div className="flex items-center gap-1.5 text-[#59413c] text-xs mt-1">
                          <span className="material-symbols-outlined text-[16px] text-[#904d00]">
                            restaurant
                          </span>
                          <span>{item.spicyNote}</span>
                        </div>
                      )}

                      {item.tags && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded bg-[#f4ece8] text-[#59413c] text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quantity Stepper & Order Action */}
                  <div className="p-5 pt-0 flex items-center justify-between gap-3">
                    <div className="flex items-center bg-[#faf2ee] rounded-xl p-1 border border-[#e0bfb9]/40">
                      <button
                        type="button"
                        onClick={() => handleAdjustQty(item.id, -1)}
                        className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#1e1b19] hover:bg-[#f4ece8] active:scale-90 transition-all font-bold text-base shadow-xs cursor-pointer"
                        aria-label="Kurangi porsi"
                      >
                        <span className="material-symbols-outlined text-[18px]">remove</span>
                      </button>
                      <span className="w-8 text-center font-bold text-sm text-[#1e1b19]">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleAdjustQty(item.id, 1)}
                        className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#1e1b19] hover:bg-[#f4ece8] active:scale-90 transition-all font-bold text-base shadow-xs cursor-pointer"
                        aria-label="Tambah porsi"
                      >
                        <span className="material-symbols-outlined text-[18px]">add</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleOrderSingle(item)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#96220e] text-white text-xs sm:text-sm font-bold hover:bg-[#b83a24] active:scale-95 transition-all shadow-sm cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Pesan WA</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#e0bfb9]/40 p-8 flex flex-col items-center gap-3">
            <span className="material-symbols-outlined text-[#8d716b] text-[48px]">search_off</span>
            <p className="text-sm font-bold text-[#1e1b19]">Menu yang Anda cari tidak ditemukan</p>
            <p className="text-xs text-[#59413c]">Coba gunakan kata kunci lain atau bersihkan kotak pencarian.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 bg-[#96220e] text-white text-xs font-bold rounded-xl mt-2 cursor-pointer"
            >
              Reset Pencarian
            </button>
          </div>
        )}
      </section>

      {/* 4. Big Catering & Official Banner Poster Showcase */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#faf2ee] border border-[#e0bfb9]/50 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#ffdcc3] text-[#6e3900] text-xs font-bold uppercase">
                Paket Syukuran & Acara Kantor
              </span>
              <span className="text-xs text-[#005c27] font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">inventory_2</span>
                Wadah Higienis Tahan Panas
              </span>
            </div>

            <h2 className="font-['Epilogue'] text-xl sm:text-2xl font-bold text-[#1e1b19]">
              Pemesanan Porsi Besar (Catering & Syukuran UMKM)
            </h2>

            <p className="text-xs sm:text-sm text-[#59413c] leading-relaxed">
              Melayani pesanan partai besar untuk konsumsi acara arisan keluarga, rapat dinas kantor, syukuran, maupun gathering kawasan industri di Karawang. Bumbu kacang, tahu sutra goreng dadakan, dan kerupuk dikemas rapi terpisah menggunakan wadah food-grade higienis agar tetap hangat dan lezat saat dinikmati bersama.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Sangtau%20eRTe%20Karawang,%20saya%20ingin%20berkonsultasi%20mengenai%20pesanan%20katering%20porsi%20besar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#007735] text-white text-sm font-bold hover:bg-[#005c27] shadow-md transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Konsultasi Katering via WhatsApp</span>
              </a>
              <span className="text-xs text-[#8d716b]">
                *Disarankan konfirmasi H-1 untuk pesanan di atas 20 porsi
              </span>
            </div>
          </div>

          {/* Official Banner Photo Showcase Card */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#e0bfb9]/40 bg-white group">
              <img
                src="./image/poster-sangtau-erte.png"
                alt="Banner Resmi Sangtau eRTe Sejak 1997 Halal Indonesia"
                className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-3 bg-white border-t border-[#e0bfb9]/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#96220e] block">Poster Resmi Kedai</span>
                  <span className="text-xs font-bold text-[#1e1b19]">Sangtau "eRTe" Since 1997</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#95f8a7] text-[#00210a] text-[10px] font-bold">
                  Halal Terverifikasi
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Floating Bottom Checkout Bar (Active When Items Selected) */}
      {totalSelectedQty > 0 && (
        <div className="fixed bottom-6 left-4 right-4 max-w-2xl mx-auto z-40 transition-all duration-300">
          <div className="bg-[#1e1b19]/95 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-3xl shadow-[0_12px_36px_rgba(0,0,0,0.35)] border border-white/15 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 pl-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#96220e] flex items-center justify-center font-bold text-base sm:text-lg shadow-md shrink-0">
                {totalSelectedQty}
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] text-white/70">Total Pesanan:</span>
                <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-sm sm:text-base text-[#fe932c]">
                  Rp {calculateTotalCost().toLocaleString('id-ID')}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleOrderAllSelected}
              className="px-3.5 sm:px-6 py-2.5 sm:py-3 bg-[#007735] hover:bg-[#005c27] text-white font-bold text-xs sm:text-sm rounded-2xl flex items-center gap-1.5 sm:gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer shrink-0"
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">chat</span>
              <span className="hidden sm:inline">Kirim Pesanan ke WhatsApp</span>
              <span className="sm:hidden">Pesan ke WA</span>
            </button>
          </div>
        </div>
      )}

      {/* 6. Quick Detail Modal Dialog */}
      {selectedMenuItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedMenuItem(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-[#e0bfb9]/40 flex flex-col max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 w-full overflow-hidden bg-[#241410]">
              <img
                src={selectedMenuItem.image}
                alt={selectedMenuItem.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedMenuItem(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Tutup detail"
              >
                ✕
              </button>
              <span className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-[#fe932c] text-[#663500] font-extrabold text-sm shadow-md">
                {selectedMenuItem.priceFormatted}
              </span>
            </div>

            <div className="p-6 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="font-['Epilogue'] font-bold text-xl text-[#1e1b19]">
                  {selectedMenuItem.name}
                </h3>
                {selectedMenuItem.halal && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#95f8a7] text-[#00210a] text-xs font-bold">
                    100% Halal
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#59413c] leading-relaxed">
                {selectedMenuItem.description}
              </p>

              {selectedMenuItem.spicyNote && (
                <div className="p-3 bg-[#faf2ee] rounded-xl flex items-center gap-2 text-xs text-[#59413c]">
                  <span className="material-symbols-outlined text-[#96220e] text-[18px]">
                    local_fire_department
                  </span>
                  <span>{selectedMenuItem.spicyNote}</span>
                </div>
              )}

              <div className="pt-3 border-t border-[#e0bfb9]/30 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    handleAdjustQty(selectedMenuItem.id, 1);
                    setSelectedMenuItem(null);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#faf2ee] text-[#1e1b19] font-bold text-xs sm:text-sm hover:bg-[#eee7e3] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  <span>Tambah ke Pilihan</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    handleOrderSingle(selectedMenuItem);
                    setSelectedMenuItem(null);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#007735] text-white font-bold text-xs sm:text-sm hover:bg-[#005c27] transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Pesan Sekarang</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
