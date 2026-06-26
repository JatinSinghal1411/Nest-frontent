import React from 'react';
import { services } from '../data';

const Services: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-primary dark:text-white mb-6">Our Services</h1>
        <p className="text-xl text-secondary dark:text-gray-400 max-w-2xl mx-auto">
          Beyond products, we offer personalized experiences to help you look and feel your best, sustainably.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <div key={index} className="bg-white dark:bg-darkCard border border-gray-100 dark:border-gray-800 rounded-[40px] p-10 hover:shadow-xl transition-shadow duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">{service.title}</h3>
            <p className="text-secondary dark:text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-buyDark dark:bg-indigo-950 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your style?</h2>
          <button className="bg-white text-buyDark px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;