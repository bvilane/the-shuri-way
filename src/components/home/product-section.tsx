import { memo } from 'react';
import { PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dashboardMockup from '@/assets/dashboard-mockup.jpg';

function ProductSection() {
  const features = [
    {
      label: 'Lodge dashboard',
      dotColor: 'bg-[#1B4332]',
    },
    {
      label: 'Trip builder',
      dotColor: 'bg-[#A7FFD9]',
    },
    {
      label: 'Traveler booking screen',
      dotColor: 'bg-[#DAB785]',
    },
  ];

  const stats = [
    {
      number: '50+',
      label: 'Partner Lodges Ready',
      color: 'text-[#1B4332]',
    },
    {
      number: '10+',
      label: 'Tour Operators Waiting',
      color: 'text-[#A7FFD9]',
    },
    {
      number: '1000+',
      label: 'Travelers Interested',
      color: 'text-[#DAB785]',
    },
    { number: '20+', label: 'Countries Covered', color: 'text-[#1B4332]' },
  ];

  return (
    <section id="product" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl leading-tight font-bold text-[#1B4332] sm:text-4xl lg:text-5xl">
            What makes Shuri Way smarter?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            See how Shuri Way connects the dots — from lodge calendars to client
            quotes.
          </p>
        </div>

        {/* Enhanced Feature Card: Meet Shuri AI */}
        <div className="mx-auto mb-16 max-w-2xl">
          <div className="group rounded-2xl border-2 border-[#1B4332]/20 bg-gray-50 p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#1B4332] hover:bg-gray-100 hover:shadow-xl">
            <div className="mb-6 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-[#1B4332]/30 bg-white text-4xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#1B4332]">
                🧠
              </div>
            </div>
            <h3 className="mb-4 text-xl font-bold text-[#1B4332] transition-colors duration-300 lg:text-2xl">
              Meet Shuri AI
            </h3>
            <p className="text-base leading-relaxed text-gray-600 lg:text-lg">
              Safari's first intelligent assistant — helping everyone plan,
              sell, and book smarter.
            </p>
            {/* Accent line */}
            <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-[#1B4332] transition-all duration-300 group-hover:w-20" />
          </div>
        </div>

        {/* Enhanced Product Showcase */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Enhanced UI Mockup */}
          <div className="group relative order-2 lg:order-1">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#A7FFD9]/10 to-[#DAB785]/10 opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-70"></div>
            <div className="relative rounded-2xl border-2 border-[#A7FFD9]/30 bg-gradient-to-br from-[#A7FFD9]/5 to-[#DAB785]/5 p-4 shadow-md transition-all duration-500 hover:border-[#A7FFD9] hover:shadow-xl">
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
                    <span className="text-lg font-medium text-[#1B4332] transition-colors duration-300 group-hover:text-[#1B4332]/80">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Enhanced Description */}
              <p className="text-base leading-relaxed text-gray-600 lg:text-lg">
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
                  className="group rounded-2xl border border-[#1B4332]/20 bg-gradient-to-r from-[#1B4332] to-[#1B4332]/90 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-[#1B4332]/90 hover:to-[#1B4332] hover:shadow-xl"
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
                className={`mb-2 text-2xl font-bold transition-all duration-300 group-hover:scale-110 lg:text-3xl ${stat.color}`}
              >
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-600 lg:text-base">
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
