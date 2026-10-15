import React, { useState } from 'react';
import { EXTRA_TOPPINGS, FAQ_LIST } from '../data/menuData';

export default function LokasiSection() {
  const [custName, setCustName] = useState('');
  const [custPhone, setCustPhone] = useState('');
  const [portionQty, setPortionQty] = useState(1);
  const [spiceLevel, setSpiceLevel] = useState('Sedang');
  const [fulfillment, setFulfillment] = useState('Makan di Tempat (Dine-in)');
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [notes, setNotes] = useState('');
  const [orderSent, setOrderSent] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [mapTab, setMapTab] = useState('foto'); // 'foto' | 'peta'

  // Dynamic store status (8:00 - 21:00 WIB)
  const [isOpenNow, setIsOpenNow] = useState(true);

  React.useEffect(() => {
    const checkOpen = () => {
      const hour = new Date().getHours();
      setIsOpenNow(hour >= 8 && hour < 21);
    };
    checkOpen();
  }, []);

  const applyPreset = (type) => {
    if (type === 'sendiri') {
      setPortionQty(1);
      setSelectedToppings(['top-1']); // Telur Asin Masir
      setSpiceLevel('Sedang');
    } else if (type === 'berdua') {
      setPortionQty(2);
      setSelectedToppings(['top-2', 'top-5']); // Bakwan + Kerupuk
      setSpiceLevel('Sedang');
    } else if (type === 'kantor') {
      setPortionQty(5);
      setSelectedToppings(['top-1', 'top-2', 'top-4']);
      setSpiceLevel('Pedas Mantap');
    }
  };

  const basePricePerPortion = 15000;
  const baseTotal = portionQty * basePricePerPortion;

  // Calculate toppings price
  const toppingsTotal = selectedToppings.reduce((sum, topId) => {
    const item = EXTRA_TOPPINGS.find((t) => t.id === topId);
    return sum + (item ? item.price * portionQty : 0);
  }, 0);

  const grandTotal = baseTotal + toppingsTotal;

  const handleAdjustPortion = (delta) => {
    setPortionQty((prev) => Math.max(1, prev + delta));
  };

  const handleSetQuickPortion = (qty) => {
    setPortionQty(qty);
  };

  const toggleTopping = (topId) => {
    setSelectedToppings((prev) =>
      prev.includes(topId) ? prev.filter((id) => id !== topId) : [...prev, topId]
    );
  };

  const fullAddress =
    'Blok Yanten No. 2, Jl. K.H. Dewantara, Kel. Nagasari, Kec. Karawang Barat, Kab. Karawang, Jawa Barat 41312';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const generateWhatsAppMessage = () => {
    const formattedTotal = `Rp ${grandTotal.toLocaleString('id-ID')}`;
    const toppingsText =
      selectedToppings.length > 0
        ? selectedToppings
            .map((id) => {
              const t = EXTRA_TOPPINGS.find((item) => item.id === id);
              return t ? `+ ${t.name} (${t.priceFormatted})` : '';
            })
            .filter(Boolean)
            .join(', ')
        : 'Tidak ada topping tambahan';

    return (
      `Halo Sangtau Karawang, saya ingin memesan:\n` +
      `----------------------------------------\n` +
      `👤 *Nama:* ${custName || '-'}\n` +
      `📞 *No. WhatsApp:* ${custPhone || '-'}\n` +
      `🍲 *Menu:* Sangtau Khas Karawang\n` +
      `📦 *Jumlah:* ${portionQty} porsi (Dasar: Rp ${baseTotal.toLocaleString('id-ID')})\n` +
      `🥚 *Topping Tambahan:* ${toppingsText}\n` +
      `🌶️ *Level Sambal:* ${spiceLevel}\n` +
      `🛵 *Metode:* ${fulfillment}\n` +
      (notes ? `📝 *Catatan Khusus:* ${notes}\n` : '') +
      `----------------------------------------\n` +
      `💰 *Total Estimasi Biaya:* ${formattedTotal}\n\n` +
      `Mohon segera dikonfirmasi pesanan saya. Terima kasih banyak!`
    );
  };

  const handleCopyMessage = () => {
    const msg = generateWhatsAppMessage();
    navigator.clipboard.writeText(msg);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const msg = generateWhatsAppMessage();
    const encoded = encodeURIComponent(msg);
    setOrderSent(true);
    setTimeout(() => setOrderSent(false), 6000);
    window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#faf2ee] py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#e0bfb9]/30">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8 relative z-10">
          <div className="max-w-3xl flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-[#ffdcc3] text-[#6e3900] text-xs font-bold uppercase shadow-2xs">
              <span className="material-symbols-outlined text-[16px] text-[#904d00]">room_service</span>
              <span>Kedai Fisik & Pemesanan Terintegrasi</span>
            </div>

            <h1 className="font-['Epilogue'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#96220e] tracking-tight">
              Kunjungi Kedai Kami & Cara Pemesanan
            </h1>

            <p className="text-sm sm:text-base text-[#59413c] leading-relaxed">
              Mampir langsung untuk menikmati semangkuk Sangtau panas mengepul di kedai Blok Yanten Nagasari, atau rancang pesanan Anda melalui simulator interaktif di bawah ini untuk pengiriman cepat via WhatsApp.
            </p>
          </div>

          {/* Quick Status Card */}
          <div className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-3xl shadow-sm border border-[#e0bfb9]/40 shrink-0">
            <div
              className={`w-12 h-12 rounded-2xl ${
                isOpenNow ? 'bg-[#005c27]/10 text-[#005c27]' : 'bg-[#96220e]/10 text-[#96220e]'
              } flex items-center justify-center shrink-0`}
            >
              <span className="material-symbols-outlined text-[28px]">store</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isOpenNow ? 'bg-[#007735] animate-ping' : 'bg-[#96220e]'
                  }`}
                ></span>
                <span
                  className={`text-xs font-bold uppercase ${
                    isOpenNow ? 'text-[#005c27]' : 'text-[#96220e]'
                  } tracking-wider`}
                >
                  {isOpenNow ? 'Kedai Sedang Buka' : 'Kedai Sedang Istirahat / Tutup'}
                </span>
              </div>
              <span className="font-bold text-sm sm:text-base text-[#1e1b19]">
                08.00 - 21.00 WIB
              </span>
              <span className="text-[11px] text-[#59413c]">
                {isOpenNow ? 'Senin - Minggu (Termasuk Hari Libur)' : 'Buka kembali besok pukul 08.00 WIB'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Simulator & Location Bento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Order Simulator & Digital Bill Preview (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Live Form Box */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-[#e0bfb9]/40 flex flex-col gap-6 relative overflow-hidden">
              
              {/* Box Header */}
              <div className="flex flex-col gap-1.5 pb-2 border-b border-[#f4ece8]">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-bold uppercase text-[#904d00] tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">tune</span>
                    Simulator Pesanan Interaktif
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#ffdad3] text-[#96220e] text-xs font-extrabold">
                    Mulai Rp 15.000 / Porsi
                  </span>
                </div>
                <h2 className="font-['Epilogue'] text-xl sm:text-2xl font-bold text-[#1e1b19]">
                  Rancang Porsi Anda & Kirim ke WhatsApp
                </h2>
                <p className="text-xs sm:text-sm text-[#59413c]">
                  Kustomisasi jumlah porsi, level pedas, dan topping ekstra. Rincian kalkulasi struk digital otomatis disiapkan di bawah formulir.
                </p>
              </div>

              {/* Success Toast */}
              {orderSent && (
                <div className="p-4 rounded-2xl bg-[#95f8a7]/30 border border-[#007735] text-[#00210a] flex items-center gap-3 animate-fade-in shadow-xs">
                  <span className="material-symbols-outlined text-[#005c27] text-[24px]">check_circle</span>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold">Format Pesanan Berhasil Disiapkan!</span>
                    <span className="text-[11px] text-[#005323]">
                      Aplikasi WhatsApp Anda telah dibuka secara otomatis untuk konfirmasi langsung ke nomor resmi kedai.
                    </span>
                  </div>
                </div>
              )}

              {/* Order Form */}
              <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-6">
                
                {/* Preset Rekomendasi Cepat */}
                <div className="p-3.5 bg-[#f4ece8] rounded-2xl border border-[#e0bfb9]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="material-symbols-outlined text-[#904d00] text-[20px]">bolt</span>
                    <span className="text-xs font-bold text-[#1e1b19]">Pilihan Cepat:</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      type="button"
                      onClick={() => applyPreset('sendiri')}
                      className="px-3 py-1.5 rounded-xl bg-white text-[#96220e] hover:bg-[#ffdcc3] border border-[#e0bfb9]/60 text-xs font-bold transition-all shadow-2xs flex items-center gap-1 active:scale-95 cursor-pointer"
                    >
                      <span>👤 Solo (1x + Telur Asin)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => applyPreset('berdua')}
                      className="px-3 py-1.5 rounded-xl bg-white text-[#904d00] hover:bg-[#ffdcc3] border border-[#e0bfb9]/60 text-xs font-bold transition-all shadow-2xs flex items-center gap-1 active:scale-95 cursor-pointer"
                    >
                      <span>👥 Berdua (+ Bakwan & Kerupuk)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => applyPreset('kantor')}
                      className="px-3 py-1.5 rounded-xl bg-white text-[#005c27] hover:bg-[#95f8a7]/40 border border-[#e0bfb9]/60 text-xs font-bold transition-all shadow-2xs flex items-center gap-1 active:scale-95 cursor-pointer"
                    >
                      <span>🏢 Rapat Kantor (5x Porsi)</span>
                    </button>
                  </div>
                </div>

                {/* Customer Identity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-bold text-[#1e1b19] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#96220e] text-[18px]">person</span>
                      Nama Pemesan
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={custName}
                      onChange={(e) => setCustName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#faf2ee] text-[#1e1b19] rounded-xl text-sm border border-[#e0bfb9]/40 focus:outline-none focus:ring-2 focus:ring-[#96220e] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-bold text-[#1e1b19] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#96220e] text-[18px]">phone</span>
                      Nomor WhatsApp Anda
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 08123456789"
                      value={custPhone}
                      onChange={(e) => setCustPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#faf2ee] text-[#1e1b19] rounded-xl text-sm border border-[#e0bfb9]/40 focus:outline-none focus:ring-2 focus:ring-[#96220e] transition-all"
                    />
                  </div>
                </div>

                {/* Portion Stepper & Quick Shortcuts */}
                <div className="p-4 sm:p-5 bg-[#faf2ee] rounded-2xl border border-[#e0bfb9]/40 flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="font-bold text-sm sm:text-base text-[#1e1b19] block">
                        Jumlah Porsi Sangtau Hangat
                      </span>
                      <span className="text-xs text-[#59413c]">
                        Harga dasar Rp 15.000 / porsi (mie, bihun, tahu sutra, kaldu rempah, tauge)
                      </span>
                    </div>

                    {/* Stepper */}
                    <div className="flex items-center self-start sm:self-auto bg-white rounded-2xl p-1 shadow-xs border border-[#e0bfb9]/40">
                      <button
                        type="button"
                        onClick={() => handleAdjustPortion(-1)}
                        className="w-9 h-9 rounded-xl bg-[#faf2ee] text-[#1e1b19] hover:bg-[#eee7e3] active:scale-90 transition-all font-bold flex items-center justify-center text-lg"
                        aria-label="Kurangi porsi"
                      >
                        -
                      </button>
                      <span className="w-14 text-center font-bold text-base text-[#1e1b19]">
                        {portionQty}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleAdjustPortion(1)}
                        className="w-9 h-9 rounded-xl bg-[#96220e] text-white hover:bg-[#b83a24] active:scale-90 transition-all font-bold flex items-center justify-center text-lg"
                        aria-label="Tambah porsi"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Quick Shortcut Buttons */}
                  <div className="flex items-center gap-2 pt-1 flex-wrap">
                    <span className="text-[11px] font-bold text-[#8d716b] uppercase mr-1">
                      Pilihan Cepat:
                    </span>
                    {[1, 2, 5, 10, 20].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => handleSetQuickPortion(num)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          portionQty === num
                            ? 'bg-[#96220e] text-white shadow-xs'
                            : 'bg-white text-[#59413c] border border-[#e0bfb9]/40 hover:bg-[#f4ece8]'
                        }`}
                      >
                        {num} Porsi
                      </button>
                    ))}
                  </div>
                </div>

                {/* Spicy Level Choices */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#59413c] flex items-center justify-between">
                    <span>Tingkat Kepedasan Sambal Rawit</span>
                    <span className="text-[#96220e] font-semibold text-xs lowercase">
                      terpilih: {spiceLevel}
                    </span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { val: 'Tidak Pedas', label: 'Original', sub: 'Gurih Halus', color: 'border-[#005c27]' },
                      { val: 'Sedang', label: 'Sedang 🌶️', sub: 'Rekomendasi', color: 'border-[#fe932c]' },
                      { val: 'Pedas Mantap', label: 'Pedas 🌶️🌶️', sub: 'Nendang', color: 'border-[#96220e]' },
                      { val: 'Ekstra Pedas', label: 'Ekstra 🌶️🌶️🌶️', sub: 'Keringatan', color: 'border-[#ba1a1a]' },
                    ].map((item) => (
                      <label key={item.val} className="cursor-pointer">
                        <input
                          type="radio"
                          name="spiceLevel"
                          value={item.val}
                          checked={spiceLevel === item.val}
                          onChange={() => setSpiceLevel(item.val)}
                          className="sr-only peer"
                        />
                        <div className="p-3 text-center rounded-2xl bg-[#faf2ee] border border-[#e0bfb9]/40 peer-checked:bg-[#ffdcc3] peer-checked:border-[#904d00] peer-checked:text-[#6e3900] transition-all flex flex-col items-center group">
                          <span className="text-xs font-bold">{item.label}</span>
                          <span className="text-[11px] opacity-80 mt-0.5">{item.sub}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Extra Toppings Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#59413c] flex items-center justify-between">
                    <span>Topping Tambahan (Opsional)</span>
                    <span className="text-[11px] text-[#8d716b] lowercase">klik untuk tambah</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {EXTRA_TOPPINGS.map((top) => {
                      const isSelected = selectedToppings.includes(top.id);
                      return (
                        <button
                          key={top.id}
                          type="button"
                          onClick={() => toggleTopping(top.id)}
                          className={`p-3 rounded-2xl border transition-all flex items-center justify-between text-left ${
                            isSelected
                              ? 'bg-[#ffdcc3] border-[#904d00] text-[#2f1500] shadow-xs'
                              : 'bg-[#faf2ee] border-[#e0bfb9]/40 text-[#1e1b19] hover:bg-[#f4ece8]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="material-symbols-outlined text-[20px] text-[#96220e]">
                              {top.icon}
                            </span>
                            <span className="text-xs font-bold">{top.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-[#6e3900]">
                              {top.priceFormatted}
                            </span>
                            <div
                              className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                                isSelected
                                  ? 'bg-[#904d00] text-white'
                                  : 'border border-[#8d716b] bg-white'
                              }`}
                            >
                              {isSelected && (
                                <span className="material-symbols-outlined text-[14px]">
                                  check
                                </span>
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Fulfillment Method */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs sm:text-sm font-bold text-[#1e1b19]">
                    Metode Santap / Pengiriman
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { val: 'Makan di Tempat (Dine-in)', title: 'Makan di Kedai', sub: 'Dine-in Langsung', icon: 'restaurant' },
                      { val: 'Bungkus Bawa Pulang (Takeaway)', title: 'Bungkus Pulang', sub: 'Takeaway Higienis', icon: 'shopping_bag' },
                      { val: 'Pesan Antar Kurir / WA', title: 'Pesan Antar', sub: 'Ojol / Kurir Lokal', icon: 'moped' },
                    ].map((f) => (
                      <label key={f.val} className="cursor-pointer">
                        <input
                          type="radio"
                          name="fulfillment"
                          value={f.val}
                          checked={fulfillment === f.val}
                          onChange={() => setFulfillment(f.val)}
                          className="sr-only peer"
                        />
                        <div className="p-3 rounded-2xl bg-[#faf2ee] border border-[#e0bfb9]/40 peer-checked:bg-[#b83a24] peer-checked:text-white transition-all flex items-center gap-2.5">
                          <span className="material-symbols-outlined text-[20px]">{f.icon}</span>
                          <div className="flex flex-col leading-tight">
                            <span className="text-xs font-bold">{f.title}</span>
                            <span className="text-[11px] opacity-80">{f.sub}</span>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Notes Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-bold text-[#1e1b19]">
                    Catatan Khusus Kedai (Opsional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Contoh: Kuah dipisah, banyakin bawang goreng & seledri, perkiraan sampai jam 12.30 WIB..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#faf2ee] text-[#1e1b19] rounded-xl text-sm border border-[#e0bfb9]/40 focus:outline-none focus:ring-2 focus:ring-[#96220e] transition-all resize-none"
                  />
                </div>

                {/* Live Digital Receipt / Struk Box */}
                <div className="p-5 rounded-3xl bg-[#faf2ee] border border-[#e0bfb9]/50 flex flex-col gap-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-dashed border-[#e0bfb9]">
                    <div className="flex items-center gap-1.5 text-[#96220e] font-sans font-bold">
                      <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                      <span>STRUK SIMULASI PESANAN</span>
                    </div>
                    <span className="font-sans text-[11px] text-[#8d716b] font-semibold">
                      Sangtau Karawang #1997
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[#1e1b19]">
                    <span>{portionQty}x Sangtau Khas Karawang</span>
                    <span>Rp {baseTotal.toLocaleString('id-ID')}</span>
                  </div>

                  {selectedToppings.map((topId) => {
                    const t = EXTRA_TOPPINGS.find((item) => item.id === topId);
                    if (!t) return null;
                    return (
                      <div key={topId} className="flex items-center justify-between text-[#59413c]">
                        <span className="pl-3">+ {portionQty}x {t.name}</span>
                        <span>Rp {(t.price * portionQty).toLocaleString('id-ID')}</span>
                      </div>
                    );
                  })}

                  <div className="flex items-center justify-between text-[#59413c]">
                    <span>Pedas: {spiceLevel}</span>
                    <span>(Free)</span>
                  </div>

                  <div className="flex items-center justify-between text-[#59413c]">
                    <span>Metode: {fulfillment}</span>
                    <span>OK</span>
                  </div>

                  <div className="pt-2 border-t border-dashed border-[#e0bfb9] flex items-center justify-between font-sans">
                    <div>
                      <span className="text-xs font-bold text-[#6e3900] uppercase block">
                        TOTAL ESTIMASI
                      </span>
                      <span className="text-[10px] text-[#8d716b]">
                        *Ongkos kirim kurir dihitung terpisah
                      </span>
                    </div>
                    <span className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#96220e]">
                      Rp {grandTotal.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                {/* Action Buttons: WhatsApp Dispatch & Copy Message */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 w-full py-3.5 px-6 bg-[#007735] text-white rounded-2xl text-sm font-bold hover:bg-[#005c27] shadow-[0_6px_20px_rgba(0,119,53,0.3)] flex items-center justify-center gap-2 active:scale-98 transition-all"
                  >
                    <span className="material-symbols-outlined text-[22px]">chat</span>
                    <span>Kirim Pesanan ke WhatsApp Sekarang</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="w-full sm:w-auto py-3.5 px-4 bg-white text-[#59413c] border border-[#e0bfb9]/60 rounded-2xl text-xs font-bold hover:bg-[#faf2ee] transition-all flex items-center justify-center gap-1.5"
                    title="Salin Teks Pesanan"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {copiedMessage ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedMessage ? 'Teks Tersalin!' : 'Salin Teks'}</span>
                  </button>
                </div>

              </form>
            </div>

            {/* Catering Note */}
            <div className="bg-[#faf2ee] p-6 rounded-3xl border border-[#e0bfb9]/40 flex items-start gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#904d00] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">groups</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-sm sm:text-base text-[#1e1b19]">
                  Layanan Khusus Katering Kantor & Syukuran Hajatan
                </h4>
                <p className="text-xs sm:text-sm text-[#59413c] leading-relaxed">
                  Untuk pesanan partai besar (di atas 20 porsi), kami siap mengemas kuah kaldu rempah dan isian dalam wadah tahan panas food-grade higienis agar santap bersama rekan kerja tetap hangat dan lezat.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Location Bento, Contact & Interactive FAQ (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Physical Location Bento Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-[#e0bfb9]/40 flex flex-col gap-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#ffdcc3] text-[#6e3900] text-xs font-bold uppercase tracking-wider">
                  Kedai Pusat Karawang
                </span>
                <span className="text-xs font-bold text-[#005c27] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  Parkir Mobil & Motor Lega
                </span>
              </div>

              <div>
                <h3 className="font-['Epilogue'] text-xl font-bold text-[#1e1b19]">
                  Kedai Sangtau "eRTe" Nagasari
                </h3>
                <p className="text-xs sm:text-sm text-[#59413c] mt-1 leading-relaxed">
                  {fullAddress}
                </p>
                
                {/* One-click copy address button */}
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="mt-2 text-xs font-bold text-[#96220e] hover:text-[#b83a24] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copiedAddress ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedAddress ? 'Alamat Tersalin ke Clipboard!' : 'Salin Alamat Lengkap'}</span>
                </button>
              </div>

              {/* Landmark Distances */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 bg-[#faf2ee] rounded-2xl flex items-center gap-2.5 border border-[#e0bfb9]/30">
                  <span className="material-symbols-outlined text-[#96220e] text-[20px]">train</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#1e1b19]">5 Menit</span>
                    <span className="text-[10px] text-[#59413c]">Stasiun Karawang</span>
                  </div>
                </div>

                <div className="p-3 bg-[#faf2ee] rounded-2xl flex items-center gap-2.5 border border-[#e0bfb9]/30">
                  <span className="material-symbols-outlined text-[#904d00] text-[20px]">directions_car</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#1e1b19]">10 Menit</span>
                    <span className="text-[10px] text-[#59413c]">Tol Karawang Barat</span>
                  </div>
                </div>
              </div>

              {/* Dual Tab Switcher: Foto Kedai Fisik vs Peta Google Maps */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center p-1 bg-[#faf2ee] rounded-2xl border border-[#e0bfb9]/40">
                  <button
                    type="button"
                    onClick={() => setMapTab('foto')}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      mapTab === 'foto'
                        ? 'bg-white text-[#96220e] shadow-xs'
                        : 'text-[#59413c] hover:text-[#1e1b19]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                    <span>Foto Kedai Fisik</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMapTab('peta')}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      mapTab === 'peta'
                        ? 'bg-white text-[#96220e] shadow-xs'
                        : 'text-[#59413c] hover:text-[#1e1b19]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">map</span>
                    <span>Peta Google Maps</span>
                  </button>
                </div>

                {mapTab === 'foto' ? (
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-sm border border-[#e0bfb9]/40 group bg-[#241410]">
                    <img
                      src="./image/kedai-tampak-depan.png"
                      alt="Tampak depan gerobak kayu dan kedai Sangtau eRTe di Nagasari Karawang"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b19]/90 via-[#1e1b19]/20 to-transparent flex flex-col justify-end p-4 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-sm text-white block">Kedai Blok Yanten</span>
                          <span className="text-xs text-[#ffdcc3]">Nagasari, Karawang Barat</span>
                        </div>
                        <a
                          href="https://maps.google.com/?q=Blok+Yanten+No.2+Jl.+K.H.+Dewantara+Nagasari+Karawang+Barat"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-white text-[#96220e] text-xs font-bold hover:bg-[#ffdcc3] transition-colors flex items-center gap-1.5 shadow-md"
                        >
                          <span className="material-symbols-outlined text-[16px]">directions</span>
                          <span>Buka Rute</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-64 rounded-2xl overflow-hidden shadow-sm border border-[#e0bfb9]/40 bg-[#eee7e3] relative">
                    <iframe
                      title="Peta Interaktif Kedai Sangtau Karawang"
                      src="https://maps.google.com/maps?q=Jl.+K.H.+Dewantara+Nagasari+Karawang+Barat&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                )}
              </div>

              {/* Action Buttons for Navigation */}
              <a
                href="https://maps.google.com/?q=Blok+Yanten+No.2+Jl.+K.H.+Dewantara+Nagasari+Karawang+Barat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-2xl bg-[#faf2ee] text-[#1e1b19] text-xs sm:text-sm font-bold hover:bg-[#eee7e3] transition-colors flex items-center justify-center gap-2 border border-[#e0bfb9]/40"
              >
                <span className="material-symbols-outlined text-[#96220e] text-[20px]">near_me</span>
                <span>Petunjuk Lengkap di Google Maps</span>
              </a>
            </div>

            {/* Operating Hours Detailed Widget */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#e0bfb9]/40 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#904d00]">
                <span className="material-symbols-outlined text-[20px]">timelapse</span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Jadwal Operasional Harian
                </span>
              </div>

              <div className="divide-y divide-[#e0bfb9]/30 flex flex-col">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-[#1e1b19]">Senin - Kamis</span>
                  <span className="font-bold text-xs sm:text-sm text-[#96220e]">08.00 - 21.00 WIB</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-[#1e1b19]">Jumat</span>
                  <div className="flex flex-col text-right">
                    <span className="font-bold text-xs sm:text-sm text-[#96220e]">08.00 - 21.00 WIB</span>
                    <span className="text-[10px] text-[#8d716b]">Jeda Shalat Jumat 11.30 - 12.45 WIB</span>
                  </div>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-[#1e1b19]">Sabtu - Minggu</span>
                  <span className="font-bold text-xs sm:text-sm text-[#96220e]">08.00 - 21.00 WIB</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#005c27]/10 flex items-center gap-2 mt-1">
                <span className="material-symbols-outlined text-[#005c27] text-[20px]">verified</span>
                <span className="text-xs text-[#005c27] font-semibold">
                  Kaldu rempah matang segar disiapkan setiap pagi pukul 07.30 WIB.
                </span>
              </div>
            </div>

            {/* Interactive FAQ Accordion */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#e0bfb9]/40 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#96220e]">
                <span className="material-symbols-outlined text-[22px]">help</span>
                <h3 className="font-['Epilogue'] text-base font-bold text-[#1e1b19]">
                  Pertanyaan Umum (FAQ)
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                {FAQ_LIST.map((faq, fIdx) => {
                  const isOpen = expandedFaq === fIdx;
                  return (
                    <div
                      key={fIdx}
                      className="rounded-2xl border border-[#e0bfb9]/30 overflow-hidden bg-[#faf2ee]"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedFaq(isOpen ? null : fIdx)}
                        className="w-full p-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-[#1e1b19] hover:text-[#96220e] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <span
                          className={`material-symbols-outlined text-[20px] shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#96220e]' : 'text-[#8d716b]'
                          }`}
                        >
                          expand_more
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-3.5 pb-3.5 text-xs text-[#59413c] leading-relaxed border-t border-[#e0bfb9]/30 pt-2.5">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
