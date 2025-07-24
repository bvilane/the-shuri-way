import { memo } from 'react';

function PartnersSection() {
  const partners = [
    {
      name: 'Shuri Collection',
      logo: '/partners/shuri.webp',
      description: 'Premium safari experiences',
      bgClass: 'bg-savanna-green/10 hover:bg-savanna-green/15',
      borderClass: 'border-savanna-green/30 hover:border-savanna-green',
      accentClass: 'bg-savanna-green',
    },
    {
      name: 'Xihare',
      logo: '/partners/xihare.png',
      description: 'Luxury wilderness lodges',
      bgClass: 'bg-earth-gold/10 hover:bg-earth-gold/15',
      borderClass: 'border-earth-gold/30 hover:border-earth-gold',
      accentClass: 'bg-earth-gold',
    },
    {
      name: 'Bush Villa Collection',
      logo: '/partners/bush-villa.png',
      description: 'Authentic safari accommodations',
      bgClass: 'bg-sunset-orange/10 hover:bg-sunset-orange/15',
      borderClass: 'border-sunset-orange/30 hover:border-sunset-orange',
      accentClass: 'bg-sunset-orange',
      subBrands: [
        {
          name: 'Bush Willow',
          logo: '/partners/bush-willow.webp',
        },
        {
          name: 'Ekhaya',
          logo: '/partners/ekhaya.webp',
        },
        {
          name: 'Marula',
          logo: '/partners/marula.webp',
        },
      ],
    },
    {
      name: 'Kelora Bush Camp',
      logo: '/partners/kelora.png',
      description: 'Intimate wildlife experiences',
      bgClass: 'bg-dusk-brown/10 hover:bg-dusk-brown/15',
      borderClass: 'border-dusk-brown/30 hover:border-dusk-brown',
      accentClass: 'bg-dusk-brown',
    },
  ];

  const testimonials = [
    {
      quote:
        'Finally, a platform that understands the complexity of safari operations. This is exactly what the industry needs.',
      author: 'Sarah Mitchell',
      role: 'Lodge Operations Manager',
      company: 'East African Safari Lodges',
      bgClass: 'bg-savanna-green/10 hover:bg-savanna-green/15',
      borderClass: 'border-savanna-green/30 hover:border-savanna-green',
      avatarClass: 'bg-gradient-to-r from-savanna-green to-savanna-green/90',
      companyColor: 'text-savanna-green',
    },
    {
      quote:
        "The multi-lodge itinerary builder alone will save us hours every week. Can't wait for the full launch.",
      author: 'David Kamau',
      role: 'Senior Tour Operator',
      company: 'Kenya Safari Specialists',
      bgClass: 'bg-earth-gold/10 hover:bg-earth-gold/15',
      borderClass: 'border-earth-gold/30 hover:border-earth-gold',
      avatarClass: 'bg-gradient-to-r from-earth-gold to-earth-gold/90',
      companyColor: 'text-earth-gold',
    },
    {
      quote:
        'Shuri Way bridges the gap between traditional safari and modern travel technology beautifully.',
      author: 'Emma Thompson',
      role: 'Travel Consultant',
      company: 'African Adventure Co.',
      bgClass: 'bg-sunset-orange/10 hover:bg-sunset-orange/15',
      borderClass: 'border-sunset-orange/30 hover:border-sunset-orange',
      avatarClass: 'bg-gradient-to-r from-sunset-orange to-sunset-orange/90',
      companyColor: 'text-sunset-orange',
    },
  ];

  return (
    <section id="partners" className="bg-sand-beige/10 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-safari text-deep-charcoal mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Trusted by safari pioneers
            <br />
            <span className="text-savanna-green">and rising brands alike.</span>
          </h2>
          <p className="text-dusk-brown mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
            Leading safari companies are already partnering with us to shape the
            future of the industry.
          </p>
        </div>

        <div className="mb-20 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`group rounded-2xl border-2 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-8 ${partner.bgClass} ${partner.borderClass}`}
            >
              <div className="mb-4 flex h-20 items-center justify-center lg:h-24">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain grayscale filter transition-all duration-300 group-hover:scale-110 hover:grayscale-0"
                />
              </div>

              <h3 className="font-safari text-deep-charcoal mb-2 text-lg font-bold lg:text-xl">
                {partner.name}
              </h3>
              <p className="text-dusk-brown text-sm lg:text-base">
                {partner.description}
              </p>

              {partner.subBrands && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                  {partner.subBrands.map((sub, subIdx) => (
                    <div
                      key={subIdx}
                      className="group/sub flex flex-col items-center"
                    >
                      <img
                        src={sub.logo}
                        alt={sub.name + ' logo'}
                        className="border-sunset-orange/30 group-hover/sub:border-sunset-orange h-10 w-10 rounded-md border-2 bg-white object-contain p-1 shadow-sm transition-all duration-300 group-hover/sub:scale-110"
                      />
                      <span className="text-dusk-brown mt-1 text-xs font-medium">
                        {sub.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div
                className={`mx-auto mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20 ${partner.accentClass}`}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group rounded-2xl border-2 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-8 ${testimonial.bgClass} ${testimonial.borderClass}`}
            >
              <div className="mb-6">
                <div className="text-earth-gold mb-4 text-3xl font-bold">"</div>
                <p className="text-dusk-brown text-base leading-relaxed italic lg:text-lg">
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center">
                <div
                  className={`mr-4 flex h-12 w-12 items-center justify-center rounded-full font-semibold text-white transition-all duration-300 group-hover:scale-110 ${testimonial.avatarClass}`}
                >
                  {testimonial.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-deep-charcoal font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-dusk-brown text-sm">{testimonial.role}</p>
                  <p
                    className={`text-sm font-medium ${testimonial.companyColor}`}
                  >
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-savanna-green/10 hover:bg-savanna-green/15 border-savanna-green/30 hover:border-savanna-green inline-flex items-center rounded-2xl border-2 px-8 py-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <span className="mr-3 text-2xl">🤝</span>
            <span className="text-deep-charcoal text-base font-semibold md:text-lg">
              Want to be featured as a partner? Join our waitlist
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(PartnersSection);
