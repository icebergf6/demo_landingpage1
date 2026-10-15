import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BerandaSection from './components/BerandaSection';
import MenuSection from './components/MenuSection';
import CeritaSection from './components/CeritaSection';
import LokasiSection from './components/LokasiSection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  const [activeTab, setActiveTab] = useState('beranda');

  const navigateTo = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fff8f5] text-[#1e1b19] flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-[#ffdcc3] selection:text-[#2f1500]">
      {/* Sticky Top Navbar & Responsive Sliding Sidebar */}
      <Navbar activeTab={activeTab} setActiveTab={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        {activeTab === 'beranda' && (
          <BerandaSection
            onNavigateMenu={() => navigateTo('menu')}
            onNavigateCerita={() => navigateTo('cerita')}
            onNavigateLokasi={() => navigateTo('lokasi')}
          />
        )}

        {activeTab === 'menu' && <MenuSection />}

        {activeTab === 'cerita' && (
          <CeritaSection onNavigateMenu={() => navigateTo('menu')} />
        )}

        {activeTab === 'lokasi' && <LokasiSection />}
      </main>

      {/* Comprehensive Footer */}
      <Footer onNavigateTab={navigateTo} />

      {/* Mobile-Only Thumb-Friendly Sticky WhatsApp Bar (shown on Beranda & Cerita) */}
      {(activeTab === 'beranda' || activeTab === 'cerita') && <MobileStickyBar />}
    </div>
  );
}
