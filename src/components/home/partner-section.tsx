import { memo } from 'react';

function PartnersSection() {
  const partners = [
    {
      name: 'Shuri Collection',
      logo: '/partners/shuri.webp',
      description: 'Premium safari experiences',
      bgClass: 'bg-gray-50 hover:bg-gray-100',
      borderClass: 'border-[#1B4332]/30 hover:border-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
    },
    {
      name: 'Xihare',
      logo: '/partners/xihare.png',
      description: 'Luxury wilderness lodges',
      bgClass: 'bg-[#A7FFD9]/10 hover:bg-[#A7FFD9]/20',
      borderClass: 'border-[#A7FFD9]/60 hover:border-[#A7FFD9]',
      accentClass: 'bg-[#A7FFD9]',
    },
    {
      name: 'Bush Villa Collection',
      logo: '/partners/bush-villa.png',
      description: 'Authentic safari accommodations',
      bgClass: 'bg-[#DAB785]/10 hover:bg-[#DAB785]/20',
      borderClass: 'border-[#DAB785]/60 hover:border-[#DAB785]',
      accentClass: 'bg-[#DAB785]',
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
      bgClass: 'bg-gray-50 hover:bg-gray-100',
      borderClass: 'border-[#1B4332]/30 hover:border-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
    },
  ];

  const testimonials = [
    {
      quote:
        'Finally, a platform that understands the complexity of safari operations. This is exactly what the industry needs.',
      author: 'Sarah Mitchell',
      role: 'Lodge Operations Manager',
      company: 'East African Safari Lodges',
      bgClass: 'bg-gray-50 hover:bg-gray-100',
      borderClass: 'border-[#1B4332]/30 hover:border-[#1B4332]',
      avatarClass: 'bg-gradient-to-r from-[#1B4332] to-[#1B4332]/90',
      companyColor: 'text-[#1B4332]',
    },
    {
      quote:
        "The multi-lodge itinerary builder alone will save us hours every week. Can't wait for the full launch.",
      author: 'David Kamau',
      role: 'Senior Tour Operator',
      company: 'Kenya Safari Specialists',
      bgClass: 'bg-[#A7FFD9]/10 hover:bg-[#A7FFD9]/20',
      borderClass: 'border-[#A7FFD9]/60 hover:border-[#A7FFD9]',
      avatarClass: 'bg-gradient-to-r from-[#A7FFD9] to-[#A7FFD9]/90',
      companyColor: 'text-[#1B4332]',
    },
    {
      quote:
        'Shuri Way bridges the gap between traditional safari and modern travel technology beautifully.',
      author: 'Emma Thompson',
      role: 'Travel Consultant',
      company: 'African Adventure Co.',
      bgClass: 'bg-[#DAB785]/10 hover:bg-[#DAB785]/20',
      borderClass: 'border-[#DAB785]/60 hover:border-[#DAB785]',
      avatarClass: 'bg-gradient-to-r from-[#DAB785] to-[#DAB785]/90',
      companyColor: 'text-[#1B4332]',
    },
  ];

  return (
    <section id="partners" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl leading-tight font-bold text-[#1B4332] sm:text-4xl lg:text-5xl">
            Trusted by safari pioneers
            <br />
            <span className="text-[#1B4332]">and rising brands alike.</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Leading safari companies are already partnering with us to shape the
            future of the industry.
          </p>
        </div>

        <div className="mb-20 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`group rounded-2xl border-2 p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-8 ${partner.bgClass} ${partner.borderClass}`}
            >
              <div className="mb-4 flex h-20 items-center justify-center lg:h-24">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain grayscale filter transition-all duration-300 group-hover:scale-110 hover:grayscale-0"
                />
              </div>

              <h3 className="mb-2 text-lg font-bold text-[#1B4332] lg:text-xl">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600 lg:text-base">
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
                        className="h-10 w-10 rounded-md border-2 border-[#DAB785]/30 bg-white object-contain p-1 shadow-sm transition-all duration-300 group-hover/sub:scale-110 group-hover/sub:border-[#DAB785]"
                      />
                      <span className="mt-1 text-xs font-medium text-gray-600">
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
              className={`group rounded-2xl border-2 p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-8 ${testimonial.bgClass} ${testimonial.borderClass}`}
            >
              <div className="mb-6">
                <div className="mb-4 text-3xl font-bold text-[#1B4332]">"</div>
                <p className="text-base leading-relaxed text-gray-600 italic lg:text-lg">
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
                  <p className="font-semibold text-[#1B4332]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
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
          <div className="inline-flex items-center rounded-2xl border-2 border-[#1B4332]/20 bg-gray-50 px-8 py-6 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#1B4332] hover:bg-gray-100">
            <span className="mr-3 text-2xl">🤝</span>
            <span className="text-base font-semibold text-[#1B4332] md:text-lg">
              Want to be featured as a partner? Join our waitlist
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(PartnersSection);
