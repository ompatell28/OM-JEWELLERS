import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Gem, 
  Truck, 
  Lock, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#18110D] text-[#E8DFD1] pt-16 pb-8 border-t border-[#B47B2B]/30 relative overflow-hidden">
      
      {/* Background Royal Ambient Glow */}
      <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-[#B47B2B]/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12 border-b border-[#B47B2B]/20">
          
          {/* ========================================================= */}
          {/* COLUMN 1: ABOUT OM JEWELLERS (lg:col-span-3) */}
          {/* ========================================================= */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h3 className="text-xs font-serif font-semibold tracking-widest text-[#D4AF37] uppercase">
                ABOUT OM JEWELLERS
              </h3>
              <div className="w-8 h-0.5 bg-[#6B1F22] mt-1" />
            </div>

            <p className="text-xs text-gray-300 font-light leading-relaxed">
              7-8-9, Ground Floor, Satkar Complex, CG Road, Ahmedabad - 380009.
            </p>

            <div className="space-y-1.5 text-xs text-gray-300">
              <p>
                <span className="text-gray-400">Phone:</span>{' '}
                <a href="tel:+917862871103" className="hover:text-[#D4AF37] transition-colors font-medium text-white">
                  +91 7862871103
                </a>
              </p>
              <p>
                <span className="text-gray-400">Email:</span>{' '}
                <a href="mailto:info@omgold.com" className="hover:text-[#D4AF37] transition-colors font-medium text-white">
                  info@omgold.com
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a href="#" className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-xs shadow-sm hover:scale-110 transition-transform">
                f
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4] text-white flex items-center justify-center text-xs shadow-sm hover:scale-110 transition-transform">
                ig
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#E60023] text-white flex items-center justify-center text-xs shadow-sm hover:scale-110 transition-transform">
                p
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center text-xs shadow-sm hover:scale-110 transition-transform">
                yt
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-black border border-white/20 text-white flex items-center justify-center text-xs font-bold shadow-sm hover:scale-110 transition-transform">
                𝕏
              </a>
            </div>

            {/* App Download Buttons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-[#B47B2B]/25 text-white transition-all"
              >
                <span className="text-[#D4AF37] text-xs">▶</span>
                <div className="text-left">
                  <div className="text-[8px] text-gray-400 uppercase tracking-wider leading-none">GET IT ON</div>
                  <div className="text-[10px] font-semibold tracking-wide">Google Play</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-[#B47B2B]/25 text-white transition-all"
              >
                <span className="text-[#D4AF37] text-xs"></span>
                <div className="text-left">
                  <div className="text-[8px] text-gray-400 uppercase tracking-wider leading-none">DOWNLOAD ON</div>
                  <div className="text-[10px] font-semibold tracking-wide">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 2: INFORMATION LINKS (lg:col-span-2) */}
          {/* ========================================================= */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-xs font-serif font-semibold tracking-widest text-[#D4AF37] uppercase">
                INFORMATION
              </h3>
              <div className="w-8 h-0.5 bg-[#6B1F22] mt-1" />
            </div>

            <ul className="space-y-2.5 text-xs text-gray-300">
              {[
                { name: 'About OM Jewellers', href: '#' },
                { name: 'Gold Rate Today', href: '#' },
                { name: 'Blogs & Guides', href: '#' },
                { name: 'Shipping & Return', href: '#' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms & Conditions', href: '#' },
                { name: 'Contact Us', href: '#' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-200"
                  >
                    <span className="text-[#B47B2B] font-bold">&gt;</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2">
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 3: WHY SHOP WITH US (lg:col-span-4) */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h3 className="text-xs font-serif font-semibold tracking-widest text-[#D4AF37] uppercase">
                WHY SHOP WITH US
              </h3>
              <div className="w-8 h-0.5 bg-[#6B1F22] mt-1" />
            </div>

            <div className="space-y-2.5">
              {/* Feature 1 */}
              <div className="flex items-center gap-3.5 p-2.5 rounded-2xl bg-white/[0.03] border border-[#B47B2B]/20 hover:border-[#6B1F22] hover:bg-white/[0.06] transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#6B1F22]/20 border border-[#6B1F22]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">BIS Hallmarked 916 & 750</h4>
                  <p className="text-[11px] text-gray-400 font-light">100% Government-certified gold purity</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3.5 p-2.5 rounded-2xl bg-white/[0.03] border border-[#B47B2B]/20 hover:border-[#6B1F22] hover:bg-white/[0.06] transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#6B1F22]/20 border border-[#6B1F22]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Gem className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Certified Natural Diamonds</h4>
                  <p className="text-[11px] text-gray-400 font-light">IGI / GIA authenticated certificates</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3.5 p-2.5 rounded-2xl bg-white/[0.03] border border-[#B47B2B]/20 hover:border-[#6B1F22] hover:bg-white/[0.06] transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#6B1F22]/20 border border-[#6B1F22]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Free & Insured Shipping</h4>
                  <p className="text-[11px] text-gray-400 font-light">Safe transit coverage across PAN India</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-3.5 p-2.5 rounded-2xl bg-white/[0.03] border border-[#B47B2B]/20 hover:border-[#6B1F22] hover:bg-white/[0.06] transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#6B1F22]/20 border border-[#6B1F22]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">100% Secure Payment</h4>
                  <p className="text-[11px] text-gray-400 font-light">Encrypted checkout via UPI / Cards / NetBanking</p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 4: FIND US ON MAP (lg:col-span-3) */}
          {/* ========================================================= */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h3 className="text-xs font-serif font-semibold tracking-widest text-[#D4AF37] uppercase">
                FIND US ON MAP
              </h3>
              <div className="w-8 h-0.5 bg-[#6B1F22] mt-1" />
            </div>

            {/* Google Map Box */}
            <div className="relative w-full h-[185px] rounded-2xl overflow-hidden border border-[#B47B2B]/30 shadow-lg group">
              <iframe
                title="OM Jewellers Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.970176882264!2d72.55627727591418!3d23.02488887917208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f07a2c2221%3A0x6333333333333333!2sC%20G%20Road%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-75 group-hover:filter-none group-hover:opacity-100 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating "Open in Maps" Button */}
              <a
                href="https://maps.google.com/?q=Satkar+Complex+CG+Road+Ahmedabad"
                target="_blank"
                rel="noreferrer"
                className="absolute top-2.5 left-2.5 bg-white/95 hover:bg-[#6B1F22] hover:text-white text-gray-900 text-[10px] font-semibold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1.5 transition-all z-10"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3 text-[#B47B2B]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Brand Promise */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-light">
          <p>© 2026 OM Jewellers. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
            <span>•</span>
            <span className="text-[#D4AF37] font-serif font-medium">Crafted with Purity & Trust</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;