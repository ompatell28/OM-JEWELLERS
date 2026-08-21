import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Share2, Maximize2, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// Video Imports
import reel1 from '../../assets/videos/vid1.mp4';
import reel2 from '../../assets/videos/vid2.mp4';
import reel3 from '../../assets/videos/vid3.mp4';
import reel4 from '../../assets/videos/vid4.mp4';
import reel5 from '../../assets/videos/vid5.mp4';

// Product Image Imports (.webp)
import prodImg1 from '../../assets/images/trending1.webp';
import prodImg2 from '../../assets/images/trending2.webp';
import prodImg3 from '../../assets/images/trending3.webp';
import prodImg4 from '../../assets/images/trending4.webp';
import prodImg5 from '../../assets/images/trending5.webp';

const reelData = [
  {
    id: 1,
    videoUrl: reel1,
    tagline: "EVERY HOUR IS DIAMOND HOUR",
    theme: "Cocktail hour",
    product: {
      name: "Chandelier Diamond Drop Earrings",
      price: "₹ 48,200",
      image: prodImg1,
      link: "#"
    }
  },
  {
    id: 2,
    videoUrl: reel2,
    tagline: "TIMELESS ROYAL SOLITAIRE",
    theme: "Engagement Sparkle",
    product: {
      name: "Solitaire Crown Diamond Ring",
      price: "₹ 72,400",
      image: prodImg2,
      link: "#"
    }
  },
  {
    id: 3,
    videoUrl: reel3,
    tagline: "HERITAGE MEETS MODERN",
    theme: "Festive Glamour",
    product: {
      name: "Dual Tone Hexagon Choker Set",
      price: "₹ 1,29,943",
      image: prodImg3,
      link: "#"
    }
  },
  {
    id: 4,
    videoUrl: reel4,
    tagline: "GLAMOUR ON YOUR WRIST",
    theme: "Everyday Luxury",
    product: {
      name: "Celestial Moon Diamond Bangle",
      price: "₹ 64,300",
      image: prodImg4,
      link: "#"
    }
  },
  {
    id: 5,
    videoUrl: reel5,
    tagline: "ROYAL HERITAGE ESSENCE",
    theme: "Bridal Perfection",
    product: {
      name: "Dual Tone Heart Link Royal Chain",
      price: "₹ 2,39,500",
      image: prodImg5,
      link: "#"
    }
  }
];

export const VideoReels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reelData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reelData.length) % reelData.length);
  };

  const handleFullscreen = (index) => {
    const el = videoRefs.current[index];
    if (el) {
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    }
  };

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === activeIndex) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [activeIndex]);

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-16 bg-[#FAF6F0] overflow-hidden">
      
      {/* Dual Tone Heading with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12 space-y-1"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight">
          <span className="text-[#6B1F22]">Shop From </span>
          <span className="italic font-serif bg-gradient-to-r from-[#B47B2B] via-[#D4AF37] to-[#8C5818] bg-clip-text text-transparent">
            Live Reels & Videos
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-light tracking-wide">
          Tap on products inside the reel to explore & buy instantly
        </p>
      </motion.div>

      {/* 3D Stack Carousel Container with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl mx-auto h-[560px] sm:h-[620px] flex items-center justify-center"
      >
        {/* Navigation Arrow Left */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Reel"
          className="absolute left-2 sm:left-4 z-40 w-11 h-11 rounded-full bg-white/80 hover:bg-[#6B1F22] hover:text-white backdrop-blur-md shadow-lg flex items-center justify-center transition-all text-gray-800"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Reel"
          className="absolute right-2 sm:right-4 z-40 w-11 h-11 rounded-full bg-white/80 hover:bg-[#6B1F22] hover:text-white backdrop-blur-md shadow-lg flex items-center justify-center transition-all text-gray-800"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Video Cards Stack */}
        <div className="relative w-full h-full flex items-center justify-center">
          {reelData.map((item, index) => {
            const position = (index - activeIndex + reelData.length) % reelData.length;
            const isCenter = position === 0;
            const isRight1 = position === 1;
            const isLeft1 = position === reelData.length - 1;
            const isHidden = !isCenter && !isRight1 && !isLeft1;

            if (isHidden) return null;

            let xOffset = 0;
            let scale = 1;
            let zIndex = 30;
            let opacity = 1;

            if (isCenter) {
              xOffset = 0;
              scale = 1;
              zIndex = 30;
              opacity = 1;
            } else if (isRight1) {
              xOffset = 180;
              scale = 0.86;
              zIndex = 10;
              opacity = 0.6;
            } else if (isLeft1) {
              xOffset = -180;
              scale = 0.86;
              zIndex = 10;
              opacity = 0.6;
            }

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  x: xOffset,
                  scale: scale,
                  zIndex: zIndex,
                  opacity: opacity
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => !isCenter && setActiveIndex(index)}
                className={`absolute w-[290px] sm:w-[320px] h-[520px] sm:h-[580px] rounded-3xl overflow-hidden shadow-2xl bg-black select-none will-change-transform ${
                  !isCenter ? 'cursor-pointer' : ''
                }`}
              >
                {/* Video Element */}
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.videoUrl}
                  poster={item.product.image}
                  preload={isCenter ? "auto" : "none"}
                  muted={isMuted}
                  playsInline
                  autoPlay={isCenter}
                  loop={false}
                  onEnded={handleNext}
                  className="w-full h-full object-cover"
                />

                {/* Ambient Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

                {/* Top Overlay Controls */}
                <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between text-white z-20">
                  <span className="text-[11px] font-medium tracking-wide truncate max-w-[130px] opacity-90">
                    From business hour...
                  </span>

                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      className="p-1.5 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 transition-colors"
                      aria-label="Toggle Mute"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (navigator.share) {
                          navigator.share({ title: item.product.name, url: window.location.href });
                        }
                      }}
                      className="p-1.5 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 transition-colors"
                      aria-label="Share"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFullscreen(index);
                      }}
                      className="p-1.5 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 transition-colors"
                      aria-label="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Center Captions */}
                <div className="absolute top-16 inset-x-0 text-center text-white px-4 pointer-events-none">
                  <h4 className="text-xs sm:text-sm font-serif tracking-widest uppercase opacity-95">
                    {item.tagline}
                  </h4>
                </div>

                <div className="absolute bottom-28 inset-x-0 text-center text-white/90 font-serif italic text-sm pointer-events-none">
                  {item.theme}
                </div>

                {/* Bottom Product Buy Card */}
                <div className="absolute bottom-6 inset-x-3.5 z-20">
                  <a
                    href={item.product.link}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-3 p-2 bg-[#1A1A1A]/85 backdrop-blur-md hover:bg-black rounded-2xl border border-white/10 shadow-lg group transition-all"
                  >
                    {/* White Rounded Image Box */}
                    <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Name & Price */}
                    <div className="flex-1 min-w-0 pr-1">
                      <p className="text-xs font-medium text-white line-clamp-1 group-hover:text-[#D4AF37] transition-colors">
                        {item.product.name}
                      </p>
                      <p className="text-[11px] font-bold text-[#E8C58C] mt-0.5">
                        {item.product.price}
                      </p>
                    </div>

                    {/* Circular Action Arrow */}
                    <div className="w-8 h-8 rounded-full bg-white/15 group-hover:bg-[#6B1F22] flex items-center justify-center shrink-0 text-white transition-colors mr-1">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </a>

                  {/* Story Progress Indicators */}
                  <div className="flex items-center justify-center gap-1.5 mt-3 px-6">
                    {reelData.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-0.5 rounded-full transition-all duration-300 ${
                          idx === activeIndex ? 'w-8 bg-white' : 'w-4 bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default VideoReels;