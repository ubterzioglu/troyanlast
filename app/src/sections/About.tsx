import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface AboutProps {
  onNavigate?: (section: string) => void;
}

const features = [
  'Modern mimari anlayış',
  'Kaliteli malzeme kullanımı',
  'Zamanında teslimat',
  '7/24 destek hizmeti',
];

const About = ({ onNavigate }: AboutProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    if (onNavigate) {
      onNavigate('about');
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about-preview"
      className="py-24 lg:py-32 bg-cream"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="text-bronze text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
              Hakkımızda
            </span>
            <h2 className="section-title-left font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-charcoal mb-8">
              15 Yılı Aşkın Deneyimle
              <span className="block text-bronze mt-2">İnşaat Sektöründeyiz</span>
            </h2>
            <p className="text-concrete text-base lg:text-lg leading-relaxed mb-6">
              1999 yılında Çanakkale'de kurulan TROYAN İnşaat, kaliteli ve güvenilir 
              hizmet anlayışıyla sektörde öncü bir konuma gelmiştir. Modern mimari 
              anlayışı, yenilikçi çözümleri ve uzman ekibiyle her projede mükemmelliği 
              hedefliyoruz.
            </p>
            <p className="text-concrete text-base lg:text-lg leading-relaxed mb-8">
              Çanakkale ve İstanbul'da tamamladığımız 80'den fazla proje ile 
              500'ü aşkın aileye yeni bir yuva kazandırdık. Her projemizde 
              müşteri memnuniyetini ön planda tutuyor, estetik ve fonksiyonelliği 
              bir araya getiriyoruz.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-bronze" />
                  </span>
                  <span className="text-charcoal text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleNavClick}
              className="btn-outline-dark group"
            >
              Daha Fazla Bilgi
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="TROYAN İnşaat Ofis"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-bronze/30 -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-bronze/10 -z-10" />

              {/* Experience Badge */}
              <div className="absolute bottom-8 left-8 bg-white p-6 shadow-luxury">
                <div className="font-display text-4xl font-bold text-bronze mb-1">15+</div>
                <div className="text-charcoal text-sm uppercase tracking-wider">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
