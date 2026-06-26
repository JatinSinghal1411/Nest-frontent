import React from 'react';
import { Handshake, Box, Headset } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-32">
      <div className="bg-[#FFF5EE] dark:bg-gray-800 rounded-[30px] py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center mb-6 shadow-sm text-accentGold">
            <Handshake className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Payment Method</h3>
          <p className="text-secondary dark:text-gray-400 text-sm max-w-[250px]">
            We offer flexible payment options, to make easier.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center mb-6 shadow-sm text-accentGold">
            <Box className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Return Policy</h3>
          <p className="text-secondary dark:text-gray-400 text-sm max-w-[250px]">
            You can return a product within 30 days.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center mb-6 shadow-sm text-accentGold">
            <Headset className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Customer Support</h3>
          <p className="text-secondary dark:text-gray-400 text-sm max-w-[250px]">
             Our customer support is 24/7.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Benefits;