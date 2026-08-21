import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import { chainPendantProducts } from '../data/chainPendantData';
import { useShop } from '../context/ShopContext';

export const ChainPendantPage = () => {
  const { addToCart, toggleWishlist, wishlist = [] } = useShop() || {};

  const [selectedWeights, setSelectedWeights] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedCarats, setSelectedCarats] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const handleFilterToggle = (list, setList, value) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const filteredProducts = useMemo(() => {
    return chainPendantProducts
      .filter((product) => {
        if (selectedWeights.length > 0 && !selectedWeights.includes(product.weightRange)) return false;
        if (selectedCarats.length > 0 && !selectedCarats.includes(product.carat)) return false;
        if (selectedColors.length > 0 && !selectedColors.includes(product.color)) return false;
        if (selectedPrices.length > 0) {
          const match = selectedPrices.some((range) => {
            if (range === 'under50k') return product.price <= 50000;
            if (range === '50kTo1L') return product.price > 50000 && product.price <= 100000;
            if (range === 'above1L') return product.price > 100000;
            return true;
          });
          if (!match) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'lowToHigh') return a.price - b.price;
        if (sortBy === 'highToLow') return b.price - a.price;
        return a.id - b.id;
      });
  }, [selectedWeights, selectedPrices, selectedCarats, selectedColors, sortBy]);

  return (
    <div className="w-full min-h-screen bg-[#FAF6F0] text-[#2C2C2C] pb-24">
      
      {/* 1. Header Banner */}
      <div className="w-full bg-[#FCF9F2] border-b border-[#E8DFD1] py-7 px-4 sm:px-8 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-1 flex-wrap">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight">
            <span className="text-[#6B1F22]">CHAIN PENDANT </span>
            <span className="italic font-serif bg-gradient-to-r from-[#B47B2B] via-[#D4AF37] to-[#8C5818] bg-clip-text text-transparent">
              SET
            </span>
          </h1>
          <span className="text-[11px] bg-[#F2EADB] text-[#B47B2B] font-semibold px-3 py-1 rounded-full border border-[#E3D9C8] uppercase tracking-wider">
            {filteredProducts.length} DESIGNS
          </span>
        </div>

        <p className="text-xs text-gray-500 font-light tracking-wide mt-1">
          <a href="/" className="hover:text-[#6B1F22] transition-colors">Home</a>
          <span className="mx-2 text-gray-300">•</span>
          <span>Ladies Jewellery</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-[#B47B2B] font-medium">Chain Pendant Set</span>
        </p>
      </div>

      {/* 2. Main Area */}
      <div className="w-full px-4 sm:px-8 lg:px-12 pt-8">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-5 border-b border-[#E8DFD1] mb-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#E3D9C8] text-xs font-semibold text-gray-800 shadow-sm cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>FILTERS</span>
            </button>
            <p className="text-xs text-gray-600 font-light">
              Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 hidden sm:inline">Sort By:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs bg-white border border-[#E3D9C8] rounded-xl px-3.5 py-2 pr-8 text-gray-800 focus:outline-none focus:border-[#6B1F22] cursor-pointer appearance-none shadow-xs font-medium"
              >
                <option value="relevance">Relevance</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 3. Sticky Filter + Products */}
        <div className="flex flex-col lg:flex-row gap-8 relative items-start">
          
          {/* LEFT FILTER */}
          <aside 
            style={{ position: 'sticky', top: '140px', alignSelf: 'flex-start' }}
            className={`w-full lg:w-[280px] shrink-0 bg-white rounded-2xl p-5 border border-[#E8DFD1] shadow-xs space-y-6 lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto ${
              mobileFilterOpen ? 'fixed inset-4 z-50 overflow-y-auto bg-white shadow-2xl' : 'hidden lg:block'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#6B1F22]">
                FILTERS
              </h3>
              {(selectedWeights.length > 0 || selectedPrices.length > 0 || selectedCarats.length > 0 || selectedColors.length > 0) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedWeights([]);
                    setSelectedPrices([]);
                    setSelectedCarats([]);
                    setSelectedColors([]);
                  }}
                  className="text-[11px] text-[#B47B2B] hover:underline font-medium cursor-pointer"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* WEIGHT */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">WEIGHT</h4>
              <div className="space-y-2">
                {[
                  { label: "0-10 gm", value: "0-10 gm" },
                  { label: "10-20 gm", value: "10-20 gm" },
                  { label: "20+ gm", value: "20+ gm" }
                ].map((item) => {
                  const isChecked = selectedWeights.includes(item.value);
                  return (
                    <label
                      key={item.value}
                      onClick={() => handleFilterToggle(selectedWeights, setSelectedWeights, item.value)}
                      className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-black cursor-pointer select-none"
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#6B1F22] border-[#6B1F22] text-white' : 'border-[#D4C7B5] bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{item.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="h-[1px] bg-gray-100" />

            {/* PRICE */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">PRICE</h4>
              <div className="space-y-2">
                {[
                  { label: "Under ₹50,000", value: "under50k" },
                  { label: "₹50,000 to ₹1,00,000", value: "50kTo1L" },
                  { label: "Above ₹1,00,000", value: "above1L" }
                ].map((item) => {
                  const isChecked = selectedPrices.includes(item.value);
                  return (
                    <label
                      key={item.value}
                      onClick={() => handleFilterToggle(selectedPrices, setSelectedPrices, item.value)}
                      className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-black cursor-pointer select-none"
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#6B1F22] border-[#6B1F22] text-white' : 'border-[#D4C7B5] bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{item.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="h-[1px] bg-gray-100" />

            {/* CARAT */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">CARAT</h4>
              <div className="space-y-2">
                {["18KT Gold", "22KT Gold"].map((carat) => {
                  const isChecked = selectedCarats.includes(carat);
                  return (
                    <label
                      key={carat}
                      onClick={() => handleFilterToggle(selectedCarats, setSelectedCarats, carat)}
                      className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-black cursor-pointer select-none"
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#6B1F22] border-[#6B1F22] text-white' : 'border-[#D4C7B5] bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{carat}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="h-[1px] bg-gray-100" />

            {/* COLOR */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">COLOR</h4>
              <div className="space-y-2">
                {["Yellow Gold", "Rose Gold", "White Gold"].map((color) => {
                  const isChecked = selectedColors.includes(color);
                  return (
                    <label
                      key={color}
                      onClick={() => handleFilterToggle(selectedColors, setSelectedColors, color)}
                      className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-black cursor-pointer select-none"
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#6B1F22] border-[#6B1F22] text-white' : 'border-[#D4C7B5] bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{color}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* RIGHT PRODUCTS GRID */}
          <main className="flex-1 w-full min-w-0">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl p-16 text-center border border-[#E8DFD1]">
                <p className="text-sm text-gray-500 font-light">No designs match the selected filters.</p>
              </div>
            ) : (
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const isWishlisted = wishlist?.some((item) => item.id === product.id);

                  return (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl overflow-hidden border border-[#E8DFD1] hover:border-[#6B1F22] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between relative"
                    >
                      <button
                        type="button"
                        onClick={() => toggleWishlist && toggleWishlist(product)}
                        className={`absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm cursor-pointer ${
                          isWishlisted ? 'bg-[#6B1F22] text-white' : 'bg-white/80 hover:bg-[#6B1F22] hover:text-white text-gray-700'
                        }`}
                        aria-label="Wishlist"
                      >
                        <Heart className="w-4 h-4" fill={isWishlisted ? 'currentColor' : 'none'} />
                      </button>

                      <div className="relative w-full aspect-[4/3] bg-[#F7F3EB] p-4 flex items-center justify-center overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500 ease-out"
                        />
                      </div>

                      <div className="p-4 flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1.5">
                            <span className="font-medium text-[#B47B2B]">{product.carat}</span>
                            <span>{product.weight}</span>
                          </div>
                          <h3 className="text-xs sm:text-[13px] font-semibold text-gray-900 line-clamp-1 group-hover:text-[#6B1F22] transition-colors">
                            {product.name}
                          </h3>
                        </div>

                        <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-sm font-bold text-[#6B1F22]">{product.formattedPrice}</span>
                          <button
                            type="button"
                            onClick={() => addToCart && addToCart(product)}
                            className="p-2 rounded-xl bg-[#FAF6F0] hover:bg-[#6B1F22] text-[#6B1F22] hover:text-white border border-[#E8DFD1] hover:border-[#6B1F22] transition-colors cursor-pointer"
                            aria-label="Add to cart"
                          >
                            <ShoppingBag className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
};

export default ChainPendantPage;