import React from 'react';
import { Share2, User, Globe, MessageSquare, ArrowRightLeft, BarChart3, Database, CalendarCheck, PhoneCall, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Features: React.FC = () => {
  const features = [
    { icon: <Share2 />, title: "Multichannel Outreach", desc: "Reach leads everywhere." },
    { icon: <User />, title: "Human-like AI", desc: "Natural, context-aware." },
    { icon: <Globe />, title: "24/7 Multilingual", desc: "Any time, any language." },
    { icon: <MessageSquare />, title: "Smart Follow-ups", desc: "Automatic re-engagement." },
    { icon: <ArrowRightLeft />, title: "Seamless Handoff", desc: "Instant team transfer." },
    { icon: <BarChart3 />, title: "Real-time Analytics", desc: "Data-driven insights." },
    { icon: <Database />, title: "Custom CRM Integrations", desc: "Sync with your existing systems." },
    { icon: <CalendarCheck />, title: "Automated Appointments", desc: "Calendar integration built-in." },
    { icon: <PhoneCall />, title: "Custom Voicemails & IVR", desc: "Smart detection and routing." },
    { icon: <ShieldCheck />, title: "Enterprise Compliance", desc: "GDPR & HIPAA ready.", mobileOnly: true },
  ];

  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-[#050505] p-6 sm:p-8 md:p-10 hover:bg-[#0a0a0a] transition-colors group ${feature.mobileOnly ? 'lg:hidden' : ''}`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 sm:mb-6 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm group-hover:text-gray-400 transition-colors">{feature.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;