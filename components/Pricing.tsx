import React from 'react';
import { Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Pricing: React.FC = () => {
  return (
    <section className="bg-black py-20 sm:py-24 md:py-28 lg:py-32 border-t border-white/5 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">

        <ScrollReveal>
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">

          {/* Starter Plan */}
          <ScrollReveal delay={100}>
            <div className="relative bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                  Starter Plan
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl sm:text-6xl font-light text-white">£549</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                <p className="text-gray-400 text-sm sm:text-base">
                  Perfect for small to medium businesses getting started with AI calling
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm sm:text-base">200 included minutes</p>
                    <p className="text-gray-500 text-xs sm:text-sm">£0.16 per extra minute</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-white text-sm sm:text-base">Unlimited assistants</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-white text-sm sm:text-base">Unlimited outbound campaigns</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-white text-sm sm:text-base">20 parallel calls</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-white text-sm sm:text-base">CRM integration</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-white text-sm sm:text-base">Automations</p>
                </div>
              </div>

              <a
                href="https://cal.com/zeba-global-ai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-black text-center py-4 rounded-full text-base font-medium hover:bg-gray-200 transition-all hover:scale-[1.02]"
              >
                Subscribe now
              </a>
            </div>
          </ScrollReveal>

          {/* Enterprise Plan */}
          <ScrollReveal delay={200}>
            <div className="relative bg-gradient-to-b from-white/10 to-white/[0.02] border-2 border-white/20 rounded-3xl p-8 sm:p-10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white text-black text-xs font-medium rounded-full uppercase tracking-wider">
                Most Popular
              </div>

              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                  Enterprise Plan
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl sm:text-5xl font-light text-white">Custom pricing</span>
                </div>
                <p className="text-gray-400 text-sm sm:text-base">
                  Tailored for large organizations with high-volume calling needs
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-white text-sm sm:text-base">Custom minute packages</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-white text-sm sm:text-base">Unlimited assistants</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-white text-sm sm:text-base">Unlimited outbound campaigns</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-white text-sm sm:text-base">500 parallel calls</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-white text-sm sm:text-base">10 cloned voices</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-white text-sm sm:text-base">100,000 no code platform runs monthly</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-white text-sm sm:text-base">Dedicated account manager</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-white text-sm sm:text-base">Priority support</p>
                </div>
              </div>

              <a
                href="https://cal.com/zeba-global-ai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-black text-center py-4 rounded-full text-base font-medium hover:bg-gray-200 transition-all hover:scale-[1.02]"
              >
                Subscribe now
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              All plans include 24/7 support, regular updates, and access to our full feature set
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pricing;
