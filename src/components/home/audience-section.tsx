import { memo } from 'react';
import { Button } from '@/components/ui/button';
import {
  Building,
  Users,
  Globe,
  Truck,
  ArrowRight,
  Calendar,
  DollarSign,
  UserCheck,
  Map,
  CreditCard,
  Shield,
  Search,
  Star,
  CheckCircle,
} from 'lucide-react';

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
      ctaButtons: [
        { text: 'Manage Availability' },
        { text: 'Sell Directly' },
        { text: 'Know Your Guests' },
      ],
      gradient: 'from-primary/10 to-primary/5',
      borderColor: 'border-primary/20',
      hoverBorder: 'hover:border-primary/40',
    },
    {
      id: 'operators',
      icon: Users,
      emoji: '🧭',
      title: 'Build multi-lodge itineraries in minutes — not hours.',
      subtitle: 'FOR TOUR OPERATORS',
      description:
        'Drag, drop, and quote beautiful custom trips with real-time lodge availability and integrated transport options. No more spreadsheets. No more guesswork.',
      ctaButtons: [
        { text: 'Multi-stop Itinerary Builder' },
        { text: 'Instant Pricing Tools' },
        { text: 'Client CRM' },
      ],
      gradient: 'from-accent/10 to-accent/5',
      borderColor: 'border-accent/20',
      hoverBorder: 'hover:border-accent/40',
    },
    {
      id: 'travelers',
      icon: Globe,
      emoji: '🌍',
      title: 'Design your dream safari. Or book a ready-made one.',
      subtitle: 'FOR TRAVELERS',
      description:
        "Choose from curated experiences or build your own adventure. Shuri Way lets you connect directly with Africa's most iconic lodges and guides.",
      ctaButtons: [
        { text: 'Discover Experiences' },
        { text: 'Compare Lodges' },
        { text: 'Book Seamlessly' },
      ],
      gradient: 'from-primary/10 to-primary/5',
      borderColor: 'border-primary/20',
      hoverBorder: 'hover:border-primary/40',
    },
    {
      id: 'providers',
      icon: Truck,
      emoji: '🚐',
      title: 'Be where the bookings happen.',
      subtitle: 'FOR SERVICE PROVIDERS',
      description:
        'Shuri Way helps shuttle companies, guides, and specialists get listed, discovered, and booked as part of full safari experiences.',
      ctaButtons: [
        { text: 'Register Your Business' },
        { text: 'Be Part of Trips' },
        { text: 'Get Verified & Reviewed' },
      ],
      gradient: 'from-accent/10 to-accent/5',
      borderColor: 'border-accent/20',
      hoverBorder: 'hover:border-accent/40',
    },
  ];

  return (
    <section id="audience" className="bg-muted/30 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-safari text-foreground mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Built for everyone in
            <br />
            <span className="text-primary">the safari ecosystem</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
            No matter your role in safari, Shuri Way has tools designed
            specifically for you.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8">
          {audiences.map((audience, index) => (
            <div
              key={audience.id}
              className={`group bg-gradient-to-br ${audience.gradient} rounded-2xl border ${audience.borderColor} ${audience.hoverBorder} hover:shadow-primary/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-8`}
            >
              <div className="relative">
                {/* Header */}
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/50 text-2xl transition-transform duration-300 group-hover:scale-110">
                    {audience.emoji}
                  </div>
                  <span className="text-primary text-sm font-bold tracking-wide uppercase">
                    {audience.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-safari text-foreground mb-4 text-xl leading-tight font-bold lg:text-2xl">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 text-base leading-relaxed lg:text-lg">
                  {audience.description}
                </p>

                {/* Micro CTAs */}
                <div className="space-y-3">
                  {audience.ctaButtons.map((cta, ctaIndex) => (
                    <div
                      key={ctaIndex}
                      className="text-foreground flex items-center rounded-lg bg-white/40 px-4 py-3 text-sm font-medium transition-all duration-300 group-hover:translate-x-1 hover:bg-white/60"
                      style={{ transitionDelay: `${ctaIndex * 100}ms` }}
                    >
                      <div className="bg-primary mr-3 h-2 w-2 rounded-full"></div>
                      {cta.text}
                      <ArrowRight
                        size={16}
                        className="ml-auto opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to transform how you work in safari?
          </p>
          <Button
            variant="default"
            size="lg"
            onClick={() => {
              const element = document.getElementById('cta');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-primary/25 hover:shadow-primary/30 group rounded-xl bg-gradient-to-r px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="flex items-center gap-2">
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
