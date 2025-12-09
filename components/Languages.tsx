import React from 'react';
import ScrollReveal from './ScrollReveal';

const Languages: React.FC = () => {
  const upperLanguages = [
    { name: 'Japanese', countryCode: 'jp' },
    { name: 'Swedish', countryCode: 'se' },
    { name: 'Arabic', countryCode: 'sa' },
    { name: 'Spanish', countryCode: 'ar' },
    { name: 'Bengali', countryCode: 'bd' },
    { name: 'French', countryCode: 'fr' },
    { name: 'German', countryCode: 'de' },
    { name: 'Portuguese', countryCode: 'pt' },
  ];

  const lowerLanguages = [
    { name: 'Italian', countryCode: 'it' },
    { name: 'Korean', countryCode: 'kr' },
    { name: 'Mandarin (China)', countryCode: 'cn' },
    { name: 'Mandarin (TW)', countryCode: 'tw' },
    { name: 'Hindi', countryCode: 'in' },
    { name: 'Russian', countryCode: 'ru' },
    { name: 'Turkish', countryCode: 'tr' },
    { name: 'Dutch', countryCode: 'nl' },
  ];

  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 border-t border-white/5 overflow-hidden w-full max-w-full">
      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 max-w-full">
        <ScrollReveal>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center text-white">
            Zeba Calls AI speaks 99+ languages<br />and works 24/7
          </h2>
        </ScrollReveal>
      </div>

      {/* Upper Row - Scrolls Left */}
      <div className="relative mb-4 sm:mb-6">
        <div className="flex gap-4 sm:gap-6 animate-scroll-left md:animate-scroll-left-desktop">
          {[...upperLanguages, ...upperLanguages].map((lang, index) => (
            <div
              key={`upper-${index}`}
              className="flex-shrink-0 flex items-center gap-3 sm:gap-4 bg-[#0f0f0f] border border-white/10 rounded-xl sm:rounded-2xl px-6 sm:px-8 py-4 sm:py-5 min-w-[200px] sm:min-w-[240px]"
            >
              <img
                src={`https://flagcdn.com/w40/${lang.countryCode}.png`}
                srcSet={`https://flagcdn.com/w80/${lang.countryCode}.png 2x`}
                alt={`${lang.name} flag`}
                className="w-8 h-6 sm:w-10 sm:h-7 object-cover rounded"
              />
              <span className="text-gray-300 text-base sm:text-lg font-light">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lower Row - Scrolls Right */}
      <div className="relative">
        <div className="flex gap-4 sm:gap-6 animate-scroll-right md:animate-scroll-right-desktop">
          {[...lowerLanguages, ...lowerLanguages].map((lang, index) => (
            <div
              key={`lower-${index}`}
              className="flex-shrink-0 flex items-center gap-3 sm:gap-4 bg-[#0f0f0f] border border-white/10 rounded-xl sm:rounded-2xl px-6 sm:px-8 py-4 sm:py-5 min-w-[200px] sm:min-w-[240px]"
            >
              <img
                src={`https://flagcdn.com/w40/${lang.countryCode}.png`}
                srcSet={`https://flagcdn.com/w80/${lang.countryCode}.png 2x`}
                alt={`${lang.name} flag`}
                className="w-8 h-6 sm:w-10 sm:h-7 object-cover rounded"
              />
              <span className="text-gray-300 text-base sm:text-lg font-light">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Mobile animations - faster speed */
        .animate-scroll-left {
          display: flex;
          animation: scroll-left 10s linear infinite;
        }

        .animate-scroll-right {
          display: flex;
          animation: scroll-right 10s linear infinite;
        }

        /* Desktop animations - normal speed */
        @media (min-width: 768px) {
          .animate-scroll-left-desktop {
            animation: scroll-left 30s linear infinite;
          }

          .animate-scroll-right-desktop {
            animation: scroll-right 30s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Languages;
