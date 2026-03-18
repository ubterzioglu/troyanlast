import { useEffect, useRef, useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';

interface CTAProps {
  onNavigate?: (section: string) => void;
}

const CTA = ({ onNavigate }: CTAProps) => {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(184, 115, 51, 0.1) 40%, rgba(184, 115, 51, 0.1) 60%, transparent 60%)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-bronze/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-bronze/5 translate-x-1/3 translate-y-1/3" />

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-bronze text-sm font-semibold uppercase tracking-[0.2em] mb-6 block">
            Hayalinizi Gerçekleştirin
          </span>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight">
            Hayalinizdeki Projeyi
            <span className="block text-bronze mt-2">Birlikte Hayata Geçirelim</span>
          </h2>
          
          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Ücretsiz keşif ve fiyat teklifi için bize ulaşın. 
            Uzman ekibimiz projenizi dinlemeye hazır.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-bronze group"
            >
              Ücretsiz Teklif Al
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="tel:+905325400517"
              className="btn-outline"
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

export default CTA;
