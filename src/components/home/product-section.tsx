import { memo } from 'react';
import { PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dashboardMockup from '@/assets/dashboard-mockup.jpg';

function ProductSection() {
  return (
    <section id="product" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-safari text-foreground mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            A sneak peek into
            <br />
            <span className="text-primary">how it all works.</span>
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg leading-relaxed md:text-xl">
            See how Shuri Way connects the dots — from lodge calendars to client
            quotes.
          </p>

          {/* Optional Video Demo */}
          <Button
            variant="outline"
            size="lg"
            className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 mb-12 transition-all duration-300"
          >
            <PlayCircle className="mr-2" size={20} />
            Watch Demo (Coming Soon)
          </Button>
        </div>

        {/* Product Showcase */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* UI Mockup */}
          <div className="group relative order-2 lg:order-1">
            <div className="from-primary/20 to-accent/20 absolute inset-0 rounded-3xl bg-gradient-to-r opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-30"></div>
            <div className="border-primary/10 from-primary/5 to-accent/5 hover:border-primary/20 hover:shadow-primary/10 relative rounded-2xl border bg-gradient-to-br p-4 transition-all duration-500 hover:shadow-lg">
              <img
                src={dashboardMockup}
                alt="Shuri Way Dashboard - Lodge calendars, trip builder, booking screens"
                className="h-auto w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {/* Feature Highlights */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-primary mr-4 h-3 w-3 rounded-full"></div>
                  <span className="text-foreground text-lg font-medium">
                    Lodge dashboard
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-accent mr-4 h-3 w-3 rounded-full"></div>
                  <span className="text-foreground text-lg font-medium">
                    Trip builder
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary mr-4 h-3 w-3 rounded-full"></div>
                  <span className="text-foreground text-lg font-medium">
                    Traveler booking screen
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-base leading-relaxed lg:text-lg">
                Everything safari operators, lodges, and travelers need —
                unified in one beautiful, intuitive platform that just works.
              </p>

              {/* CTA */}
              <div className="pt-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById('cta');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-primary/25 hover:shadow-primary/30 group rounded-xl bg-gradient-to-r px-8 py-3 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="flex items-center gap-2">
                    Get Early Access
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {[
            { number: '50+', label: 'Partner Lodges Ready' },
            { number: '10+', label: 'Tour Operators Waiting' },
            { number: '1000+', label: 'Travelers Interested' },
            { number: '20+', label: 'Countries Covered' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-safari text-primary mb-2 text-2xl font-bold lg:text-3xl">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm lg:text-base">
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
