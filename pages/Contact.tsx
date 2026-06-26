import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Info */}
        <div>
          <h1 className="text-5xl font-bold text-primary dark:text-white mb-8">Get in Touch</h1>
          <p className="text-xl text-secondary dark:text-gray-400 mb-12">
            Have questions about our products or sustainability practices? We'd love to hear from you.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-cardYellow dark:bg-yellow-900/30 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary dark:text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-1">Email</h3>
                <p className="text-secondary dark:text-gray-400">hello@nest.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-cardLavender dark:bg-indigo-900/30 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary dark:text-indigo-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-1">Phone</h3>
                <p className="text-secondary dark:text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-accentPink dark:bg-pink-900/30 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary dark:text-pink-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-1">Office</h3>
                <p className="text-secondary dark:text-gray-400">123 Eco Lane, Green City, Planet Earth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gray-50 dark:bg-darkCard rounded-[40px] p-8 md:p-10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-primary dark:text-white">First Name</label>
                <input type="text" className="w-full bg-white dark:bg-gray-800 dark:text-white rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-3 focus:outline-none focus:border-primary dark:focus:border-white transition-colors" placeholder="Jane" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-primary dark:text-white">Last Name</label>
                <input type="text" className="w-full bg-white dark:bg-gray-800 dark:text-white rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-3 focus:outline-none focus:border-primary dark:focus:border-white transition-colors" placeholder="Doe" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-primary dark:text-white">Email</label>
              <input type="email" className="w-full bg-white dark:bg-gray-800 dark:text-white rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-3 focus:outline-none focus:border-primary dark:focus:border-white transition-colors" placeholder="jane@example.com" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-primary dark:text-white">Message</label>
              <textarea rows={4} className="w-full bg-white dark:bg-gray-800 dark:text-white rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-3 focus:outline-none focus:border-primary dark:focus:border-white transition-colors" placeholder="How can we help?"></textarea>
            </div>

            <button className="w-full bg-buyDark dark:bg-white dark:text-primary text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
