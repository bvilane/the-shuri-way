import { memo } from 'react';

function PartnersSection() {
  const partners = [
    {
      name: 'Shuri Collection',
      logo: '/partners/shuri.webp',
      description: 'Premium safari experiences',
    },
    {
      name: 'Xihare',
      logo: '/partners/xihare.png',
      description: 'Luxury wilderness lodges',
    },
    {
      name: 'Bush Villa Collection',
      logo: '/partners/bush-villa.png',
      description: 'Authentic safari accommodations',
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
    },
  ];

  const testimonials = [
    {
      quote:
        'Finally, a platform that understands the complexity of safari operations. This is exactly what the industry needs.',
      author: 'Sarah Mitchell',
      role: 'Lodge Operations Manager',
      company: 'East African Safari Lodges',
    },
    {
      quote:
        "The multi-lodge itinerary builder alone will save us hours every week. Can't wait for the full launch.",
      author: 'David Kamau',
      role: 'Senior Tour Operator',
      company: 'Kenya Safari Specialists',
    },
    {
      quote:
        'Shuri Way bridges the gap between traditional safari and modern travel technology beautifully.',
      author: 'Emma Thompson',
      role: 'Travel Consultant',
      company: 'African Adventure Co.',
    },
  ];

  return (
    <section id="partners" className="bg-muted/30 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-safari text-foreground mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Trusted by safari pioneers
            <br />
            <span className="text-primary">and rising brands alike.</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
            Leading safari companies are already partnering with us to shape the
            future of the industry.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="mb-20 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group from-primary/5 to-accent/5 border-primary/10 hover:border-primary/20 hover:shadow-primary/5 rounded-2xl border bg-gradient-to-br p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-8"
            >
              {/* Logo Container */}
              <div className="mb-4 flex h-20 items-center justify-center lg:h-24">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain grayscale filter transition-transform duration-300 group-hover:scale-110 hover:grayscale-0"
                />
              </div>

              {/* Partner Info */}
              <h3 className="font-safari text-foreground mb-2 text-lg font-bold lg:text-xl">
                {partner.name}
              </h3>
              <p className="text-muted-foreground text-sm lg:text-base">
                {partner.description}
              </p>

              {/* Sub-brands for Bush Villa Collection */}
              {partner.subBrands && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                  {partner.subBrands.map((sub, subIdx) => (
                    <div key={subIdx} className="flex flex-col items-center">
                      <img
                        src={sub.logo}
                        alt={sub.name + ' logo'}
                        className="border-primary/10 h-10 w-10 rounded-md border bg-white object-contain p-1 shadow-sm"
                      />
                      <span className="text-muted-foreground mt-1 text-xs font-medium">
                        {sub.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group from-primary/5 to-accent/5 border-primary/10 hover:border-primary/20 hover:shadow-primary/5 rounded-2xl border bg-gradient-to-br p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-8"
            >
              {/* Quote */}
              <div className="mb-6">
                <div className="text-accent mb-4 text-3xl">"</div>
                <p className="text-muted-foreground text-base leading-relaxed italic lg:text-lg">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="from-primary to-accent mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r font-semibold text-white">
                  {testimonial.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-foreground font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="from-primary/10 to-accent/10 border-primary/20 inline-flex items-center rounded-full border bg-gradient-to-r px-8 py-4">
            <span className="text-foreground text-base font-semibold md:text-lg">
              Want to be featured as a partner? Join our waitlist
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(PartnersSection);
