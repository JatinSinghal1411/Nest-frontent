import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const TopProducts: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Grid Layout */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 h-[600px] md:h-[700px]">
           
           {/* Card 1 */}
           <div 
             className="relative rounded-[30px] overflow-hidden group col-span-1 row-span-2 bg-gray-100 dark:bg-gray-800 cursor-pointer"
             onClick={() => navigate('product', { id: '1' })}
           >
             <img src="https://images.unsplash.com/photo-1544441893-675973e31985?w=600&q=80" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" alt="Handbag" />
             <div className="absolute bottom-4 left-4 right-4 bg-white/30 backdrop-blur-md rounded-2xl p-4 flex justify-between items-center border border-white/20">
                <span className="font-bold text-primary">$66.00</span>
                <button className="w-8 h-8 bg-buyDark text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </button>
             </div>
           </div>

           {/* Card 2 */}
           <div 
             className="relative rounded-[30px] overflow-hidden group bg-cardLavender dark:bg-indigo-900/40 col-span-1 row-span-1 cursor-pointer"
             onClick={() => navigate('product', { id: '2' })}
           >
             <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80" className="w-full h-full object-cover object-center p-0 transition-transform duration-700 group-hover:scale-105" alt="Purse" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/30 backdrop-blur-md rounded-2xl p-3 flex justify-between items-center border border-white/20">
                <span className="font-bold text-primary text-sm">$120.00</span>
                <button className="w-8 h-8 bg-buyDark text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </button>
             </div>
           </div>

           {/* Card 3 */}
           <div 
             className="relative rounded-[30px] overflow-hidden group bg-cardYellow dark:bg-yellow-900/40 col-span-1 row-span-1 cursor-pointer"
             onClick={() => navigate('product', { id: '3' })}
           >
              <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" alt="Sunglasses" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/30 backdrop-blur-md rounded-2xl p-3 flex justify-between items-center border border-white/20">
                <span className="font-bold text-primary text-sm">$56.00</span>
                <button className="w-8 h-8 bg-buyDark text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </button>
             </div>
           </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center h-full">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6 leading-tight">
              Top Product Of <br /> The Month
            </h2>
            <p className="text-secondary dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Made from upcycled ocean plastic, this minimalist backpack redefines functional fashion. 
              It is lightweight, durable, and designed for the urban explorer who cares about the planet.
            </p>
            <button className="bg-buyDark dark:bg-white dark:text-primary text-white px-10 py-4 rounded-full hover:bg-opacity-90 transition-all font-semibold">
              Shop Collection
            </button>
          </div>
          
           <div className="relative rounded-[30px] overflow-hidden h-[320px] w-full group hidden lg:block mt-auto">
              <img src="https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?w=800&q=80" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" alt="Orange Jacket" />
               <div className="absolute bottom-6 left-6 right-6 bg-white/30 backdrop-blur-md rounded-2xl p-4 flex justify-between items-center border border-white/20">
                <span className="font-bold text-primary">$80.00</span>
                <button className="w-10 h-10 bg-buyDark text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </button>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default TopProducts;