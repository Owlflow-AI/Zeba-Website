import React from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <section className="bg-black py-24 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
           <h2 className="font-serif text-4xl md:text-5xl text-white">Case studies</h2>
           <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                 <ArrowLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                 <ArrowRight size={20} />
              </button>
           </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
          
          {/* Case Study 1 */}
          <div className="min-w-[85vw] md:min-w-[600px] lg:min-w-[800px] bg-[#BFAFF2] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 snap-center relative group">
             <div className="flex-1">
                 <h3 className="text-4xl font-bold tracking-tight text-[#1a1a1a]">deel.</h3>
             </div>
             <div className="flex-1 space-y-8 relative z-10">
                 <p className="text-xl md:text-2xl text-[#1a1a1a] leading-tight">
                    Deel hires Zeba to pre-qualify candidates and 5x interview pass rates
                 </p>
                 <button className="bg-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-black hover:text-white transition-colors">
                    <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black">
                        <ChevronRight size={12} />
                    </div>
                    Full case study
                 </button>
             </div>
          </div>

          {/* Case Study 2 */}
          <div className="min-w-[85vw] md:min-w-[600px] lg:min-w-[800px] bg-[#5465FF] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 snap-center relative group">
             <div className="flex-1">
                 <h3 className="text-4xl font-bold tracking-tight text-white">TD</h3>
                 <span className="text-white/80 text-xs tracking-[0.3em] uppercase block mt-1">Global Solutions</span>
             </div>
             <div className="flex-1 space-y-8 relative z-10">
                 <p className="text-xl md:text-2xl text-white leading-tight">
                    TD Global reduced operational costs by 40% using Zeba for first-line support.
                 </p>
                 <button className="bg-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium text-black hover:bg-black hover:text-white transition-colors">
                    <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black">
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