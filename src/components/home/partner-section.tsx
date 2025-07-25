import { memo } from 'react';

function PartnersSection() {
  const partners = [
    {
      name: 'Shuri Collection',
      logo: '/partners/shuri.webp',
      description: 'Premium safari experiences across Africa',
      category: 'Safari Operator',
      bgClass: 'bg-white hover:bg-gray-50',
      borderClass: 'border-gray-200 hover:border-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
    },
    {
      name: 'Xihare',
      logo: '/partners/xihare.png',
      description: 'Luxury wilderness lodges & exclusive experiences',
      category: 'Luxury Lodge',
      bgClass: 'bg-white hover:bg-[#A7FFD9]/5',
      borderClass: 'border-gray-200 hover:border-[#A7FFD9]',
      accentClass: 'bg-[#A7FFD9]',
    },
    {
      name: 'Bush Villa Collection',
      logo: '/partners/bush-villa.png',
      description: 'Authentic safari accommodations & hospitality',
      category: 'Lodge Collection',
      bgClass: 'bg-white hover:bg-[#DAB785]/5',
      borderClass: 'border-gray-200 hover:border-[#DAB785]',
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
      description: 'Intimate wildlife experiences & conservation',
      category: 'Bush Camp',
      bgClass: 'bg-white hover:bg-gray-50',
      borderClass: 'border-gray-200 hover:border-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
    },
  ];

  return (
    <section id="partners" className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl leading-tight font-bold text-[#1B4332] sm:text-4xl lg:text-5xl">
            Trusted by safari pioneers
            <br />
            <span className="text-[#1B4332]">and rising brands alike.</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Leading safari companies are already partnering with us to shape the
            future of the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-2xl border shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${partner.bgClass} ${partner.borderClass}`}
            >
              <div className="relative bg-gray-50/50 p-8">
                <div className="flex h-20 items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-105"
                    style={{ filter: 'grayscale(20%)' }}
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg leading-tight font-bold text-[#1B4332]">
                  {partner.name}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {partner.description}
                </p>

                {partner.subBrands && (
                  <div className="mb-4">
                    <p className="mb-3 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                      Portfolio Brands
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      {partner.subBrands.map((sub, subIdx) => (
                        <div key={subIdx} className="group/sub relative">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white transition-all duration-300 group-hover/sub:scale-110 group-hover/sub:border-[#DAB785] group-hover/sub:shadow-md">
                            <img
                              src={sub.logo}
                              alt={`${sub.name} logo`}
                              className="max-h-6 max-w-6 object-contain"
                            />
                          </div>
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover/sub:opacity-100">
                            <span className="rounded bg-gray-900 px-2 py-1 text-xs whitespace-nowrap text-white">
                              {sub.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div
                  className={`h-1 w-8 rounded-full transition-all duration-300 group-hover:w-12 ${partner.accentClass}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(PartnersSection);
