import React from 'react';
import ScrollReveal from './ScrollReveal';

const Languages: React.FC = () => {
  const upperLanguages = [
    { name: 'Japanese', flag: '🇯🇵' },
    { name: 'Swedish', flag: '🇸🇪' },
    { name: 'Arabic', flag: '🇸🇦' },
    { name: 'Spanish', flag: '🇦🇷' },
    { name: 'Bengali', flag: '🇧🇩' },
    { name: 'French', flag: '🇫🇷' },
    { name: 'German', flag: '🇩🇪' },
    { name: 'Portuguese', flag: '🇵🇹' },
  ];

  const lowerLanguages = [
    { name: 'Italian', flag: '🇮🇹' },
    { name: 'Korean', flag: '🇰🇷' },
    { name: 'Mandarin (China)', flag: '🇨🇳' },
    { name: 'Mandarin (TW)', flag: '🇹🇼' },
    { name: 'Hindi', flag: '🇮🇳' },
    { name: 'Russian', flag: '🇷🇺' },
    { name: 'Turkish', flag: '🇹🇷' },
    { name: 'Dutch', flag: '🇳🇱' },
  ];

  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
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
              <span className="text-3xl sm:text-4xl flag-emoji">{lang.flag}</span>
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
              <span className="text-3xl sm:text-4xl flag-emoji">{lang.flag}</span>
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

        /* Ensure emojis render properly across browsers */
        .flag-emoji {
          font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif;
          font-style: normal;
          font-weight: normal;
          line-height: 1;
          display: inline-block;
        }
      `}</style>
    </section>
  );
};

export default Languages;
