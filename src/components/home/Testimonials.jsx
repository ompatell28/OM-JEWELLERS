import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    initials: "MO",
    name: "mann oberoi",
    rating: 5,
    comment: "Satva gold is trusted online jewellery brand. They are very spontaneous & responsible. Especially Manju ji has been very kind in terms of showing live products & over all buying...",
    verified: true
  },
  {
    id: 2,
    initials: "TKA",
    name: "Tulasi Kalyani Ampolu",
    rating: 5,
    comment: "I recently placed a customized order through WhatsApp, and I am truly delighted with the entire experience. The person 'Naveen' from satva team was exceptionally patient and too...",
    verified: true
  },
  {
    id: 3,
    initials: "GK",
    name: "Geeta Kapoor",
    rating: 5,
    comment: "I had a wonderful experience at Satva Gold Jewellers. A special thanks to Krunal for being so patient, helpful, and professional throughout the entire process. I purchased a beautiful pair...",
    verified: true
  },
  {
    id: 4,
    initials: "PJ",
    name: "Priya Joshi",
    rating: 5,
    comment: "Delivery was also on time and packaging was secure. Definitely a trustworthy place for daily wear jewellery and authentic Hallmark gold.",
    verified: true
  },
  {
    id: 5,
    initials: "RS",
    name: "Rahul Sharma",
    rating: 5,
    comment: "The finishing of the diamond ring was beyond expectations. Transparent pricing and prompt customer service made my purchase completely stress-free.",
    verified: true
  },
  {
    id: 6,
    initials: "AP",
    name: "Ananya Patel",
    rating: 5,
    comment: "Ordered a bridal necklace set and it was delivered with full certification and immaculate safety. Highly recommended for special occasions!",
    verified: true
  },
  {
    id: 7,
    initials: "RS",
    name: "Rahul Sharma",
    rating: 5,
    comment: "The finishing of the diamond ring was beyond expectations. Transparent pricing and prompt customer service made my purchase completely stress-free.",
    verified: true
  },
  {
    id: 8,
    initials: "RS",
    name: "Rahul Sharma",
    rating: 5,
    comment: "The finishing of the diamond ring was beyond expectations. Transparent pricing and prompt customer service made my purchase completely stress-free.",
    verified: true
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const maxIndex = Math.max(0, reviews.length - 4);

  // Next & Prev handlers
  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, maxIndex]);

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-16 bg-[#FAF6F0] overflow-hidden">
      
      {/* 1. Dual Tone Heading with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-xl mx-auto mb-10 space-y-1.5"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight">
          <span className="text-[#6B1F22]">Trusted by </span>
          <span className="italic font-serif bg-gradient-to-r from-[#B47B2B] via-[#D4AF37] to-[#8C5818] bg-clip-text text-transparent">
            Thousands
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-light tracking-wide">
          Real experiences from our valued customers
        </p>
      </motion.div>

      {/* 2. Top Stats Pill Box (Exact Reference Design) */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-2xl mx-auto mb-12 bg-white rounded-full py-4 px-6 sm:px-10 border border-[#E8DFD1] shadow-sm flex items-center justify-around text-center"
      >
        {/* Rating */}
        <div className="flex flex-col items-center">
          <span className="text-lg sm:text-xl font-bold text-gray-900 leading-none">4.9</span>
          <div className="flex items-center gap-0.5 my-1 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#D4AF37]" />
            ))}
          </div>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-400 font-medium">
            Average Rating
          </span>
        </div>

        <div className="h-8 w-[1px] bg-[#E8DFD1]" />

        {/* Happy Customers */}
        <div className="flex flex-col items-center">
          <span className="text-lg sm:text-xl font-bold text-gray-900 leading-none">15K+</span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-400 font-medium mt-2">
            Happy Customers
          </span>
        </div>

        <div className="h-8 w-[1px] bg-[#E8DFD1]" />

        {/* Verified Reviews */}
        <div className="flex flex-col items-center">
          <span className="text-lg sm:text-xl font-bold text-gray-900 leading-none">1K+</span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-400 font-medium mt-2">
            Verified Reviews
          </span>
        </div>
      </motion.div>

      {/* 3. Reviews Carousel Slider */}
      <div 
        className="max-w-7xl mx-auto overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          animate={{ x: `-${currentIndex * (100 / (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4))}%` }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-5"
        >
          {reviews.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] shrink-0 bg-white rounded-2xl p-5 border border-[#E8DFD1] shadow-sm hover:border-[#6B1F22] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Initials Avatar + Name & Rating + Quote Icon */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#B47B2B] text-white font-semibold text-xs flex items-center justify-center shrink-0 shadow-sm">
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-semibold text-gray-900 capitalize">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-0.5 mt-0.5 text-[#D4AF37]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#D4AF37]" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Quote className="w-4 h-4 text-[#E8DFD1] shrink-0 rotate-180" />
                </div>

                {/* Comment Text */}
                <p className="text-xs text-gray-600 font-light leading-relaxed line-clamp-4">
                  {item.comment}
                </p>
              </div>

              {/* Bottom Verified Badge */}
              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[#B47B2B]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold tracking-wider uppercase">
                  Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 4. Bottom Controls: Arrows + Progress Bar */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {/* Left Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Reviews"
          className="w-9 h-9 rounded-full bg-white border border-[#E8DFD1] hover:border-[#6B1F22] hover:bg-[#6B1F22] hover:text-white shadow-sm flex items-center justify-center text-gray-700 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Progress Dots / Bar Indicator */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-[#B47B2B]' : 'w-2 bg-[#E8DFD1]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Reviews"
          className="w-9 h-9 rounded-full bg-white border border-[#E8DFD1] hover:border-[#6B1F22] hover:bg-[#6B1F22] hover:text-white shadow-sm flex items-center justify-center text-gray-700 transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};

export default Testimonials;