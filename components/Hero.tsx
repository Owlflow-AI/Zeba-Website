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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center flex flex-col items-center pt-0 sm:pt-0">

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
          AI calling agents tailored your business needs
        </p>

        {/* Single CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a href="https://cal.com/rahulhakhla/owlflowai" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Talk to us
          </a>
        </div>
      </div>

      {/* Logos Footer */}
      <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 z-10 px-4 sm:px-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/50 font-light text-center">
            integrate flawlessly with your stack
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24 opacity-60 hover:opacity-90 transition-all duration-500">
            {/* Slack Logo */}
            <div className="h-5 sm:h-6 flex items-center">
              <svg className="h-5 sm:h-6 w-auto" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.3996 78.3999C26.3996 84.8096 21.2093 90 14.7996 90C8.38991 90 3.19958 84.8096 3.19958 78.3999C3.19958 71.9902 8.38991 66.7999 14.7996 66.7999H26.3996V78.3999Z" fill="white" fillOpacity="0.7"/>
                <path d="M32.2 78.3999C32.2 71.9902 37.3903 66.7999 43.8 66.7999C50.2097 66.7999 55.4 71.9902 55.4 78.3999V109.2C55.4 115.61 50.2097 120.8 43.8 120.8C37.3903 120.8 32.2 115.61 32.2 109.2V78.3999Z" fill="white" fillOpacity="0.7"/>
                <path d="M43.8 26.4001C37.3903 26.4001 32.2 21.2098 32.2 14.8001C32.2 8.39036 37.3903 3.20003 43.8 3.20003C50.2097 3.20003 55.4 8.39036 55.4 14.8001V26.4001H43.8Z" fill="white" fillOpacity="0.7"/>
                <path d="M43.8 32.2C50.2097 32.2 55.4 37.3903 55.4 43.8C55.4 50.2097 50.2097 55.4 43.8 55.4H14.8C8.39036 55.4 3.20003 50.2097 3.20003 43.8C3.20003 37.3903 8.39036 32.2 14.8 32.2H43.8Z" fill="white" fillOpacity="0.7"/>
                <path d="M97.6 43.8C97.6 37.3903 102.79 32.2 109.2 32.2C115.61 32.2 120.8 37.3903 120.8 43.8C120.8 50.2097 115.61 55.4 109.2 55.4H97.6V43.8Z" fill="white" fillOpacity="0.7"/>
                <path d="M91.7996 43.8C91.7996 50.2097 86.6093 55.4 80.1996 55.4C73.7899 55.4 68.5996 50.2097 68.5996 43.8V14.8C68.5996 8.39036 73.7899 3.20003 80.1996 3.20003C86.6093 3.20003 91.7996 8.39036 91.7996 14.8V43.8Z" fill="white" fillOpacity="0.7"/>
                <path d="M80.1996 97.6C86.6093 97.6 91.7996 102.79 91.7996 109.2C91.7996 115.61 86.6093 120.8 80.1996 120.8C73.7899 120.8 68.5996 115.61 68.5996 109.2V97.6H80.1996Z" fill="white" fillOpacity="0.7"/>
                <path d="M80.1996 91.7996C73.7899 91.7996 68.5996 86.6093 68.5996 80.1996C68.5996 73.7899 73.7899 68.5996 80.1996 68.5996H109.2C115.61 68.5996 120.8 73.7899 120.8 80.1996C120.8 86.6093 115.61 91.7996 109.2 91.7996H80.1996Z" fill="white" fillOpacity="0.7"/>
              </svg>
            </div>

            {/* Asana Logo */}
            <div className="h-5 sm:h-6 flex items-center">
              <svg className="h-5 sm:h-6 w-auto" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="30" fill="white" fillOpacity="0.7"/>
                <circle cx="50" cy="50" r="30" fill="white" fillOpacity="0.7"/>
                <circle cx="150" cy="50" r="30" fill="white" fillOpacity="0.7"/>
              </svg>
            </div>

            {/* Notion Logo */}
            <div className="h-5 sm:h-6 flex items-center">
              <span className="text-xl sm:text-2xl font-bold text-white/70" style={{ fontFamily: 'ui-sans-serif, system-ui' }}>N</span>
            </div>

            {/* QuickBooks Logo */}
            <div className="h-5 sm:h-6 flex items-center">
              <span className="text-sm sm:text-base font-bold text-white/70 tracking-tight">QuickBooks</span>
            </div>

            {/* Stripe Logo */}
            <div className="h-5 sm:h-6 flex items-center">
              <svg className="h-4 sm:h-5 w-auto" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M59.5 12.5c0-6.904-3.537-12.5-10.417-12.5-6.905 0-11.083 5.596-11.083 12.451 0 8.244 4.651 12.424 11.333 12.424 3.263 0 5.729-.737 7.596-1.774V18.15c-1.867.912-4.058 1.549-6.8 1.549-2.692 0-5.072-.937-5.371-4.195h14.666c0-.337.076-1.686.076-2.504zm-14.791-2.654c0-3.133 1.942-4.42 4.333-4.42 2.316 0 4.158 1.287 4.158 4.42h-8.491zM33.167 0c-2.692 0-4.434 1.262-5.396 2.15L27.246.45h-6.03v24.174h7.496V8.819c1.412-1.037 3.387-1.749 5.346-1.749V0h-.891zM21.083 5.596c-2.467-.912-3.679-1.5-3.679-2.479 0-.837.791-1.399 2.108-1.399 1.892 0 4.283.762 6.175 1.899V.4C23.892.1 22.25 0 20.916 0c-5.471 0-9.149 2.854-9.149 7.495 0 3.683 2.667 5.496 6.546 6.82 2.542.887 3.38 1.549 3.38 2.579 0 1.012-.863 1.649-2.392 1.649-2.342 0-5.13-1.087-7.271-2.404v3.458c2.267 1.199 4.934 1.874 7.246 1.874 5.596 0 9.525-2.679 9.525-7.72 0-3.708-2.492-5.57-6.718-7.155z" fill="white" fillOpacity="0.7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
