import { Product } from './types';

export const products: Product[] = [
  { 
    id: '1', 
    name: 'Towel Bucket Set', 
    price: 26, 
    rating: 4.8, 
    category: 'Bags', 
    image: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?auto=format&fit=crop&q=80&w=600', 
    sold: 1038,
    description: 'A versatile towel bucket set perfect for beach days or bathroom storage. Made from organic cotton and sustainable bamboo fibers.'
  },
  { 
    id: '2', 
    name: 'Fashionable Cap', 
    price: 36, 
    rating: 4.8, 
    category: 'Men', 
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=600', 
    sold: 2238,
    description: 'Minimalist cap designed for the modern urban explorer. Features adjustable sizing and breathable fabric.'
  },
  { 
    id: '3', 
    name: 'Headphone', 
    price: 126, 
    rating: 4.9, 
    category: 'Men', 
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600', 
    sold: 878,
    description: 'High-fidelity audio with noise-canceling technology. Wood finish accents for a natural, premium look.'
  },
  { 
    id: '4', 
    name: 'Sash Worn Jewellery', 
    price: 45, 
    rating: 4.6, 
    category: 'Women', 
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600', 
    sold: 1122,
    description: 'Elegant sash jewellery that adds a touch of sparkle to any outfit. Handcrafted with recycled metals.'
  },
  { 
    id: '5', 
    name: 'Table Lamp', 
    price: 55, 
    rating: 4.7, 
    category: 'Bags', 
    image: 'https://images.unsplash.com/photo-1507473888900-52e1adad54dd?auto=format&fit=crop&q=80&w=600', 
    sold: 1050,
    description: 'Modern table lamp with a warm, ambient glow. Energy-efficient LED bulb included.'
  },
  { 
    id: '6', 
    name: 'Children Headband', 
    price: 12, 
    rating: 4.9, 
    category: 'Women', 
    image: 'https://images.unsplash.com/photo-1606414878696-3c58e578fa1a?auto=format&fit=crop&q=80&w=600', 
    sold: 908,
    description: 'Soft, elastic headband for children. Available in various colors and gentle on the skin.'
  },
  { 
    id: '7', 
    name: 'Brown Leather Shoe', 
    price: 89, 
    rating: 4.8, 
    category: 'Men', 
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600', 
    sold: 777,
    description: 'Classic brown leather shoes crafted for comfort and durability. Perfect for formal and casual occasions.'
  },
  { 
    id: '8', 
    name: 'Pink Blouse', 
    price: 32, 
    rating: 4.5, 
    category: 'Women', 
    image: 'https://images.unsplash.com/photo-1518049347737-dbad49e52c88?auto=format&fit=crop&q=80&w=600', 
    sold: 567,
    description: 'Lightweight pink blouse suitable for summer days. Made from 100% breathable linen.'
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Fashion",
    excerpt: "Exploring how technology and tradition merge to create eco-friendly fabrics.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600",
    date: "Oct 12, 2024"
  },
  {
    id: 2,
    title: "5 Tips for a Minimalist Wardrobe",
    excerpt: "How to curate a closet that brings you joy with fewer, better items.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=600",
    date: "Nov 05, 2024"
  },
  {
    id: 3,
    title: "Upcycling: Giving Clothes a Second Life",
    excerpt: "Creative ways to transform your old garments into new favorites.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
    date: "Dec 01, 2024"
  }
];

export const services = [
  {
    title: "Personal Styling",
    description: "Get matched with a stylist to curate looks that fit your body and lifestyle.",
    icon: "✨"
  },
  {
    title: "Wardrobe Audit",
    description: "We help you declutter and reorganize your closet for maximum efficiency.",
    icon: "🧥"
  },
  {
    title: "Sustainable Sourcing",
    description: "Consulting for brands looking to switch to eco-friendly materials.",
    icon: "🌱"
  }
];