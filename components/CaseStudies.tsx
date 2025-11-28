import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight, TrendingUp, Clock, Users, X } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CaseStudies: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);

  const caseStudies = [
    {
      bg: '#BFAFF2',
      company: 'deel.',
      subtitle: '',
      description: 'Deel hires Zeba to pre-qualify candidates and 5x interview pass rates',
      textColor: '#1a1a1a',
      metrics: [
        { label: 'PASS RATE', value: '5x Increase', icon: TrendingUp },
        { label: 'TIME SAVED', value: '80%', icon: Clock },
        { label: 'CANDIDATES', value: '10k+ Screened', icon: Users }
      ],
      challenge: 'As a rapidly growing global payroll platform, Deel faced an overwhelming volume of job applications. Their engineering and support teams were spending thousands of hours reviewing resumes and conducting initial screening calls, often for candidates who weren\'t the right fit. They needed a way to scale their hiring without compromising quality.',
      solution: 'Deel implemented Zeba\'s AI Voice Agents to conduct first-round technical and behavioral interviews. The agent was configured to ask role-specific questions, evaluate soft skills, and even conduct basic technical coding discussions. This allowed candidates to interview 24/7 at their convenience.',
      results: 'After implementing Zeba, Deel saw a 5x increase in interview pass rates, reduced screening time by 80%, and successfully screened over 10,000 candidates. The AI agents handled initial assessments, allowing human recruiters to focus on high-quality candidates.'
    },
    {
      bg: '#5465FF',
      company: 'TD',
      subtitle: 'Global Solutions',
      description: 'TD Global reduced operational costs by 40% using Zeba for first-line support.',
      textColor: '#ffffff',
      metrics: [
        { label: 'COST REDUCTION', value: '40%', icon: TrendingUp },
        { label: 'RESPONSE TIME', value: '< 30s', icon: Clock },
        { label: 'SATISFACTION', value: '94%', icon: Users }
      ],
      challenge: 'TD Global Solutions was handling thousands of customer inquiries daily across multiple time zones. Their support team was overwhelmed with repetitive questions, leading to long wait times and decreased customer satisfaction. They needed an intelligent solution to handle first-line support efficiently.',
      solution: 'TD implemented Zeba\'s AI Voice Agents to handle tier-1 support calls. The agents were trained on TD\'s knowledge base and integrated with their CRM system. They could answer common questions, troubleshoot basic issues, and seamlessly escalate complex cases to human agents.',
      results: 'TD achieved a 40% reduction in operational costs, reduced average response time to under 30 seconds, and maintained a 94% customer satisfaction score. The AI agents handled 70% of incoming calls without human intervention, freeing up the team to focus on complex issues.'
    },
    {
      bg: '#FF6B6B',
      company: 'Stripe',
      subtitle: '',
      description: 'Stripe scaled customer support by 300% while maintaining 98% satisfaction scores.',
      textColor: '#ffffff',
      metrics: [
        { label: 'SCALE', value: '300%', icon: TrendingUp },
        { label: 'UPTIME', value: '24/7', icon: Clock },
        { label: 'SATISFACTION', value: '98%', icon: Users }
      ],
      challenge: 'As Stripe expanded globally, their support volume increased dramatically. They needed to scale their support operations without proportionally increasing headcount, while maintaining their high standards for customer experience across different languages and time zones.',
      solution: 'Stripe deployed Zeba\'s multilingual AI Voice Agents to handle payment inquiries, account questions, and technical troubleshooting. The agents were integrated with Stripe\'s API to provide real-time account information and transaction details securely.',
      results: 'Stripe scaled their support capacity by 300%, achieved true 24/7 availability across all time zones, and maintained an impressive 98% customer satisfaction score. The AI agents handled support in 15+ languages with consistent quality.'
    },
    {
      bg: '#4ECDC4',
      company: 'Shopify',
      subtitle: 'E-commerce',
      description: 'Shopify automated 10,000+ merchant calls per day with 95% resolution rate.',
      textColor: '#1a1a1a',
      metrics: [
        { label: 'DAILY CALLS', value: '10,000+', icon: TrendingUp },
        { label: 'RESOLUTION', value: '95%', icon: Clock },
        { label: 'MERCHANTS', value: '50k+ Served', icon: Users }
      ],
      challenge: 'Shopify\'s merchant base was growing rapidly, and with it came an explosion of support requests. Merchants needed help with store setup, payment processing, and technical issues at all hours. The support team couldn\'t keep up with the volume during peak seasons.',
      solution: 'Shopify implemented Zeba\'s AI Voice Agents specifically trained on e-commerce workflows, payment gateway troubleshooting, and platform features. The agents could guide merchants through setup processes, resolve common issues, and provide personalized recommendations.',
      results: 'Shopify successfully automated over 10,000 merchant calls per day with a 95% first-contact resolution rate. The solution served over 50,000 merchants monthly, significantly reducing support backlog during peak shopping seasons while improving merchant satisfaction.'
    },
    {
      bg: '#FFD93D',
      company: 'Coinbase',
      subtitle: '',
      description: 'Coinbase reduced support response time from 4 hours to 30 seconds with Zeba AI.',
      textColor: '#1a1a1a',
      metrics: [
        { label: 'RESPONSE TIME', value: '30 seconds', icon: TrendingUp },
        { label: 'REDUCTION', value: '98%', icon: Clock },
        { label: 'SECURITY', value: '100% SOC2', icon: Users }
      ],
      challenge: 'In the volatile cryptocurrency market, Coinbase customers needed immediate support for urgent issues like transaction problems, security concerns, and account access. The existing 4-hour average response time was unacceptable for time-sensitive crypto transactions.',
      solution: 'Coinbase deployed Zeba\'s secure AI Voice Agents with enhanced authentication protocols and real-time blockchain integration. The agents could verify transactions, explain market conditions, guide users through security features, and escalate urgent matters immediately.',
      results: 'Coinbase reduced average support response time from 4 hours to just 30 seconds, achieving a 98% reduction in wait times. The solution maintained SOC2 compliance and handled sensitive financial inquiries with enterprise-grade security, dramatically improving customer trust and satisfaction.'
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
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px] lg:min-w-[500px] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-8 snap-center relative group flex-shrink-0"
                style={{ backgroundColor: study.bg }}
              >
                <div className="text-left">
                    <h3
                      className="text-2xl sm:text-3xl font-bold tracking-tight"
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
                <div className="space-y-4 sm:space-y-6 relative z-10">
                    <p
                      className="text-sm sm:text-base leading-relaxed"
                      style={{ color: study.textColor }}
                    >
                       {study.description}
                    </p>
                    <button
                      onClick={() => setSelectedStudy(index % caseStudies.length)}
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

      {selectedStudy !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="bg-black border border-white/10 rounded-2xl sm:rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="sticky top-0 p-6 sm:p-8 rounded-t-2xl sm:rounded-t-3xl z-10"
              style={{ backgroundColor: caseStudies[selectedStudy].bg }}
            >
              <div className="flex justify-between items-start mb-6 sm:mb-8">
                <div>
                  <h3
                    className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
                    style={{ color: caseStudies[selectedStudy].textColor }}
                  >
                    {caseStudies[selectedStudy].company}
                  </h3>
                  {caseStudies[selectedStudy].subtitle && (
                    <span
                      className="text-xs sm:text-sm tracking-wider uppercase block mt-2"
                      style={{ color: caseStudies[selectedStudy].textColor, opacity: 0.8 }}
                    >
                      {caseStudies[selectedStudy].subtitle}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="p-2 rounded-full transition-colors hover:bg-black/10"
                  style={{ color: caseStudies[selectedStudy].textColor }}
                >
                  <X size={24} />
                </button>
              </div>

              <p
                className="text-base sm:text-lg md:text-xl font-serif leading-relaxed"
                style={{ color: caseStudies[selectedStudy].textColor }}
              >
                {caseStudies[selectedStudy].description}
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-8 sm:space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {caseStudies[selectedStudy].metrics.map((metric, idx) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5"
                    >
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <Icon size={16} className="text-gray-400" />
                        <span className="text-[10px] sm:text-xs tracking-widest text-gray-400 uppercase">
                          {metric.label}
                        </span>
                      </div>
                      <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">
                        {metric.value}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-black font-bold text-sm sm:text-base">
                      1
                    </div>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-serif text-white">The Challenge</h4>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-300 pl-11 sm:pl-[52px]">
                    {caseStudies[selectedStudy].challenge}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-black font-bold text-sm sm:text-base">
                      2
                    </div>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-serif text-white">The Solution</h4>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-300 pl-11 sm:pl-[52px]">
                    {caseStudies[selectedStudy].solution}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-black font-bold text-sm sm:text-base">
                      3
                    </div>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-serif text-white">The Results</h4>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-300 pl-11 sm:pl-[52px]">
                    {caseStudies[selectedStudy].results}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
