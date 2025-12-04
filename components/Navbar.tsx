import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSolutionsClick = () => {
    setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
  };

  const handleDropdownLinkClick = () => {
    setIsSolutionsDropdownOpen(false);
  };

  // Base styles for the nav container
  const navContainerClasses = `
    fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
    ${isScrolled ? 'pt-3' : 'pt-3'}
  `;

  // Base styles for the inner nav element
  // Removed bg-gradient-to-b from-black/80 to-transparent from the non-scrolled state
  const navInnerClasses = `
    flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] relative
    ${isScrolled
      ? 'w-[90%] max-w-4xl backdrop-blur-fallback border border-white/10 rounded-full py-3 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
      : 'w-full bg-transparent py-4 px-6 md:px-12 border-transparent'}
  `;

  const NavLink = ({ children, href = "#" }: { children: React.ReactNode; href?: string }) => (
    <a href={href} className="text-sm font-light text-white hover:text-white/80 transition-colors flex items-center gap-1 group">
      {children}
    </a>
  );

  return (
    <>
      <nav className={navContainerClasses}>
        <div className={navInnerClasses}>
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group z-50" onClick={(e) => { e.preventDefault(); window.location.reload(); }}>
            <img
              src="/whatsapp_image_2025-11-30_at_19.23.46-removebg-preview.png"
              alt="Zeba Logo"
              className={`transition-all duration-500 ${isScrolled ? 'h-8' : 'h-10'}`}
            />
            <span className="text-lg font-light tracking-tight text-white">Zeba</span>
          </a>

          {/* Desktop Links - Centered */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
            <NavLink href="#features">Features</NavLink>
            <div className="relative">
              <button
                onClick={handleSolutionsClick}
                className="text-sm font-light text-white hover:text-white/80 transition-colors flex items-center gap-1 group"
              >
                Solutions <ChevronDown size={12} className={`text-gray-500 group-hover:text-white transition-all ${isSolutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSolutionsDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 backdrop-blur-fallback border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-fade-in duration-200"
                  onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
                >
                  <div className="p-2">
                    <a href="#solutions" onClick={handleDropdownLinkClick} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 text-xs">CS</div>
                      <span className="text-sm text-gray-300 group-hover:text-white">Customer Support</span>
                    </a>
                    <a href="#solutions" onClick={handleDropdownLinkClick} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 text-xs">Fi</div>
                      <span className="text-sm text-gray-300 group-hover:text-white">Finance</span>
                    </a>
                    <a href="#solutions" onClick={handleDropdownLinkClick} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 text-xs">Re</div>
                      <span className="text-sm text-gray-300 group-hover:text-white">Real Estate</span>
                    </a>
                    <a href="#solutions" onClick={handleDropdownLinkClick} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 text-xs">Hc</div>
                      <span className="text-sm text-gray-300 group-hover:text-white">Health Care</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
            <NavLink href="#faqs">FAQs</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#case-studies">Case Studies</NavLink>
          </div>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://calendly.com/zqamar-zebaglobalai/30min"
              target="_blank"
              rel="noopener noreferrer"
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
        className={`fixed inset-0 z-[60] backdrop-blur-fallback transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-12">
            <a href="/" onClick={(e) => { e.preventDefault(); window.location.reload(); }} className="flex items-center gap-2">
              <img
                src="/whatsapp_image_2025-11-30_at_19.23.46-removebg-preview.png"
                alt="Zeba Logo"
                className="h-10"
              />
              <span className="text-xl font-semibold text-white">Zeba</span>
            </a>
            <button 
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-2xl font-light">
            {[
              { label: 'Features', href: '#features' },
              { label: 'Solutions', href: '#solutions' },
              { label: 'FAQs', href: '#faqs' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Case Studies', href: '#case-studies' }
            ].map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between group border-b border-white/10 pb-4"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="group-hover:pl-2 transition-all duration-300">{item.label}</span>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="mt-auto">
             <a href="https://calendly.com/zqamar-zebaglobalai/30min" target="_blank" rel="noopener noreferrer" className="w-full bg-white text-black py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors block text-center">
                Talk to us
             </a>
             <p className="mt-6 text-center text-xs text-gray-500 uppercase tracking-widest">
                Zeba AI © 2025
             </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;