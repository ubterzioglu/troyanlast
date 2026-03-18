import { useEffect, useRef, useState } from 'react';

const milestones = [
  {
    year: '1999',
    title: 'Kuruluş',
    description: 'Çanakkale\'de ilk proje ile başlangıç. 12 dairelik konut projesi.',
  },
  {
    year: '2005',
    title: 'Büyüme',
    description: '10+ proje kapasitesine ulaşma. Ekip genişletmesi.',
  },
  {
    year: '2012',
    title: 'İstanbul Açılımı',
    description: 'Ulusal ölçekte büyüme. İstanbul ofisi açılışı.',
  },
  {
    year: '2018',
    title: 'Ödüller',
    description: 'Sektör ödülleri. Kalite belgeleri alınması.',
  },
  {
    year: '2024',
    title: 'Bugün',
    description: '80+ proje, 500+ mutlu aile. Lider inşaat firması.',
  },
];

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
            Yolculuğumuz
          </span>
          <h2 className="section-title font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-charcoal inline-block">
            Dönüm Noktalarımız
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Center Line - Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-bronze/20 -translate-x-1/2" />
            
            {/* Center Line - Mobile */}
            <div className="lg:hidden absolute left-4 top-0 bottom-0 w-px bg-bronze/20" />

            {/* Milestones */}
            <div className="space-y-12 lg:space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`pl-12 lg:pl-0 ${
                        index % 2 === 1 ? 'lg:order-2 lg:text-left' : 'lg:text-right'
                      }`}
                    >
                      <div
                        className={`card-luxury inline-block max-w-md transition-all duration-300 ${
                          activeIndex === index ? 'scale-105' : ''
                        }`}
                      >
                        <span className="text-bronze font-display text-3xl lg:text-4xl font-bold block mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-concrete text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div
                      className={`hidden lg:flex justify-center ${
                        index % 2 === 1 ? 'lg:order-1 lg:justify-start' : 'lg:justify-end'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-4 transition-all duration-300 ${
                          activeIndex === index
                            ? 'bg-bronze border-bronze scale-150'
                            : 'bg-cream-dark border-bronze'
                        }`}
                      />
                    </div>

                    {/* Mobile Dot */}
                    <div className="lg:hidden absolute left-4 top-6 -translate-x-1/2">
                      <div
                        className={`w-4 h-4 rounded-full border-3 transition-all duration-300 ${
                          activeIndex === index
                            ? 'bg-bronze border-bronze scale-125'
                            : 'bg-cream-dark border-bronze'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
