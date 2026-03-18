import { useEffect, useRef, useState } from 'react';

const ProjectsHero = () => {
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

  return (
    <section
      ref={sectionRef}
      className="min-h-[50vh] flex items-center justify-center bg-charcoal relative overflow-hidden pt-32 pb-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(184, 115, 51, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-10 w-px h-24 bg-gradient-to-b from-transparent via-bronze/50 to-transparent" />
      <div className="absolute bottom-1/3 right-10 w-px h-24 bg-gradient-to-b from-transparent via-bronze/50 to-transparent" />

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-bronze text-sm font-semibold uppercase tracking-[0.3em] mb-6 block">
            Portfolyo
          </span>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tamamlanan ve Devam Eden
            <span className="block text-bronze mt-2">Projelerimiz</span>
          </h1>
          
          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            15+ yıllık deneyimimizle Çanakkale ve İstanbul'da 
            80'den fazla projeye imza attık.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
