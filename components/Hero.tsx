import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506792006437-256b665541e2?q=80&w=2574&auto=format&fit=crop"
          alt="People connecting and communicating"
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_60s_ease-in-out_infinite_alternate]"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center flex flex-col items-center pt-16 sm:pt-20">

        {/* Announcement Pill with Dot */}
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-[10px] md:text-xs font-light uppercase tracking-widest text-white cursor-pointer hover:bg-white/20 transition-colors animate-fade-in-down">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="ml-1">50+ Languages Supported</span>
          <ArrowRight size={12} className="opacity-70 ml-1" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6.5rem] leading-[1.05] text-white tracking-tight max-w-6xl mx-auto mb-4 sm:mb-6 drop-shadow-2xl animate-fade-in font-light" style={{ animationDelay: '0.1s' }}>
          <span className="block">AI that talks like a human.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-white font-light mb-10 sm:mb-12 tracking-wide drop-shadow-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Zeba Calls AI agents for enterprise support. Automate GCC and global voice communications with natural conversations.
        </p>

        {/* Single CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a href="https://cal.com/rahulhakhla/owlflowai" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Book a Demo
          </a>
        </div>
      </div>

      {/* Logos Footer */}
      <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-10 px-4 sm:px-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            {/* Simple SVG Placeholders for logos */}
            <div className="h-5 sm:h-6 flex items-center gap-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-300 rounded-full"></div>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase">Postman</span>
            </div>
            <div className="h-5 sm:h-6 flex items-center gap-1">
                <span className="text-xl sm:text-2xl font-serif italic text-white">rio</span>
                <span className="text-[0.45rem] sm:text-[0.5rem] self-start mt-1 text-white">LAS VEGAS</span>
            </div>
             <div className="h-5 sm:h-6 flex items-center gap-2">
                <div className="w-5 h-3 sm:w-6 sm:h-4 bg-gray-300 rounded-sm skew-x-12"></div>
                <span className="text-base sm:text-lg font-bold tracking-wider text-white">DOORDASH</span>
            </div>
             <div className="h-5 sm:h-6 flex items-center gap-0">
                <span className="text-base sm:text-lg font-bold text-white">capital.com</span>
            </div>
             <div className="h-5 sm:h-6 flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold text-white">afriex</span>
            </div>
        </div>
      </div>

      {/* Bottom Blur Shadow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default Hero;
