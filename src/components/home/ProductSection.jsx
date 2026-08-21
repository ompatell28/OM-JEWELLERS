import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

// Container Stagger Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

// Card Reveal Animation (Smooth Slide Up + Scale)
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.55, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

export const ProductSection = ({ 
  title = "Trending Products", 
  subtitle = "Handcrafted designs currently capturing hearts", 
  products = [] 
}) => {
  const { wishlist = [], toggleWishlist = () => {} } = useShop() || {};
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Dual-tone heading split
  const words = title.split(' ');
  const firstWord = words[0];
  const restWords = words.slice(1).join(' ');

  // Continuous Auto-scroll Loop
  useEffect(() => {
    if (isHovered || !scrollRef.current) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const step = clientWidth > 640 ? 300 : 200;

        if (scrollLeft >= maxScroll - 15) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: step, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, products]);

  // Manual Arrow Scroll (< >)
  const handleManualScroll = (direction) => {
    if (!scrollRef.current) return;
    const step = scrollRef.current.clientWidth > 640 ? 300 : 200;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    });
  };

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section 
      className="w-full px-4 sm:px-8 lg:px-12 py-10 bg-[#FAF6F0] overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Centered Big Dual Tone Heading with Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 space-y-1 relative"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight">
            <span className="text-[#6B1F22]">{firstWord} </span>
            <span className="italic font-serif bg-gradient-to-r from-[#B47B2B] via-[#D4AF37] to-[#8C5818] bg-clip-text text-transparent">
              {restWords}
            </span>
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-gray-500 font-light tracking-wide">
              {subtitle}
            </p>
          )}

          {/* Desktop Carousel Arrows on the Right */}
          <div className="hidden md:flex items-center gap-2 absolute right-0 top-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={() => handleManualScroll('left')}
              className="w-9 h-9 rounded-full border border-[#E3D9C8] bg-white flex items-center justify-center text-gray-700 hover:bg-[#6B1F22] hover:text-white transition-colors shadow-xs cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleManualScroll('right')}
              className="w-9 h-9 rounded-full border border-[#E3D9C8] bg-white flex items-center justify-center text-gray-700 hover:bg-[#6B1F22] hover:text-white transition-colors shadow-xs cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Auto-scrolling Row Container with Stagger Animation */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-4 pt-1 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((item) => {
            const isWishlisted = wishlist?.some((w) => w.id === item.id);
            const displayPrice = typeof item.price === 'number' 
              ? `₹ ${item.price.toLocaleString('en-IN')}/-` 
              : item.formattedPrice || `₹ ${item.price}/-`;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.25, ease: "easeOut" } 
                }}
                className="w-[170px] sm:w-[230px] md:w-[255px] shrink-0 group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E8DFD1] shadow-xs transition-all duration-300 hover:border-[#6B1F22] hover:shadow-xl"
              >
                {/* Product Image Box */}
                <div className="relative w-full aspect-square bg-[#0A192F] p-3.5 flex items-center justify-center overflow-hidden">
                  
                  {/* Wishlist Heart Button */}
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(item);
                    }}
                    className={`absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors ${
                      isWishlisted 
                        ? 'bg-[#6B1F22] text-white' 
                        : 'bg-[#B47B2B]/85 hover:bg-[#6B1F22] text-white'
                    }`}
                    aria-label="Add to Wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 transition-all duration-200 ${
                        isWishlisted ? "fill-white text-white scale-110" : "text-white"
                      }`}
                    />
                  </motion.button>

                  <img
                    src={item.image || item.img}
                    alt={item.name || item.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Subtle Hover Gradient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6B1F22]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Product Info */}
                <div className="p-3.5 flex flex-col justify-between flex-1 bg-white">
                  <h3
                    className="text-xs sm:text-[13px] font-medium text-gray-800 line-clamp-2 leading-snug min-h-[34px] group-hover:text-[#6B1F22] transition-colors duration-200"
                    title={item.name || item.title}
                  >
                    {item.name || item.title}
                  </h3>

                  <div className="mt-2 pt-2 border-t border-gray-100 flex items-baseline justify-between">
                    <span className="text-xs sm:text-sm font-bold text-[#6B1F22]">
                      {displayPrice}
                    </span>
                    {item.originalPrice && (
                      <span className="text-[10px] sm:text-[11px] text-gray-400 line-through">
                        ₹ {typeof item.originalPrice === 'number' ? item.originalPrice.toLocaleString('en-IN') : item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Navigation Arrows */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-3">
          <button
            type="button"
            onClick={() => handleManualScroll('left')}
            className="w-8 h-8 rounded-full border border-[#E3D9C8] bg-white flex items-center justify-center text-[#6B1F22] shadow-xs cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleManualScroll('right')}
            className="w-8 h-8 rounded-full border border-[#E3D9C8] bg-white flex items-center justify-center text-[#6B1F22] shadow-xs cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;