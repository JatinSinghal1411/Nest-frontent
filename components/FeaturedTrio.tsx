import React from 'react';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const cards = [
  {
    id: 1,
    category: 'Women',
    title: 'Pink\nFashion',
    price: '$42.00',
    // Gradient backgrounds for modern feel
    bgClass: 'bg-gradient-to-br from-[#FFEBF1] via-[#FFF0F6] to-[#FFEBF1] dark:from-pink-950/40 dark:via-pink-900/30 dark:to-pink-950/20',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80',
    titleColor: 'text-[#9D5D72] dark:text-pink-200',
    blobColor: 'bg-pink-300/20'
  },
  {
    id: 2,
    category: 'Chocolates',
    title: 'Autumn\nFrock',
    price: '$56.00',
    bgClass: 'bg-gradient-to-br from-[#FCFDC9] via-[#FEFCE8] to-[#FCFDC9] dark:from-yellow-950/40 dark:via-yellow-900/30 dark:to-yellow-950/20',
    image: 'https://images.unsplash.com/photo-1621452773781-0f992ee03591?w=600&auto=format&fit=crop&q=80',
    titleColor: 'text-[#8B8000] dark:text-yellow-200',
    blobColor: 'bg-yellow-300/20'
  },
  {
    id: 3,
    category: 'Shoe',
    title: 'Purple\nSneakers',
    price: '$80.00',
    bgClass: 'bg-gradient-to-br from-[#F2ECFF] via-[#FDFBFF] to-[#F2ECFF] dark:from-indigo-950/40 dark:via-indigo-900/30 dark:to-indigo-950/20',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=80',
    titleColor: 'text-[#6A5ACD] dark:text-indigo-200',
    blobColor: 'bg-indigo-300/20'
  }
];

const FeaturedTrio: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className={`
              relative h-[550px] rounded-[40px] overflow-hidden group cursor-pointer border border-white/50 dark:border-white/5
              ${card.bgClass}
              transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]
            `}
            onClick={() => navigate('product', { id: String(card.id) })}
          >
            {/* Background decorative blob */}
            <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl ${card.blobColor}`}></div>

            {/* Header: Category & Hover Arrow */}
            <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
              <span className="px-5 py-2 bg-white/60 dark:bg-black/20 backdrop-blur-md rounded-full text-sm font-bold tracking-wide uppercase text-primary dark:text-white border border-white/20">
                {card.category}
              </span>
              <div className="w-12 h-12 rounded-full bg-white/60 dark:bg-black/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 border border-white/20">
                <ArrowUpRight className="w-5 h-5 text-primary dark:text-white" />
              </div>
            </div>

            {/* Title */}
            <div className="absolute top-28 left-8 z-20">
               <h3 className={`text-5xl font-extrabold leading-[0.9] tracking-tight ${card.titleColor} drop-shadow-sm`}>
                {card.title}
               </h3>
            </div>

            {/* Image */}
            <div className="absolute inset-0 top-20 z-10 flex items-center justify-center">
                 <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-[110%] h-[110%] object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2" 
                />
            </div>

            {/* Bottom Glassmorphism Bar */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
               <div className="bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[24px] p-2 pl-6 flex items-center justify-between shadow-lg">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-60 text-primary dark:text-white">Price</span>
                    <span className="text-xl font-bold text-primary dark:text-white">{card.price}</span>
                  </div>
                  <button className="w-12 h-12 bg-primary dark:bg-white text-white dark:text-primary rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-md">
                     <ShoppingBag className="w-5 h-5" />
                  </button>
               </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTrio;