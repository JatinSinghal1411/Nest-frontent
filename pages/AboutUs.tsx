import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      
      {/* Hero */}
      <div className="bg-cardLavender dark:bg-indigo-900/30 rounded-[50px] p-10 md:p-20 text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-primary dark:text-white mb-8">Our Story</h1>
        <p className="text-xl text-secondary dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Founded in 2025, Nest was born from a simple idea: fashion shouldn't cost the earth. We're on a mission to redefine luxury through sustainability.
        </p>
      </div>

      {/* Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
        <div className="order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800" 
            alt="Team working" 
            className="rounded-[40px] w-full h-[500px] object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-6">Designed for Impact</h2>
          <p className="text-lg text-secondary dark:text-gray-300 mb-6 leading-relaxed">
            Every thread tells a story. We partner with ethical factories and source organic, recycled materials to ensure our footprint is as light as possible.
          </p>
          <ul className="space-y-4">
            {['100% Organic Cotton', 'Fair Trade Certified', 'Carbon Neutral Shipping'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg font-medium text-primary dark:text-white">
                <span className="w-2 h-2 rounded-full bg-accentGold"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
         {[
           { label: 'Happy Customers', val: '50k+' },
           { label: 'Trees Planted', val: '10k+' },
           { label: 'Years Active', val: '5' },
           { label: 'Countries', val: '24' }
         ].map((stat) => (
           <div key={stat.label} className="bg-gray-50 dark:bg-darkCard rounded-[30px] p-8 text-center">
             <div className="text-4xl font-bold text-primary dark:text-white mb-2">{stat.val}</div>
             <div className="text-secondary dark:text-gray-400">{stat.label}</div>
           </div>
         ))}
      </div>

    </div>
  );
};

export default AboutUs;