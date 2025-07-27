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
      className="relative min-h-screen overflow-hidden pt-16 sm:pt-20 lg:pt-10"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1508333409359-027beab53750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="African Safari Landscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/70 to-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid min-h-[calc(100vh-4rem)] items-center sm:min-h-[calc(100vh-5rem)] lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 lg:pr-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Plan, Book, &<br />
                <span className="bg-gradient-to-r from-[#A7FFD9] to-[#DAB785] bg-clip-text text-transparent">
                  Manage Safaris
                </span>
              </h1>

              <div className="text-xl font-light text-white/90 sm:text-2xl md:text-3xl lg:text-4xl">
                Supercharged by AI
              </div>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
              A smart co-pilot transforming how lodges and tour operators manage
              bookings, build itineraries, and connect directly with guests.
            </p>

            <div className="flex">
              <Button
                onClick={scrollToWaitlist}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#DAB785] to-[#DAB785]/90 px-6 py-4 text-base font-semibold text-[#1B4332] shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#DAB785]/90 hover:to-[#DAB785]/80 hover:shadow-2xl hover:shadow-[#DAB785]/25 sm:px-8 sm:py-6 sm:text-lg"
              >
                <div className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transition-transform duration-700 group-hover:translate-x-full"></div>
                <span className="relative flex items-center gap-2 sm:gap-3">
                  Join the Waitlist
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                </span>
              </Button>
            </div>
          </div>

          <div className="mt-8 flex justify-center sm:mt-12 lg:mt-0 lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl p-2 sm:p-3">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
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

              <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 transform gap-2 sm:-bottom-12 sm:gap-3">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300 sm:h-3',
                      index === currentSlide
                        ? 'w-6 bg-[#A7FFD9] shadow-lg sm:w-8'
                        : 'w-2 bg-white/40 hover:bg-white/60 sm:w-3',
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
