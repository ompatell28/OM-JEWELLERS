import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import catRings from '../../assets/images/rings.png';
import catEarrings from '../../assets/images/earrings.png';
import catBracelets from '../../assets/images/bracelets.png';
import catChains from '../../assets/images/chains.png';
import catPendats from '../../assets/images/pendats.png';
import catMangalsutra from '../../assets/images/mangalsutra.png';
import catBangles from '../../assets/images/bangles.png';

const categories = [
  {
    id: 1,
    title: "RINGS",
    image: catRings,
    link: "#"
  },
  {
    id: 2,
    title: "EARRINGS",
    image: catEarrings,
    link: "#"
  },
  {
    id: 3,
    title: "BRACELETS",
    image: catBracelets,
    link: "#"
  },
  {
    id: 4,
    title: "CHAINS",
    image: catChains,
    link: "#"
  },
  {
    id: 5,
    title: "PENDATS",
    image: catPendats,
    link: "#"
  },
  {
    id: 6,
    title: "MANGALSUTRA",
    image: catMangalsutra,
    link: "#"
  },
  {
    id: 7,
    title: "BANGLES",
    image: catBangles,
    link: "#"
  }
];

// Staggered Fade & Elevation Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

export const CategorySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-70px" });

  return (
    <section ref={sectionRef} className="w-full px-4 sm:px-8 lg:px-12 py-12 bg-[#FAF6F0] overflow-hidden">
      
      {/* Dual Tone Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-10 space-y-1"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight">
          <span className="text-[#6B1F22]">Find Your </span>
          <span className="italic font-serif bg-gradient-to-r from-[#B47B2B] via-[#D4AF37] to-[#8C5818] bg-clip-text text-transparent">
            Perfect Match
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-light tracking-wide">
          Shop by Categories
        </p>
      </motion.div>

      {/* Grid: 2 Rows x 4 Columns (Edge-to-Edge Full Fill Image Cards) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
      >
        {/* 7 Category Cards */}
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group cursor-pointer flex flex-col items-center select-none"
          >
            {/* Box with zero padding and full image cover */}
            <div className="w-full aspect-square bg-[#F5EFE6] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-xl relative">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              
              {/* Subtle Maroon Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B1F22]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Category Title */}
            <h3 className="mt-3.5 text-xs sm:text-sm font-semibold text-[#1C1C1C] uppercase tracking-wider text-center group-hover:text-[#6B1F22] transition-colors truncate w-full">
              {cat.title}
            </h3>
          </motion.div>
        ))}

        {/* 8th Card: 10+ Categories To Choose From */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="group cursor-pointer flex flex-col items-center select-none"
        >
          <div className="w-full aspect-square bg-gradient-to-br from-[#FCF8F2] via-white to-[#F5ECE0] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-300 group-hover:shadow-xl relative overflow-hidden">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#6B1F22] font-semibold leading-none">
              10+
            </span>
            <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-tight mt-2 leading-tight px-2">
              Categories to choose from
            </p>
          </div>

          <h3 className="mt-3.5 text-xs sm:text-sm font-semibold text-[#6B1F22] uppercase tracking-wider text-center flex items-center gap-1 group-hover:gap-2 transition-all">
            <span>VIEW ALL</span>
            <ArrowRight className="w-4 h-4" />
          </h3>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CategorySection;