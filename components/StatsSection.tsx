import React, { useEffect, useRef, useState } from 'react';

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Calculator state
  const [supportStaff, setSupportStaff] = useState(5);
  const [avgSalary, setAvgSalary] = useState(50000);
  const [currency, setCurrency] = useState('USD');

  // Currency symbols
  const currencySymbols: { [key: string]: string } = {
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'AED': 'د.إ',
    'SAR': '﷼',
    'INR': '₹',
    'JPY': '¥',
    'AUD': 'A$',
    'CAD': 'C$'
  };

  const currencySymbol = currencySymbols[currency];

  // Calculate savings
  const currentAnnualCost = supportStaff * avgSalary;
  const aiCost = currentAnnualCost * 0.3; // AI reduces costs by 70%
  const annualSavings = currentAnnualCost - aiCost;
  const monthlySavings = annualSavings / 12;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && count1 < 70) {
      const timer = setTimeout(() => {
        setCount1((prev) => Math.min(prev + 2, 70));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isVisible, count1]);

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 max-w-full overflow-x-hidden">
      {/* Top Blur Shadow Effect */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none z-10 blur-sm"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 lg:gap-8 items-start">

          {/* Left Text */}
          <div className={`max-w-md relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-snug text-gray-100">
              Solve your most complex support issues with AI, up and running in just a few days.
            </h2>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12 border-l border-white/10 pl-6 sm:pl-8 lg:pl-16">
            <div className={`flex flex-col gap-2 group transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors">Cost Reduction</span>
              <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter">
                {count1}%
              </span>
            </div>
            <div className={`flex flex-col gap-2 group transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors">Availability</span>
              <span className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-50'}`}>
                24/7
              </span>
            </div>
          </div>

        </div>

        {/* Cost Reduction Calculator */}
        <div className={`mt-16 sm:mt-20 lg:mt-24 max-w-5xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 bg-white/5 backdrop-blur-sm">

            {/* Header */}
            <div className="mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-100 mb-2">
                Calculate Your Savings
              </h3>
              <p className="text-sm sm:text-base text-gray-400 font-light">
                See how much you could save by switching to AI-powered support
              </p>
            </div>

            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">

              {/* Support Staff Input */}
              <div className="flex flex-col gap-3">
                <label className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-500">
                  Support Staff
                </label>
                <input
                  type="number"
                  min="1"
                  value={supportStaff}
                  onChange={(e) => setSupportStaff(Math.max(1, parseInt(e.target.value) || 1))}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-serif text-2xl sm:text-3xl focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              {/* Average Salary Input */}
              <div className="flex flex-col gap-3">
                <label className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-500">
                  Avg. Salary ({currencySymbol})
                </label>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Math.max(0, parseInt(e.target.value) || 0))}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-serif text-2xl sm:text-3xl focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              {/* Currency Selector */}
              <div className="flex flex-col gap-3">
                <label className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-500">
                  Currency
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-serif text-2xl sm:text-3xl focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer"
                >
                  <option value="USD" className="bg-black">$ USD</option>
                  <option value="EUR" className="bg-black">€ EUR</option>
                  <option value="GBP" className="bg-black">£ GBP</option>
                  <option value="AED" className="bg-black">د.إ AED</option>
                  <option value="SAR" className="bg-black">﷼ SAR</option>
                  <option value="INR" className="bg-black">₹ INR</option>
                  <option value="JPY" className="bg-black">¥ JPY</option>
                  <option value="AUD" className="bg-black">A$ AUD</option>
                  <option value="CAD" className="bg-black">C$ CAD</option>
                </select>
              </div>

            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-white/10">

              {/* Current Cost */}
              <div className="flex flex-col gap-2 group">
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors">
                  Current Annual Cost
                </span>
                <span className="font-serif text-3xl sm:text-4xl text-white/60 tracking-tighter">
                  {currencySymbol}{currentAnnualCost.toLocaleString()}
                </span>
              </div>

              {/* AI Cost */}
              <div className="flex flex-col gap-2 group">
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors">
                  With AI
                </span>
                <span className="font-serif text-3xl sm:text-4xl text-white/60 tracking-tighter">
                  {currencySymbol}{aiCost.toLocaleString()}
                </span>
              </div>

              {/* Annual Savings */}
              <div className="flex flex-col gap-2 group">
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors">
                  Annual Savings
                </span>
                <span className="font-serif text-3xl sm:text-4xl text-green-400 tracking-tighter">
                  {currencySymbol}{annualSavings.toLocaleString()}
                </span>
              </div>

              {/* Monthly Savings */}
              <div className="flex flex-col gap-2 group">
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors">
                  Monthly Savings
                </span>
                <span className="font-serif text-3xl sm:text-4xl text-green-400 tracking-tighter">
                  {currencySymbol}{monthlySavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
