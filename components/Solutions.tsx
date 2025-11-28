import React, { useState } from 'react';
import { LayoutGrid, Mic, Activity, ArrowRight, Play } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trading');

  const tabs = [
    { id: 'trading', label: 'Trading', description: 'Real-time market updates and trade execution support via voice.' },
    { id: 'fintech', label: 'Fintech', description: 'Secure account management, fraud alerts, and transaction history.' },
    { id: 'realestate', label: 'Real Estate', description: 'Qualify leads, schedule viewings, and answer property queries instantly.' },
    { id: 'healthcare', label: 'Health Care', description: 'Patient intake, appointment scheduling, and post-care follow-ups.' },
  ];

  return (
    <section className="relative bg-black py-16 sm:py-20 md:py-24 overflow-hidden border-t border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-900/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12">
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
              <button className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors">
                Book a demo
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
            <div className="flex items-center justify-center lg:justify-start relative lg:pl-12">
              <div className="relative w-full max-w-md aspect-[4/5] sm:aspect-square bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 overflow-hidden">

                  {/* Background Grid */}
                  <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                  {/* Widget Content */}
                  <div className="relative z-10 flex flex-col items-center text-center w-full">
                      <div className="mb-6 sm:mb-8">
                          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-gray-500 bg-white/5 px-2.5 sm:px-3 py-1 rounded-full border border-white/5">
                              {tabs.find(t => t.id === activeTab)?.label} Agent
                          </span>
                      </div>

                      {/* Mic Interaction Area */}
                      <div className="relative group cursor-pointer">
                          {/* Pulsing Rings */}
                          <div className="absolute inset-0 bg-white/5 rounded-full animate-ping opacity-20 duration-1000"></div>
                          <div className="absolute inset-[-10px] sm:inset-[-12px] bg-white/5 rounded-full animate-pulse opacity-40 delay-75"></div>

                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-gray-800 to-black border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:scale-105 transition-transform duration-300">
                              <Mic size={28} className="sm:w-8 sm:h-8 text-white group-hover:text-blue-400 transition-colors" />
                          </div>
                      </div>

                      {/* Audio Waveform Visualization */}
                      <div className="h-12 sm:h-16 flex items-center gap-1 mt-8 sm:mt-10">
                          {[...Array(12)].map((_, i) => (
                               <div
                                  key={i}
                                  className="w-1 sm:w-1.5 bg-white/20 rounded-full animate-[pulse_1s_ease-in-out_infinite]"
                                  style={{
                                      height: `${Math.random() * 100}%`,
                                      animationDelay: `${i * 0.1}s`
                                  }}
                               ></div>
                          ))}
                      </div>

                      <p className="mt-6 sm:mt-8 text-gray-400 text-xs sm:text-sm font-light">
                          Click to speak with our AI
                      </p>

                      {/* Mock Chat Overlay */}
                      <div className="absolute bottom-[-100px] left-0 right-0 p-4 opacity-0 animate-[slideUp_0.5s_ease-out_forwards_0.2s]">
                           <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/5">
                               <div className="flex gap-2 items-center">
                                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                   <span className="text-xs text-gray-300">Agent Connected</span>
                               </div>
                           </div>
                      </div>
                  </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default Solutions;
