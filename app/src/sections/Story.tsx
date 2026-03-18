import { useEffect, useRef, useState } from 'react';

const Story = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="text-bronze text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
              Hikayemiz
            </span>
            <h2 className="section-title-left font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-charcoal mb-8">
              1999'dan Beri
              <span className="block text-bronze mt-2">Aynı Tutku</span>
            </h2>
            
            <div className="space-y-6 text-concrete text-base lg:text-lg leading-relaxed">
              <p>
                TROYAN İnşaat, 1999 yılında Çanakkale'de küçük bir aile şirketi olarak 
                kuruldu. Kurucumuzun inşaat sektörüne olan tutkusu ve kaliteye olan 
                bağlılığı, şirketimizin temelini oluşturdu.
              </p>
              <p>
                İlk projemiz olan Çanakkale'deki 12 dairelik konut projesi ile başladığımız 
                yolculuğumuzda, bugün 80'den fazla projeye imza attık. Her projemizde 
                müşteri memnuniyetini ön planda tuttuk, estetik ve fonksiyonelliği bir 
                araya getirdik.
              </p>
              <p>
                2005 yılında büyüme kararı alarak kapasitemizi artırdık, 2012'de İstanbul 
                ofisimizi açarak ulusal ölçekte faaliyet göstermeye başladık. 2018'de 
                aldığımız sektör ödülleri, kalite anlayışımızın bir göstergesi oldu.
              </p>
              <p>
                Bugün, 25 yılı aşkın deneyimimizle Çanakkale ve İstanbul'da prestijli 
                projelere imza atmaya devam ediyoruz. 500'ü aşkın aileye yeni bir yuva 
                kazandırmış olmanın gururunu yaşıyoruz.
              </p>
            </div>
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
                  src="https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="TROYAN İnşaat Tarihçe"
                  className="w-full h-[450px] lg:h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-bronze/30 -z-10" />
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-bronze/10 -z-10" />

              {/* Year Badge */}
              <div className="absolute bottom-8 right-8 bg-charcoal p-6">
                <div className="font-display text-5xl font-bold text-bronze mb-1">1999</div>
                <div className="text-white/80 text-sm uppercase tracking-wider">Kuruluş</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
