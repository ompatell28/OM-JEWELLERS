// =============================================================
// 1. LOCAL IMAGES IMPORTS (.webp)
// =============================================================
// Trending Products (trending1 - trending5)
import trending1 from '../assets/images/trending1.webp';
import trending2 from '../assets/images/trending2.webp';
import trending3 from '../assets/images/trending3.webp';
import trending4 from '../assets/images/trending4.webp';
import trending5 from '../assets/images/trending5.webp';

// New Arrivals (newa1 - newa5)
import newa1 from '../assets/images/newa1.webp';
import newa2 from '../assets/images/newa2.webp';
import newa3 from '../assets/images/newa3.webp';
import newa4 from '../assets/images/newa4.webp';
import newa5 from '../assets/images/newa5.webp';

// Bestsellers (bests1 - bests5)
import bests1 from '../assets/images/bests1.webp';
import bests2 from '../assets/images/bests2.webp';
import bests3 from '../assets/images/bests3.webp';
import bests4 from '../assets/images/bests4.webp';
import bests5 from '../assets/images/bests5.webp';

// =============================================================
// 2. NAVBAR LINKS
// =============================================================
export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Brands', hasDropdown: true },
  { name: 'Shop', hasDropdown: true },
  { name: 'Collection', hasDropdown: true },
  { name: 'Gifts', hasDropdown: false },
  { name: 'About Us', href: '/about-us', hasDropdown: false },
];

// =============================================================
// 3. CATEGORIES
// =============================================================
export const categories = [
  { id: 1, name: 'Earrings', img: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Finger Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Pendants', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'Mangalsutra', img: 'https://images.unsplash.com/photo-1611591475155-4286fa7c2e7f?auto=format&fit=crop&w=600&q=80' },
  { id: 5, name: 'Bracelets', img: 'https://images.unsplash.com/photo-1611591475155-4286fa7c2e7f?auto=format&fit=crop&w=600&q=80' },
  { id: 6, name: 'Bangles', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80' },
  { id: 7, name: 'Chains', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80' },
];

// =============================================================
// 4. TRENDING PRODUCTS (Uses Local .webp Images)
// =============================================================
export const trendingProducts = [
  { id: 't1', title: 'Rose Gold Hexagon Link Necklace Set', name: 'Rose Gold Hexagon Link Necklace Set', price: 48500, originalPrice: 55000, tag: 'Trending', image: trending1 },
  { id: 't2', title: 'Yellow Gold Jaguar Design Gents Ring', name: 'Yellow Gold Jaguar Design Gents Ring', price: 34200, originalPrice: 38000, tag: 'Hot', image: trending2 },
  { id: 't3', title: "Men's Classic (JRG22-2069)", name: "Men's Classic (JRG22-2069)", price: 29000, tag: 'New', image: trending3 },
  { id: 't4', title: 'Infinity Loop Designer Ring (VPLR18)', name: 'Infinity Loop Designer Ring (VPLR18)', price: 22400, originalPrice: 26000, tag: 'Popular', image: trending4 },
  { id: 't5', title: 'Dual Tone Heart Link Chain (VPGC18)', name: 'Dual Tone Heart Link Chain (VPGC18)', price: 41200, originalPrice: 47000, image: trending5 }
];

// =============================================================
// 5. NEW ARRIVALS (Uses Local .webp Images)
// =============================================================
export const newArrivals = [
  { id: 'n1', title: 'Shree Nathji Designer Belt Bracelet', name: 'Shree Nathji Designer Belt Bracelet', price: 39500, tag: 'Exclusive', image: newa1 },
  { id: 'n2', title: 'Kids Butterfly Charm Kadli (KKD18-3)', name: 'Kids Butterfly Charm Kadli (KKD18-3)', price: 18200, image: newa2 },
  { id: 'n3', title: 'Dual Tone Designer Necklace Set (CN)', name: 'Dual Tone Designer Necklace Set (CN)', price: 78500, originalPrice: 89000, tag: 'Festive', image: newa3 },
  { id: 'n4', title: 'Luxury Square Link Chain (VPC18-441)', name: 'Luxury Square Link Chain (VPC18-441)', price: 52000, image: newa4 },
  { id: 'n5', title: 'Rectangular Gents Ring (IRG22-1955)', name: 'Rectangular Gents Ring (IRG22-1955)', price: 31000, image: newa5 }
];

// =============================================================
// 6. BESTSELLERS (Uses Local .webp Images)
// =============================================================
export const bestsellers = [
  { id: 'b1', title: 'Chess Design Statement Ring (VPGR18)', name: 'Chess Design Statement Ring (VPGR18)', price: 27900, tag: 'Bestseller', image: bests1 },
  { id: 'b2', title: 'Designer Gold Mangalsutra With Round Pendant', name: 'Designer Gold Mangalsutra With Round Pendant', price: 44500, image: bests2 },
  { id: 'b3', title: 'Triangle Diamond Motif Pendant Necklace', name: 'Triangle Diamond Motif Pendant Necklace', price: 36000, originalPrice: 42000, image: bests3 },
  { id: 'b4', title: 'Lion Designer Belt Bracelet (BBR18)', name: 'Lion Designer Belt Bracelet (BBR18)', price: 59000, tag: 'Top Rated', image: bests4 },
  { id: 'b5', title: 'Amore Thread Real Diamond Necklace', name: 'Amore Thread Real Diamond Necklace', price: 92000, originalPrice: 105000, image: bests5 }
];

// =============================================================
// 7. VIDEO REELS
// =============================================================
export const videoReels = [
  { id: 1, title: 'Luxury Gold Bracelet Watch with Floral Accents', price: '₹48,200', poster: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: 'Handcrafted Solitaire Diamond Engagement Ring', price: '₹32,500', poster: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80' },
  { id: 3, title: 'Layered Bridal Emerald Gold Choker', price: '₹1,24,000', poster: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80' },
  { id: 4, title: 'Modern 18K Rose Gold Tennis Bracelet', price: '₹38,000', poster: 'https://images.unsplash.com/photo-1611591475155-4286fa7c2e7f?auto=format&fit=crop&w=600&q=80' },
];

// =============================================================
// 8. TESTIMONIALS
// =============================================================
export const testimonials = [
  { id: 1, name: 'Neha', rating: 5, time: '1 month ago', comment: 'Superb quality and craftmanship. The shine of gold and diamonds is truly unmatched!' },
  { id: 2, name: 'Ritika', rating: 5, time: '2 months ago', comment: 'Design is unique and grand. Feels very premium and lightweight at the same time.' },
  { id: 3, name: 'Pooja', rating: 5, time: '1 month ago', comment: 'Quick delivery and luxury packaging. Patel Gold customer service is remarkable.' },
  { id: 4, name: 'Aarushi Sharma', rating: 5, time: '3 weeks ago', comment: 'The finish and luster are brilliant. Got lots of compliments at the family function!' },
];

// Default Export for safety
export default {
  navLinks,
  categories,
  trendingProducts,
  newArrivals,
  bestsellers,
  videoReels,
  testimonials
};