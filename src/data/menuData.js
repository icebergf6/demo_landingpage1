export const MENU_ITEMS = [
  {
    id: "item-1",
    name: "Sangtau \"eRTe\" Spesial (Nasi Tahu Bumbu)",
    category: "utama",
    price: 15000,
    priceFormatted: "Rp 15.000",
    badge: "Ikon Legendaris Sejak 1997",
    badgeType: "secondary",
    halal: true,
    description: "Sajian nasi putih hangat pulen berpadu tahu sutra lembut, disiram bumbu kacang gurih kental beraroma rempah khas Sangtau eRTe, kecap manis legit, dan taburan melimpah bawang goreng wangi renyah.",
    spicyNote: "Pilihan Sambal: Level 0 s.d 3",
    image: "./image/sangtau-sepiring.png"
  },
  {
    id: "item-2",
    name: "Kupat Tahu Bumbu Otentik",
    category: "utama",
    price: 15000,
    priceFormatted: "Rp 15.000",
    badge: "Favorit Warga Nagasari",
    badgeType: "secondary",
    halal: true,
    description: "Kupat kenyal lembut dipotong pas suap, dipadukan tahu goreng dadakan panas, disiram bumbu kacang rempah kental dan kucuran kecap manis khas racikan rahasia sejak 1997.",
    spicyNote: "Bisa pesan tidak pedas / ekstra rawit",
    image: "./image/tuang-kecap-bumbu.png"
  },
  {
    id: "item-3",
    name: "Tahu Bumbu Dadakan Hangat",
    category: "utama",
    price: 15000,
    priceFormatted: "Rp 15.000",
    badge: "Tahu Goreng Segar",
    badgeType: "tertiary",
    halal: true,
    description: "Tahu putih berkualitas tinggi yang digoreng dadakan langsung di wajan panas. Kulit luar gurih renyah dengan bagian dalam super lembut menyerap bumbu kacang legit.",
    spicyNote: "Digoreng segar dadakan saat dipesan",
    image: "./image/tahu-goreng-wajan.png"
  },
  {
    id: "item-4",
    name: "Sangtau Komplit \"eRTe\" (Telur Asin & Bakso)",
    category: "spesial",
    price: 22000,
    priceFormatted: "Rp 22.000",
    badge: "Porsi Kenyang Paripurna",
    badgeType: "secondary",
    subBadge: "Lauk Komplit",
    halal: true,
    description: "Porsi istimewa Sangtau eRTe dilengkapi telur asin masir gurih berminyak alami atau bakso kenyal, tahu sutra ekstra, dan taburan bawang goreng Brebes yang melimpah.",
    spicyNote: "Termasuk telur asin masir & kerupuk",
    image: "./image/tabur-bawang-goreng.png"
  },
  {
    id: "item-5",
    name: "Lauk Pelengkap (Telur Asin, Gorengan, Emping)",
    category: "spesial",
    price: 3000,
    priceFormatted: "Mulai Rp 3.000",
    badge: "Lauk Pendamping",
    badgeType: "neutral",
    subBadge: "Aneka Pilihan",
    description: "Telur Asin Masir (Rp 5.000), Bakwan Sayur Renyah (Rp 2.000), Martabak Tahu Goreng (Rp 3.000), Emping Melinjo Gurih (Rp 4.000), Kerupuk Kaleng Putih (Rp 3.000).",
    tags: ["+ Telur Asin Masir", "+ Bakwan Renyah", "+ Emping Gurih"],
    image: "./image/poster-sangtau-erte.png"
  },
  {
    id: "item-6",
    name: "Es Teh Manis Melati & Es Jeruk Segar",
    category: "minuman",
    price: 5000,
    priceFormatted: "Rp 5.000",
    badge: "Penawar Dahaga",
    badgeType: "tertiary",
    description: "Segelas es teh wangi bunga melati alami atau perasan jeruk murni segar dingin yang menyegarkan tenggorokan setelah menyantap Sangtau hangat berlumur bumbu rempah.",
    spicyNote: "Bisa pilih Dingin atau Hangat",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-IvDSb9VmQfpJXcwMQDc-R9FchEXGIvtfUh8MWKWALHTXsxY6_VP6elWVGfFtFWkFVsLRetrtpqLDZF8CvoYVVeNHYQ25aKXrsGHVNNTL4O6-Vl1SPSXz8yTdPxmZUTVK4wiEo5LzsC4P5HxiZBgsU711Xp1L9cL4wach1k9ApNlzQGLqxAPdt-xnNCvWLIlpp9wb96vPR32YaF-Ra76yBVjAPP_5qr9mGMrGjmCfFBDTzPxgaVpubw"
  },
  {
    id: "item-7",
    name: "Paket Syukuran & Rombongan (Min. 20 Porsi)",
    category: "paket",
    price: 300000,
    priceFormatted: "Rp 300.000 (20 Porsi)",
    badge: "Hemat Berjamaah",
    badgeType: "secondary",
    subBadge: "20 Porsi Komplit",
    halal: true,
    description: "Paket konsumsi untuk rapat instansi, gathering pabrik, atau arisan keluarga. Bumbu kacang, tahu goreng dadakan, kupat/nasi, dan kerupuk dipisah rapi dalam kemasan food-grade higienis.",
    spicyNote: "Sambal dan bumbu dipisah rapi",
    image: "./image/kedai-tampak-depan.png"
  }
];

export const AUTHENTIC_GALLERY = [
  {
    id: "gal-1",
    title: "Sepiring Sangtau \"eRTe\"",
    caption: "Tahu sutra lembut berpadu bumbu kacang legit, kucuran kecap istimewa, dan taburan bawang goreng gurih.",
    image: "./image/sangtau-sepiring.png",
    tag: "Menu Utama"
  },
  {
    id: "gal-2",
    title: "Siraman Bumbu & Kecap Warisan",
    caption: "Aksi meracik kuah bumbu kacang dan kecap manis legendaris yang resepnya dijaga sejak 1997.",
    image: "./image/tuang-kecap-bumbu.png",
    tag: "Racikan Otentik"
  },
  {
    id: "gal-3",
    title: "Tahu Putih Goreng Dadakan",
    caption: "Tahu putih segar dipotong dadu besar dan digoreng di wajan panas saat pesanan dibuat.",
    image: "./image/tahu-goreng-wajan.png",
    tag: "Fresh di Wajan"
  },
  {
    id: "gal-4",
    title: "Taburan Bawang Goreng Renyah",
    caption: "Taburan bawang merah Brebes renyah wangi yang menambah cita rasa gurih nagih di setiap suapan.",
    image: "./image/tabur-bawang-goreng.png",
    tag: "Cita Rasa Khas"
  },
  {
    id: "gal-5",
    title: "Gerobak Kayu Perintis 1997",
    caption: "Kenangan autentik melayani warga dari gerobak kayu bersejarah di sudut Nagasari Karawang.",
    image: "./image/gerobak-perintis.png",
    tag: "Sejarah 1997"
  },
  {
    id: "gal-6",
    title: "Kedai Resmi Sangtau \"eRTe\"",
    caption: "Suasana tampak depan kedai di Blok Yanten No. 2, Jl. K.H. Dewantara Nagasari Karawang Barat.",
    image: "./image/kedai-tampak-depan.png",
    tag: "Lokasi Kedai"
  },
  {
    id: "gal-7",
    title: "Poster Menu & Sertifikasi Halal",
    caption: "Layanan resmi bersertifikat Halal Indonesia (ID 32110003079180623) dan pembayaran digital QRIS.",
    image: "./image/poster-sangtau-erte.png",
    tag: "100% Halal"
  }
];

export const TESTIMONIALS = [
  {
    id: "rev-1",
    quote: "Dari zaman saya masih SMP di dekat alun-alun tahun 2004 sampai sekarang sudah punya dua anak, rasa bumbu kacang dan tahu empuknya persis sama! Harganya Rp 15 ribu tetap bersahabat sekali.",
    author: "Bambang S.",
    role: "Warga Asli Nagasari, Karawang Barat",
    tag: "Langganan 20 Tahun",
    initials: "BS",
    rating: 5,
    date: "12 Okt 2026",
    bgClass: "bg-[#ffdcc3] text-[#2f1500]"
  },
  {
    id: "rev-2",
    quote: "Setiap pulang dinas dari kawasan KIIC, mampir ke Sangtau eRTe jadi ritual wajib. Bumbu gurih kecapnya berpadu sambal rawit langsung bikin segar badan dan capek lembur hilang seketika.",
    author: "Riana Anggraini",
    role: "Karyawan Industri Surya Cipta",
    tag: "Pecinta Pedas Level 3",
    initials: "RA",
    rating: 5,
    date: "8 Okt 2026",
    bgClass: "bg-[#ffdad3] text-[#3f0400]"
  },
  {
    id: "rev-3",
    quote: "Kuliner khas Karawang yang paling jujur bumbunya. Gak pelit bumbu kacang dan taburan bawang gorengnya melimpah ruah. Pelayanan cepat dan bungkus takeaway-nya rapi higienis.",
    author: "Farhan Hidayat",
    role: "Food Blogger & Wisatawan Jakarta",
    tag: "Ulasan Terverifikasi",
    initials: "FH",
    rating: 5,
    date: "28 Sep 2026",
    bgClass: "bg-[#95f8a7] text-[#00210a]"
  },
  {
    id: "rev-4",
    quote: "Dari gerobak pikul zaman dulu di Nagasari sampai sekarang di kedai Blok Yanten, resepnya tidak pernah diganti. Bumbu ulek kacangnya kerasa asli, bukan micin atau bumbu instan kemasan.",
    author: "Hj. Siti Maryam",
    role: "Sesepuh & Warga Nagasari (Pelanggan 1997)",
    tag: "Generasi Perintis",
    initials: "SM",
    rating: 5,
    date: "19 Sep 2026",
    bgClass: "bg-[#ffdcc3] text-[#6e3900]"
  },
  {
    id: "rev-5",
    quote: "Porsi Sangtau Komplit Rp 22k itu penyelamat anak kos Unsika! Tahu sutranya lembut, telurnya empuk meresap bumbu kacang, ditambah kerupuk renyah. Sering pesan ramai-ramai bareng teman sekelas.",
    author: "Dimas Prasetyo",
    role: "Mahasiswa Universitas Singaperbangsa (Unsika)",
    tag: "Porsi Komplit Juara",
    initials: "DP",
    rating: 5,
    date: "14 Sep 2026",
    bgClass: "bg-[#eee7e3] text-[#1e1b19]"
  },
  {
    id: "rev-6",
    quote: "Kemarin pesan 35 porsi untuk syukuran serah terima shift di pabrik. Dibungkus rapi, bumbu dan tahu dipisah pakai wadah tahan panas, sampai pabrik masih hangat dan sangat sedap!",
    author: "Hendra Gunawan",
    role: "Mandor Logistik Kawasan KIM Karawang",
    tag: "Pesanan Katering Kantor",
    initials: "HG",
    rating: 5,
    date: "2 Sep 2026",
    bgClass: "bg-[#ffdad3] text-[#96220e]"
  },
  {
    id: "rev-7",
    quote: "Sebagai tenaga medis, saya apresiasi kebersihan kedai dan bahan segarnya. Tahu putihnya wangi alami tanpa pengawet asam, bawang goreng harum, bumbu kacangnya gurih mantap di lidah.",
    author: "dr. Annisa Putri",
    role: "Dokter Puskesmas Karawang Barat",
    tag: "Pilihan Higienis & Sehat",
    initials: "AP",
    rating: 5,
    date: "24 Agu 2026",
    bgClass: "bg-[#95f8a7] text-[#005c27]"
  },
  {
    id: "rev-8",
    quote: "Habis narik keliling kota, singgah sebentar makan sepiring Sangtau eRTe hangat plus es teh manis melati rasanya nikmat tiada dua. Harganya pas di kantong rakyat kecil.",
    author: "Pak Ade Ruslan",
    role: "Komunitas Transportasi Karawang",
    tag: "Favorit Harian",
    initials: "AR",
    rating: 5,
    date: "18 Agu 2026",
    bgClass: "bg-[#ffdcc3] text-[#904d00]"
  }
];

export const TIMELINE_EVENTS = [
  {
    year: "1997",
    era: "Era Awal",
    title: "Gerobak Kayu Pertama di Sudut Nagasari",
    description: "Perintisan resep tahu bumbu khas Karawang dengan gerobak kayu sederhana di Jalan K.H. Dewantara Nagasari oleh sesepuh keluarga. Menjual porsi pertama seharga Rp 1.500 kepada warga sekitar dan pekerja kereta api.",
    highlight: "80 Porsi Terjual Per Hari",
    badge: "Kelahiran Tradisi",
    icon: "local_shipping",
    stats: "Harga Awal Rp 1.500",
    image: "./image/gerobak-perintis.png"
  },
  {
    year: "2003",
    era: "Konsistensi Rasa",
    title: "Pewarisan Resep Generasi Kedua",
    description: "Dapur warisan diteruskan dengan menjaga teguh takaran bumbu kacang sangrai, kecap pilihan, dan tahu sutra lembut. Tanpa bahan pengawet kimia, mempertahankan cita rasa asli seperti awal berdiri.",
    highlight: "Takaran Resep Terjaga 100%",
    badge: "Kemandirian Rasa",
    icon: "psychology",
    stats: "Resep Murni Tanpa Kimia",
    image: "./image/tahu-goreng-wajan.png"
  },
  {
    year: "2008",
    era: "Menetap & Berkembang",
    title: "Membuka Kedai Fisik Resmi Blok Yanten",
    description: "Mendirikan kedai beratap permanen di Blok Yanten No. 2 agar pelanggan dapat bersantap di tempat dengan nyaman, teduh, dan higienis bersama keluarga dan kerabat tercinta.",
    highlight: "Kapasitas 40 Kursi Makan",
    badge: "Kedai Permanen",
    icon: "storefront",
    stats: "Kawasan Pusat Nagasari",
    image: "./image/kedai-tampak-depan.png"
  },
  {
    year: "2016",
    era: "Ikon Kota Industri",
    title: "Rujukan Kuliner Karyawan Industri",
    description: "Seiring pesatnya kawasan industri KIIC, Surya Cipta, dan KIM, Sangtau eRTe menjelma menjadi kuliner kebanggaan yang diperkenalkan warga lokal kepada rekan kerja perantau dari seluruh Nusantara.",
    highlight: "Ribuan Porsi Tiap Pekan",
    badge: "Kebanggaan Karawang",
    icon: "factory",
    stats: "Favorit Komunitas Pekerja",
    image: "./image/tabur-bawang-goreng.png"
  },
  {
    year: "2021",
    era: "Modernisasi & Sertifikasi",
    title: "Sertifikasi Halal Resmi & Higiene Dapur",
    description: "Menetapkan standar dapur higienis, meraih sertifikat resmi Halal Indonesia (ID 32110003079180623), dan menyediakan kemasan bawa pulang standar food-grade tahan panas.",
    highlight: "Sertifikat Halal Resmi",
    badge: "Higienis & Halal",
    icon: "verified_user",
    stats: "ID 32110003079180623",
    image: "./image/poster-sangtau-erte.png"
  },
  {
    year: "2024 - Sekarang",
    era: "Era Digitalisasi UMKM",
    title: "Integrasi Layanan Digital & QRIS Bank BJB",
    description: "Mengadopsi pembayaran digital QRIS Bank BJB, pemesanan cepat terintegrasi WhatsApp, dan kalkulasi pesanan transparan untuk memudahkan seluruh warga Karawang.",
    highlight: "Pembayaran QRIS & Pesan Kilat",
    badge: "Transformasi Digital",
    icon: "devices",
    stats: "Kemudahan Akses Warga",
    image: "./image/tuang-kecap-bumbu.png"
  }
];

export const EXTRA_TOPPINGS = [
  { id: "top-1", name: "Telur Asin Masir Gurih", price: 5000, priceFormatted: "+Rp 5.000", icon: "egg" },
  { id: "top-2", name: "Bakwan Sayur Renyah (2 pcs)", price: 4000, priceFormatted: "+Rp 4.000", icon: "bakery_dining" },
  { id: "top-3", name: "Martabak Tahu Goreng", price: 4000, priceFormatted: "+Rp 4.000", icon: "lunch_dining" },
  { id: "top-4", name: "Emping Melinjo Gurih", price: 4000, priceFormatted: "+Rp 4.000", icon: "cookie" },
  { id: "top-5", name: "Kerupuk Kaleng Putih Renyah", price: 3000, priceFormatted: "+Rp 3.000", icon: "bakery_dining" },
  { id: "top-6", name: "Ekstra Sambal Rawit Ulek", price: 2000, priceFormatted: "+Rp 2.000", icon: "local_fire_department" },
];

export const FAQ_LIST = [
  {
    q: "Apakah kedai Sangtau \"eRTe\" buka setiap hari?",
    a: "Ya! Kami buka setiap hari mulai pukul 08.00 hingga 21.00 WIB tanpa libur, termasuk hari Sabtu, Minggu, dan hari libur nasional. Khusus hari Jumat, pelayanan istirahat sejenak pukul 11.30 - 12.45 WIB untuk ibadah Shalat Jumat."
  },
  {
    q: "Bagaimana cara memesan jika ingin dibungkus atau pesan antar (delivery)?",
    a: "Anda dapat menggunakan Simulator Pesanan di halaman Lokasi & Kontak untuk memilih porsi, level pedas, dan lauk tambahan. Setelah formulir dikirim, sistem akan otomatis membuka WhatsApp resmi kedai dengan pesan yang sudah terformat rapi. Anda juga dapat memesan melalui kurir ojol rekanan."
  },
  {
    q: "Apakah sudah bersertifikasi Halal?",
    a: "Alhamdulillah Sangtau \"eRTe\" sudah resmi bersertifikat Halal Indonesia dengan nomor sertifikasi resmi ID 32110003079180623. Seluruh bahan, mulai dari tahu, bumbu kacang, kecap, telur asin, hingga minyak goreng dijamin 100% halal dan thoyyib."
  },
  {
    q: "Bisa minta kuah bumbu kacang dan kecap dipisah untuk perjalanan jauh?",
    a: "Tentu saja! Semua pesanan bungkus/takeaway dapat dipisah bumbunya ke dalam wadah higienis food-grade agar tahu tetap segar dan tidak benyek saat Anda bawa pulang ke rumah atau kantor."
  },
  {
    q: "Bagaimana ketentuan pemesanan porsi besar (katering rapat/syukuran)?",
    a: "Untuk pemesanan rombongan di atas 20 porsi (acara kantor, syukuran keluarga, arisan), kami menyarankan konfirmasi H-1 melalui WhatsApp agar tahu segar dan bumbu kacang dapat disiapkan langsung dari penggorengan pertama dalam kondisi paling hangat dan gurih."
  },
  {
    q: "Di mana lokasi parkir kendaraan roda empat (mobil)?",
    a: "Kedai kami di Blok Yanten No. 2 menyediakan bahu jalan beraspal lebar yang nyaman untuk parkir mobil dan motor santai dengan panduan juru parkir kedai, hanya 5 menit berkendara dari Stasiun Karawang."
  }
];
