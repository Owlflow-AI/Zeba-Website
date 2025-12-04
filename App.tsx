import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Languages from './components/Languages';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import { Twitter, Linkedin, Github } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20" role="application">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <StatsSection />
        <div id="solutions">
          <Solutions />
        </div>
        <div id="features">
          <Features />
        </div>
        <Languages />
        <div id="case-studies">
          <CaseStudies />
        </div>
        <div id="faqs">
          <FAQ />
        </div>
        <FinalCTA />
      </main>
      
      <footer className="py-8 sm:py-10 md:py-12 border-t border-white/10 bg-black text-gray-400">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center">
                    <div className="w-1.5 sm:w-2 h-0.5 bg-black rotate-45"></div>
                </div>
                <span className="text-white font-medium tracking-tight text-sm sm:text-base">Zeba Calls AI</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm">
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
                <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>

            <div className="flex gap-4 sm:gap-6">
                <a href="#" className="hover:text-white transition-colors"><Twitter size={18} className="sm:w-5 sm:h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} className="sm:w-5 sm:h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Github size={18} className="sm:w-5 sm:h-5" /></a>
            </div>
        </div>
        <p className="text-center text-[10px] sm:text-xs mt-6 sm:mt-8 opacity-40">© 2024 Zeba Calls AI Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;