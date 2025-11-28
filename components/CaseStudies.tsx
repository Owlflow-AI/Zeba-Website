import React from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-end mb-8 sm:mb-10 md:mb-12">
           <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">Case studies</h2>
           <div className="hidden sm:flex gap-3 md:gap-4">
              <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                 <ArrowLeft size={18} className="md:w-5 md:h-5" />
              </button>
              <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                 <ArrowRight size={18} className="md:w-5 md:h-5" />
              </button>
           </div>
        </div>

        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 snap-x scrollbar-hide">

          {/* Case Study 1 */}
          <div className="min-w-[90vw] sm:min-w-[85vw] md:min-w-[600px] lg:min-w-[800px] bg-[#BFAFF2] rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 snap-center relative group">
             <div className="flex-1 md:text-center lg:text-left">
                 <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a1a]">deel.</h3>
             </div>
             <div className="flex-1 space-y-6 sm:space-y-8 relative z-10">
                 <p className="text-lg sm:text-xl md:text-2xl text-[#1a1a1a] leading-tight">
                    Deel hires Zeba to pre-qualify candidates and 5x interview pass rates
                 </p>
                 <button className="bg-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2 text-xs sm:text-sm font-medium hover:bg-black hover:text-white transition-colors">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black">
                        <ChevronRight size={12} />
                    </div>
                    Full case study
                 </button>
             </div>
          </div>

          {/* Case Study 2 */}
          <div className="min-w-[90vw] sm:min-w-[85vw] md:min-w-[600px] lg:min-w-[800px] bg-[#5465FF] rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 snap-center relative group">
             <div className="flex-1 md:text-center lg:text-left">
                 <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">TD</h3>
                 <span className="text-white/80 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase block mt-1">Global Solutions</span>
             </div>
             <div className="flex-1 space-y-6 sm:space-y-8 relative z-10">
                 <p className="text-lg sm:text-xl md:text-2xl text-white leading-tight">
                    TD Global reduced operational costs by 40% using Zeba for first-line support.
                 </p>
                 <button className="bg-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2 text-xs sm:text-sm font-medium text-black hover:bg-black hover:text-white transition-colors">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black">
                        <ChevronRight size={12} />
                    </div>
                    Full case study
                 </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudies;