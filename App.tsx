import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Languages from './components/Languages';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Terms from './components/Terms';
import { Linkedin, Instagram } from 'lucide-react';

const App: React.FC = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 overflow-x-hidden w-full" role="application">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="overflow-x-hidden w-full">
        <Hero />
        <StatsSection />
        <div id="solutions">
          <Solutions />
        </div>
        <Languages />
        <div id="features">
          <Features />
        </div>
        <div id="case-studies">
          <CaseStudies />
        </div>
        <Process />
        <div id="faqs">
          <FAQ />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
      </main>
      
      <footer className="py-12 sm:py-16 border-t border-white/10 bg-black text-gray-400 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">

            <div className="flex items-center gap-3">
              <img
                src="/whatsapp_image_2025-11-30_at_19.23.46-removebg-preview.png"
                alt="Zeba AI Logo"
                className="h-8 sm:h-10 w-auto"
              />
              <span className="text-white font-semibold tracking-tight text-lg sm:text-xl">Zeba AI</span>
            </div>

            <nav className="flex flex-wrap gap-6 sm:gap-8 text-sm">
              <a
                href="#features"
                className="hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Features
              </a>
              <a
                href="#solutions"
                className="hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Solutions
              </a>
              <a
                href="#case-studies"
                className="hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Case Studies
              </a>
              <a
                href="#faqs"
                className="hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                FAQs
              </a>
              <button
                onClick={() => setIsTermsOpen(true)}
                className="hover:text-white transition-colors"
              >
                Terms
              </button>
            </nav>

            <div className="flex gap-5">
              <a
                href="https://www.instagram.com/zebaglobalai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/zeba-global-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@zebaglobalai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center justify-center"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-xs opacity-50">© 2025 Zeba AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Terms isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
};

export default App;