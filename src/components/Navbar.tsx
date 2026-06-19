import { useState, useEffect } from 'react';
import { Coffee, Menu, X, Calendar, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, TRANSLATIONS } from '../translations';

interface NavbarProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  onOpenBooking: () => void;
}

export default function Navbar({ lang, onChangeLang, onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: t.navHome, target: 'hero' },
    { label: t.navAbout, target: 'about' },
    { label: t.navMenu, target: 'menu' },
    { label: t.navOffers, target: 'promotions' },
    { label: t.navContacts, target: 'contacts' },
  ];

  return (
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-cream/92 border-b border-coffee/5 backdrop-blur-md py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo (Serif Elegant Brand Name) */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-coffee font-serif tracking-widest text-xl group cursor-pointer"
          >
            <div className="p-1.5 rounded-full bg-caramel/10 group-hover:bg-caramel/20 transition-all duration-300">
              <Coffee className="w-5 h-5 text-caramel transition-transform duration-500 group-hover:scale-110" />
            </div>
            <span className="font-semibold uppercase tracking-wider relative font-serif">
              {t.brandName}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-caramel transition-all duration-300 group-hover:w-full"></span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {menuItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-xs font-sans tracking-widest text-coffee/80 hover:text-caramel uppercase transition-colors duration-300 cursor-pointer py-1 relative before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-0.5 before:bg-caramel before:transition-all before:duration-300 hover:before:w-full"
              >
                {item.label}
              </button>
            ))}

            {/* Premium Language Switcher (RO / RU) */}
            <div className="flex items-center gap-2.5 border-l border-coffee/15 pl-5 h-5">
              <button
                onClick={() => onChangeLang('ro')}
                className={`text-xs font-bold tracking-widest transition-all duration-300 hover:text-caramel cursor-pointer px-1 py-0.5 ${
                  lang === 'ro'
                    ? 'text-caramel border-b border-caramel'
                    : 'text-coffee/40'
                }`}
                aria-label="Romanian localization"
              >
                RO
              </button>
              <span className="text-coffee/15 text-[10px] select-none">|</span>
              <button
                onClick={() => onChangeLang('ru')}
                className={`text-xs font-bold tracking-widest transition-all duration-300 hover:text-caramel cursor-pointer px-1 py-0.5 ${
                  lang === 'ru'
                    ? 'text-caramel border-b border-caramel'
                    : 'text-coffee/40'
                }`}
                aria-label="Russian localization"
              >
                RU
              </button>
            </div>
          </div>

          {/* Booking Button & Info Row */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-coffee text-cream text-xs uppercase tracking-widest rounded-none hover:bg-caramel transition-colors duration-500 border border-coffee hover:border-caramel cursor-pointer font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-caramel/10 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              {t.btnBook}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile language picker directly accessible */}
            <div className="flex items-center gap-2 bg-coffee/5 px-2.5 py-1 text-xs">
              <button
                onClick={() => onChangeLang('ro')}
                className={`font-bold uppercase tracking-wide px-1.5 py-0.5 ${
                  lang === 'ro' ? 'text-caramel font-extrabold' : 'text-coffee/40'
                }`}
              >
                RO
              </button>
              <span className="text-coffee/10 text-[9px]">|</span>
              <button
                onClick={() => onChangeLang('ru')}
                className={`font-bold uppercase tracking-wide px-1.5 py-0.5 ${
                  lang === 'ru' ? 'text-caramel font-extrabold' : 'text-coffee/40'
                }`}
              >
                RU
              </button>
            </div>

            {/* Mobile Menu Toggle Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-coffee focus:outline-none cursor-pointer bg-cream border border-coffee/10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop & Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-[70px] z-20 bg-coffee/40 backdrop-blur-[3px] md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-[70px] z-30 bg-cream border-b border-coffee/10 shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden"
            >
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <button
                    key={item.target}
                    onClick={() => scrollToSection(item.target)}
                    className="text-left py-2.5 text-lg font-serif text-coffee border-b border-coffee/5 hover:text-caramel tracking-wide uppercase"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="border-t border-coffee/5 pt-6 mt-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 bg-coffee text-cream text-xs uppercase tracking-widest rounded-none hover:bg-caramel hover:border-caramel transition-all duration-300 font-medium flex items-center justify-center gap-2 border border-coffee"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  {t.btnBook}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
