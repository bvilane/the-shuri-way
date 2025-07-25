import { memo } from 'react';
import { PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ProductSection() {
  const platforms = [
    {
      id: 'lodge-manager',
      image: '/demo/lodge-manager.png',
      title: 'Lodge Dashboard',
      subtitle: 'FOR LODGE OWNERS',
      description:
        'Comprehensive management suite for bookings, guests, and revenue optimization.',
      features: [
        'Real-time Availability',
        'Guest Management',
        'Revenue Analytics',
      ],
      accentClass: 'bg-[#1B4332]',
      borderClass: 'border-gray-200 hover:border-[#1B4332]',
      bgClass: 'bg-white hover:bg-gray-50',
    },
    {
      id: 'tour-operator',
      image: '/demo/tour-operator.png',
      title: 'Trip Builder',
      subtitle: 'FOR TOUR OPERATORS',
      description:
        'Visual itinerary creation with drag-and-drop functionality and instant pricing.',
      features: ['Visual Planning', 'Instant Quoting', 'Multi-lodge Booking'],
      accentClass: 'bg-[#A7FFD9]',
      borderClass: 'border-gray-200 hover:border-[#A7FFD9]',
      bgClass: 'bg-white hover:bg-[#A7FFD9]/5',
    },
    {
      id: 'traveller',
      image: '/demo/traveller.png',
      title: 'Traveler Portal',
      subtitle: 'FOR TRAVELERS',
      description:
        'Intuitive booking experience with personalized recommendations and comparisons.',
      features: ['Curated Experiences', 'Easy Comparisons', 'Seamless Booking'],
      accentClass: 'bg-[#DAB785]',
      borderClass: 'border-gray-200 hover:border-[#DAB785]',
      bgClass: 'bg-white hover:bg-[#DAB785]/5',
    },
  ];

  return (
    <section id="product" className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl leading-tight font-bold text-[#1B4332] sm:text-4xl lg:text-5xl">
            What makes Shuri Way smarter?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            See how Shuri Way connects the dots — from lodge calendars to client
            quotes.
          </p>
        </div>

        {/* Meet Shuri AI - Compact Version */}
        <div className="mx-auto mb-12 max-w-4xl">
          <div className="group rounded-2xl border border-[#1B4332]/20 bg-gradient-to-r from-[#A7FFD9]/5 to-[#DAB785]/5 p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg lg:p-8">
            <div className="flex items-center justify-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#A7FFD9] to-[#DAB785] text-sm font-bold text-white">
                AI
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-[#1B4332] lg:text-2xl">
                  Meet Shuri AI
                </h3>
                <p className="text-base text-gray-600 lg:text-lg">
                  Safari's first intelligent assistant — helping everyone plan,
                  sell, and book smarter.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Showcase */}
        <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className={`group overflow-hidden rounded-2xl border shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${platform.bgClass} ${platform.borderClass}`}
            >
              {/* Platform Screenshot */}
              <div className="relative overflow-hidden">
                <img
                  src={platform.image}
                  alt={`${platform.title} - ${platform.description}`}
                  className="h-48 w-full object-cover object-top transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1B4332] backdrop-blur-sm">
                    {platform.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-[#1B4332] lg:text-2xl">
                  {platform.title}
                </h3>

                <p className="mb-4 text-base leading-relaxed text-gray-600">
                  {platform.description}
                </p>

                <div className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm font-medium text-gray-600"
                    >
                      <div
                        className={`h-2 w-2 rounded-full ${platform.accentClass}`}
                      ></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-16 ${platform.accentClass}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16 text-center">
          <Button
            onClick={() => {
              const element = document.getElementById('cta');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group rounded-2xl border border-[#1B4332]/20 bg-gradient-to-r from-[#1B4332] to-[#1B4332]/90 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-[#1B4332]/90 hover:to-[#1B4332] hover:shadow-xl"
          >
            <span className="flex items-center gap-2">
              Get Early Access
              <PlayCircle className="h-5 w-5" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default memo(ProductSection);
