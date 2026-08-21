import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero3Img from '../../assets/images/hero3.png';

const bannerSlides = [
  {
    id: 1,
    title: 'Heera, har heere ke liye',
    discount: 'FLAT 30% OFF',
    subText: 'ON DIAMOND PRICES OF ALL DESIGNS',
    terms: '*T&CA',
    bgImage: hero3Img,
    link: '#'
  },
  {
    id: 2,
    title: 'Pure 22KT Royal Gold Jewellery',
    discount: 'SPECIAL 0% MAKING',
    subText: 'ON SELECT BRIDAL & FESTIVE COLLECTIONS',
    terms: '*T&CA',
    bgImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=80',
    link: '#'
  },
  {
    id: 3,
    title: 'Solitaire Rings & Everyday Luxury',
    discount: 'UP TO 25% OFF',
    subText: 'CERTIFIED NATURAL DIAMOND JEWELLERY',
    terms: '*T&CA',
    bgImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80',
    link: '#'
  }
];

export const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
  }, []);

  // Automatic slide interval (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-4 bg-[#FAF6F0]">
      {/* Banner Container with exact border gap and rounded edges */}
      <div className="relative w-full h-[260px] sm:h-[360px] md:h-[440px] lg:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden shadow-md bg-[#F4EFE6] border border-[#E9E1D2]">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="relative w-full h-full cursor-pointer select-none"
          >
            {/* Background Jewelry Image */}
            <img
              src={bannerSlides[currentIndex].bgImage}
              alt={bannerSlides[currentIndex].title}
              className="w-full h-full object-cover object-center filter brightness-[0.92]"
            />

            {/* Subtle Luxury Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FCF9F2]/90 via-[#FCF9F2]/40 to-transparent" />

            {/* Banner Promotional Text Card (Left Aligned) */}
            <div className="absolute inset-y-0 left-6 sm:left-12 md:left-16 flex flex-col justify-center max-w-sm sm:max-w-md z-10 space-y-3 sm:space-y-4">
              
              <motion.h2
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#6B1F22] tracking-wide"
              >
                {bannerSlides[currentIndex].title}
              </motion.h2>

              {/* Purple/Maroon Promo Badge Box */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="p-3 sm:p-5 rounded-2xl bg-[#4D1525] border border-amber-300/30 text-white shadow-xl max-w-xs"
              >
                <p className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-amber-200">
                  SPECIAL OFFER
                </p>
                <div className="text-2xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-100 mt-0.5">
                  {bannerSlides[currentIndex].discount}
                </div>
                <p className="text-[9px] sm:text-[11px] font-medium tracking-wider text-gray-200 mt-1 uppercase">
                  {bannerSlides[currentIndex].subText}
                </p>
              </motion.div>

              <span className="text-[10px] text-gray-500 font-sans">
                {bannerSlides[currentIndex].terms}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-[#6B1F22] shadow-lg flex items-center justify-center backdrop-blur-sm transition-all z-20"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-[#6B1F22] shadow-lg flex items-center justify-center backdrop-blur-sm transition-all z-20"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom Center Indicator (1/3 & Dots) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full">
          <span className="text-[11px] font-medium text-white tracking-wider">
            {currentIndex + 1} / {bannerSlides.length}
          </span>
          <div className="flex items-center gap-1.5 ml-1">
            {bannerSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-5 bg-amber-400' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;