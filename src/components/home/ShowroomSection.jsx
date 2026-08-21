import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// PNG Image Import
import showroomImg from '../../assets/images/showroom.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export const ShowroomSection = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-16 bg-[#FAF6F0] overflow-hidden">
      
      {/* Dual Tone Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto mb-10 space-y-1.5"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight">
          <span className="text-[#6B1F22]">Visit Our </span>
          <span className="italic font-serif bg-gradient-to-r from-[#B47B2B] via-[#D4AF37] to-[#8C5818] bg-clip-text text-transparent">
            Showroom
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
          Experience our exquisite collection in person. Our elegant showroom provides the perfect setting to discover your next treasured piece.
        </p>
      </motion.div>

      {/* Main Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Side: Showroom Photo */}
        <motion.div 
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 min-h-[460px] lg:min-h-full rounded-3xl overflow-hidden shadow-xl border border-[#E8DFD1] relative group bg-[#F8F4EE]"
        >
          <img
            src={showroomImg}
            alt="Om Jewellers Showroom"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>

        {/* Right Side: Information Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="lg:col-span-7 flex flex-col justify-between gap-3.5"
        >
          {/* Card 1: Shop 1 (Flagship Store) */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8DFD1] shadow-md shadow-[#B47B2B]/5 hover:shadow-xl hover:shadow-[#6B1F22]/10 hover:border-[#6B1F22] transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] flex items-center justify-center text-[#B47B2B] shrink-0 border border-[#E8DFD1] shadow-inner">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-serif font-semibold text-[#B47B2B] tracking-wide">
                  Shop 1 • Flagship Showroom
                </h3>
                <span className="text-[10px] bg-[#6B1F22]/10 text-[#6B1F22] font-medium px-2 py-0.5 rounded-full">
                  Main Branch
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 mt-1 font-light leading-relaxed">
                7-8-9, Ground Floor, Satkar Complex, CG Road, Ahmedabad - 380009.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Shop 2 (Second Branch) */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8DFD1] shadow-md shadow-[#B47B2B]/5 hover:shadow-xl hover:shadow-[#6B1F22]/10 hover:border-[#6B1F22] transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] flex items-center justify-center text-[#B47B2B] shrink-0 border border-[#E8DFD1] shadow-inner">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-serif font-semibold text-[#B47B2B] tracking-wide">
                  Shop 2 • Heritage Boutique
                </h3>
                <span className="text-[10px] bg-[#B47B2B]/15 text-[#B47B2B] font-medium px-2 py-0.5 rounded-full">
                  Branch 2
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 mt-1 font-light leading-relaxed">
                Shop No. 12, Ground Floor, Titanium Square, Thaltej Cross Road, SG Highway, Ahmedabad.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Phone & Email */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Phone */}
            <div className="bg-white rounded-2xl p-4 border border-[#E8DFD1] shadow-md shadow-[#B47B2B]/5 hover:shadow-xl hover:shadow-[#6B1F22]/10 hover:border-[#6B1F22] transition-all duration-300 flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] flex items-center justify-center text-[#B47B2B] shrink-0 border border-[#E8DFD1] shadow-inner">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-[11px] font-serif font-medium text-[#B47B2B] tracking-wide uppercase">
                  Phone
                </h3>
                <a href="tel:+917862871103" className="text-xs sm:text-sm text-gray-800 font-semibold mt-0.5 block hover:text-[#6B1F22] transition-colors">
                  +91 7862871103
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-4 border border-[#E8DFD1] shadow-md shadow-[#B47B2B]/5 hover:shadow-xl hover:shadow-[#6B1F22]/10 hover:border-[#6B1F22] transition-all duration-300 flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] flex items-center justify-center text-[#B47B2B] shrink-0 border border-[#E8DFD1] shadow-inner">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-[11px] font-serif font-medium text-[#B47B2B] tracking-wide uppercase">
                  Email
                </h3>
                <a href="mailto:info@omgold.com" className="text-xs sm:text-sm text-gray-800 font-semibold mt-0.5 block hover:text-[#6B1F22] transition-colors">
                  info@omgold.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Business Hours */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl p-4 sm:p-4.5 border border-[#E8DFD1] shadow-md shadow-[#B47B2B]/5 hover:shadow-xl hover:shadow-[#6B1F22]/10 hover:border-[#6B1F22] transition-all duration-300 flex items-center justify-between flex-wrap gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] flex items-center justify-center text-[#B47B2B] shrink-0 border border-[#E8DFD1] shadow-inner">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-serif font-semibold text-[#B47B2B] tracking-wide">
                  Business Hours
                </h3>
                <p className="text-[11px] text-gray-500 mt-0.5">Monday – Sunday:</p>
              </div>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#6B1F22] bg-[#FAF6F0] px-3.5 py-1.5 rounded-xl border border-[#E8DFD1]">
              10:30 AM - 8:00 PM
            </span>
          </motion.div>

          {/* Card 5: Follow Us */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl px-4 py-3 sm:px-5 border border-[#E8DFD1] shadow-md shadow-[#B47B2B]/5 hover:shadow-xl hover:shadow-[#6B1F22]/10 hover:border-[#6B1F22] transition-all duration-300 flex items-center justify-between flex-wrap gap-3"
          >
            <span className="text-xs font-serif font-medium text-gray-700 tracking-wider uppercase">
              Follow Us
            </span>
            
            <div className="flex items-center gap-2.5">
              <a href="#" className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-xs shadow-sm hover:scale-110 transition-transform">
                f
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4] text-white flex items-center justify-center text-xs shadow-sm hover:scale-110 transition-transform">
                ig
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-[#E60023] text-white flex items-center justify-center text-xs shadow-sm hover:scale-110 transition-transform">
                p
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-[#FF0000] text-white flex items-center justify-center text-xs shadow-sm hover:scale-110 transition-transform">
                yt
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shadow-sm hover:scale-110 transition-transform">
                𝕏
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default ShowroomSection;