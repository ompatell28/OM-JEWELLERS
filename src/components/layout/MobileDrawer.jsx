import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, ChevronDown, ChevronRight, Home, Building2, 
  ShoppingBag, Sparkles, Gift, Info, User, Phone, Mail, MapPin 
} from 'lucide-react';
import logoImg from '../../assets/images/logo.png';

// Exact Mega Menu Grouped Structure from Desktop
const megaMenuSections = [
  {
    title: "LADIES JEWELLERY",
    badgeIcon: "💎",
    items: [
      "Cherished Pair", "Chain Pendant Set", "Exclusive Paired Collection",
      "Pendant Set", "Mangalsutra Pendant Set", "Hath Pocha", "Nose Pin",
      "Customised Jewellery", "Anklets", "Necklace", "Bangles", "Rings",
      "Earrings", "Bracelet", "Mangalsutra", "Mangalsutra Bracelet",
      "Kada", "Chain", "Pendants", "Chain Pendant", "Watch", "Tanmaniya", "Mala"
    ]
  },
  {
    title: "MEN'S JEWELLERY",
    badgeIcon: "🌟",
    items: [
      "Bracelets", "Kadas", "Rings", "Chains", "Watches", "Cufflinks", "Pendants"
    ]
  },
  {
    title: "COUPLE JEWELLERY",
    badgeIcon: "💖",
    items: [
      "Rings", "Bracelet", "Watch"
    ]
  },
  {
    title: "DIAMOND JEWELLERY",
    badgeIcon: "💎",
    items: [
      "Ring", "Earrings", "Bracelets", "Pendant Set", "Pendants",
      "Chain Pendant Set", "Bangles", "Necklace", "Mangalsutra Bracelet",
      "Kada", "Mangalsutra"
    ]
  },
  {
    title: "SHOP BY KARAT",
    badgeIcon: "✨",
    items: [
      "24KT Jewellery", "22KT Jewellery", "18KT Jewellery"
    ]
  },
  {
    title: "GENDER",
    badgeIcon: "👥",
    items: [
      "Ladies", "Gents", "Couple", "Unisex", "Kids"
    ]
  },
  {
    title: "KIDS COLLECTION",
    badgeIcon: "🧸",
    items: [
      "Nazariya", "Baby Bangles", "Earrings", "Gold Chains", "Pendants"
    ]
  },
  {
    title: "SHOP BY PRICE",
    badgeIcon: "₹",
    items: [
      "Upto ₹10,000", "₹10K to ₹25K", "₹25K to ₹50K", "₹50K to ₹1 Lakh", "Above ₹1 Lakh"
    ]
  }
];

export const MobileDrawer = ({ isOpen, onClose }) => {
  const [openAccordion, setOpenAccordion] = useState('Shop');
  const [openSubSection, setOpenSubSection] = useState('LADIES JEWELLERY');

  // Background Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleAccordion = (title) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  const toggleSubSection = (subTitle) => {
    setOpenSubSection(openSubSection === subTitle ? null : subTitle);
  };

  const getCategoryLink = (catName) => {
    if (catName === 'Chain Pendant Set') return '/shop/chain-pendant-set';
    if (catName === 'Cherished Pair') return '/shop';
    return `/shop?category=${encodeURIComponent(catName)}`;
  };

  return (
    <div 
      className={`fixed inset-0 z-[99999] lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
      }`}
    >
      {/* Dark Overlay */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Slide Drawer */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-[88%] max-w-[350px] h-full bg-[#FAF6EE] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Header */}
        <div className="p-4 border-b border-[#EBE3D5] flex items-center justify-between bg-white shrink-0">
          <img src={logoImg} alt="OM Jewellers" className="h-10 w-auto object-contain" />
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#E3D9C8] flex items-center justify-center text-gray-700 hover:text-black cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div 
          className="flex-1 overflow-y-auto p-4 space-y-4"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Account Banner */}
          <div className="p-3.5 bg-gradient-to-r from-[#1A1A1A] to-[#2E241A] rounded-2xl text-white flex items-center gap-3 shadow-md shrink-0">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#D4AF37]">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Account</p>
              <p className="text-xs font-bold text-white tracking-wide">Login Or Register</p>
            </div>
          </div>

          {/* Navigation Accordion Menu */}
          <div className="divide-y divide-[#EAE0D0] bg-white rounded-2xl border border-[#E8DFD1] px-3.5 shadow-xs">
            
            {/* 1. Home */}
            <div className="py-3">
              <Link to="/" onClick={onClose} className="flex items-center justify-between text-xs font-semibold text-gray-800 hover:text-[#6B1F22]">
                <div className="flex items-center gap-2.5">
                  <Home className="w-4 h-4 text-[#B47B2B]" />
                  <span>Home</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              </Link>
            </div>

            {/* 2. Our Brands */}
            <div className="py-3">
              <button 
                type="button" 
                onClick={() => toggleAccordion('Our Brands')} 
                className="w-full flex items-center justify-between text-xs font-semibold text-gray-800 hover:text-[#6B1F22] cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-[#B47B2B]" />
                  <span>Our Brands</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${openAccordion === 'Our Brands' ? 'rotate-180 text-[#6B1F22]' : ''}`} />
              </button>
              {openAccordion === 'Our Brands' && (
                <div className="pl-6 pt-2.5 space-y-2 text-xs">
                  <Link to="/collection/daily-wear" onClick={onClose} className="block text-gray-600 hover:text-[#6B1F22]">• Satva Heritage</Link>
                  <Link to="/collection/daily-wear" onClick={onClose} className="block text-gray-600 hover:text-[#6B1F22]">• Om Solitaire</Link>
                </div>
              )}
            </div>

            {/* 3. Shop (With Desktop Mega Menu Categories) */}
            <div className="py-3">
              <button 
                type="button" 
                onClick={() => toggleAccordion('Shop')} 
                className={`w-full flex items-center justify-between text-xs font-semibold cursor-pointer ${openAccordion === 'Shop' ? 'text-[#6B1F22]' : 'text-gray-800'}`}
              >
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-4 h-4 text-[#B47B2B]" />
                  <span>Shop</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${openAccordion === 'Shop' ? 'rotate-180 text-[#6B1F22]' : ''}`} />
              </button>

              {openAccordion === 'Shop' && (
                <div className="mt-3 space-y-2.5 bg-[#FAF6EE] p-2.5 rounded-xl border border-[#EDE4D5]">
                  {megaMenuSections.map((section, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-[#EBE3D5] overflow-hidden">
                      {/* Section Badge Header */}
                      <button
                        type="button"
                        onClick={() => toggleSubSection(section.title)}
                        className="w-full px-3 py-2.5 flex items-center justify-between text-left hover:bg-[#FDFBF7] transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs">{section.badgeIcon}</span>
                          <span className="text-[11.5px] font-bold tracking-wide text-[#6B1F22] uppercase">
                            {section.title}
                          </span>
                        </div>
                        <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${openSubSection === section.title ? 'rotate-180 text-[#6B1F22]' : ''}`} />
                      </button>

                      {/* Sub-items List with Bullet */}
                      {openSubSection === section.title && (
                        <div className="px-3 pb-3 pt-1 border-t border-[#F0E8DC] bg-[#FAF8F5] grid grid-cols-1 gap-1">
                          {section.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              to={getCategoryLink(item)}
                              onClick={onClose}
                              className="flex items-center gap-2 py-1 text-[12px] text-gray-700 hover:text-[#6B1F22] hover:translate-x-1 transition-all"
                            >
                              <span className="text-[#B47B2B] text-sm leading-none">•</span>
                              <span>{item}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Collection */}
            <div className="py-3">
              <button 
                type="button" 
                onClick={() => toggleAccordion('Collection')} 
                className="w-full flex items-center justify-between text-xs font-semibold text-gray-800 hover:text-[#6B1F22] cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#B47B2B]" />
                  <span>Collection</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${openAccordion === 'Collection' ? 'rotate-180 text-[#6B1F22]' : ''}`} />
              </button>
              {openAccordion === 'Collection' && (
                <div className="pl-6 pt-2.5 space-y-2 text-xs">
                  <Link to="/collection/daily-wear" onClick={onClose} className="block text-gray-600 hover:text-[#6B1F22]">• Daily Wear Jewellery</Link>
                  <Link to="/collection/daily-wear" onClick={onClose} className="block text-gray-600 hover:text-[#6B1F22]">• Diamond Jewellery</Link>
                  <Link to="/collection/daily-wear" onClick={onClose} className="block text-gray-600 hover:text-[#6B1F22]">• Italian Collection</Link>
                </div>
              )}
            </div>

            {/* 5. Gifts */}
            <div className="py-3">
              <button 
                type="button" 
                onClick={() => toggleAccordion('Gifts')} 
                className="w-full flex items-center justify-between text-xs font-semibold text-gray-800 hover:text-[#6B1F22] cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Gift className="w-4 h-4 text-[#B47B2B]" />
                  <span>Gifts</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${openAccordion === 'Gifts' ? 'rotate-180 text-[#6B1F22]' : ''}`} />
              </button>
              {openAccordion === 'Gifts' && (
                <div className="pl-6 pt-2.5 space-y-2 text-xs">
                  <Link to="/gifts/for-him" onClick={onClose} className="block text-gray-600 hover:text-[#6B1F22]">• For Him</Link>
                  <Link to="/gifts/for-him" onClick={onClose} className="block text-gray-600 hover:text-[#6B1F22]">• For Her</Link>
                  <Link to="/gifts/for-him" onClick={onClose} className="block text-gray-600 hover:text-[#6B1F22]">• Gift For Kids</Link>
                </div>
              )}
            </div>
            
            {/* 6. About Us */}
            <div className="py-3">
              <Link to="/about-us" onClick={onClose} className="flex items-center justify-between text-xs font-semibold text-gray-800 hover:text-[#6B1F22]">
                <div className="flex items-center gap-2.5">
                  <Info className="w-4 h-4 text-[#B47B2B]" />
                  <span>About Us</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              </Link>
            </div>
          </div>

          {/* Social Links & Contact */}
          <div className="pt-2 space-y-2.5 text-xs text-gray-600 pb-10">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Connect With Us</p>
            <div className="flex gap-2">
              <span className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold">f</span>
              <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center font-bold">ig</span>
              <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-bold">𝕏</span>
              <span className="w-7 h-7 rounded-full bg-[#BD081C] text-white flex items-center justify-center font-bold">P</span>
            </div>
            <div className="pt-2 space-y-1.5 text-[11px]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B47B2B]" />
                <span>+91 9974878332</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B47B2B]" />
                <span>info@omjewellers.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B47B2B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">7-8-9, Ground Floor, Satkar Complex, CG Road, Ahmedabad.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;