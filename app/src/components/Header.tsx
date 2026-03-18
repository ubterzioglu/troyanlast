import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  currentSection?: string;
  onNavigate?: (section: string) => void;
}

const Header = ({ currentSection = 'home', onNavigate }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'projects', label: 'Projeler' },
    { id: 'about', label: 'Hakkımızda' },
    { id: 'contact', label: 'İletişim' },
  ];

  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex flex-col items-start"
          >
            <span
              className={`font-display text-2xl lg:text-3xl font-bold tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              TROYAN
            </span>
            <span className="text-bronze text-xs lg:text-sm font-semibold tracking-[0.3em] uppercase">
              İnşaat
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  currentSection === item.id
                    ? 'text-bronze'
                    : isScrolled
                    ? 'text-charcoal hover:text-bronze'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {currentSection === item.id && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-bronze" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('contact')}
              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                isScrolled
                  ? 'bg-bronze text-white hover:bg-bronze-dark'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
              }`}
            >
              <Phone className="w-4 h-4" />
              Teklif Al
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-charcoal' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-charcoal/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col py-8 px-6">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left py-4 text-lg font-medium uppercase tracking-wider transition-all duration-300 ${
                currentSection === item.id
                  ? 'text-bronze'
                  : 'text-white/80 hover:text-white'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="mt-6 btn-bronze w-full"
          >
            <Phone className="w-4 h-4 mr-2" />
            Teklif Al
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
