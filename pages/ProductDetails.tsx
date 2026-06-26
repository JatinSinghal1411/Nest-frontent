import React from 'react';
import { Star, Heart, ShoppingBag, ArrowLeft, Truck, ShieldCheck } from 'lucide-react';
import { products } from '../data';
import { useNavigation } from '../context/NavigationContext';

const ProductDetails: React.FC = () => {
  const { params, navigate } = useNavigation();
  const product = products.find(p => p.id === params?.id);

  if (!product) {
    return <div className="text-center py-20 text-2xl dark:text-white">Product not found.</div>;
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      {/* Breadcrumb / Back */}
      <button 
        onClick={() => navigate('home')} 
        className="flex items-center gap-2 text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Shop
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Image Section */}
        <div className="bg-gray-50 dark:bg-darkCard rounded-[40px] p-8 flex items-center justify-center h-[500px] md:h-[600px] relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain object-center hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-semibold text-primary dark:text-gray-200">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-orange-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-bold text-primary dark:text-white">{product.rating}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-6 leading-tight">
            {product.name}
          </h1>

          <p className="text-2xl font-bold text-primary dark:text-white mb-8">
            ${product.price} <span className="text-base font-normal text-secondary dark:text-gray-400 ml-2 line-through">${Math.round(product.price * 1.2)}</span>
          </p>

          <p className="text-secondary dark:text-gray-300 text-lg leading-relaxed mb-10 max-w-md">
            {product.description || "Experience the perfect blend of style and sustainability. Crafted with care for the conscious consumer."}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="flex-1 bg-buyDark dark:bg-white dark:text-primary text-white py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
              Add to Cart <ShoppingBag className="w-5 h-5" />
            </button>
            <button className="w-14 h-14 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center hover:border-primary dark:hover:border-white transition-colors">
              <Heart className="w-6 h-6 text-primary dark:text-white" />
            </button>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-darkCard rounded-2xl">
              <Truck className="w-6 h-6 text-accentGold" />
              <div className="text-sm">
                <span className="block font-bold text-primary dark:text-white">Free Delivery</span>
                <span className="text-gray-500 dark:text-gray-400">On orders over $50</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-darkCard rounded-2xl">
              <ShieldCheck className="w-6 h-6 text-accentGold" />
              <div className="text-sm">
                <span className="block font-bold text-primary dark:text-white">Warranty</span>
                <span className="text-gray-500 dark:text-gray-400">1 year guarantee</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Related Products Section could go here */}
    </div>
  );
};

export default ProductDetails;
