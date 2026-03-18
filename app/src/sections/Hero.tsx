import { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Phone } from 'lucide-react';

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on load
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, user will need to interact
      });
    }
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  const scrollToNext = () => {
    const statsSection = document.getElementById('stats');
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source
            src="https://videos.pexels.com/video-files/1571480/1571480-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlays */}
        <div className="absolute inset-0 video-overlay" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute inset-0 grid-lines" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-bronze text-sm lg:text-base font-semibold uppercase tracking-[0.3em] mb-6 animate-fadeInUp">
            1999'dan Beri
          </p>

          {/* Main Title */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-8 animate-fadeInUp delay-100 leading-tight">
            TROYAN
            <span className="block text-bronze">İNŞAAT</span>
          </h1>

          {/* Description */}
          <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto mb-12 animate-fadeInUp delay-200 leading-relaxed">
            Kalite, estetik ve güven ile hayalinizdeki yapıları inşa ediyoruz.
            <span className="hidden sm:inline"> Çanakkale ve İstanbul'da prestijli projeler.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-300">
            <button
              onClick={() => handleNavClick('projects')}
              className="btn-bronze group"
            >
              Projelerimizi Gör
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-outline"
            >
              <Phone className="w-4 h-4 mr-2" />
              İletişime Geç
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
