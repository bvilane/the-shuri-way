import { memo } from 'react';

function BenefitsSection() {
  const benefits = [
    {
      emoji: '🌍',
      title: 'Pan-African platform',
      gradient: 'from-primary/10 to-primary/5',
      borderColor: 'border-primary/20',
      hoverBorder: 'hover:border-primary/40',
    },
    {
      emoji: '💼',
      title: 'Designed for the Safari Industry by people in it',
      gradient: 'from-accent/10 to-accent/5',
      borderColor: 'border-accent/20',
      hoverBorder: 'hover:border-accent/40',
    },
    {
      emoji: '🔗',
      title: 'Connects all parts of the chain',
      gradient: 'from-primary/10 to-primary/5',
      borderColor: 'border-primary/20',
      hoverBorder: 'hover:border-primary/40',
    },
    {
      emoji: '🔒',
      title: 'Secure, reliable, and scalable',
      gradient: 'from-accent/10 to-accent/5',
      borderColor: 'border-accent/20',
      hoverBorder: 'hover:border-accent/40',
    },
    {
      emoji: '🧠',
      title:
        'Powered by Shuri AI — intelligent trip suggestions, pricing support, and guest personalization',
      gradient: 'from-primary/10 to-accent/10',
      borderColor: 'border-primary/20',
      hoverBorder: 'hover:border-primary/40',
    },
    {
      emoji: '🕒',
      title: 'Saves time across the chain',
      gradient: 'from-accent/10 to-primary/10',
      borderColor: 'border-accent/20',
      hoverBorder: 'hover:border-accent/40',
    },
    {
      emoji: '📈',
      title: 'Increases booking conversion and revenue',
      gradient: 'from-primary/10 to-accent/10',
      borderColor: 'border-primary/20',
      hoverBorder: 'hover:border-primary/40',
    },
    {
      emoji: '🚀',
      title: "Launching soon — you don't want to miss it",
      gradient: 'from-primary/10 to-primary/5',
      borderColor: 'border-primary/20',
      hoverBorder: 'hover:border-primary/40',
    },
  ];

  return (
    <section
      id="benefits"
      className="from-muted/30 to-background bg-gradient-to-b py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-safari text-foreground mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Built by people who live this industry.
            <br />
            <span className="text-primary">
              Backed by people who want to grow it.
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-4xl text-lg leading-relaxed md:text-xl">
            Shuri Way isn't just another booking platform. It's a revolution
            designed from the ground up for safari.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${benefit.gradient} rounded-2xl border ${benefit.borderColor} ${benefit.hoverBorder} hover:shadow-primary/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-8`}
            >
              {/* Emoji Icon */}
              <div className="mb-6 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/50 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/70">
                  {benefit.emoji}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-safari text-foreground text-center text-lg leading-tight font-bold lg:text-xl">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Badge */}
        <div className="mt-16 text-center">
          <div className="from-primary/10 to-accent/10 border-primary/20 inline-flex items-center rounded-full border bg-gradient-to-r px-8 py-4">
            <span className="text-foreground text-base font-semibold md:text-lg">
              🚀 Ready to transform safari with us?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(BenefitsSection);
