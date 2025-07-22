import { memo } from 'react';
import { Instagram } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="from-primary to-primary/90 text-primary-foreground bg-gradient-to-b py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <img
                src="/logo.png"
                alt="The Shuri Way Logo"
                className="mr-3 h-10 w-10 object-contain"
              />
              <div className="font-safari text-2xl font-bold lg:text-3xl">
                The Shuri Way
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:gap-8 md:text-base">
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Terms
              </button>
              <span className="text-primary-foreground/40">|</span>
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Privacy
              </button>
              <span className="text-primary-foreground/40">|</span>
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Contact
              </button>
            </div>
          </div>

          {/* Instagram */}
          <div className="mb-8">
            <a
              href="https://www.instagram.com/theshuriway"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground inline-flex items-center gap-2 transition-colors duration-200"
            >
              <Instagram size={18} />
              <span>@theshuriway</span>
            </a>
          </div>

          {/* Built By */}
          <div className="text-primary-foreground/60 text-sm">
            Built by Shuri Management Group
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
