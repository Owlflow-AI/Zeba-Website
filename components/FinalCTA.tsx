import React from 'react';
import { ChevronRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-black py-32 border-t border-white/5 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
       {/* Ambient mesh background */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-t from-white/5 to-transparent opacity-50 pointer-events-none"></div>
       <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] border border-white/10 rounded-[100%] opacity-20 transform scale-x-150"></div>
       <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[600px] h-[200px] border border-white/10 rounded-[100%] opacity-30 transform scale-x-150"></div>

       <p className="text-gray-400 text-xl md:text-2xl mb-8 font-light">The result?</p>
       
       <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white max-w-5xl leading-tight mb-16">
          A 100x support team for 1/10th of the cost
       </h2>

       <button className="group relative z-10 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-all flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <ChevronRight size={14} />
          </div>
          Hire Zeba
       </button>
    </section>
  );
};

export default FinalCTA;