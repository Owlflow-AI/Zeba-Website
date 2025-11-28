import React, { useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CaseStudies: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const caseStudies = [
    {
      bg: '#BFAFF2',
      company: 'deel.',
      subtitle: '',
      description: 'Deel hires Zeba to pre-qualify candidates and 5x interview pass rates',
      textColor: '#1a1a1a'
    },
    {
      bg: '#5465FF',
      company: 'TD',
      subtitle: 'Global Solutions',
      description: 'TD Global reduced operational costs by 40% using Zeba for first-line support.',
      textColor: '#ffffff'
    },
    {
      bg: '#FF6B6B',
      company: 'Stripe',
      subtitle: '',
      description: 'Stripe scaled customer support by 300% while maintaining 98% satisfaction scores.',
      textColor: '#ffffff'
    },
    {
      bg: '#4ECDC4',
      company: 'Shopify',
      subtitle: 'E-commerce',
      description: 'Shopify automated 10,000+ merchant calls per day with 95% resolution rate.',
      textColor: '#1a1a1a'
    },
    {
      bg: '#FFD93D',
      company: 'Coinbase',
      subtitle: '',
      description: 'Coinbase reduced support response time from 4 hours to 30 seconds with Zeba AI.',
      textColor: '#1a1a1a'
    }
  ];

  const tripleStudies = [...caseStudies, ...caseStudies, ...caseStudies];

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / tripleStudies.length;
      const middleStart = cardWidth * caseStudies.length;
      container.scrollLeft = middleStart;
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / tripleStudies.length;
      const scrollAmount = cardWidth;

      const newScrollLeft = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(() => {
        if (!container) return;

        const totalWidth = container.scrollWidth;
        const sectionWidth = totalWidth / 3;
        const currentScroll = container.scrollLeft;

        if (currentScroll <= 0) {
          container.scrollLeft = sectionWidth;
        } else if (currentScroll >= sectionWidth * 2) {
          container.scrollLeft = sectionWidth;
        }
      }, 500);
    }
  };

  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-8 sm:mb-10 md:mb-12">
             <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">Case studies</h2>
             <div className="hidden sm:flex gap-3 md:gap-4">
                <button
                  onClick={() => scroll('left')}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                >
                   <ArrowLeft size={18} className="md:w-5 md:h-5" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                >
                   <ArrowRight size={18} className="md:w-5 md:h-5" />
                </button>
             </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tripleStudies.map((study, index) => (
              <div
                key={index}
                className="min-w-[90vw] sm:min-w-[85vw] md:min-w-[600px] lg:min-w-[800px] rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 snap-center relative group flex-shrink-0"
                style={{ backgroundColor: study.bg }}
              >
                <div className="flex-1 md:text-center lg:text-left">
                    <h3
                      className="text-3xl sm:text-4xl font-bold tracking-tight"
                      style={{ color: study.textColor }}
                    >
                      {study.company}
                    </h3>
                    {study.subtitle && (
                      <span
                        className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase block mt-1"
                        style={{ color: study.textColor, opacity: 0.8 }}
                      >
                        {study.subtitle}
                      </span>
                    )}
                </div>
                <div className="flex-1 space-y-6 sm:space-y-8 relative z-10">
                    <p
                      className="text-lg sm:text-xl md:text-2xl leading-tight"
                      style={{ color: study.textColor }}
                    >
                       {study.description}
                    </p>
                    <button
                      className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: study.textColor === '#ffffff' ? '#ffffff' : '#000000',
                        color: study.textColor === '#ffffff' ? '#000000' : '#ffffff'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = study.textColor === '#ffffff' ? '#000000' : '#ffffff';
                        e.currentTarget.style.color = study.textColor === '#ffffff' ? '#ffffff' : '#000000';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = study.textColor === '#ffffff' ? '#ffffff' : '#000000';
                        e.currentTarget.style.color = study.textColor === '#ffffff' ? '#000000' : '#ffffff';
                      }}
                    >
                       <div
                         className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center transition-colors"
                         style={{
                           backgroundColor: study.textColor === '#ffffff' ? '#000000' : '#ffffff',
                           color: study.textColor === '#ffffff' ? '#ffffff' : '#000000'
                         }}
                       >
                           <ChevronRight size={12} />
                       </div>
                       Full case study
                    </button>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
