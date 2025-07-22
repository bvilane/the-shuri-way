import { memo } from 'react';

function PromiseSection() {
  const roles = [
    {
      emoji: '🛖',
      title: 'Lodge Owners',
      description: 'Get direct bookings, manage guests, and grow smarter.',
      gradient: 'from-primary/10 to-primary/5',
      borderColor: 'border-primary/20',
      hoverBorder: 'hover:border-primary/40',
    },
    {
      emoji: '🧭',
      title: 'Tour Operators',
      description: 'Build trips faster, quote cleaner, and wow your clients.',
      gradient: 'from-accent/10 to-accent/5',
      borderColor: 'border-accent/20',
      hoverBorder: 'hover:border-accent/40',
    },
    {
      emoji: '🌍',
      title: 'Travelers',
      description: 'Discover, customize, and book unforgettable journeys.',
      gradient: 'from-primary/10 to-primary/5',
      borderColor: 'border-primary/20',
      hoverBorder: 'hover:border-primary/40',
    },
    {
      emoji: '🚐',
      title: 'Service Providers',
      description: "Get found and booked by the industry's best.",
      gradient: 'from-accent/10 to-accent/5',
      borderColor: 'border-accent/20',
      hoverBorder: 'hover:border-accent/40',
    },
  ];

  return (
    <section id="promise" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-safari text-foreground mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            One platform. Every player.
            <br />
            <span className="text-primary">Total safari harmony.</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-4xl text-lg leading-relaxed md:text-xl">
            Shuri Way brings every part of the safari industry into one
            ecosystem — powered by Shuri AI to help you plan faster, sell
            smarter, and personalize like never before
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${role.gradient} rounded-2xl border ${role.borderColor} ${role.hoverBorder} hover:shadow-primary/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-8`}
            >
              {/* Emoji Icon */}
              <div className="mb-6 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/50 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/70">
                  {role.emoji}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-safari text-foreground mb-4 text-xl font-bold lg:text-2xl">
                {role.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-base leading-relaxed lg:text-lg">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Badge */}
        <div className="mt-16 text-center">
          <div className="from-primary/10 to-accent/10 border-primary/20 inline-flex items-center rounded-full border bg-gradient-to-r px-8 py-4">
            <span className="text-foreground text-base font-semibold md:text-lg">
              🌍 Connecting Africa's Safari Industry
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(PromiseSection);
