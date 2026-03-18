import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';

const subjects = [
  'Konut Projesi',
  'Ticari Yapı',
  'Tadilat/Restorasyon',
  'İç Mimari',
  'Diğer',
];

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-cream">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="text-bronze text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
              İletişim Bilgileri
            </span>
            <h2 className="section-title-left font-display text-3xl lg:text-4xl font-bold text-charcoal mb-8">
              Bize Ulaşın
            </h2>

            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-bronze/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-bronze" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-charcoal mb-1">
                    Adres
                  </h4>
                  <p className="text-concrete text-sm leading-relaxed">
                    Karacaören Mah., Karacaören Cad. No:16/1-3,<br />
                    17000 Çanakkale Merkez
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-bronze/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-bronze" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-charcoal mb-1">
                    Telefon
                  </h4>
                  <a
                    href="tel:+905325400517"
                    className="text-concrete text-sm hover:text-bronze transition-colors duration-300"
                  >
                    +90 532 540 05 17
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-bronze/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-bronze" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-charcoal mb-1">
                    E-posta
                  </h4>
                  <a
                    href="mailto:info@troyaninsaat.com"
                    className="text-concrete text-sm hover:text-bronze transition-colors duration-300"
                  >
                    info@troyaninsaat.com
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white p-6 shadow-luxury">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-bronze" />
                <h4 className="font-display text-lg font-bold text-charcoal">
                  Çalışma Saatleri
                </h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-concrete">Pazartesi - Cuma</span>
                  <span className="text-charcoal font-semibold">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-concrete">Cumartesi</span>
                  <span className="text-charcoal font-semibold">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-concrete">Pazar</span>
                  <span className="text-charcoal/50 font-semibold">Kapalı</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-white p-8 lg:p-10 shadow-luxury">
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                Bize Mesaj Gönderin
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-charcoal mb-2">
                    Mesajınız Gönderildi!
                  </h4>
                  <p className="text-concrete text-sm">
                    En kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Ad Soyad <span className="text-bronze">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 focus:border-bronze focus:ring-1 focus:ring-bronze outline-none transition-all duration-300 text-sm"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 focus:border-bronze focus:ring-1 focus:ring-bronze outline-none transition-all duration-300 text-sm"
                        placeholder="0 (___) ___ __ __"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        E-posta <span className="text-bronze">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 focus:border-bronze focus:ring-1 focus:ring-bronze outline-none transition-all duration-300 text-sm"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Konu
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-bronze focus:ring-1 focus:ring-bronze outline-none transition-all duration-300 text-sm bg-white"
                    >
                      <option value="">Konu seçin</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Mesajınız <span className="text-bronze">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-bronze focus:ring-1 focus:ring-bronze outline-none transition-all duration-300 text-sm resize-none"
                      placeholder="Projeniz hakkında bilgi verin..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-bronze justify-center group"
                  >
                    Gönder
                    <Send className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
