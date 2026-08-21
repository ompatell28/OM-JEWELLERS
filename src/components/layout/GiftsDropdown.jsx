import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const giftsMenuData = [
  { name: "For Him", path: "/gifts/for-him" },
  { name: "For Her", path: "/gifts/for-her" },
  { name: "Gift For Kids", path: "/gifts/kids" },
  { name: "God Idol", path: "/gifts/god-idol" }
];

export const GiftsDropdown = ({ isOpen, onClose, onSelectGift }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleClick = (item) => {
    if (onClose) onClose();
    if (onSelectGift) {
      onSelectGift(item);
    } else {
      navigate(item.path);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.96 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      onMouseLeave={onClose}
      className="absolute top-full left-0 mt-1 w-52 bg-[#FAF6EE] border border-[#E8DFC8] rounded-xl shadow-xl z-50 py-2.5 overflow-hidden origin-top-left"
    >
      <ul className="space-y-1">
        {giftsMenuData.map((item, idx) => (
          <li key={idx}>
            <button
              type="button"
              onClick={() => handleClick(item)}
              className="w-full px-4 py-2.5 flex items-center gap-2.5 text-xs sm:text-[13px] text-gray-700 hover:text-[#6B1F22] hover:bg-[#F2E8D7] transition-all font-medium text-left cursor-pointer group"
            >
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#6B1F22] group-hover:translate-x-0.5 transition-transform" />
              <span>{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default GiftsDropdown;