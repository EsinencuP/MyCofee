import { motion } from 'motion/react';
import { ChevronDown, Calendar, ArrowRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../translations';
import cafeInterior from '../assets/images/cafe_interior_1781468116876.jpg';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
}

export default function Hero({ lang, onOpenBooking }: HeroProps) {
  const t = TRANSLATIONS[lang];

  const handleScrollToMenu = () => {
    const element = document.getElementById('menu');
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

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-coffee"
    >
      {/* Background Image with slight zoom animation and editorial overlay */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.02, opacity: 0.52 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none"
        style={{
          backgroundImage: `url(${cafeInterior})`,
        }}
      />

      {/* Dark gradient radial overlay to frame the typography perfectly */}
      <div className="absolute inset-0 bg-gradient-to-t from-coffee via-coffee/40 to-transparent" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center text-cream flex flex-col items-center">
        {/* Subtle decorative badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 px-3 py-1 bg-caramel/20 border border-caramel/30 backdrop-blur-sm px-4 py-1.5 uppercase text-[10px] md:text-xs tracking-[0.3em] text-caramel/90 font-semibold mb-6 rounded-none font-sans"
        >
          {t.brandSubtitle}
        </motion.div>

        {/* Large expressive editorial heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
          className="font-serif text-4xl min-[380px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.08] max-w-4xl text-cream"
        >
          {t.heroTitle_1} <br className="hidden sm:inline" />
          {t.heroTitle_2} <span className="italic font-light text-caramel font-serif">{t.heroTitle_3}</span>
        </motion.h1>

        {/* Premium editorial description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 md:mt-8 font-sans text-base sm:text-lg md:text-xl text-cream/80 max-w-2xl font-light leading-relaxed tracking-wide"
        >
          {t.heroDesc}
        </motion.p>

        {/* Interactive smooth-moving CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={handleScrollToMenu}
            className="group px-8 py-4 bg-caramel text-cream text-xs uppercase tracking-widest font-semibold rounded-none hover:bg-cream hover:text-coffee border border-caramel hover:border-cream transition-all duration-500 cursor-pointer flex items-center justify-center gap-2 shadow-xl shadow-caramel/15 active:scale-95"
          >
            {t.btnMenu}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-transparent text-cream hover:text-coffee text-xs uppercase tracking-widest font-semibold rounded-none hover:bg-cream border border-cream/30 hover:border-cream transition-all duration-500 cursor-pointer flex items-center justify-center gap-2 backdrop-blur-xs active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            {t.btnBook}
          </button>
        </motion.div>
      </div>

      {/* Bottom organic scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={handleScrollToMenu}
      >
        <span className="font-sans text-[10px] tracking-[0.25em] text-cream/40 uppercase mb-2">
          {lang === 'ro' ? 'Apasă pentru defilare' : 'Нажмите для прокрутки'}
        </span>
        <ChevronDown className="w-4 h-4 text-caramel animate-bounce" />
      </motion.div>
    </section>
  );
}
