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
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-out',
        isScrolled
          ? 'border-b border-gray-200/50 bg-white/95 shadow-sm backdrop-blur-xl'
          : 'bg-white/10 backdrop-blur-md',
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Clean Logo Section */}
          <div
            className="group flex cursor-pointer items-center"
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="The Shuri Way Logo"
                className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-105 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
              />
              <div className="ml-3">
                <div
                  className={cn(
                    'font-safari text-lg leading-tight font-bold tracking-tight transition-colors duration-200 sm:text-xl lg:text-2xl',
                    isScrolled ? 'text-gray-900' : 'text-white',
                  )}
                >
                  The Shuri Way
                </div>
              </div>
            </div>
          </div>

          {/* Clean Navigation */}
          <nav className="hidden items-center space-x-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
                  isScrolled
                    ? 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    : 'text-white/90 hover:bg-white/10 hover:text-white',
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Simple CTA Button */}
          <div className="hidden items-center lg:flex">
            <Button
              onClick={() => scrollToSection('cta')}
              className={cn(
                'rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200',
                'bg-primary hover:bg-primary/90 text-white',
                'shadow-md hover:scale-105 hover:shadow-lg',
              )}
            >
              <span className="flex items-center gap-2">
                Join Waitlist
                <ChevronRight className="h-4 w-4" />
              </span>
            </Button>
          </div>

          {/* Simple Mobile Menu Button */}
          <button
            className={cn(
              'rounded-lg p-2 transition-colors duration-200 lg:hidden',
              isScrolled
                ? 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                : 'text-white hover:bg-white/10',
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Clean Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200/20 backdrop-blur-xl lg:hidden">
            <div className="absolute inset-0 bg-white/95" />
            <nav className="relative space-y-1 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full px-4 py-3 text-left font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-gray-900"
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </div>
                </button>
              ))}

              <div className="px-4 pt-4">
                <Button
                  onClick={() => scrollToSection('cta')}
                  className="bg-primary hover:bg-primary/90 w-full rounded-lg py-3 font-semibold text-white shadow-md transition-all duration-200"
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
