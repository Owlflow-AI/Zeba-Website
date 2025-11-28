import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import { Twitter, Linkedin, Github } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <Solutions />
        <Features />
        <Testimonials />
        <CaseStudies />
        <FAQ />
        <FinalCTA />
      </main>
      
      <footer className="py-12 border-t border-white/10 bg-black text-gray-400">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                    <div className="w-2 h-0.5 bg-black rotate-45"></div>
                </div>
                <span className="text-white font-medium tracking-tight">Zeba Calls AI</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm">
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
                <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>

            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
            </div>
        </div>
        <p className="text-center text-xs mt-8 opacity-40">© 2024 Zeba Calls AI Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;