import { cn } from '@/lib/utils';
import { useState, useEffect, memo, useCallback } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Built For', id: 'audience' },
  { label: 'Product', id: 'product' },
  { label: 'Benefits', id: 'benefits' },
  { label: 'Partners', id: 'partners' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-out',
        isScrolled ? 'bg-white/95 shadow-lg shadow-black/5' : '',
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <div
            className="group flex cursor-pointer items-center transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#A7FFD9]/20 to-[#DAB785]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <img
                  src="/logo.png"
                  alt="The Shuri Way Logo"
                  className="relative h-10 w-10 object-contain transition-all duration-300 sm:h-11 sm:w-11 lg:h-12 lg:w-12"
                />
              </div>

              <div className="ml-3">
                <div
                  className={cn(
                    'text-xl leading-tight font-bold tracking-tight transition-all duration-300 sm:text-xl lg:text-2xl',
                    isScrolled
                      ? 'text-[#1B4332] group-hover:text-[#1B4332]/80'
                      : 'text-white group-hover:text-white/90',
                  )}
                >
                  The Shuri Way
                </div>
              </div>
            </div>
          </div>

          <nav className="hidden items-center space-x-2 lg:flex">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'group relative rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300',
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-50 hover:text-[#1B4332]'
                    : 'text-white/90 hover:bg-white/10 hover:text-white',
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>

                <div
                  className={cn(
                    'absolute inset-0 rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-100',
                    isScrolled
                      ? 'bg-gradient-to-r from-[#A7FFD9]/10 to-[#DAB785]/10'
                      : 'bg-white/10',
                  )}
                />
              </button>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <Button
              onClick={() => scrollToSection('cta')}
              className={cn(
                'group relative overflow-hidden rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 hover:scale-105',
                'bg-gradient-to-r from-[#1B4332] to-[#1B4332]/90 text-white shadow-lg hover:shadow-xl hover:shadow-[#1B4332]/25',
              )}
            >
              <div className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 group-hover:translate-x-full"></div>

              <span className="relative flex items-center gap-2">
                Join Waitlist
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          <button
            className={cn(
              'relative rounded-xl p-2.5 transition-all duration-300 lg:hidden',
              isScrolled
                ? 'text-gray-700 hover:bg-gray-50 hover:text-[#1B4332]'
                : 'text-white hover:bg-white/10',
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full right-0 left-0 border-t border-gray-200/20 backdrop-blur-xl lg:hidden">
            <div className="absolute inset-0 bg-white/95"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#A7FFD9]/5 to-[#DAB785]/5"></div>

            <nav className="relative px-4 py-6">
              <div className="mb-6 space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group w-full rounded-xl px-4 py-3 text-left font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:text-[#1B4332]"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="transition-colors duration-300">
                        {item.label}
                      </span>
                      <ArrowRight className="h-4 w-4 opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>
                  </button>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <Button
                  onClick={() => scrollToSection('cta')}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#1B4332] to-[#1B4332]/90 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 group-hover:translate-x-full"></div>

                  <span className="relative flex items-center justify-center gap-2">
                    Join Waitlist
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default memo(Header);
