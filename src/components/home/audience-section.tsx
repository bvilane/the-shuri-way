import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

function AudienceSection() {
  const audiences = [
    {
      id: 'lodges',
      image:
        'https://images.unsplash.com/photo-1644780400761-6a59d1268062?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Safari Lodge Management',
      title: 'Take control of your bookings and guest experiences',
      subtitle: 'FOR LODGES',
      description:
        'Seamless dashboard that helps your lodge run smarter — from guest CRM to upselling experiences.',
      aiFeature:
        'AI suggests optimal pricing and predicts guest preferences to maximize revenue',
      features: [
        'Real-time Availability Management',
        'Direct Booking Engine',
        'Guest Insights & Analytics',
      ],
      bgClass: 'bg-white hover:bg-gray-50',
      borderClass: 'border-gray-200 hover:border-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
    },
    {
      id: 'operators',
      image:
        'https://images.unsplash.com/photo-1489628443677-552b17700861?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Tour Operator Planning',
      title: 'Build multi-lodge itineraries in minutes — not hours',
      subtitle: 'FOR TOUR OPERATORS',
      description:
        'Drag, drop, and quote beautiful custom trips with real-time availability and integrated transport options.',
      aiFeature:
        "AI crafts perfect itineraries and instant quotes tailored to each client's dreams",
      features: [
        'Visual Itinerary Builder',
        'Real-time Pricing Engine',
        'Client Relationship Tools',
      ],
      bgClass: 'bg-white hover:bg-[#A7FFD9]/5',
      borderClass: 'border-gray-200 hover:border-[#A7FFD9]',
      accentClass: 'bg-[#A7FFD9]',
    },
    {
      id: 'travelers',
      image:
        'https://images.unsplash.com/photo-1568888539200-ea13741b9e4d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Safari Travelers Experience',
      title: 'Design your dream safari or book ready-made experiences',
      subtitle: 'FOR TRAVELERS',
      description:
        "Choose from curated experiences or build your own adventure connecting directly with Africa's iconic lodges.",
      aiFeature:
        'AI creates your perfect safari adventure based on your style, budget, and bucket list',
      features: [
        'Curated Safari Experiences',
        'Lodge & Guide Comparisons',
        'Seamless Booking Flow',
      ],
      bgClass: 'bg-white hover:bg-[#DAB785]/5',
      borderClass: 'border-gray-200 hover:border-[#DAB785]',
      accentClass: 'bg-[#DAB785]',
    },
    {
      id: 'providers',
      image:
        'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0',
      alt: 'Safari Service Providers',
      title: 'Get discovered and booked by industry leaders',
      subtitle: 'FOR SERVICE PROVIDERS',
      description:
        'Shuttle companies, guides, and specialists get listed and booked as part of full safari experiences.',
      aiFeature:
        'AI matches your services with perfect trips and optimizes your route efficiency',
      features: [
        'Service Marketplace Listing',
        'Integrated Trip Packages',
        'Verified Provider Program',
      ],
      bgClass: 'bg-white hover:bg-gray-50',
      borderClass: 'border-gray-200 hover:border-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
    },
  ];

  return (
    <section id="audience" className="bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl leading-tight font-bold text-[#1B4332] sm:text-4xl lg:text-5xl">
            Built for everyone in
            <br />
            <span className="text-[#1B4332]">the safari ecosystem</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            No matter your role in safari, Shuri Way has tools designed
            specifically for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {audiences.map((audience) => (
            <div
              key={audience.id}
              className={`group overflow-hidden rounded-2xl border shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${audience.bgClass} ${audience.borderClass}`}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={audience.image}
                  alt={audience.alt}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1B4332] backdrop-blur-sm">
                    {audience.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="mb-3 text-xl font-bold text-[#1B4332] lg:text-2xl">
                  {audience.title}
                </h3>

                <p className="mb-4 text-base leading-relaxed text-gray-600">
                  {audience.description}
                </p>

                {/* AI Feature Highlight */}
                <div className="mb-6 rounded-xl border border-[#A7FFD9]/20 bg-gradient-to-r from-[#A7FFD9]/10 to-[#DAB785]/10 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#A7FFD9] to-[#DAB785]">
                      <span className="text-xs font-bold text-white">AI</span>
                    </div>
                    <p className="text-sm leading-relaxed font-medium text-[#1B4332]">
                      {audience.aiFeature}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {audience.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm font-medium text-gray-600"
                    >
                      <div
                        className={`h-2 w-2 rounded-full ${audience.accentClass}`}
                      ></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Accent line */}
                <div
                  className={`mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-16 ${audience.accentClass}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-gray-600">
            Ready to transform how you work in safari?
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('cta');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group rounded-2xl border border-[#1B4332]/20 bg-gradient-to-r from-[#1B4332] to-[#1B4332]/90 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-[#1B4332]/90 hover:to-[#1B4332] hover:shadow-xl"
          >
            <span className="flex items-center gap-3">
              Join the Revolution
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default memo(AudienceSection);
