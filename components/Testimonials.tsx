import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: '1',
    name: 'Thomas R.',
    location: 'Australia',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: "Amazing shopping experience! The website is easy to navigate, and checkout was super fast. My order arrived earlier than expected and was beautifully packaged. Highly recommend this store for quality and service!"
  },
  {
    id: '2',
    name: 'Rebeka Yasmin',
    location: 'UAE',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: "The product quality is outstanding! I've ordered a few eco-friendly clothing items, and they're exactly as described. Comfortable, stylish, and sustainable—what more could I ask for? Will definitely shop again."
  },
  {
    id: '3',
    name: 'Adam Warlder',
    location: 'New York',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    text: "Great variety of products and prices. Had a minor issue with one item, but support resolved it instantly."
  },
  {
      id: '4',
      name: 'Sarah J.',
      location: 'London',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      text: "Absolutely love the sustainability focus. The clothes feel premium and ethical."
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % (reviews.length - 2)); 
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + (reviews.length - 2)) % (reviews.length - 2));
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-32 overflow-hidden">
      
      {/* Slider Container */}
      <div className="flex gap-8 transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * 0}%)` }}> 
        
        {reviews.slice(0, 3).map((review) => (
          <div key={review.id} className="min-w-full md:min-w-[calc(33.333%-20px)] bg-white dark:bg-darkCard rounded-[30px] p-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between h-[320px]">
             
             {/* Header */}
             <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-white">{review.name}</h4>
                    <p className="text-xs text-gray-400">{review.location}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                  ))}
                </div>
             </div>

             {/* Text */}
             <p className="text-secondary dark:text-gray-300 text-sm leading-relaxed line-clamp-5">
               "{review.text}"
             </p>
          </div>
        ))}

      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-12">
        <button onClick={prevSlide} className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50">
           <ChevronLeft className="w-6 h-6 text-gray-400" />
        </button>
        <button onClick={nextSlide} className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50">
           <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>
      </div>

    </section>
  );
};

export default Testimonials;