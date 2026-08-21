import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const ProductCard = ({ product }) => {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  const isLiked = useMemo(() => {
    return wishlist.some((item) => item.id === product.id);
  }, [wishlist, product.id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-[#141414] rounded-2xl overflow-hidden border border-white/5 shadow-xl hover:border-amber-500/30 transition-all flex flex-col justify-between"
    >
      <div className="relative p-4 flex items-center justify-between z-10">
        {product.tag ? (
          <span className="text-[10px] tracking-wider uppercase font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
            {product.tag}
          </span>
        ) : <span />}
        <button
          onClick={() => toggleWishlist(product)}
          className={`p-2 rounded-full backdrop-blur-md transition-colors ${
            isLiked ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-black/50 text-gray-300 hover:text-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500' : ''}`} />
        </button>
      </div>

      <div className="relative h-56 w-full flex items-center justify-center p-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={() => addToCart(product)}
            className="p-3 rounded-full bg-amber-500 text-black hover:bg-amber-400 font-semibold shadow-lg transition-transform active:scale-95"
            title="Add to Cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
          <button
            className="p-3 rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-transform active:scale-95"
            title="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4 bg-gradient-to-t from-black/90 to-transparent">
        <h4 className="text-xs sm:text-sm font-medium text-gray-200 line-clamp-1 group-hover:text-amber-300 transition-colors">
          {product.title}
        </h4>
        <div className="mt-2 flex items-baseline justify-between">
          <p className="text-sm sm:text-base font-semibold text-amber-400">
            ₹{product.price.toLocaleString('en-IN')}
          </p>
          {product.originalPrice && (
            <p className="text-xs text-gray-500 line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};