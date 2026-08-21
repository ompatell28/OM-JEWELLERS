import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleWishlist = useCallback((product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) return prev.filter((item) => item.id !== product.id);
      return [...prev, product];
    });
  }, []);

  const addToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  const value = useMemo(() => ({
    wishlist,
    cart,
    toggleWishlist,
    addToCart,
    wishlistCount: wishlist.length,
    cartCount: cart.length
  }), [wishlist, cart, toggleWishlist, addToCart]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => useContext(ShopContext);