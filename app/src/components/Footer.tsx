import { Instagram, Linkedin, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate?: (section: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-white relative">
      {/* Decorative Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-bronze to-transparent" />

      <div className="w-full px-6 lg:px-12 xl:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => handleNavClick('home')}
              className="flex flex-col items-start mb-6"
            >
              <span className="font-display text-3xl font-bold tracking-wider text-white">
                TROYAN
              </span>
              <span className="text-bronze text-sm font-semibold tracking-[0.3em] uppercase">
                İnşaat
              </span>
            </button>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Kalite, estetik ve güven ile hayalinizdeki yapıları inşa ediyoruz. 
              15+ yıllık deneyimimizle Çanakkale ve İstanbul'da hizmetinizdeyiz.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-bronze hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-bronze hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/905325400517"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-bronze hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">
              Menü
            </h4>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Ana Sayfa' },
                { id: 'about', label: 'Hakkımızda' },
                { id: 'projects', label: 'Projeler' },
                { id: 'contact', label: 'İletişim' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="text-white/60 hover:text-bronze transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-3">
              {[
                'Konut Projeleri',
                'Ticari Yapılar',
                'Restorasyon',
                'İç Mimari',
                'Proje Yönetimi',
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">
              İletişim
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-bronze flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Karacaören Mah., Karacaören Cad. No:16/1-3,<br />
                  17000 Çanakkale Merkez
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-bronze flex-shrink-0" />
                <a
                  href="tel:+905325400517"
                  className="text-white/60 hover:text-bronze transition-colors duration-300 text-sm"
                >
                  +90 532 540 05 17
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-bronze flex-shrink-0" />
                <a
                  href="mailto:info@troyaninsaat.com"
                  className="text-white/60 hover:text-bronze transition-colors duration-300 text-sm"
                >
                  info@troyaninsaat.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-bronze flex-shrink-0 mt-0.5" />
                <div className="text-white/60 text-sm">
                  <p>Pzt-Cum: 08:00 - 18:00</p>
                  <p>Cmt: 09:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © 2024 TROYAN İnşaat. Tüm hakları saklıdır.
            </p>
            <p className="text-white/40 text-sm">
              Çanakkale & İstanbul
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
