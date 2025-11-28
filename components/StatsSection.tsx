import React, { useEffect, useRef, useState } from 'react';

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && count1 < 70) {
      const timer = setTimeout(() => {
        setCount1((prev) => Math.min(prev + 2, 70));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isVisible, count1]);

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Top Blur Shadow Effect */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none z-10 blur-sm"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 lg:gap-8 items-start">

          {/* Left Text */}
          <div className={`max-w-md relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-snug text-gray-100">
              Solve your most complex support issues with AI, up and running in two weeks.
            </h2>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12 border-l border-white/10 pl-6 sm:pl-8 lg:pl-16">
            <div className={`flex flex-col gap-2 group transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors">Cost Reduction</span>
              <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter">
                {count1}%
              </span>
            </div>
            <div className={`flex flex-col gap-2 group transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors">Availability</span>
              <span className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-50'}`}>
                24/7
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
