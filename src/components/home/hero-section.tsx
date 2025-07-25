import { memo, useState, useEffect, useCallback } from 'react';
import { Star, ArrowRight, ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-safari-bg.jpg';

function HeroSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: 'This changes everything for us as a lodge',
      author: 'Safari Lodge Owner',
      role: 'East Africa',
    },
    {
      quote: 'Finally an easier way to build trips',
      author: 'Tour Operator',
      role: 'Southern Africa',
    },
    {
      quote: 'The future of safari booking is here',
      author: 'Travel Consultant',
      role: 'Kenya',
    },
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
          src="https://images.unsplash.com/photo-1508333409359-027beab53750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="African Safari Landscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/70 to-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="border-accent/30 bg-accent/20 mb-8 inline-flex items-center gap-2 rounded-full border px-6 py-3 backdrop-blur-sm">
            <span className="text-accent text-sm font-semibold md:text-base">
              Coming Soon
            </span>
          </div>

          <h1 className="mb-8 text-5xl leading-tight font-bold text-white md:text-6xl lg:text-7xl">
            Safari,{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Simplified
            </span>
            <br />
            <span className="text-4xl font-light text-white/90 md:text-5xl lg:text-6xl">
              Supercharged by AI
            </span>
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-xl font-medium text-white/95 md:text-2xl">
            The all-in-one platform for travelers, lodges, tour operators — and
            the intelligent system behind them.
          </p>

          {/* Enhanced CTA Button */}
          <div className="mb-8 flex items-center justify-center">
            <Button
              onClick={scrollToWaitlist}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-amber-500/25"
            >
              <div className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 group-hover:translate-x-full"></div>
              <span className="relative flex items-center gap-3">
                Join the Waitlist
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          <div className="mb-16 flex items-center justify-center">
            <div className="relative">
              <div className="flex min-h-[80px] max-w-md items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500">
                <div className="text-center">
                  <div className="mb-2 text-lg text-white/95 italic transition-all duration-500 ease-in-out md:text-xl">
                    "{testimonials[currentTestimonial].quote}"
                  </div>
                  <div className="text-sm text-white/70">
                    <span className="font-medium">
                      {testimonials[currentTestimonial].author}
                    </span>
                    {' • '}
                    <span>{testimonials[currentTestimonial].role}</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Dots */}
              <div className="mt-4 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'w-6 bg-amber-400'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(HeroSection);
