import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Home Page Sections
import { HeroBanner } from './components/home/HeroBanner';
import { PromoBanner } from './components/home/PromoBanner';
import { CategorySection } from './components/home/CategorySection';
import { ProductSection } from './components/home/ProductSection';
import { VideoReels } from './components/home/VideoReels';
import { ShowroomSection } from './components/home/ShowroomSection';
import { Testimonials } from './components/home/Testimonials';

// Mock Data
import { trendingProducts, newArrivals, bestsellers } from './data/mockData';

// Pages
import { CherishedPairPage } from './pages/CherishedPairPage';
import { ChainPendantPage } from './pages/ChainPendantPage';
import { DailyWearPage } from './pages/DailyWearPage';
import { ForHimPage } from './pages/ForHimPage';
import { AboutUsPage } from './pages/AboutUsPage';

// Complete Home View Component
const HomePage = () => {
  return (
    <>
      {/* 1. Hero Banner Carousel */}
      <HeroBanner />

      {/* 2. Festive Rakhi/Gift Showcase */}
      <PromoBanner />

      {/* 3. Categories Grid */}
      <CategorySection />

      {/* 4. Trending Products */}
      <ProductSection
        title="Trending Products"
        subtitle="Handcrafted designs currently capturing hearts"
        products={trendingProducts}
      />

      {/* 5. New Arrival Products */}
      <ProductSection
        title="New Arrivals"
        subtitle="Freshly crafted contemporary pieces"
        products={newArrivals}
      />

      {/* 6. Bestseller Products */}
      <ProductSection
        title="Bestseller Products"
        subtitle="All-time customer favorites & iconic jewellery"
        products={bestsellers}
      />

      {/* 7. Video Shopping Reels */}
      <VideoReels />

      {/* 8. Showroom Details */}
      <ShowroomSection />

      {/* 9. Testimonials */}
      <Testimonials />
    </>
  );
};

function App() {
  return (
    <ShopProvider>
      <Router>
        <div className="w-full min-h-screen bg-[#FAF6F0] text-[#222222] selection:bg-[#6B1F22] selection:text-white flex flex-col justify-between">
          {/* Persistent Navbar */}
          <Navbar />

          {/* Page Routing */}
          <main className="flex-grow">
            <Routes>
              {/* Home Page Route */}
              <Route path="/" element={<HomePage />} />

              {/* Shop Category Routes */}
              <Route path="/shop" element={<CherishedPairPage />} />
              <Route path="/shop/chain-pendant-set" element={<ChainPendantPage />} />

              {/* Collection Route */}
              <Route path="/collection/daily-wear" element={<DailyWearPage />} />

              {/* Gifts Route */}
              <Route path="/gifts/for-him" element={<ForHimPage />} />

              {/* About Us */}
              <Route path="/about-us" element={<AboutUsPage />} /> 

              {/* Fallback Route */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Persistent Footer */}
          <Footer />
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;