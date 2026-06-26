import React from 'react';
import { useNavigation } from '../context/NavigationContext';

const Hero: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="max-w-[1440px] mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Text Block */}
      <div className="flex flex-col items-start fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-[80px] leading-[1.1] text-primary dark:text-white mb-10 tracking-tight font-sans w-full">
          <span className="font-light block">Sustainably</span>
          <span className="font-bold block">Stylish. Naturally</span>
          <div className="flex items-center flex-wrap gap-4 md:gap-8 mt-2">
             <span className="font-light">You</span>
             <button 
               onClick={() => navigate('product', { id: '1' })} // Example nav
               className="bg-buyDark dark:bg-white dark:text-primary text-white rounded-full px-8 py-4 font-semibold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg whitespace-nowrap lg:mt-2"
             >
               Explore Products
             </button>
          </div>
        </h1>
      </div>

      {/* Right Social Proof */}
      <div className="flex flex-col items-start lg:items-end justify-center fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="relative mb-6">
           <div className="flex items-center -space-x-4">
              <img src="https://picsum.photos/100/100?random=1" alt="User" className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 object-cover" />
              <img src="https://picsum.photos/100/100?random=2" alt="User" className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 object-cover" />
              <img src="https://picsum.photos/100/100?random=3" alt="User" className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 object-cover" />
              <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 flex items-center justify-center text-xs font-bold text-primary dark:text-white shadow-sm z-10">
                15K+
              </div>
           </div>
        </div>
        
        <div className="flex items-center gap-4 lg:flex-row flex-col lg:text-right text-left">
           <div className="hidden lg:block w-16 h-px bg-secondary opacity-30 dark:bg-gray-400"></div>
           <p className="text-secondary dark:text-gray-400 max-w-xs text-lg leading-relaxed">
             Fashion is part of the daily air and it changes all the time, with all the events.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;