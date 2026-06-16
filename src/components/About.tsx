import { motion } from 'motion/react';
import { Language, TRANSLATIONS } from '../translations';
import baristaCraft from '../assets/images/barista_craft_1781468133549.jpg';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-cream text-coffee relative overflow-hidden"
    >
      {/* Decorative details - Soft background blur dots and lines */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-caramel/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-warm-green/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Story / Copywriting (6 Cols on LG) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold text-caramel uppercase tracking-[0.25em] block">
                {t.aboutSubtitle}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-coffee font-light tracking-tight leading-tight">
                {t.aboutTitle}
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 text-coffee/80 text-base md:text-lg font-light leading-relaxed font-sans">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
              <p>
                {lang === 'ro'
                  ? 'Spațiul nostru este dotat cu accente minimaliste elegante, lumină caldă perlată și playlist-uri relaxante pe suport de vinil fizic. Am desenat acest refugiu pentru a asigura o ambianță complet dedicată reîncărcării bateriilor într-un climat ospitalier.'
                  : 'Наше пространство наполнено мягким светом, утонченным дизайном и звуками шелестящего теплого винила. Мы создали этот тихий остров для того, чтобы вы могли замедлиться, вдохновиться и почувствовать искреннее тепло восточноевропейского гостеприимства.'}
              </p>
            </div>

            {/* Micro-stats section */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-coffee/10 mt-10">
              <div className="space-y-1">
                <span className="font-serif text-3xl font-light text-caramel block">85+</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-coffee/50 block leading-snug">{t.aboutStats1Name}</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl font-light text-caramel block">100%</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-coffee/50 block leading-snug">{t.aboutStats2Name}</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl font-light text-caramel block">2500+</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-coffee/50 block leading-snug">{t.aboutStats3Name}</span>
              </div>
            </div>

            {/* Signature detail */}
            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-caramel/60" />
              <p className="font-serif italic text-lg text-caramel">
                {lang === 'ro' ? 'Echipa Caffee / MD' : 'Команда Caffee / MD'}
              </p>
            </div>
          </div>

          {/* Right Column: Beautifully framed image (6 Cols on LG) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative aspect-4/3 w-full max-w-[580px] mx-auto z-10"
            >
              {/* Decorative Frame Behind Image */}
              <div className="absolute -inset-4 border border-caramel/25 translate-x-4 translate-y-4 pointer-events-none" />

              {/* Real Custom Generated Image */}
              <div className="w-full h-full bg-milk overflow-hidden border border-coffee/10 shadow-xl group">
                <img
                  src={baristaCraft}
                  alt="Barista Caffee / MD Chișinău"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              {/* Minimal floating content info */}
              <div className="absolute -bottom-6 -left-6 bg-coffee text-cream px-6 py-4 border border-coffee shadow-2xl hidden sm:block">
                <span className="text-[10px] uppercase tracking-widest text-caramel block font-semibold">
                  {lang === 'ro' ? 'TEMPERATURĂ & TIMP' : 'ТЕМПЕРАТУРА & ВРЕМЯ'}
                </span>
                <span className="font-serif text-sm block mt-1 tracking-wide">
                  93.5°C • {lang === 'ro' ? '26 secunde extracție' : '26 секунд экстракции'}
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
