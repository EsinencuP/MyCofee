import { Coffee, Instagram, Facebook, Flame } from 'lucide-react';
import { Language, TRANSLATIONS } from '../translations';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/caffeemd', icon: <Instagram className="w-4 h-4" /> },
    { name: 'Facebook', url: 'https://facebook.com/caffeemd', icon: <Facebook className="w-4 h-4" /> },
    { name: 'TikTok', url: 'https://tiktok.com/@caffeemd', icon: <Flame className="w-4 h-4" /> },
  ];

  const scrollBackToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-coffee text-cream/70 border-t border-cream/5 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
        
        {/* Brand Information Column (5 Cols) */}
        <div className="md:col-span-5 space-y-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 text-cream font-serif tracking-widest text-xl group cursor-pointer text-left font-serif"
          >
            <div className="p-1.5 rounded-full bg-caramel/20">
              <Coffee className="w-5 h-5 text-caramel transition-transform duration-500 group-hover:rotate-12" />
            </div>
            <span className="font-semibold uppercase tracking-wider text-cream font-serif">
              {t.brandName}
            </span>
          </button>
          
          <p className="text-sm text-cream/60 leading-relaxed font-light max-w-sm">
            {lang === 'ro'
              ? 'Cafenea Specialty cochetă în inima Chișinăului. Atmosferă degajată, boabe prăjite proaspăt, patiserie cu unt în fiecare dimineață și selecție pe vinyl.'
              : 'Атмосферная спешелти кофейня в самом центре Кишинёва. Покой, крафтовый кофе ручной обжарки, свежая утренняя слоеная выпечка и виниловые пластинки.'}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-cream/10 flex items-center justify-center text-cream/60 hover:text-caramel hover:border-caramel hover:bg-cream/5 transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Location / Hour Info column (3 Cols) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-caramel">
            {lang === 'ro' ? 'Program de lucru' : 'Режим работы'}
          </h4>
          <ul className="text-sm space-y-2 text-cream/60 font-light">
            <li>
              {lang === 'ro' ? 'Luni – Vineri' : 'Пн – Пт'}: <strong className="text-cream/90">08:00 – 21:00</strong>
            </li>
            <li>
              {lang === 'ro' ? 'Sâmbătă – Duminică' : 'Сб – Вс'}: <strong className="text-cream/90">09:00 – 22:00</strong>
            </li>
            <li className="pt-2 text-xs italic text-warm-green flex items-center gap-1.5 font-sans">
              <span className="w-1.5 h-1.5 bg-warm-green rounded-full animate-pulse" />
              {lang === 'ro' ? 'Vă așteptăm cu drag!' : 'Ждём вас прямо сейчас!'}
            </li>
          </ul>
        </div>

        {/* Anchor Links Column (4 cols) */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-caramel">
            {lang === 'ro' ? 'Navigare' : 'Навигация'}
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
            <button
              onClick={() => scrollBackToSection('hero')}
              className="text-left text-sm text-cream/60 hover:text-cream transition-colors duration-300 cursor-pointer uppercase tracking-widest text-[10px]"
            >
              {t.navHome}
            </button>
            <button
              onClick={() => scrollBackToSection('about')}
              className="text-left text-sm text-cream/60 hover:text-cream transition-colors duration-300 cursor-pointer uppercase tracking-widest text-[10px]"
            >
              {t.navAbout}
            </button>
            <button
              onClick={() => scrollBackToSection('menu')}
              className="text-left text-sm text-cream/60 hover:text-cream transition-colors duration-300 cursor-pointer uppercase tracking-widest text-[10px]"
            >
              {t.navMenu}
            </button>
            <button
              onClick={() => scrollBackToSection('advantages')}
              className="text-left text-sm text-cream/60 hover:text-cream transition-colors duration-300 cursor-pointer uppercase tracking-widest text-[10px]"
            >
              {lang === 'ro' ? 'Avantaje' : 'Преимущества'}
            </button>
            <button
              onClick={() => scrollBackToSection('gallery')}
              className="text-left text-sm text-cream/60 hover:text-cream transition-colors duration-300 cursor-pointer uppercase tracking-widest text-[10px]"
            >
              {t.navGallery}
            </button>
            <button
              onClick={() => scrollBackToSection('promotions')}
              className="text-left text-sm text-cream/60 hover:text-cream transition-colors duration-300 cursor-pointer uppercase tracking-widest text-[10px]"
            >
              {t.navOffers}
            </button>
          </div>
        </div>

      </div>

      {/* Copywrite Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-cream/5 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-cream/40 font-sans">
        <p>© {new Date().getFullYear()} {t.brandName} Chișinău. {lang === 'ro' ? 'Toate drepturile rezervate.' : 'Все права защищены.'}</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-cream transition-colors">
            {lang === 'ro' ? 'Confidențialitate' : 'Конфиденциальность'}
          </a>
          <a href="#terms" className="hover:text-cream transition-colors">
            {lang === 'ro' ? 'Termeni' : 'Условия службы'}
          </a>
        </div>
      </div>
    </footer>
  );
}
