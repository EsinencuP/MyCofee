import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Send, Bookmark, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, TRANSLATIONS } from '../translations';

interface ContactsProps {
  lang: Language;
}

export default function Contacts({ lang }: ContactsProps) {
  const t = TRANSLATIONS[lang];
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Hide success notification after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section
      id="contacts"
      className="py-24 md:py-32 bg-milk text-coffee relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-stretch">
          
          {/* Left Column: Contact information (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            
            <div className="space-y-6">
              <span className="text-xs font-semibold text-caramel uppercase tracking-[0.25em] block">
                {lang === 'ro' ? 'Locație & Contacte' : 'Как нас найти'}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-coffee font-light tracking-tight leading-tight">
                {t.contactTitle}
              </h2>
              <p className="font-sans text-sm md:text-base text-coffee/60 font-light leading-relaxed max-w-sm">
                {t.contactSubtitle}
              </p>
            </div>

            {/* Info details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-cream border border-coffee/5 shadow-xs text-caramel flex items-center justify-center">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-coffee/40 font-semibold">{t.contactAddrLabel}</h4>
                  <p className="font-serif text-lg font-light mt-1 text-coffee">
                    Strada Alexandru Pușkin 22,<br />Chișinău, Republica Moldova
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-cream border border-coffee/5 shadow-xs text-caramel flex items-center justify-center">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-coffee/40 font-semibold">{t.contactPhoneLabel}</h4>
                  <a
                    href="tel:+37368123456"
                    className="font-serif text-lg font-light mt-1 text-coffee hover:text-caramel transition-colors block"
                  >
                    +373 68 123 456
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-cream border border-coffee/5 shadow-xs text-caramel flex items-center justify-center">
                  <Mail className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-coffee/40 font-semibold">{t.contactEmailLabel}</h4>
                  <a
                    href="mailto:hello@caffee.md"
                    className="font-serif text-lg font-light mt-1 text-coffee hover:text-caramel transition-colors block font-sans"
                  >
                    hello@caffee.md
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-cream border border-coffee/5 shadow-xs text-caramel flex items-center justify-center">
                  <Clock className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-coffee/40 font-semibold">{t.contactScheduleLabel}</h4>
                  <div className="font-serif text-base font-light mt-1 text-coffee space-y-0.5">
                    <p>{lang === 'ro' ? 'Lu – Vi' : 'Пн–Пт'}: <strong className="font-sans font-medium text-caramel">08:00 – 21:00</strong></p>
                    <p>{lang === 'ro' ? 'Sâ – Du' : 'Сб–Вс'}: <strong className="font-sans font-medium text-caramel">09:00 – 22:00</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action buttons block */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <a
                href="tel:+37368123456"
                className="py-3.5 bg-coffee text-cream text-xs uppercase tracking-widest font-semibold hover:bg-caramel transition-all duration-300 text-center border border-coffee hover:border-caramel flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {lang === 'ro' ? 'Apelează' : 'Позвонить'}
              </a>
              <a
                href="https://maps.google.com/?q=Strada+Alexandru+Puşkin+22+Chişinău+Moldova"
                target="_blank"
                rel="noreferrer"
                className="py-3.5 bg-transparent text-coffee hover:text-cream text-xs uppercase tracking-widest font-semibold hover:bg-coffee transition-all duration-300 text-center border border-coffee/30 hover:border-coffee flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                {lang === 'ro' ? 'Traseu' : 'Маршрут'}
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Integrations & Feedback form (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            
            {/* Interactive Map Wrapper */}
            <div className="bg-cream border border-coffee/10 p-3 shadow-lg flex-1 h-[320px] lg:h-[400px] relative min-h-[300px]">
              {/* Moldavian accent pin tag */}
              <div className="absolute top-6 left-6 z-10 bg-coffee/95 backdrop-blur-md text-cream py-2 px-3 border border-cream/10 flex items-center gap-2 shadow-xl">
                <Bookmark className="w-3.5 h-3.5 text-caramel shrink-0" />
                <span className="text-[10px] uppercase tracking-widest font-semibold font-sans">
                  {lang === 'ro' ? 'Caffee / MD • Lângă USM' : 'Caffee / MD Specialty • Около Гос. Университета'}
                </span>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.1265814144414!2d28.831969476906236!3d47.0182414278434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c36eb9cf181%3A0xe744df62993cf11a!2sStrada%20Alexandru%20Pu%C8%99kin%2022%2C%20Chi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="Caffee / MD Google Map"
                className="grayscale-[30%] opacity-90 contrast-[1.05] filter hover:grayscale-0 transition-all duration-500 w-full h-full"
              ></iframe>
            </div>

            {/* Quick Contact / Feed Form below maps */}
            <div className="bg-cream border border-coffee/5 p-6 md:p-8">
              <h3 className="font-serif text-2xl font-light text-coffee mb-4">
                {lang === 'ro' ? 'Scrieți-ne direct' : 'Напишите нам напрямую'}
              </h3>
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 text-warm-green py-4 text-sm font-sans"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>
                      {lang === 'ro'
                        ? 'Vă mulțumim! Mesajul dvs. a fost transmis cu succes. Vă contactăm asiduu în cel mai scurt timp.'
                        : 'Спасибо! Ваше сообщение успешно отправлено. Мы ответим вам в течение часа.'}
                    </span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSendMessage} className="space-y-4 font-sans">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={lang === 'ro' ? 'Numele complet' : 'Ваше имя'}
                        className="w-full bg-milk border border-coffee/10 px-4 py-2.5 text-xs outline-none focus:border-caramel transition-colors placeholder:text-coffee/30 rounded-none text-coffee"
                      />
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder={lang === 'ro' ? 'Adresă e-mail' : 'Адрес почты (hello@mail.com)'}
                        className="w-full bg-milk border border-coffee/10 px-4 py-2.5 text-xs outline-none focus:border-caramel transition-colors placeholder:text-coffee/30 rounded-none text-coffee"
                      />
                    </div>
                    <textarea
                      required
                      rows={2}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={
                        lang === 'ro'
                          ? 'Cum vă putem ajuta cu un popas sau preferințe? Vom fi tare bucuroși de orice feedback!'
                          : 'Расскажите, как мы можем вам помочь. Будем рады любому фидбеку!'
                      }
                      className="w-full bg-milk border border-coffee/10 px-4 py-2.5 text-xs outline-none focus:border-caramel transition-colors placeholder:text-coffee/30 rounded-none text-coffee resize-none"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 bg-coffee text-cream hover:bg-caramel transition-colors duration-300 text-[10px] uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting 
                        ? (lang === 'ro' ? 'Se trimite...' : 'Отправка...') 
                        : (lang === 'ro' ? 'Trimite mesaj' : 'Отправить сообщение')}
                      <Send className="w-3 h-3" />
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
