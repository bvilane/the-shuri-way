import { memo } from 'react';

function PromiseSection() {
  const roles = [
    {
      emoji: '🛖',
      title: 'Lodge Owners',
      description: 'Get direct bookings, manage guests, and grow smarter.',
      bgClass: 'bg-gray-50 hover:bg-gray-100',
      borderClass: 'border-[#1B4332]/30 hover:border-[#1B4332]',
      textColorClass: 'group-hover:text-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
    },
    {
      emoji: '🧭',
      title: 'Tour Operators',
      description: 'Build trips faster, quote cleaner, and wow your clients.',
      bgClass: 'bg-[#A7FFD9]/10 hover:bg-[#A7FFD9]/20',
      borderClass: 'border-[#A7FFD9]/60 hover:border-[#A7FFD9]',
      textColorClass: 'group-hover:text-[#1B4332]',
      accentClass: 'bg-[#A7FFD9]',
    },
    {
      emoji: '🌍',
      title: 'Travelers',
      description: 'Discover, customize, and book unforgettable journeys.',
      bgClass: 'bg-[#DAB785]/10 hover:bg-[#DAB785]/20',
      borderClass: 'border-[#DAB785]/60 hover:border-[#DAB785]',
      textColorClass: 'group-hover:text-[#1B4332]',
      accentClass: 'bg-[#DAB785]',
    },
    {
      emoji: '🚐',
      title: 'Service Providers',
      description: "Get found and booked by the industry's best.",
      bgClass: 'bg-gray-50 hover:bg-gray-100',
      borderClass: 'border-[#1B4332]/30 hover:border-[#1B4332]',
      textColorClass: 'group-hover:text-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
    },
  ];

  return (
    <section id="promise" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl leading-tight font-bold text-[#1B4332] sm:text-4xl lg:text-5xl">
            One platform. Every player.
            <br />
            <span className="text-[#1B4332]">Total safari harmony.</span>
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Shuri Way brings every part of the safari industry into one
            ecosystem — powered by Shuri AI to help you plan faster, sell
            smarter, and personalize like never before
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`group rounded-2xl border-2 p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-8 ${role.bgClass} ${role.borderClass}`}
            >
              <div className="mb-6 flex items-center justify-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-xl border-2 bg-white text-3xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${role.borderClass}`}
                >
                  {role.emoji}
                </div>
              </div>

              <h3
                className={`mb-4 text-xl font-bold text-[#1B4332] transition-colors duration-300 lg:text-2xl ${role.textColorClass}`}
              >
                {role.title}
              </h3>

              <p className="text-base leading-relaxed text-gray-600 lg:text-lg">
                {role.description}
              </p>

              <div
                className={`mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20 ${role.accentClass}`}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center rounded-2xl border-2 border-[#1B4332]/20 bg-gray-50 px-8 py-6 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#1B4332] hover:bg-gray-100">
            <span className="mr-3 text-2xl">🌍</span>
            <span className="text-base font-semibold text-[#1B4332] transition-colors duration-300 md:text-lg">
              Connecting Africa's Safari Industry
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(PromiseSection);
