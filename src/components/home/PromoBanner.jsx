import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import bannerModelImg from '../../assets/images/promo1.png';

const giftItems = [
  {
    id: 1,
    name: "Petite Heart Kids' Diamond Studs",
    price: "₹19,308",
    originalPrice: "₹22,052",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Fleet Pass Diamond Ring",
    price: "₹13,214",
    originalPrice: "₹14,860",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Midget Infinite 9KT Diamond Ring",
    price: "₹13,698",
    originalPrice: "₹15,711",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Chevron Mesh Diamond Ring",
    price: "₹42,622",
    originalPrice: "₹47,012",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Petite Evil Eye Gold Bracelet",
    price: "₹20,419",
    originalPrice: "₹24,500",
    image: "https://images.unsplash.com/photo-1611591475152-473559384956?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    name: "Dazzle Reign Diamond Drop",
    price: "₹33,145",
    originalPrice: "₹37,445",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 7,
    name: "Solitary Pearl Gold Necklace",
    price: "₹37,419",
    originalPrice: "₹42,100",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80"
  }
];

export const PromoBanner = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const totalItems = giftItems.length;

  const nextSlide = () => {
    setStartIndex((prev) => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
      const visibleCount = isMobile ? 1 : 3;
      return prev + 1 > totalItems - visibleCount ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setStartIndex((prev) => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
      const visibleCount = isMobile ? 1 : 3;
      return prev === 0 ? Math.max(0, totalItems - visibleCount) : prev - 1;
    });
  };

  // Auto scroll
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section 
      ref={sectionRef} 
      className="w-full px-3 sm:px-6 lg:px-12 py-6 bg-[#FAF6F0] overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 35, scale: 0.98 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-[#E8DFD1] grid grid-cols-1 lg:grid-cols-12 min-h-[360px] bg-white"
      >
        {/* Left Festive Banner */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -25 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 bg-gradient-to-br from-[#6B1F22] via-[#521619] to-[#3B0E11] text-white p-6 sm:p-9 flex flex-col justify-between relative overflow-hidden min-h-[220px]"
        >
          <img
            src={bannerModelImg}
            alt="Festive Model"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-luminosity pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3B0E11] via-[#521619]/60 to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-1">
            <span className="text-[11px] sm:text-xs font-sans tracking-widest text-[#E8C58C] uppercase font-light">
              Thoughtful
            </span>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-none tracking-tight text-white pt-1">
              Festive <span className="italic font-serif text-[#F4D08C]">Gifts</span>
            </h3>

            <p className="text-xs sm:text-[13px] text-gray-200 font-light pt-1.5">
              for your forever secret keeper
            </p>
          </div>

          <div className="relative z-10 pt-6 sm:pt-10 mt-auto">
            <div className="inline-block py-1.5 px-3.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-medium text-amber-200">
              Natural Diamonds starting from <span className="font-bold text-white">₹5,000</span>
            </div>
          </div>
        </motion.div>

        {/* Right Product Slider Section */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 25 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="lg:col-span-7 bg-[#FCF9F2] p-5 sm:p-7 flex flex-col justify-between"
        >
          <div className="overflow-hidden w-full relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${startIndex * (typeof window !== 'undefined' && window.innerWidth < 640 ? 55 : 34)}%)`
              }}
            >
              {giftItems.map((item) => (
                <div
                  key={item.id}
                  className="w-[145px] sm:w-[175px] md:w-[190px] shrink-0 flex flex-col group cursor-pointer"
                >
                  <div className="w-full h-36 sm:h-44 bg-white rounded-2xl p-3 flex items-center justify-center border border-[#E8DFD1] shadow-xs group-hover:border-[#6B1F22] group-hover:shadow-md transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                    />
                  </div>

                  <div className="mt-2.5 px-1">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs sm:text-sm font-bold text-[#6B1F22]">
                        {item.price}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-gray-400 line-through font-normal">
                        {item.originalPrice}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-gray-700 truncate mt-0.5 group-hover:text-[#6B1F22] transition-colors" title={item.name}>
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar (Buttons + CTA) */}
          <div className="flex items-center justify-between mt-5 pt-3.5 border-t border-[#E8DFD1]">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#6B1F22] text-white hover:bg-[#521619] flex items-center justify-center shadow-xs transition-transform active:scale-90 cursor-pointer"
                aria-label="Previous Products"
              >
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#6B1F22] text-white hover:bg-[#521619] flex items-center justify-center shadow-xs transition-transform active:scale-90 cursor-pointer"
                aria-label="Next Products"
              >
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

            <a
              href="/shop"
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-[#6B1F22] hover:bg-[#521619] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider shadow-xs transition-all active:scale-95 text-center"
            >
              Shop Now
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PromoBanner;