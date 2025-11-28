import React from 'react';
import { Loader2 } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-black py-24 md:py-32 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          
          {/* Left Text */}
          <div className="max-w-md relative">
             <div className="absolute -top-12 left-0 w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            <h2 className="text-2xl md:text-3xl font-light leading-snug text-gray-100 pt-4">
              Solve your most complex support issues with AI, up and running in two weeks.
            </h2>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-l border-white/10 pl-8 lg:pl-16">
            <div className="flex flex-col gap-2 group">
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors">Cost Reduction</span>
              <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter">70%</span>
            </div>
            <div className="flex flex-col gap-2 group">
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors">Availability</span>
              <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter">24/7</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;