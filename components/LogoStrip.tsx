import React from 'react';
import { Hexagon, Triangle, Circle, Box, Diamond } from 'lucide-react';

const LogoStrip: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-24 border-t border-gray-100 dark:border-gray-800 pt-12">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 dark:text-gray-400 dark:hover:text-white">
        
        <div className="flex items-center gap-3 font-bold text-lg tracking-wider">
           <Hexagon className="w-8 h-8" strokeWidth={1.5} />
           <div className="flex flex-col leading-none">
             <span>GRAPHIC</span>
             <span className="text-[10px] tracking-[0.2em] font-light">STUDIO</span>
           </div>
        </div>

        <div className="flex items-center gap-3 font-bold text-lg">
            <div className="border border-current rounded-full p-1">
                <Triangle className="w-6 h-6 rotate-180" strokeWidth={1.5}/>
            </div>
            <div className="flex flex-col leading-none">
             <span>S. SALVA</span>
             <span className="text-[10px] tracking-widest font-light">ART DIRECTOR</span>
           </div>
        </div>

        <div className="flex items-center gap-2 font-bold text-xl border-2 border-current px-2 py-1">
           <span className="text-sm font-light">GOLDEN</span>
           <span className="font-bold">STUDIO</span>
        </div>

        <div className="flex items-center gap-3 font-bold text-lg">
           <Box className="w-8 h-8" strokeWidth={1} />
           <div className="flex flex-col leading-none">
             <span>FURNITURE</span>
             <span className="text-[10px] tracking-[0.3em] font-light">DESIGN</span>
           </div>
        </div>

        <div className="flex items-center gap-3 font-bold text-lg">
           <div className="rotate-45 border border-current p-1">
              <span className="text-lg -rotate-45 block font-serif">T</span>
           </div>
           <div className="flex flex-col leading-none">
             <span>TRAVEL</span>
             <span className="text-[10px] tracking-widest font-light">LOOKBOOK</span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default LogoStrip;