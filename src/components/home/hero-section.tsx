import { memo, useState, useEffect, useCallback } from 'react';
import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-safari-bg.jpg';

function HeroSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    'This changes everything for us as a lodge',
    'Finally an easier way to build trips',
    'The future of safari booking is here',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWaitlist = useCallback(() => {
    const element = document.getElementById('cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 lg:pt-24"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="African Safari Landscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="border-accent/30 bg-accent/20 mb-8 inline-flex items-center gap-2 rounded-full border px-6 py-3 backdrop-blur-sm">
            <span className="text-accent text-sm font-semibold md:text-base">
              Coming Soon
            </span>
            <ChevronRight className="text-accent h-4 w-4 md:h-5 md:w-5" />
          </div>

          <h1 className="font-safari mb-5 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
            Safari, Simplified.
            <br />
            <span className="text-accent">Supercharged by AI.</span>
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-lg font-medium text-white/90 md:text-xl">
            The all-in-one platform for travelers, lodges, tour operators — and
            the intelligent system behind them.
          </p>

          <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            Meet Shuri AI — your smart co-pilot for planning, booking, and
            managing everything safari.
          </p>

          <div className="mb-8 flex items-center justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={scrollToWaitlist}
              className="from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-primary/25 hover:shadow-primary/30 group h-full rounded-xl bg-gradient-to-r px-6 py-3 text-base font-semibold whitespace-nowrap shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                Join the Waitlist
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 md:h-5 md:w-5" />
              </span>
            </Button>
          </div>

          <p className="mb-10 text-sm text-white/70 md:text-base">
            Experience the first AI-powered platform for the safari ecosystem.
          </p>

          <div className="mb-16 flex items-center justify-center">
            <div className="relative flex h-10 items-center">
              <div className="text-sm text-white/90 italic transition-all duration-500 ease-in-out md:text-base">
                "{testimonials[currentTestimonial]}"
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50">
          <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white/70"></div>
        </div>
      </div>
    </section>
  );
}

export default memo(HeroSection);
