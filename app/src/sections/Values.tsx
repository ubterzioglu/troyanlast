import { useEffect, useRef, useState } from 'react';
import { Award, Shield, Palette, Leaf } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Kalite',
    description:
      'Her projede en yüksek kalite standartlarını uyguluyoruz. Malzeme seçiminden işçilik detaylarına kadar her aşamada titizlikle çalışıyoruz.',
  },
  {
    icon: Shield,
    title: 'Güven',
    description:
      'Yıllarca süren deneyim ve şeffaf iletişim ile müşterilerimizin güvenini kazanıyoruz. Sözümüzün eri olmak ilkemizdir.',
  },
  {
    icon: Palette,
    title: 'Estetik',
    description:
      'Fonksiyonellik ile estetiği bir araya getiriyoruz. Modern mimari anlayışıyla zamansız tasarımlar oluşturuyoruz.',
  },
  {
    icon: Leaf,
    title: 'Sürdürülebilirlik',
    description:
      'Çevre dostu malzemeler ve enerji verimli çözümlerle gelecek nesillere yaşanabilir bir dünya bırakmayı hedefliyoruz.',
  },
];

const Values = () => {
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

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-cream-dark">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-bronze text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Değerlerimiz
          </span>
          <h2 className="section-title font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-charcoal inline-block">
            Bizi Farklı Kılan
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`card-luxury group ${
                index % 2 === 1 ? 'md:mt-12' : ''
              } transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-bronze/10 flex items-center justify-center mb-6 group-hover:bg-bronze transition-colors duration-300">
                <value.icon className="w-7 h-7 text-bronze group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-charcoal mb-4 group-hover:text-bronze transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-concrete text-base leading-relaxed">
                {value.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 h-0.5 w-12 bg-bronze/30 group-hover:w-full group-hover:bg-bronze transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
