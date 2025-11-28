import React from 'react';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-black py-20 sm:py-24 md:py-28 lg:py-32 border-t border-white/5 flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden">
       {/* Ambient mesh background */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 sm:h-56 md:h-64 bg-gradient-to-t from-white/5 to-transparent opacity-50 pointer-events-none"></div>
       <div className="absolute bottom-[-80px] sm:bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[250px] sm:h-[300px] border border-white/10 rounded-[100%] opacity-20 transform scale-x-150"></div>
       <div className="absolute bottom-[-40px] sm:bottom-[-50px] left-1/2 -translate-x-1/2 w-[450px] sm:w-[600px] h-[150px] sm:h-[200px] border border-white/10 rounded-[100%] opacity-30 transform scale-x-150"></div>

       <ScrollReveal>
         <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-light">The result?</p>
       </ScrollReveal>

       <ScrollReveal delay={200}>
         <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white max-w-5xl leading-tight mb-10 sm:mb-12 md:mb-16">
            A 100x support team for 1/10th of the cost
         </h2>
       </ScrollReveal>

       <ScrollReveal delay={400}>
         <a href="https://cal.com/rahulhakhla/owlflowai" target="_blank" rel="noopener noreferrer" className="group relative z-10 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-200 transition-all flex items-center gap-2.5 sm:gap-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <ChevronRight size={14} />
            </div>
            Hire Zeba
         </a>
       </ScrollReveal>
    </section>
  );
};

export default FinalCTA;