import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1652242190826-f1978b451b7f?q=80&w=2574&auto=format&fit=crop"
          alt="People on beach during daytime"
          className="w-full h-full object-cover scale-105"
        />
        {/* Bottom gradient overlay for seamless transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center flex flex-col items-center pt-16 sm:pt-20">

        {/* Announcement Pill with Dot */}
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-[9px] sm:text-[10px] font-light uppercase tracking-widest text-white cursor-pointer hover:bg-white/20 transition-colors animate-fade-in-down">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="ml-1">50+ Languages Supported</span>
          <ArrowRight size={12} className="opacity-70 ml-1" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-white tracking-tight max-w-5xl mx-auto mb-5 sm:mb-6 drop-shadow-2xl animate-fade-in font-light" style={{ animationDelay: '0.1s' }}>
          <span className="block">AI that talks like a human.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg text-white font-light mb-10 sm:mb-12 tracking-wide drop-shadow-lg max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          AI agents for enterprise support
        </p>

        {/* Single CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a href="https://cal.com/rahulhakhla/owlflowai" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Talk to us
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
    </section>
  );
};

export default Hero;
