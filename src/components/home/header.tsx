import { cn } from '@/lib/utils';
import { useState, useEffect, memo, useCallback } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Audiences', id: 'audience' },
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
        isScrolled
          ? 'shadow-primary/5 bg-black/10 shadow-lg backdrop-blur-xl'
          : 'bg-black/20 backdrop-blur-sm',
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <div className="group flex items-center">
            <div className="relative">
              <div className="flex items-center">
                <img
                  src="/logo.png"
                  alt="The Shuri Way Logo"
                  className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                />
                <div className="ml-2 lg:ml-3">
                  <div
                    className={cn(
                      'font-safari text-base leading-tight font-bold tracking-tight transition-colors duration-300 sm:text-lg lg:text-xl',
                      isScrolled ? 'text-primary' : 'text-white',
                    )}
                  >
                    The Shuri Way
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className="hidden items-center space-x-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'group relative rounded-lg px-3 py-2 font-medium transition-all duration-300',
                  isScrolled
                    ? 'text-foreground hover:text-primary hover:bg-primary/5'
                    : 'text-white/90 hover:bg-white/10 hover:text-white',
                )}
              >
                <span className="relative z-10">{item.label}</span>
                <div
                  className={cn(
                    'absolute inset-0 rounded-lg bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                    isScrolled
                      ? 'from-primary/10 to-accent/10'
                      : 'from-white/10 to-white/5',
                  )}
                ></div>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden items-center lg:flex">
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection('cta')}
              className="from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-primary/25 hover:shadow-primary/30 group relative overflow-hidden rounded-xl bg-gradient-to-r px-5 py-2.5 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join Waitlist
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="from-accent/20 to-primary/20 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'relative rounded-lg p-2 transition-colors lg:hidden',
              isScrolled
                ? 'text-foreground hover:text-primary hover:bg-primary/5'
                : 'hover:text-accent text-white hover:bg-white/10',
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <X
                  size={20}
                  className="rotate-90 transition-transform duration-300"
                />
              ) : (
                <Menu size={20} className="transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-background/98 border-border/50 overflow-hidden border-t backdrop-blur-xl lg:hidden">
            <div className="from-primary/5 to-accent/5 absolute inset-0 bg-gradient-to-b"></div>
            <nav className="relative space-y-1 py-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary hover:from-primary/10 hover:to-accent/10 mx-2 block w-full rounded-lg px-4 py-3 text-left font-medium transition-all duration-300 hover:bg-gradient-to-r"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </div>
                </button>
              ))}

              <div className="px-4 pt-2">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => scrollToSection('cta')}
                  className="from-primary to-primary/90 text-primary-foreground shadow-primary/25 hover:shadow-primary/30 w-full rounded-xl bg-gradient-to-r font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    Join Waitlist
                    <ChevronRight className="h-4 w-4" />
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
