import { useEffect, useRef, useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ahmet Yılmaz',
    position: 'Genel Müdür',
    experience: '20 Yıl',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Sektörde 20 yıllık deneyimle şirketimizin stratejik yönetimini üstleniyor.',
  },
  {
    name: 'Mehmet Demir',
    position: 'Proje Direktörü',
    experience: '15 Yıl',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Projelerin teknik yönetiminden sorumlu, detaycı ve sonuç odaklı.',
  },
  {
    name: 'Ayşe Kaya',
    position: 'Mimar',
    experience: '10 Yıl',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Modern ve sürdürülebilir tasarımlarıyla projelerimize estetik katıyor.',
  },
  {
    name: 'Ali Çelik',
    position: 'İnşaat Mühendisi',
    experience: '12 Yıl',
    image: 'https://images.pexels.com/photos/2379008/pexels-photo-2379008.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Yapısal mühendislik uzmanı, güvenli ve dayanıklı yapılar inşa ediyor.',
  },
];

const Team = () => {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-cream">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-bronze text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Ekibimiz
          </span>
          <h2 className="section-title font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-charcoal inline-block">
            Profesyonel Kadromuz
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden bg-white">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-bronze text-white text-xs font-semibold px-3 py-1">
                    {member.experience}
                  </div>

                  {/* Social Links - Hover */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-bronze transition-colors duration-300"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-bronze transition-colors duration-300"
                      aria-label={`${member.name} Email`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-charcoal mb-1 group-hover:text-bronze transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-bronze text-sm font-semibold uppercase tracking-wider mb-3">
                    {member.position}
                  </p>
                  <p className="text-concrete text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
