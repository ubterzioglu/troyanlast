import { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Maximize, Building } from 'lucide-react';

type Category = 'Tümü' | 'Konut' | 'Ticari' | 'Restorasyon' | 'Kamu';

interface Project {
  id: number;
  title: string;
  category: Category;
  year: string;
  location: string;
  area: string;
  capacity: string;
  image: string;
  description: string;
}

const categories: Category[] = ['Tümü', 'Konut', 'Ticari', 'Restorasyon', 'Kamu'];

const projects: Project[] = [
  {
    id: 1,
    title: 'Çanakkale Rezidans',
    category: 'Konut',
    year: '2024',
    location: 'Çanakkale Merkez',
    area: '4.200 m²',
    capacity: '24 Daire',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Şehrin kalbinde modern yaşam alanları sunan 24 dairelik lüks rezidans projesi.',
  },
  {
    id: 2,
    title: 'İstanbul Ticaret Merkezi',
    category: 'Ticari',
    year: '2023',
    location: 'İstanbul, Ataşehir',
    area: '12.500 m²',
    capacity: '6 Kat',
    image: 'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern ofis kompleksi, iş dünyasının yeni merkezi.',
  },
  {
    id: 3,
    title: 'Sahil Villaları',
    category: 'Konut',
    year: '2023',
    location: 'Çanakkale, Kepez',
    area: '8.000 m²',
    capacity: '8 Villa',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Deniz manzaralı özel villa projesi, lüks yaşam alanları.',
  },
  {
    id: 4,
    title: 'Tarihi Konak Restorasyonu',
    category: 'Restorasyon',
    year: '2022',
    location: 'Çanakkale Merkez',
    area: '1.800 m²',
    capacity: '1 Yapı',
    image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Tarihi dokuyu koruyarak modern kullanıma kazandırılan restorasyon projesi.',
  },
  {
    id: 5,
    title: 'Hastane Ek Bina',
    category: 'Kamu',
    year: '2022',
    location: 'Çanakkale',
    area: '6.300 m²',
    capacity: '5 Kat',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sağlık hizmetlerine destek olan modern hastane ek binası.',
  },
  {
    id: 6,
    title: 'Bağcılar Konut Projesi',
    category: 'Konut',
    year: '2021',
    location: 'İstanbul, Bağcılar',
    area: '18.000 m²',
    capacity: '120 Daire',
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Büyük ölçekli konut projesi, aileler için konforlu yaşam alanları.',
  },
];

const ProjectsList = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Tümü');
  const [isVisible, setIsVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        const rect = filterRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects =
    activeCategory === 'Tümü'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-cream">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Filter Bar */}
        <div
          ref={filterRef}
          className={`sticky top-24 z-30 transition-all duration-300 mb-12 lg:mb-16 ${
            isSticky ? 'py-4' : ''
          }`}
        >
          <div
            className={`flex flex-wrap justify-center gap-2 lg:gap-4 p-2 rounded-lg transition-all duration-300 ${
              isSticky ? 'bg-cream/95 backdrop-blur-md shadow-lg' : ''
            }`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 lg:px-6 py-2 lg:py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-bronze text-white'
                    : 'bg-white text-charcoal hover:bg-bronze/10'
                }`}
              >
                {category === 'Konut' ? 'Konut Projesi' : 
                 category === 'Ticari' ? 'Ticari Yapı' : 
                 category === 'Kamu' ? 'Kamu Yapısı' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 lg:space-y-24">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-bronze text-white text-xs font-semibold uppercase tracking-wider px-4 py-2">
                      {project.category === 'Konut' ? 'Konut Projesi' : 
                       project.category === 'Ticari' ? 'Ticari Yapı' : 
                       project.category === 'Kamu' ? 'Kamu Yapısı' : project.category}
                    </span>
                  </div>
                </div>

                {/* Decorative Element */}
                <div
                  className={`absolute -z-10 w-full h-full bg-bronze/10 ${
                    index % 2 === 1 ? '-top-4 -right-4' : '-bottom-4 -left-4'
                  }`}
                />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-4 text-concrete text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-bronze" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-bronze" />
                    {project.year}
                  </span>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-4 hover:text-bronze transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-concrete text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4">
                    <div className="flex items-center gap-2 text-bronze mb-1">
                      <Maximize className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider">Alan</span>
                    </div>
                    <span className="font-display text-lg font-bold text-charcoal">
                      {project.area}
                    </span>
                  </div>
                  <div className="bg-white p-4">
                    <div className="flex items-center gap-2 text-bronze mb-1">
                      <Building className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider">Kapasite</span>
                    </div>
                    <span className="font-display text-lg font-bold text-charcoal">
                      {project.capacity}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-concrete text-lg">
              Bu kategoride henüz proje bulunmamaktadır.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;
