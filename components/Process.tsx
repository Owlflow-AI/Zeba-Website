import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Rocket, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Process: React.FC = () => {
  const [activeVisual, setActiveVisual] = useState(0);

  const visuals = [
    {
      title: 'Real Estate Agent',
      stats: [
        { label: 'Calls Made', value: '1,240', color: 'emerald' },
        { label: 'Leads Qualified', value: '342', color: 'blue' },
        { label: 'Appointments Set', value: '89', color: 'orange' }
      ]
    },
    {
      title: 'E-commerce Support',
      stats: [
        { label: 'Support Tickets', value: '2,156', color: 'blue' },
        { label: 'Avg Response Time', value: '12s', color: 'emerald' },
        { label: 'Satisfaction Rate', value: '98%', color: 'orange' }
      ]
    },
    {
      title: 'Healthcare Appointment',
      stats: [
        { label: 'Appointments Booked', value: '456', color: 'orange' },
        { label: 'Reminders Sent', value: '1.2k', color: 'blue' },
        { label: 'No-Show Rate', value: '3%', color: 'emerald' }
      ]
    },
    {
      title: 'Financial Services',
      stats: [
        { label: 'Loan Applications', value: '567', color: 'blue' },
        { label: 'Fraud Alerts', value: '23', color: 'orange' },
        { label: 'Processing Time', value: '2.5m', color: 'emerald' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVisual((prev) => (prev + 1) % visuals.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">

        {/* Left Content */}
        <div className="lg:w-1/2">
          <ScrollReveal>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
              Our Process
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
              Choose the demo you like or share your custom agent idea
            </p>
          </ScrollReveal>

          <div className="space-y-5">
            <ScrollReveal delay={100}>
              <div className="flex gap-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone className="text-white" size={18} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1">1. Intro Call</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Explore compatibility, discuss your needs, and select a demo.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex gap-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Calendar className="text-white" size={18} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1">2. Strategy</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Receive a proposal covering deliverables, strategy, and pricing.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex gap-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Rocket className="text-white" size={18} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1">3. Implementation</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    We build your solution within few days with regular updates.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="mt-6">
                <a
                  href="https://cal.com/zeba-global-ai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-2.5 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors text-sm"
                >
                  Book Your Call Now
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right Visual */}
        <div className="lg:w-1/2 relative">
          <ScrollReveal delay={200}>
            <div className="relative">
              {/* Background ambient light */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>

              {/* Main Canvas Card */}
              <div className="relative z-10 w-full rounded-xl border border-white/10 bg-gray-900/40 backdrop-blur-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 border-b border-white/5 flex items-center justify-between bg-[#0a0a0a]">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 animate-pulse"></div>
                    <span className="font-medium text-white text-sm sm:text-base">
                      {visuals[activeVisual].title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">1 hour ago</span>
                    <CheckCircle2 size={16} className="text-emerald-500" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 sm:p-5 md:p-6 bg-[#141414] relative min-h-[280px] sm:min-h-[300px]">
                  {/* Background Grid */}
                  <div
                    className="absolute inset-0 z-0 opacity-[0.03]"
                    style={{
                      backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                      backgroundSize: '40px 40px'
                    }}
                  ></div>

                  {/* Stats Cards */}
                  <div className="relative z-10 space-y-3">
                    <div className="mb-4">
                      <h3 className="text-white/70 text-xs uppercase tracking-wider mb-3">Performance Metrics</h3>
                    </div>

                    {visuals[activeVisual].stats.map((stat, index) => (
                      <div
                        key={index}
                        className={`bg-[#1C1C1C] rounded-lg border ${getColorClasses(stat.color)} p-3 sm:p-4 transition-all duration-500 hover:scale-[1.02]`}
                        style={{
                          animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-xs">{stat.label}</span>
                          <span className={`text-lg sm:text-xl md:text-2xl font-bold ${stat.color === 'emerald' ? 'text-emerald-400' : stat.color === 'blue' ? 'text-blue-400' : 'text-orange-400'}`}>
                            {stat.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Progress Indicator */}
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex gap-1.5">
                    {visuals.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === activeVisual
                            ? 'w-8 bg-white'
                            : 'w-1.5 bg-white/20'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
