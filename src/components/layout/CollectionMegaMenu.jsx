import React from 'react';
import { motion } from 'framer-motion';
import { collectionMegaMenuData } from '../../data/collectionCategories';

export const CollectionMegaMenu = ({ isOpen, onClose, onSelectCollection }) => {
  if (!isOpen) return null;

  const handleItemClick = (item) => {
    if (onClose) onClose();
    if (onSelectCollection) {
      onSelectCollection(item);
    } else {
      window.location.href = item.path || `/collection/${encodeURIComponent(item.name)}`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -6, scaleY: 0.98 }}
      animate={{ opacity: 1, y: 0, scaleY: 1 }}
      exit={{ opacity: 0, y: -6, scaleY: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-[#FCF8F2] border-b border-[#E7DEC8] shadow-2xl z-50 text-[#2C2C2C] origin-top"
    >
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 py-8">
        
        {/* Top Header Badge & Underline */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#F2E8D7] border border-[#E2D4BF] text-xs font-bold text-[#6B1F22] tracking-wider uppercase shadow-xs">
            <span className="text-sm">💎</span>
            <span>SHOP BY COLLECTION</span>
          </div>
          <div className="w-12 h-[2px] bg-[#B5853B] mt-2 rounded-full" />
        </div>

        {/* 3 Balanced Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {collectionMegaMenuData.map((column, colIdx) => (
            <ul key={colIdx} className="space-y-3.5 text-[13.5px] leading-relaxed">
              {column.map((item, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => handleItemClick(item)}
                    className="group text-gray-700 hover:text-[#6B1F22] hover:translate-x-1 transition-all duration-150 text-left flex items-center gap-2.5 font-normal cursor-pointer w-full"
                  >
                    {/* Gold Bullet Point */}
                    <span className="text-[#C59B4E] group-hover:text-[#6B1F22] text-base leading-none transition-colors">
                      •
                    </span>
                    <span className="group-hover:font-medium transition-all">
                      {item.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default CollectionMegaMenu;