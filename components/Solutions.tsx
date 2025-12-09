import React, { useState } from 'react';
import { LayoutGrid, Mic, Activity, ArrowRight, Play } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import RetellCallWidget from './RetellCallWidget';

const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('customersupport');

  const tabs = [
    {
      id: 'customersupport',
      label: 'Customer Support',
      description: 'Real-time customer service and support via voice.',
      agentId: 'agent_11a7615f2731a7960a5687ab63',
      containerId: 'retell-call-container-support'
    },
    {
      id: 'finance',
      label: 'Finance',
      description: 'Secure account management, fraud alerts, and transaction history.',
      agentId: 'agent_61c64519a33c3970979102c5ba',
      containerId: 'retell-call-container-finance'
    },
    {
      id: 'realestate',
      label: 'Real Estate',
      description: 'Qualify leads, schedule viewings, and answer property queries instantly.',
      agentId: 'agent_6fba2ce568a62f24411777904d',
      containerId: 'retell-call-container-realestate'
    },
    {
      id: 'healthcare',
      label: 'Health Care',
      description: 'Patient intake, appointment scheduling, and post-care follow-ups.',
      agentId: 'agent_41fbdae26dcec2082747955359',
      containerId: 'retell-call-container-dental'
    },
  ];

  return (
    <section className="relative bg-black py-16 sm:py-20 md:py-24 overflow-hidden border-t border-white/5 w-full max-w-full">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-900/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-full">
        {/* Top Section: Heading on Left, Subheading & CTA on Right */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 mb-12 sm:mb-14 lg:mb-16">
          <ScrollReveal className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 text-blue-500">
               <LayoutGrid size={18} className="sm:w-5 sm:h-5" />
               <span className="text-xs sm:text-sm font-mono uppercase tracking-wider sm:tracking-widest text-gray-400">Solutions</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">Industry specific AI</h2>
          </ScrollReveal>

          <ScrollReveal delay={200} className="lg:w-1/2 flex flex-col justify-end">
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
              Tailored voice agents that understand the nuances of your business sector.
            </p>
            <div>
              <button
                onClick={() => {
                  const widget = document.querySelector('.demo-widget');
                  if (widget) {
                    widget.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Check our demos
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Section: Use Cases on Left, Widget on Right (Same Line) */}
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-16 items-start lg:items-center">
          {/* Left: Use Cases Navigation */}
          <ScrollReveal delay={400} className="lg:w-[45%]">
            <div className="flex flex-col gap-0 border-l border-white/10 relative">
               {/* Animated active indicator */}
               <div
                  className="absolute left-[-1px] w-[1px] h-10 sm:h-12 bg-white transition-all duration-300 ease-out"
                  style={{
                      top: `${tabs.findIndex(t => t.id === activeTab) * (window.innerWidth < 640 ? 92 : 108) + (window.innerWidth < 640 ? 20 : 24)}px`
                  }}
               ></div>

              {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`pl-6 sm:pl-8 py-5 sm:py-6 cursor-pointer group transition-all duration-300 ${activeTab === tab.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <h3 className="text-lg sm:text-xl font-medium mb-1.5 sm:mb-2 text-white">{tab.label}</h3>
                {activeTab === tab.id && (
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xs animate-in fade-in slide-in-from-left-2 duration-300">
                    {tab.description}
                  </p>
                )}
              </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Widget Mockup */}
          <ScrollReveal delay={600} className="lg:w-[55%] w-full">
            <div className="demo-widget flex items-center justify-center lg:justify-start relative lg:pl-12">
              <RetellCallWidget
                agentId={tabs.find(t => t.id === activeTab)?.agentId || ''}
                agentName={tabs.find(t => t.id === activeTab)?.label || ''}
                containerId={tabs.find(t => t.id === activeTab)?.containerId || ''}
              />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default Solutions;
