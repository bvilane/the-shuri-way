import { memo } from 'react';

function PromiseSection() {
  const roles = [
    {
      emoji: '🛖',
      title: 'Lodge Owners',
      description: 'Get direct bookings, manage guests, and grow smarter.',
      bgClass: 'bg-savanna-green/10 hover:bg-savanna-green/20',
      borderClass: 'border-savanna-green/30 hover:border-savanna-green',
      textColorClass: 'group-hover:text-savanna-green',
      accentClass: 'bg-savanna-green',
    },
    {
      emoji: '🧭',
      title: 'Tour Operators',
      description: 'Build trips faster, quote cleaner, and wow your clients.',
      bgClass: 'bg-earth-gold/10 hover:bg-earth-gold/20',
      borderClass: 'border-earth-gold/30 hover:border-earth-gold',
      textColorClass: 'group-hover:text-earth-gold',
      accentClass: 'bg-earth-gold',
    },
    {
      emoji: '🌍',
      title: 'Travelers',
      description: 'Discover, customize, and book unforgettable journeys.',
      bgClass: 'bg-sunset-orange/10 hover:bg-sunset-orange/20',
      borderClass: 'border-sunset-orange/30 hover:border-sunset-orange',
      textColorClass: 'group-hover:text-sunset-orange',
      accentClass: 'bg-sunset-orange',
    },
    {
      emoji: '🚐',
      title: 'Service Providers',
      description: "Get found and booked by the industry's best.",
      bgClass: 'bg-dusk-brown/10 hover:bg-dusk-brown/20',
      borderClass: 'border-dusk-brown/30 hover:border-dusk-brown',
      textColorClass: 'group-hover:text-dusk-brown',
      accentClass: 'bg-dusk-brown',
    },
  ];

  return (
    <section id="promise" className="bg-sand-beige/30 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-safari text-deep-charcoal mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            One platform. Every player.
            <br />
            <span className="text-savanna-green">Total safari harmony.</span>
          </h2>
          <p className="text-dusk-brown mx-auto max-w-4xl text-lg leading-relaxed md:text-xl">
            Shuri Way brings every part of the safari industry into one
            ecosystem — powered by Shuri AI to help you plan faster, sell
            smarter, and personalize like never before
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`group rounded-2xl border-2 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-8 ${role.bgClass} ${role.borderClass}`}
            >
              <div className="mb-6 flex items-center justify-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-xl border-2 bg-white/90 text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white ${role.borderClass}`}
                >
                  {role.emoji}
                </div>
              </div>

              <h3
                className={`font-safari text-deep-charcoal mb-4 text-xl font-bold transition-colors duration-300 lg:text-2xl ${role.textColorClass}`}
              >
                {role.title}
              </h3>

              <p className="text-dusk-brown text-base leading-relaxed lg:text-lg">
                {role.description}
              </p>

              <div
                className={`mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20 ${role.accentClass}`}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-savanna-green/10 hover:bg-savanna-green/20 border-savanna-green/30 hover:border-savanna-green inline-flex items-center rounded-2xl border-2 px-8 py-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <span className="mr-3 text-2xl">🌍</span>
            <span className="text-deep-charcoal text-base font-semibold transition-colors duration-300 md:text-lg">
              Connecting Africa's Safari Industry
            </span>
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-8 opacity-60">
          {['🦁', '🐘', '🦒', '🦓', '🦏'].map((animal, index) => (
            <div
              key={index}
              className="cursor-pointer text-3xl transition-all duration-300 hover:scale-125 hover:opacity-100"
              style={{
                filter: 'sepia(20%) saturate(120%) hue-rotate(15deg)',
                animationDelay: `${index * 200}ms`,
              }}
            >
              {animal}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(PromiseSection);
