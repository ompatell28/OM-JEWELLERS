import React from 'react';
import { motion } from 'framer-motion';
import { shopMegaMenuData } from '../../data/shopCategories';

export const ShopMegaMenu = ({ isOpen, onClose, onSelectCategory }) => {
  if (!isOpen) return null;

  // Custom Navigation Handler
  const handleItemClick = (type, item) => {
    if (onClose) onClose();

    const categoryName = typeof item === 'object' ? item.label : item;

    if (categoryName === 'Chain Pendant Set') {
      window.location.href = '/shop/chain-pendant-set';
    } else if (categoryName === 'Cherished Pair') {
      window.location.href = '/shop';
    } else if (onSelectCategory) {
      onSelectCategory(type, item);
    } else {
      window.location.href = `/shop?type=${encodeURIComponent(type)}&category=${encodeURIComponent(categoryName)}`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scaleY: 0.98 }}
      animate={{ opacity: 1, y: 0, scaleY: 1 }}
      exit={{ opacity: 0, y: -8, scaleY: 0.98 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-[#FAF6EE] border-b border-[#E3D9C8] shadow-2xl z-50 text-[#2C2C2C] origin-top"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-6">
        {/* 5-Column Grid */}
        <div className="grid grid-cols-5 divide-x divide-[#E8DFD1]/80 items-start">
          
          {/* 1. LADIES JEWELLERY */}
          <div className="pr-6">
            <div className="flex flex-col items-center mb-3.5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#F2EADB] border border-[#E5DBCA] text-xs font-bold text-[#6B1F22] tracking-wider uppercase shadow-xs">
                <span>💎</span>
                <span>LADIES JEWELLERY</span>
              </div>
              <div className="w-10 h-[2px] bg-[#C59B4E] mt-1.5 rounded-full" />
            </div>

            <div className="grid grid-cols-2 gap-x-4 text-[13px] leading-snug">
              <ul className="space-y-2">
                {shopMegaMenuData.ladies.itemsCol1.map((item, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleItemClick('ladies', item)}
                      className="group text-gray-700 hover:text-[#6B1F22] hover:translate-x-1 transition-all duration-150 text-left flex items-center gap-2 font-normal cursor-pointer w-full"
                    >
                      <span className="text-[#C59B4E] group-hover:text-[#6B1F22] text-sm leading-none transition-colors">•</span>
                      <span className="group-hover:font-medium">{item}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2">
                {shopMegaMenuData.ladies.itemsCol2.map((item, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleItemClick('ladies', item)}
                      className="group text-gray-700 hover:text-[#6B1F22] hover:translate-x-1 transition-all duration-150 text-left flex items-center gap-2 font-normal cursor-pointer w-full"
                    >
                      <span className="text-[#C59B4E] group-hover:text-[#6B1F22] text-sm leading-none transition-colors">•</span>
                      <span className="group-hover:font-medium">{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. MEN'S & COUPLE */}
          <div className="px-6 space-y-6">
            <div>
              <div className="flex flex-col items-center mb-3">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#F2EADB] border border-[#E5DBCA] text-xs font-bold text-[#6B1F22] tracking-wider uppercase shadow-xs">
                  <span>⭐</span>
                  <span>MEN'S JEWELLERY</span>
                </div>
                <div className="w-10 h-[2px] bg-[#C59B4E] mt-1.5 rounded-full" />
              </div>

              <ul className="space-y-2 text-[13px] leading-snug">
                {shopMegaMenuData.menAndCouple.men.items.map((item, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleItemClick('men', item)}
                      className="group text-gray-700 hover:text-[#6B1F22] hover:translate-x-1 transition-all duration-150 text-left flex items-center gap-2 font-normal cursor-pointer w-full"
                    >
                      <span className="text-[#C59B4E] group-hover:text-[#6B1F22] text-sm leading-none transition-colors">•</span>
                      <span className="group-hover:font-medium">{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-col items-center mb-3">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#F2EADB] border border-[#E5DBCA] text-xs font-bold text-[#6B1F22] tracking-wider uppercase shadow-xs">
                  <span>❤️</span>
                  <span>COUPLE JEWELLERY</span>
                </div>
                <div className="w-10 h-[2px] bg-[#C59B4E] mt-1.5 rounded-full" />
              </div>

              <ul className="space-y-2 text-[13px] leading-snug">
                {shopMegaMenuData.menAndCouple.couple.items.map((item, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleItemClick('couple', item)}
                      className="group text-gray-700 hover:text-[#6B1F22] hover:translate-x-1 transition-all duration-150 text-left flex items-center gap-2 font-normal cursor-pointer w-full"
                    >
                      <span className="text-[#C59B4E] group-hover:text-[#6B1F22] text-sm leading-none transition-colors">•</span>
                      <span className="group-hover:font-medium">{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. DIAMOND JEWELLERY */}
          <div className="px-6">
            <div className="flex flex-col items-center mb-3.5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#F2EADB] border border-[#E5DBCA] text-xs font-bold text-[#6B1F22] tracking-wider uppercase shadow-xs">
                <span>💎</span>
                <span>DIAMOND JEWELLERY</span>
              </div>
              <div className="w-10 h-[2px] bg-[#C59B4E] mt-1.5 rounded-full" />
            </div>

            <ul className="space-y-2 text-[13px] leading-snug">
              {shopMegaMenuData.diamondAndKids.diamond.items.map((item, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => handleItemClick('diamond', item)}
                    className="group text-gray-700 hover:text-[#6B1F22] hover:translate-x-1 transition-all duration-150 text-left flex items-center gap-2 font-normal cursor-pointer w-full"
                  >
                    <span className="text-[#C59B4E] group-hover:text-[#6B1F22] text-sm leading-none transition-colors">•</span>
                    <span className="group-hover:font-medium">{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. KARAT & GENDER */}
          <div className="px-6 space-y-6">
            <div>
              <div className="flex flex-col items-center mb-3">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#F2EADB] border border-[#E5DBCA] text-xs font-bold text-[#6B1F22] tracking-wider uppercase shadow-xs">
                  <span>✨</span>
                  <span>SHOP BY KARAT</span>
                </div>
                <div className="w-10 h-[2px] bg-[#C59B4E] mt-1.5 rounded-full" />
              </div>

              <ul className="space-y-2 text-[13px] leading-snug">
                {shopMegaMenuData.karatAndGender.karat.items.map((item, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleItemClick('karat', item)}
                      className="group text-gray-700 hover:text-[#6B1F22] hover:translate-x-1 transition-all duration-150 text-left flex items-center gap-2 font-normal cursor-pointer w-full"
                    >
                      <span className="text-[#C59B4E] group-hover:text-[#6B1F22] text-sm leading-none transition-colors">•</span>
                      <span className="group-hover:font-medium">{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-dashed border-[#E3D9C8]">
              <div className="flex flex-col items-center mb-3">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#F2EADB] border border-[#E5DBCA] text-xs font-bold text-[#6B1F22] tracking-wider uppercase shadow-xs">
                  <span>👥</span>
                  <span>GENDER</span>
                </div>
                <div className="w-10 h-[2px] bg-[#C59B4E] mt-1.5 rounded-full" />
              </div>

              <ul className="space-y-2 text-[13px] leading-snug">
                {shopMegaMenuData.karatAndGender.gender.items.map((item, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleItemClick('gender', item)}
                      className="group text-gray-700 hover:text-[#6B1F22] hover:translate-x-1 transition-all duration-150 text-left flex items-center gap-2 font-normal cursor-pointer w-full"
                    >
                      <span className="text-[#C59B4E] group-hover:text-[#6B1F22] text-sm leading-none transition-colors">•</span>
                      <span className="group-hover:font-medium">{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 5. KIDS & PRICE */}
          <div className="pl-6 space-y-6">
            <div>
              <div className="flex flex-col items-center mb-3">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#F2EADB] border border-[#E5DBCA] text-xs font-bold text-[#6B1F22] tracking-wider uppercase shadow-xs">
                  <span>🧸</span>
                  <span>KIDS COLLECTION</span>
                </div>
                <div className="w-10 h-[2px] bg-[#C59B4E] mt-1.5 rounded-full" />
              </div>

              <ul className="space-y-2 text-[13px] leading-snug">
                {shopMegaMenuData.diamondAndKids.kids.items.map((item, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleItemClick('kids', item)}
                      className="group text-gray-700 hover:text-[#6B1F22] hover:translate-x-1 transition-all duration-150 text-left flex items-center gap-2 font-normal cursor-pointer w-full"
                    >
                      <span className="text-[#C59B4E] group-hover:text-[#6B1F22] text-sm leading-none transition-colors">•</span>
                      <span className="group-hover:font-medium">{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-dashed border-[#E3D9C8]">
              <div className="flex flex-col items-center mb-3">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#F2EADB] border border-[#E5DBCA] text-xs font-bold text-[#6B1F22] tracking-wider uppercase shadow-xs">
                  <span>₹</span>
                  <span>SHOP BY PRICE</span>
                </div>
                <div className="w-10 h-[2px] bg-[#C59B4E] mt-1.5 rounded-full" />
              </div>

              <ul className="space-y-2 text-[13px] leading-snug">
                {shopMegaMenuData.price.items.map((item, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleItemClick('price', item)}
                      className="group text-gray-700 hover:text-[#6B1F22] hover:translate-x-1 transition-all duration-150 text-left flex items-center gap-2 font-normal cursor-pointer w-full"
                    >
                      <span className="text-[#C59B4E] group-hover:text-[#6B1F22] text-sm leading-none transition-colors">•</span>
                      <span className="group-hover:font-medium">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default ShopMegaMenu;