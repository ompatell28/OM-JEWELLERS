import React, { useState, useRef } from 'react';
import { Search, Heart, ShoppingBag, ChevronDown, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useShop } from '../../context/ShopContext';
import { navLinks } from '../../data/mockData';
import logoImg from '../../assets/images/logo.png';
import { ShopMegaMenu } from './ShopMegaMenu';
import { CollectionMegaMenu } from './CollectionMegaMenu';
import { GiftsDropdown } from './GiftsDropdown';
import MobileDrawer from './MobileDrawer';

const Navbar = () => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isCollectionMenuOpen, setIsCollectionMenuOpen] = useState(false);
  const [isGiftsMenuOpen, setIsGiftsMenuOpen] = useState(false);

  const { wishlistCount = 0, cartCount = 0 } = useShop() || {};
  const timeoutRef = useRef(null);

  const handleMouseEnter = (linkName) => {
    if (window.innerWidth < 1024) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (linkName === 'Shop') {
      setIsCollectionMenuOpen(false);
      setIsGiftsMenuOpen(false);
      setIsShopMenuOpen(true);
    } else if (linkName === 'Collection') {
      setIsShopMenuOpen(false);
      setIsGiftsMenuOpen(false);
      setIsCollectionMenuOpen(true);
    } else if (linkName === 'Gifts') {
      setIsShopMenuOpen(false);
      setIsCollectionMenuOpen(false);
      setIsGiftsMenuOpen(true);
    } else {
      setIsShopMenuOpen(false);
      setIsCollectionMenuOpen(false);
      setIsGiftsMenuOpen(false);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 1024) return;
    timeoutRef.current = setTimeout(() => {
      setIsShopMenuOpen(false);
      setIsCollectionMenuOpen(false);
      setIsGiftsMenuOpen(false);
    }, 150);
  };

  return (
    <>
      <header className="w-full sticky top-0 left-0 z-50 bg-[#FCF9F2] border-b border-[#EBE3D5] shadow-xs">
        <div className="w-full px-3 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24 gap-2 sm:gap-4">
            
            {/* Mobile Hamburger Menu Button & Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button 
                type="button"
                onClick={() => setIsMobileDrawerOpen(true)}
                className="lg:hidden p-2 text-gray-800 hover:text-[#6B1F22] rounded-lg cursor-pointer transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="h-6 w-6" />
              </button>

              <a href="/" className="flex-shrink-0 flex items-center">
                <img src={logoImg} alt="OM Jewellers" className="h-9 sm:h-12 lg:h-16 w-auto object-contain" />
              </a>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-xl xl:max-w-2xl mx-6">
              <div className="relative w-full">
                <Search className="absolute left-4 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Earrings, Rings, Necklaces, Daily Wear..."
                  className="w-full pl-11 pr-5 py-2.5 text-xs sm:text-sm bg-[#FAF6EE] border border-[#E3D9C8] rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#6B1F22]"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button type="button" className="hidden sm:flex items-center gap-1 px-4 py-2 bg-white border border-[#E3D9C8] rounded-full text-xs font-semibold uppercase tracking-wider text-gray-800 hover:bg-[#6B1F22] hover:text-white transition-all shadow-xs cursor-pointer">
                <span>Account</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              <motion.a href="/wishlist" whileTap={{ scale: 0.92 }} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#E3D9C8] flex items-center justify-center text-gray-800 relative cursor-pointer">
                <Heart className="h-4 w-4" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#6B1F22] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </motion.a>

              <motion.a href="/cart" whileTap={{ scale: 0.92 }} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#E3D9C8] flex items-center justify-center text-gray-800 relative cursor-pointer">
                <ShoppingBag className="h-4 w-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#6B1F22] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </motion.a>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:block border-t border-[#EDE4D5] relative">
          <div className="w-full px-4 sm:px-8 lg:px-12">
            <ul className="flex items-center justify-center space-x-8 xl:space-x-10 py-3 text-[13px] font-medium text-[#2C2C2C]">
              {navLinks.map((link, index) => {
                const isShop = link.name === 'Shop';
                const isCollection = link.name === 'Collection';
                const isGifts = link.name === 'Gifts';
                const isDropdownActive = (isShop && isShopMenuOpen) || (isCollection && isCollectionMenuOpen) || (isGifts && isGiftsMenuOpen);

                return (
                  <li 
                    key={index} 
                    onMouseEnter={() => handleMouseEnter(link.name)} 
                    onMouseLeave={handleMouseLeave}
                    className="group relative cursor-pointer hover:text-[#6B1F22] transition-colors flex items-center gap-1 py-1"
                  >
                    <a href={link.href || '#'} className="flex items-center gap-1">
                      <span className={isDropdownActive ? 'text-[#6B1F22] font-semibold' : ''}>{link.name}</span>
                      {link.hasDropdown && <ChevronDown className={`h-3.5 w-3.5 text-gray-400 ${isDropdownActive ? 'rotate-180 text-[#6B1F22]' : ''}`} />}
                    </a>

                    {isGifts && <GiftsDropdown isOpen={isGiftsMenuOpen} onClose={() => setIsGiftsMenuOpen(false)} />}
                  </li>
                );
              })}
            </ul>
          </div>

          <div onMouseEnter={() => handleMouseEnter('Shop')} onMouseLeave={handleMouseLeave}>
            <ShopMegaMenu isOpen={isShopMenuOpen} onClose={() => setIsShopMenuOpen(false)} />
          </div>

          <div onMouseEnter={() => handleMouseEnter('Collection')} onMouseLeave={handleMouseLeave}>
            <CollectionMegaMenu isOpen={isCollectionMenuOpen} onClose={() => setIsCollectionMenuOpen(false)} />
          </div>
        </nav>

        {/* Slide-in Mobile Drawer */}
        <MobileDrawer 
          isOpen={isMobileDrawerOpen} 
          onClose={() => setIsMobileDrawerOpen(false)} 
        />
      </header>
    </>
  );
};

export default Navbar;