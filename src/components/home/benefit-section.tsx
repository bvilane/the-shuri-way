import { memo } from 'react';

function BenefitsSection() {
  const benefits = [
    {
      emoji: '🌍',
      title: 'Pan-African platform',
      bgClass: 'bg-savanna-green/10 hover:bg-savanna-green/15',
      borderClass: 'border-savanna-green/30 hover:border-savanna-green',
      accentClass: 'bg-savanna-green',
      titleHoverClass: 'group-hover:text-savanna-green',
    },
    {
      emoji: '💼',
      title: 'Designed for the Safari Industry by people in it',
      bgClass: 'bg-earth-gold/10 hover:bg-earth-gold/15',
      borderClass: 'border-earth-gold/30 hover:border-earth-gold',
      accentClass: 'bg-earth-gold',
      titleHoverClass: 'group-hover:text-earth-gold',
    },
    {
      emoji: '🔗',
      title: 'Connects all parts of the chain',
      bgClass: 'bg-sunset-orange/10 hover:bg-sunset-orange/15',
      borderClass: 'border-sunset-orange/30 hover:border-sunset-orange',
      accentClass: 'bg-sunset-orange',
      titleHoverClass: 'group-hover:text-sunset-orange',
    },
    {
      emoji: '🔒',
      title: 'Secure, reliable, and scalable',
      bgClass: 'bg-dusk-brown/10 hover:bg-dusk-brown/15',
      borderClass: 'border-dusk-brown/30 hover:border-dusk-brown',
      accentClass: 'bg-dusk-brown',
      titleHoverClass: 'group-hover:text-dusk-brown',
    },
    {
      emoji: '🧠',
      title:
        'Powered by Shuri AI — intelligent trip suggestions, pricing support, and guest personalization',
      bgClass: 'bg-savanna-green/10 hover:bg-savanna-green/15',
      borderClass: 'border-savanna-green/30 hover:border-savanna-green',
      accentClass: 'bg-savanna-green',
      titleHoverClass: 'group-hover:text-savanna-green',
    },
    {
      emoji: '🕒',
      title: 'Saves time across the chain',
      bgClass: 'bg-earth-gold/10 hover:bg-earth-gold/15',
      borderClass: 'border-earth-gold/30 hover:border-earth-gold',
      accentClass: 'bg-earth-gold',
      titleHoverClass: 'group-hover:text-earth-gold',
    },
    {
      emoji: '📈',
      title: 'Increases booking conversion and revenue',
      bgClass: 'bg-sunset-orange/10 hover:bg-sunset-orange/15',
      borderClass: 'border-sunset-orange/30 hover:border-sunset-orange',
      accentClass: 'bg-sunset-orange',
      titleHoverClass: 'group-hover:text-sunset-orange',
    },
    {
      emoji: '🚀',
      title: "Launching soon — you don't want to miss it",
      bgClass: 'bg-dusk-brown/10 hover:bg-dusk-brown/15',
      borderClass: 'border-dusk-brown/30 hover:border-dusk-brown',
      accentClass: 'bg-dusk-brown',
      titleHoverClass: 'group-hover:text-dusk-brown',
    },
  ];

  return (
    <section
      id="benefits"
      className="from-sand-beige/15 to-sand-beige/30 bg-gradient-to-b py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-safari text-deep-charcoal mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Built by people who live this industry.
            <br />
            <span className="text-savanna-green">
              Backed by people who want to grow it.
            </span>
          </h2>
          <p className="text-dusk-brown mx-auto max-w-4xl text-lg leading-relaxed md:text-xl">
            Shuri Way isn't just another booking platform. It's a revolution
            designed from the ground up for safari.
          </p>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group rounded-2xl border-2 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-8 ${benefit.bgClass} ${benefit.borderClass}`}
            >
              {/* Enhanced Emoji Icon */}
              <div className="mb-6 flex items-center justify-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-xl border-2 bg-white/90 text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white ${benefit.borderClass}`}
                >
                  {benefit.emoji}
                </div>
              </div>

              {/* Enhanced Title */}
              <h3
                className={`font-safari text-deep-charcoal text-center text-lg leading-tight font-bold transition-colors duration-300 lg:text-xl ${benefit.titleHoverClass}`}
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
          <div className="bg-savanna-green/10 hover:bg-savanna-green/15 border-savanna-green/30 hover:border-savanna-green inline-flex items-center rounded-2xl border-2 px-8 py-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <span className="mr-3 text-2xl">🚀</span>
            <span className="text-deep-charcoal text-base font-semibold md:text-lg">
              Ready to transform safari with us?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(BenefitsSection);
