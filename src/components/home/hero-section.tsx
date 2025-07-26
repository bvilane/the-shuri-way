import { memo, useState, useEffect, useCallback } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = ['/hero/1.png', '/hero/2.png', '/hero/3.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
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
      className="relative h-screen overflow-hidden pt-20 lg:pt-10"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1508333409359-027beab53750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="African Safari Landscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/70 to-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid min-h-[calc(100vh-5rem)] items-center lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-8 lg:pr-8">
            <div className="space-y-6">
              <h1 className="text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl xl:text-7xl">
                Plan, Book, &<br />
                <span className="bg-gradient-to-r from-[#A7FFD9] to-[#DAB785] bg-clip-text text-transparent">
                  Manage Safaris
                </span>
              </h1>

              <div className="text-2xl font-light text-white/90 md:text-3xl lg:text-4xl">
                Supercharged by AI
              </div>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              A smart co-pilot transforming how lodges and tour operators manage
              bookings, build itineraries, and connect directly with guests.
            </p>

            <div className="flex">
              <Button
                onClick={scrollToWaitlist}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#DAB785] to-[#DAB785]/90 px-8 py-6 text-lg font-semibold text-[#1B4332] shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#DAB785]/90 hover:to-[#DAB785]/80 hover:shadow-2xl hover:shadow-[#DAB785]/25"
              >
                <div className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transition-transform duration-700 group-hover:translate-x-full"></div>
                <span className="relative flex items-center gap-3">
                  Join the Waitlist
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>

          <div className="mt-12 flex justify-center lg:mt-0 lg:justify-end">
            <div className="relative">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
                  <div className="relative aspect-[16/9] w-[500px] overflow-hidden rounded-xl md:w-[600px] lg:w-[520px] xl:w-[580px]">
                    <div className="relative h-full w-full">
                      {heroImages.map((image, index) => (
                        <div
                          key={index}
                          className={cn(
                            'absolute inset-0 transition-all duration-700 ease-in-out',
                            index === currentSlide
                              ? 'translate-x-0 scale-100 opacity-100'
                              : index < currentSlide
                                ? '-translate-x-full scale-95 opacity-0'
                                : 'translate-x-full scale-95 opacity-0',
                          )}
                        >
                          <img
                            src={image}
                            alt={`Platform Demo ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 transform gap-3">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={cn(
                      'h-3 rounded-full transition-all duration-300',
                      index === currentSlide
                        ? 'w-8 bg-[#A7FFD9] shadow-lg'
                        : 'w-3 bg-white/40 hover:bg-white/60',
                    )}
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
