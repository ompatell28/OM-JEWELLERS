import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronDown, 
  ChevronRight, 
  Home, 
  Building2, 
  ShoppingBag, 
  Sparkles, 
  Gift, 
  Info, 
  User, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';
import logoImg from '../../assets/images/logo.png';

const shopMobileCategories = [
  "Anklets", "Baby Bangles", "Bangles", "Bracelets", "Chain", 
  "Chain Pendant", "Chain Pendant Set", "Chains", "Cherished Pair", 
  "Couple Jewellery", "Cufflinks", "Customised Jewellery", 
  "Diamond Jewellery", "Earrings", "Exclusive Paired Collection", 
  "Gold Chains", "Hath Pocha", "Kada / Kadas", "Kids Collection", 
  "Ladies Jewellery", "Mala", "Mangalsutra", "Mangalsutra Bracelet", 
  "Mangalsutra Pendant Set", "Men's Jewellery", "Nazariya", 
  "Necklace", "Nose Pin", "Pendant Set", "Pendants", "Rings", 
  "Tanmaniya", "Watch / Watches", "18KT Jewellery", 
  "22KT Jewellery", "24KT Jewellery"
];

export const MobileDrawer = ({ isOpen, onClose }) => {
  const [openAccordion, setOpenAccordion] = useState('Shop');

  // Background Scroll Lock (Leaves drawer scroll untouched)
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

  const handleCategoryClick = (catName) => {
    if (onClose) onClose();
    if (catName === 'Chain Pendant Set') {
      window.location.href = '/shop/chain-pendant-set';
    } else if (catName === 'Cherished Pair') {
      window.location.href = '/shop';
    } else {
      window.location.href = `/shop?category=${encodeURIComponent(catName)}`;
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-[99999] lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
      }`}
    >
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Slide Drawer Panel */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-[340px] h-full bg-[#FAF6EE] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
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

        {/* Scrollable Content Container */}
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

          {/* Menus List */}
          <div className="divide-y divide-[#EAE0D0] bg-white rounded-2xl border border-[#E8DFD1] px-3.5 shadow-xs">
            
            {/* 1. Home */}
            <div className="py-3">
              <a href="/" onClick={onClose} className="flex items-center justify-between text-xs font-semibold text-gray-800 hover:text-[#6B1F22]">
                <div className="flex items-center gap-2.5">
                  <Home className="w-4 h-4 text-[#B47B2B]" />
                  <span>Home</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              </a>
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
                  <a href="#" className="block text-gray-600 hover:text-[#6B1F22]">• Satva Heritage</a>
                  <a href="#" className="block text-gray-600 hover:text-[#6B1F22]">• Om Solitaire</a>
                </div>
              )}
            </div>

            {/* 3. Shop */}
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
                <div className="mt-2.5 bg-[#FAF6EE] p-3 rounded-xl border border-[#EDE4D5] flex flex-col gap-1.5">
                  {shopMobileCategories.map((item, idx) => (
                    <button 
                      key={idx} 
                      type="button" 
                      onClick={() => handleCategoryClick(item)} 
                      className="text-left text-[12.5px] text-gray-700 hover:text-[#6B1F22] hover:translate-x-1 transition-all flex items-center gap-2 py-1 cursor-pointer"
                    >
                      <span className="text-[#C59B4E] leading-none text-sm">•</span>
                      <span>{item}</span>
                    </button>
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
                  <a href="/collection/daily-wear" className="block text-gray-600 hover:text-[#6B1F22]">• Daily Wear Jewellery</a>
                  <a href="/collection/daily-wear" className="block text-gray-600 hover:text-[#6B1F22]">• Diamond Jewellery</a>
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
                  <a href="/gifts/for-him" className="block text-gray-600 hover:text-[#6B1F22]">• For Him</a>
                  <a href="/gifts/for-him" className="block text-gray-600 hover:text-[#6B1F22]">• For Her</a>
                </div>
              )}
            </div>
            
            {/* 6. About Us */}
            <div className="py-3">
              <a href="/about-us" onClick={onClose} className="flex items-center justify-between text-xs font-semibold text-gray-800 hover:text-[#6B1F22]">
                <div className="flex items-center gap-2.5">
                  <Info className="w-4 h-4 text-[#B47B2B]" />
                  <span>About Us</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Connect With Us */}
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