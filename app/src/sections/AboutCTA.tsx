import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

interface AboutCTAProps {
  onNavigate?: (section: string) => void;
}

const AboutCTA = ({ onNavigate }: AboutCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-bronze relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.1) 60%, transparent 60%)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Projeleriniz İçin Doğru Adres
          </h2>
          
          <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            25 yılı aşkın deneyimimiz ve uzman ekibimizle projelerinizi 
            hayata geçirmeye hazırız. Hemen iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-bronze font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:bg-charcoal hover:text-white group"
            >
              İletişime Geç
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="tel:+905325400517"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold uppercase tracking-wider text-sm border border-white/30 transition-all duration-300 hover:bg-white/10"
            >
              <Phone className="w-4 h-4 mr-2" />
              Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
