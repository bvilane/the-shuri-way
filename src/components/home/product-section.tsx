import { memo } from 'react';
import { PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dashboardMockup from '@/assets/dashboard-mockup.jpg';

function ProductSection() {
  const features = [
    {
      label: 'Lodge dashboard',
      dotColor: 'bg-savanna-green',
    },
    {
      label: 'Trip builder',
      dotColor: 'bg-earth-gold',
    },
    {
      label: 'Traveler booking screen',
      dotColor: 'bg-sunset-orange',
    },
  ];

  const stats = [
    {
      number: '50+',
      label: 'Partner Lodges Ready',
      color: 'text-savanna-green',
    },
    {
      number: '10+',
      label: 'Tour Operators Waiting',
      color: 'text-earth-gold',
    },
    {
      number: '1000+',
      label: 'Travelers Interested',
      color: 'text-sunset-orange',
    },
    { number: '20+', label: 'Countries Covered', color: 'text-dusk-brown' },
  ];

  return (
    <section id="product" className="bg-sand-beige/40 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-safari text-deep-charcoal mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            What makes Shuri Way smarter?
          </h2>
          <p className="text-dusk-brown mx-auto mb-8 max-w-3xl text-lg leading-relaxed md:text-xl">
            See how Shuri Way connects the dots — from lodge calendars to client
            quotes.
          </p>
        </div>

        {/* Enhanced Feature Card: Meet Shuri AI */}
        <div className="mx-auto mb-16 max-w-2xl">
          <div className="group border-savanna-green/30 bg-savanna-green/10 hover:bg-savanna-green/15 hover:border-savanna-green rounded-2xl border-2 p-8 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex items-center justify-center">
              <div className="border-savanna-green/30 group-hover:border-savanna-green flex h-16 w-16 items-center justify-center rounded-xl border-2 bg-white/90 text-4xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white">
                🧠
              </div>
            </div>
            <h3 className="font-safari text-deep-charcoal group-hover:text-savanna-green mb-4 text-xl font-bold transition-colors duration-300 lg:text-2xl">
              Meet Shuri AI
            </h3>
            <p className="text-dusk-brown text-base leading-relaxed lg:text-lg">
              Safari's first intelligent assistant — helping everyone plan,
              sell, and book smarter.
            </p>
            {/* Accent line */}
            <div className="bg-savanna-green mx-auto mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20" />
          </div>
        </div>

        {/* Enhanced Product Showcase */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Enhanced UI Mockup */}
          <div className="group relative order-2 lg:order-1">
            <div className="from-savanna-green/10 to-earth-gold/10 absolute inset-0 rounded-3xl bg-gradient-to-r opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-70"></div>
            <div className="border-earth-gold/20 from-earth-gold/5 to-sunset-orange/5 hover:border-earth-gold relative rounded-2xl border-2 bg-gradient-to-br p-4 backdrop-blur-sm transition-all duration-500 hover:shadow-xl">
              <img
                src={dashboardMockup}
                alt="Shuri Way Dashboard - Lodge calendars, trip builder, booking screens"
                className="h-auto w-full rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {/* Enhanced Feature Highlights */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="group flex items-center">
                    <div
                      className={`mr-4 h-3 w-3 rounded-full transition-all duration-300 group-hover:scale-125 ${feature.dotColor}`}
                    ></div>
                    <span className="text-deep-charcoal group-hover:text-dusk-brown text-lg font-medium transition-colors duration-300">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Enhanced Description */}
              <p className="text-dusk-brown text-base leading-relaxed lg:text-lg">
                Everything safari operators, lodges, and travelers need —
                unified in one beautiful, intuitive platform that just works.
              </p>

              {/* Enhanced CTA */}
              <div className="pt-4">
                <Button
                  onClick={() => {
                    const element = document.getElementById('cta');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group from-savanna-green to-savanna-green/90 hover:from-savanna-green/90 hover:to-savanna-green border-savanna-green/30 rounded-2xl border bg-gradient-to-r px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="flex items-center gap-2">
                    Get Early Access
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Platform Stats */}
        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center">
              <div
                className={`font-safari mb-2 text-2xl font-bold transition-all duration-300 group-hover:scale-110 lg:text-3xl ${stat.color}`}
              >
                {stat.number}
              </div>
              <div className="text-dusk-brown text-sm font-medium lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ProductSection);
