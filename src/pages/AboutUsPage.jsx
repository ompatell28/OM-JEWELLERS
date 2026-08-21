import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Gem, Users, Sparkles } from 'lucide-react';

export const AboutUsPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#FAF6F0] text-[#2C2C2C] pb-24">
      
      {/* 1. Dual Tone Header */}
      <div className="w-full bg-[#FCF9F2] border-b border-[#E8DFD1] py-8 px-4 sm:px-8 lg:px-12 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight mb-2">
          <span className="text-[#6B1F22]">ABOUT </span>
          <span className="italic font-serif bg-gradient-to-r from-[#B47B2B] via-[#D4AF37] to-[#8C5818] bg-clip-text text-transparent">
            US
          </span>
        </h1>
        <p className="text-xs text-gray-500 font-light tracking-wide">
          <a href="/" className="hover:text-[#6B1F22] transition-colors">Home</a>
          <span className="mx-1.5 text-gray-400">/</span>
          <span className="text-[#B47B2B] font-medium uppercase">About Us</span>
        </p>
      </div>

      {/* 2. Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-12 space-y-16">
        
        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DFD1] shadow-sm text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#B47B2B] uppercase">Our Heritage & Legacy</span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#6B1F22]">Crafting Timeless Elegance Since Decades</h2>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Welcome to <strong className="text-gray-900 font-semibold">OM JEWELLERS</strong>, where pure craftsmanship meets modern luxury. Every piece in our collection is thoughtfully designed and ethically sourced to celebrate life's most cherished moments.
          </p>
        </div>

        {/* 3 Pillars / Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-[#E8DFD1] text-center space-y-3 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FCF9F2] border border-[#E8DFD1] text-[#6B1F22] flex items-center justify-center mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-gray-900">100% Certified Gold</h3>
            <p className="text-xs text-gray-500 leading-relaxed">BIS Hallmarked gold and certified diamonds ensuring genuine value.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E8DFD1] text-center space-y-3 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FCF9F2] border border-[#E8DFD1] text-[#B47B2B] flex items-center justify-center mx-auto">
              <Gem className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-gray-900">Artisanal Design</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Master karigars blending royal heritage with contemporary styling.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E8DFD1] text-center space-y-3 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FCF9F2] border border-[#E8DFD1] text-[#6B1F22] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-gray-900">Trust & Transparency</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Complete breakdown of gold weight, making charges, and stone details.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUsPage;