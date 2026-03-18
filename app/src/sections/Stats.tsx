import { useEffect, useRef, useState } from 'react';
import { Calendar, Building2, Users, MapPin } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: Calendar, value: 15, suffix: '+', label: 'Yıl Deneyim' },
  { icon: Building2, value: 80, suffix: '+', label: 'Tamamlanan Proje' },
  { icon: Users, value: 500, suffix: '+', label: 'Mutlu Aile' },
  { icon: MapPin, value: 2, suffix: '', label: 'Şehir' },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="bg-charcoal py-20 lg:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bronze/10 mb-6 group-hover:bg-bronze/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-bronze" />
              </div>
              <div className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-bronze mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/60 text-sm lg:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
