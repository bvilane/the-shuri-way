import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Building, Users, Globe, Truck, ArrowRight } from 'lucide-react';

function AudienceSection() {
  const audiences = [
    {
      id: 'lodges',
      icon: Building,
      emoji: '🛖',
      title: 'Take control of your bookings, your experiences, and your brand.',
      subtitle: 'FOR LODGES',
      description:
        'Shuri Way replaces outdated booking tools with a seamless, beautiful dashboard that helps your lodge run smarter — from guest CRM to upselling experiences.',
      aiSubcopy:
        "With Shuri AI, you'll get smart pricing suggestions, guest personalization tips, and automated availability insights — all from your dashboard.",
      ctaButtons: [
        { text: 'Manage Availability' },
        { text: 'Sell Directly' },
        { text: 'Know Your Guests' },
      ],
      bgClass: 'bg-savanna-green/10 hover:bg-savanna-green/15',
      borderClass: 'border-savanna-green/30 hover:border-savanna-green',
      subtitleColor: 'text-savanna-green',
      aiSubcopyColor: 'text-savanna-green',
      dotColor: 'bg-savanna-green',
    },
    {
      id: 'operators',
      icon: Users,
      emoji: '🧭',
      title: 'Build multi-lodge itineraries in minutes — not hours.',
      subtitle: 'FOR TOUR OPERATORS',
      description:
        'Drag, drop, and quote beautiful custom trips with real-time lodge availability and integrated transport options. No more spreadsheets. No more guesswork.',
      aiSubcopy:
        "Let Shuri AI recommend the perfect lodges, auto-generate multi-stop itineraries, and draft quotes in minutes based on your client's needs.",
      ctaButtons: [
        { text: 'Multi-stop Itinerary Builder' },
        { text: 'Instant Pricing Tools' },
        { text: 'Client CRM' },
      ],
      bgClass: 'bg-earth-gold/10 hover:bg-earth-gold/15',
      borderClass: 'border-earth-gold/30 hover:border-earth-gold',
      subtitleColor: 'text-earth-gold',
      aiSubcopyColor: 'text-earth-gold',
      dotColor: 'bg-earth-gold',
    },
    {
      id: 'travelers',
      icon: Globe,
      emoji: '🌍',
      title: 'Design your dream safari. Or book a ready-made one.',
      subtitle: 'FOR TRAVELERS',
      description:
        "Choose from curated experiences or build your own adventure. Shuri Way lets you connect directly with Africa's most iconic lodges and guides.",
      aiSubcopy:
        "Want help planning? Shuri AI can build your dream safari based on your budget, dates, and vibe. Just tell it what you're looking for.",
      ctaButtons: [
        { text: 'Discover Experiences' },
        { text: 'Compare Lodges' },
        { text: 'Book Seamlessly' },
      ],
      bgClass: 'bg-sunset-orange/10 hover:bg-sunset-orange/15',
      borderClass: 'border-sunset-orange/30 hover:border-sunset-orange',
      subtitleColor: 'text-sunset-orange',
      aiSubcopyColor: 'text-sunset-orange',
      dotColor: 'bg-sunset-orange',
    },
    {
      id: 'providers',
      icon: Truck,
      emoji: '🚐',
      title: 'Be where the bookings happen.',
      subtitle: 'FOR SERVICE PROVIDERS',
      description:
        'Shuri Way helps shuttle companies, guides, and specialists get listed, discovered, and booked as part of full safari experiences.',
      aiSubcopy:
        'From routing to package creation, Shuri AI helps providers streamline operations and get discovered by the right people, faster.',
      ctaButtons: [
        { text: 'Register Your Business' },
        { text: 'Be Part of Trips' },
        { text: 'Get Verified & Reviewed' },
      ],
      bgClass: 'bg-dusk-brown/10 hover:bg-dusk-brown/15',
      borderClass: 'border-dusk-brown/30 hover:border-dusk-brown',
      subtitleColor: 'text-dusk-brown',
      aiSubcopyColor: 'text-dusk-brown',
      dotColor: 'bg-dusk-brown',
    },
  ];

  return (
    <section id="audience" className="bg-sand-beige/20 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-safari text-deep-charcoal mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Built for everyone in
            <br />
            <span className="text-savanna-green">the safari ecosystem</span>
          </h2>
          <p className="text-dusk-brown mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
            No matter your role in safari, Shuri Way has tools designed
            specifically for you.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8">
          {audiences.map((audience, index) => (
            <div
              key={audience.id}
              className={`group rounded-2xl border-2 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-8 ${audience.bgClass} ${audience.borderClass}`}
            >
              <div className="relative">
                {/* Header */}
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-white/50 bg-white/90 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-current group-hover:bg-white">
                    {audience.emoji}
                  </div>
                  <span
                    className={`text-sm font-bold tracking-wide uppercase ${audience.subtitleColor}`}
                  >
                    {audience.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-safari text-deep-charcoal mb-4 text-xl leading-tight font-bold lg:text-2xl">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="text-dusk-brown mb-4 text-base leading-relaxed lg:text-lg">
                  {audience.description}
                </p>

                {/* AI Subcopy */}
                <p
                  className={`mb-6 text-sm leading-relaxed font-semibold lg:text-base ${audience.aiSubcopyColor}`}
                >
                  {audience.aiSubcopy}
                </p>

                {/* Micro CTAs */}
                <div className="space-y-3">
                  {audience.ctaButtons.map((cta, ctaIndex) => (
                    <div
                      key={ctaIndex}
                      className="text-deep-charcoal flex items-center rounded-lg border border-white/30 bg-white/60 px-4 py-3 text-sm font-medium transition-all duration-300 group-hover:translate-x-1 hover:border-white/50 hover:bg-white/80"
                      style={{ transitionDelay: `${ctaIndex * 100}ms` }}
                    >
                      <div
                        className={`mr-3 h-2 w-2 rounded-full ${audience.dotColor}`}
                      ></div>
                      {cta.text}
                      <ArrowRight
                        size={16}
                        className="ml-auto opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                  ))}
                </div>

                {/* Accent line */}
                <div
                  className={`mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20 ${audience.dotColor}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-dusk-brown mb-6 text-lg">
            Ready to transform how you work in safari?
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('cta');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group from-savanna-green to-savanna-green/90 hover:from-savanna-green/90 hover:to-savanna-green border-savanna-green/30 rounded-2xl border bg-gradient-to-r px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="flex items-center gap-3">
              Join the Revolution
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-6 opacity-50">
          {['🏛️', '🧭', '🌍', '🚐'].map((icon, index) => (
            <div
              key={index}
              className="cursor-pointer text-2xl transition-all duration-300 hover:scale-125 hover:opacity-100"
              style={{
                filter: 'sepia(15%) saturate(110%) hue-rotate(10deg)',
                animationDelay: `${index * 150}ms`,
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(AudienceSection);
