import React from 'react';
import { ArrowRight } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-32">
      <div className="bg-gray-50 dark:bg-darkCard rounded-[40px] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6 leading-tight">
            Conscious Looks, <br /> Daily Confidence
          </h2>
          <p className="text-secondary dark:text-gray-400 mb-12 max-w-md">
            Step into fashion that not only looks good but feels right. Every piece in our collection is made with love.
          </p>

          <div className="space-y-8">
            {[
              { title: 'Styling Basics', desc: 'Master outfit building and personal aesthetics.' },
              { title: 'Fashion Business', desc: 'Learn branding, marketing, and retail strategy.' },
              { title: 'Sustainable Fashion', desc: 'Design with purpose and planet in mind.' }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-medium text-primary dark:text-white group-hover:text-accentGold transition-colors">{item.title}</h3>
                  <ArrowRight className="w-6 h-6 text-primary dark:text-white group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                <p className="text-secondary dark:text-gray-400 text-sm mb-6">{item.desc}</p>
                {index !== 2 && <div className="h-px bg-gray-200 dark:bg-gray-700 w-full" />}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="h-[500px] md:h-[600px] rounded-[30px] overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1507680434567-5739c8a92405?w=800&q=80" 
            alt="Fashion Model" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default EducationSection;