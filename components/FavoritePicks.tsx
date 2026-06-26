import React, { useState } from 'react';
import { Star, Heart, ShoppingBag } from 'lucide-react';
import { products } from '../data';
import { useNavigation } from '../context/NavigationContext';

const categories = ['All Products', 'Hoodie', 'Bags', 'Men', 'Women'];

const FavoritePicks: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const { navigate } = useNavigation();

  const filteredProducts = activeCategory === 'All Products' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-32">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">Favorite Picks</h2>
        <p className="text-secondary dark:text-gray-400 max-w-lg mx-auto">
          Step into fashion that not only looks good but feels right. Every piece in our collection is made with love.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-full border transition-all duration-300 font-medium ${
              activeCategory === cat 
                ? 'bg-primary dark:bg-white text-white dark:text-primary border-primary dark:border-white shadow-lg' 
                : 'bg-white dark:bg-darkCard text-secondary dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-white hover:text-primary dark:hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-gray-50 dark:bg-darkCard rounded-[24px] p-4 hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            onClick={() => navigate('product', { id: product.id })}
          >
            
            {/* Image Container */}
            <div className="relative aspect-square rounded-[20px] overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute top-3 right-3 flex items-center gap-1 bg-white px-2 py-1 rounded-full text-xs font-bold shadow-sm">
                 <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                 {product.rating}
                 <Heart className="w-3 h-3 text-red-500 fill-red-500 ml-1" />
               </div>
            </div>

            {/* Details */}
            <div className="flex justify-between items-start mb-4 px-2">
              <h3 className="font-medium text-primary dark:text-white text-lg leading-tight">{product.name}</h3>
              <span className="font-bold text-primary dark:text-white text-lg">${product.price}</span>
            </div>

            {/* Action */}
            <div className="px-2 pb-2">
              <button className="w-full flex items-center justify-center gap-2 border border-primary/20 dark:border-gray-600 text-primary dark:text-white hover:bg-primary dark:hover:bg-white hover:text-white dark:hover:text-primary transition-colors py-2.5 rounded-full font-medium text-sm group-hover:border-primary dark:group-hover:border-white">
                Add To Cart <ShoppingBag className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">{product.sold?.toLocaleString()} Sold</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default FavoritePicks;