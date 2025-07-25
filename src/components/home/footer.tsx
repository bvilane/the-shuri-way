import { memo } from 'react';
import { Instagram, Mail, MapPin, Heart } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={{ backgroundColor: '#2b2b2b' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            {/* Enhanced Logo Section */}
            <div className="mb-8">
              <div className="group flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="The Shuri Way Logo"
                  className="mr-3 h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="font-safari text-2xl font-bold text-white transition-colors duration-300 lg:text-3xl"
                  style={{ fontFamily: 'var(--font-athelas, Georgia)' }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = '#daa520')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = 'white')
                  }
                >
                  The Shuri Way
                </div>
              </div>
              <p
                className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed"
                style={{ color: '#d8c3a5' }}
              >
                Intelligent Safari Platform - Connecting travelers, lodges, and
                operators through AI-powered solutions.
              </p>
            </div>

            <div className="mb-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href="https://www.instagram.com/theshuriway"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-lg px-4 py-2 transition-all duration-200"
                style={{ backgroundColor: 'rgba(218, 165, 32, 0.1)' }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor =
                    'rgba(218, 165, 32, 0.2)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor =
                    'rgba(218, 165, 32, 0.1)')
                }
              >
                <Instagram
                  size={20}
                  className="transition-colors duration-200"
                  style={{ color: '#d8c3a5' }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = '#daa520')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = '#d8c3a5')
                  }
                />
                <span
                  className="font-medium transition-colors duration-200"
                  style={{ color: '#d8c3a5' }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = 'white')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = '#d8c3a5')
                  }
                >
                  @theshuriway
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@theshuriway.com"
                className="group inline-flex items-center gap-3 rounded-lg px-4 py-2 transition-all duration-200"
                style={{ backgroundColor: 'rgba(218, 165, 32, 0.1)' }}
              >
                <Mail
                  size={20}
                  className="transition-colors duration-200"
                  style={{ color: '#d8c3a5' }}
                />
                <span
                  className="font-medium transition-colors duration-200"
                  style={{ color: '#d8c3a5' }}
                >
                  hello@theshuriway.com
                </span>
              </a>
            </div>

            <div className="mb-6">
              <div
                className="h-px bg-gradient-to-r from-transparent to-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, transparent, #6a7f49, transparent)`,
                }}
              ></div>
            </div>

            <div className="space-y-4">
              <div
                className="flex items-center justify-center gap-2"
                style={{ color: '#d8c3a5' }}
              >
                <span>Built with</span>
                <Heart size={16} style={{ color: '#daa520' }} />
                <span>by</span>
                <span className="font-semibold" style={{ color: '#daa520' }}>
                  Shuri Management Group
                </span>
              </div>

              <div
                className="text-sm"
                style={{ color: '#d8c3a5', opacity: '0.8' }}
              >
                © {currentYear} The Shuri Way. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
