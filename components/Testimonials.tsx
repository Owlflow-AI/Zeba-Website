import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center text-white mb-10 sm:mb-12 md:mb-16">Hear from Zeba's clients</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1 */}
          <div className="bg-[#0f0f0f] border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 hover:border-white/20 transition-colors">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              "Zeba makes it insanely easy to vet and hire the best support talent around the world. This has been game changing for us."
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Sean Rad" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">Sean Rad</h4>
                <p className="text-gray-500 text-xs sm:text-sm">Former CEO of Tinder</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0f0f0f] border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 hover:border-white/20 transition-colors">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              "We've been using Zeba for large-scale customer outreach, and it's been a total game changer. The customer experience has been exceptional."
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="Dan Westgarth" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">Dan Westgarth</h4>
                <p className="text-gray-500 text-xs sm:text-sm">COO at Deel</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0f0f0f] border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 hover:border-white/20 transition-colors">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              "Prior to Zeba, our support department wasted a lot of time on repetitive calls. Now that we've integrated Zeba, we've saved our team many hours."
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Shane Selinger" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">Shane Selinger</h4>
                <p className="text-gray-500 text-xs sm:text-sm">CEO at GameGrid</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0f0f0f] border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 hover:border-white/20 transition-colors">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              "With Zeba, we reduced our call center staff while still conducting 10,000 calls each month. The team is focused on higher-impact work."
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop" alt="Nathan Sumekh" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">Nathan Sumekh</h4>
                <p className="text-gray-500 text-xs sm:text-sm">COO at LegalSoft</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;