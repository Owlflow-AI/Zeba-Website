import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight, TrendingUp, Clock, Users, X } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CaseStudies: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);

  const caseStudies = [
    {
      bg: '#BFAFF2',
      company: 'ECOGurus',
      subtitle: 'Birmingham, UK',
      description: 'ECOGurus transformed lead response times and qualification for insulation, boiler, and solar services.',
      textColor: '#1a1a1a',
      metrics: [
        { label: 'RESPONSE TIME', value: 'Minutes', icon: Clock },
        { label: 'LEAD QUALITY', value: 'Pre-qualified', icon: TrendingUp },
        { label: 'FOLLOWUP', value: '24/7', icon: Users }
      ],
      challenge: 'ECOGurus Birmingham is a home energy-efficiency specialist focused on insulation, boiler upgrades, and solar panel installations. Their small office team struggled to keep up with callbacks, missed many opportunities, and spent too much time manually qualifying people who were not ready to buy. Slow response to new enquiries meant competitors often reached the customer first.',
      solution: 'ZEBA AI Calls deployed custom AI calling agents designed specifically for ECOGurus\' three core services: insulation, boilers, and solar panels. Each agent was trained on qualification questions, compliance requirements, and booking rules. The AI called new enquiries within minutes to verify details, asked relevant service-specific questions, booked surveys directly into the team\'s calendar, and scheduled friendly followups for nurturing cold leads.',
      results: 'ECOGurus achieved faster speed-to-lead, with more enquiries turning into actual conversations. A higher proportion of leads were fully prequalified before surveyor visits, reducing wasted trips and no-shows. The AI provided consistent followup without extra staffing costs, and generated a steady flow of survey bookings from older lead lists that had previously been written off.'
    },
    {
      bg: '#5465FF',
      company: 'Crescent Gate Hotel',
      subtitle: 'Manchester, UK',
      description: 'Crescent Gate Hotel automated reception and room service with 24/7 AI voice assistance.',
      textColor: '#ffffff',
      metrics: [
        { label: 'AVAILABILITY', value: '24/7', icon: Clock },
        { label: 'RESPONSE TIME', value: 'Instant', icon: TrendingUp },
        { label: 'GUEST SATISFACTION', value: 'Improved', icon: Users }
      ],
      challenge: 'Crescent Gate Hotel is a busy city-centre property serving business travellers, event guests, and weekend visitors. The reception team had to juggle walk-in guests, check-ins, phone enquiries, and room service orders from a single desk, leading to long hold times, missed calls, and delayed in-room deliveries. Guests expecting instant responses for simple questions often experienced frustration.',
      solution: 'ZEBA AI Calls deployed AI phone agents configured as a virtual receptionist and virtual room service assistant. The reception agent handled common calls such as reservations questions, directions, amenities, late check-in notices, and wake-up calls, routing only complex issues to staff. The room service agent integrated with the hotel\'s menu and ordering workflow so guests could place and check orders 24/7, with all requests pushed directly to the kitchen or night team.',
      results: 'Crescent Gate Hotel transformed guest communication into a fast, reliable, always-available service layer. The hotel experienced faster response times, fewer missed calls, and more consistent handling of in-room requests, contributing to higher guest satisfaction and smoother operations for the on-site team. ZEBA AI Calls now supports reception and room service 24/7.'
    },
    {
      bg: '#4ECDC4',
      company: 'EasyProperties',
      subtitle: 'London, UK',
      description: 'EasyProperties automated lead qualification and client management for sales and lettings.',
      textColor: '#1a1a1a',
      metrics: [
        { label: 'LEAD ENGAGEMENT', value: 'Rapid', icon: Clock },
        { label: 'QUALIFICATION', value: 'Structured', icon: TrendingUp },
        { label: 'STAFF TIME', value: 'Reduced', icon: Users }
      ],
      challenge: 'EasyProperties is a full-service estate agency managing sales, lettings, and property management. Negotiators and property managers were spending large parts of each day answering routine inbound calls and chasing outbound follow-ups. Growing lead volumes and client expectations for rapid responses made it difficult to maintain consistent service using only a traditional phone team.',
      solution: 'ZEBA AI Calls implemented AI calling agents to handle both inbound and outbound calls. Inbound agents answered general queries, routed calls, provided basic property information, and logged messages. Outbound agents contacted potential buyers, tenants, and sellers, qualified their needs, confirmed budgets and locations, scheduled viewings or valuation appointments, and followed up on portal enquiries. For existing clients and landlords, the AI handled common questions and escalated only complex issues.',
      results: 'EasyProperties reduced the manual workload on negotiators and property managers, giving them more time for in-person viewings, negotiations, and relationship management. The agency achieved higher lead-to-appointment conversion, faster response times, and meaningful reductions in the cost and time spent on cold calling and status-update calls. ZEBA AI Calls became a virtual extension of the office team.'
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
