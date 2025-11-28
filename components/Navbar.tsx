import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Base styles for the nav container
  const navContainerClasses = `
    fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
    ${isScrolled ? 'pt-6' : 'pt-6'}
  `;

  // Base styles for the inner nav element
  // Removed bg-gradient-to-b from-black/80 to-transparent from the non-scrolled state
  const navInnerClasses = `
    flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
    ${isScrolled 
      ? 'w-[90%] max-w-4xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
      : 'w-full bg-transparent py-4 px-6 md:px-12 border-transparent'}
  `;

  const NavLink = ({ children }: { children: React.ReactNode }) => (
    <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1 group">
      {children}
    </a>
  );

  return (
    <>
      <nav className={navContainerClasses}>
        <div className={navInnerClasses}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group z-50">
            <div className={`relative w-6 h-6 rounded-full bg-white overflow-hidden flex items-center justify-center transition-transform duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
               <div className="w-full h-[1px] bg-black rotate-45 transform origin-center scale-150"></div>
               <div className="absolute w-[1px] h-full bg-black -rotate-45 transform origin-center scale-150 left-[45%]"></div>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">Zeba</span>
          </a>

          {/* Desktop Links - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <NavLink>Process</NavLink>
            <NavLink>Solutions <ChevronDown size={12} className="text-gray-500 group-hover:text-white transition-colors" /></NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>Company</NavLink>
          </div>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#" 
              className={`
                text-sm font-medium transition-all duration-300 rounded-full flex items-center gap-2
                ${isScrolled 
                  ? 'bg-white text-black px-5 py-2 hover:bg-gray-200' 
                  : 'bg-white text-black px-6 py-2.5 hover:bg-gray-100'}
              `}
            >
              Talk to us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-1"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6 rounded-full bg-white overflow-hidden flex items-center justify-center">
                 <div className="w-full h-[1px] bg-black rotate-45 transform origin-center scale-150"></div>
                 <div className="absolute w-[1px] h-full bg-black -rotate-45 transform origin-center scale-150 left-[45%]"></div>
              </div>
              <span className="text-xl font-semibold text-white">Zeba</span>
            </div>
            <button 
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-2xl font-light">
            {['Process', 'Solutions', 'Pricing', 'Company'].map((item, index) => (
              <a 
                key={item} 
                href="#" 
                className="flex items-center justify-between group border-b border-white/10 pb-4"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="group-hover:pl-2 transition-all duration-300">{item}</span>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="mt-auto">
             <button className="w-full bg-white text-black py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors">
                Talk to us
             </button>
             <p className="mt-6 text-center text-xs text-gray-500 uppercase tracking-widest">
                Zeba Calls AI © 2024
             </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;