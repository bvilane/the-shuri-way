import { memo } from 'react';

function BenefitsSection() {
  const benefits = [
    {
      emoji: '🌍',
      title: 'Pan-African platform',
      bgClass: 'bg-white hover:bg-gray-50',
      borderClass: 'border-[#1B4332]/30 hover:border-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
      titleHoverClass: 'group-hover:text-[#1B4332]',
    },
    {
      emoji: '💼',
      title: 'Designed for the Safari Industry by people in it',
      bgClass: 'bg-[#A7FFD9]/10 hover:bg-[#A7FFD9]/20',
      borderClass: 'border-[#A7FFD9]/60 hover:border-[#A7FFD9]',
      accentClass: 'bg-[#A7FFD9]',
      titleHoverClass: 'group-hover:text-[#1B4332]',
    },
    {
      emoji: '🔗',
      title: 'Connects all parts of the chain',
      bgClass: 'bg-[#DAB785]/10 hover:bg-[#DAB785]/20',
      borderClass: 'border-[#DAB785]/60 hover:border-[#DAB785]',
      accentClass: 'bg-[#DAB785]',
      titleHoverClass: 'group-hover:text-[#1B4332]',
    },
    {
      emoji: '🔒',
      title: 'Secure, reliable, and scalable',
      bgClass: 'bg-white hover:bg-gray-50',
      borderClass: 'border-[#1B4332]/30 hover:border-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
      titleHoverClass: 'group-hover:text-[#1B4332]',
    },
    {
      emoji: '🧠',
      title:
        'Powered by Shuri AI — intelligent trip suggestions, pricing support, and guest personalization',
      bgClass: 'bg-white hover:bg-gray-50',
      borderClass: 'border-[#1B4332]/30 hover:border-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
      titleHoverClass: 'group-hover:text-[#1B4332]',
    },
    {
      emoji: '🕒',
      title: 'Saves time across the chain',
      bgClass: 'bg-[#A7FFD9]/10 hover:bg-[#A7FFD9]/20',
      borderClass: 'border-[#A7FFD9]/60 hover:border-[#A7FFD9]',
      accentClass: 'bg-[#A7FFD9]',
      titleHoverClass: 'group-hover:text-[#1B4332]',
    },
    {
      emoji: '📈',
      title: 'Increases booking conversion and revenue',
      bgClass: 'bg-[#DAB785]/10 hover:bg-[#DAB785]/20',
      borderClass: 'border-[#DAB785]/60 hover:border-[#DAB785]',
      accentClass: 'bg-[#DAB785]',
      titleHoverClass: 'group-hover:text-[#1B4332]',
    },
    {
      emoji: '🚀',
      title: "Launching soon — you don't want to miss it",
      bgClass: 'bg-white hover:bg-gray-50',
      borderClass: 'border-[#1B4332]/30 hover:border-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
      titleHoverClass: 'group-hover:text-[#1B4332]',
    },
  ];

  return (
    <section id="benefits" className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl leading-tight font-bold text-[#1B4332] sm:text-4xl lg:text-5xl">
            Built by people who live this industry.
            <br />
            <span className="text-[#1B4332]">
              Backed by people who want to grow it.
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Shuri Way isn't just another booking platform. It's a revolution
            designed from the ground up for safari.
          </p>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group rounded-2xl border-2 p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-8 ${benefit.bgClass} ${benefit.borderClass}`}
            >
              {/* Enhanced Emoji Icon */}
              <div className="mb-6 flex items-center justify-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-xl border-2 bg-white text-3xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${benefit.borderClass}`}
                >
                  {benefit.emoji}
                </div>
              </div>

              {/* Enhanced Title */}
              <h3
                className={`text-center text-lg leading-tight font-bold text-[#1B4332] transition-colors duration-300 lg:text-xl ${benefit.titleHoverClass}`}
              >
                {benefit.title}
              </h3>

              {/* Accent line */}
              <div
                className={`mx-auto mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20 ${benefit.accentClass}`}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Bottom Badge */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center rounded-2xl border-2 border-[#1B4332]/20 bg-white px-8 py-6 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#1B4332] hover:bg-gray-50">
            <span className="mr-3 text-2xl">🚀</span>
            <span className="text-base font-semibold text-[#1B4332] md:text-lg">
              Ready to transform safari with us?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(BenefitsSection);
