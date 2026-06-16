import { motion } from 'motion/react';
import { Bean, Croissant, MapPin, Heart } from 'lucide-react';
import { ADVANTAGES } from '../data';
import { Language, TRANSLATIONS } from '../translations';

interface AdvantagesProps {
  lang: Language;
}

export default function Advantages({ lang }: AdvantagesProps) {
  const t = TRANSLATIONS[lang];

  // Mapping icons safely dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bean':
        return <Bean className="w-8 h-8 text-caramel stroke-[1.25]" />;
      case 'Croissant':
        return <Croissant className="w-8 h-8 text-caramel stroke-[1.25]" />;
      case 'MapPin':
        return <MapPin className="w-8 h-8 text-caramel stroke-[1.25]" />;
      case 'Heart':
        return <Heart className="w-8 h-8 text-caramel stroke-[1.25]" />;
      default:
        return <Bean className="w-8 h-8 text-caramel stroke-[1.25]" />;
    }
  };

  return (
    <section
      id="advantages"
      className="py-24 md:py-32 bg-cream text-coffee relative border-t border-coffee/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading Info (4 Cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <span className="text-xs font-semibold text-caramel uppercase tracking-[0.25em] block">
              {lang === 'ro' ? 'Unde Excelăm' : 'Наши преимущества'}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl text-coffee font-light tracking-tight leading-tight">
              {lang === 'ro'
                ? 'Grijă pentru detalii, estetică în fiecare gest'
                : 'Заботимся о мелочах, меняя ваш день к лучшему'}
            </h2>
            <div className="w-12 h-[1px] bg-caramel/55" />
            <p className="font-sans text-sm md:text-base text-coffee/60 font-light leading-relaxed">
              {lang === 'ro'
                ? 'Am proiectat un mediu liber de freamătul cotidian urban, focusându-ne pe calitatea superioară a cafelei Specialty, patiseria artizanală proprie și confortul absolut al oaspeților noștri.'
                : 'Мы создали место, свободное от рутинного шума, сосредоточившись на трех главных вещах: безукоризненном качестве ингредиентов, безупречной крафтовой подготовке и безусловном уюте гостей.'}
            </p>
          </div>

          {/* Right Column: Grid of Advantages (8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {ADVANTAGES.map((adv, index) => (
              <motion.div
                key={adv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-milk p-8 border border-coffee/5 hover:border-caramel/30 transition-all duration-500 hover:shadow-xl hover:shadow-caramel/3 group relative"
              >
                {/* Beautiful icon housing */}
                <div className="p-3 bg-cream/80 w-fit rounded-none border border-coffee/5 shadow-xs mb-6 group-hover:bg-coffee group-hover:border-coffee transition-all duration-500">
                  <div className="group-hover:scale-110 group-hover:text-cream transition-transform duration-500 flex items-center justify-center animate-pulse-subtle">
                    {getIcon(adv.icon)}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="font-serif text-2xl font-light text-coffee mb-3 tracking-wide">
                  {lang === 'ro' ? adv.titleRo : adv.titleRu}
                </h3>
                <p className="text-sm text-coffee/60 font-sans leading-relaxed font-light">
                  {lang === 'ro' ? adv.descriptionRo : adv.descriptionRu}
                </p>

                {/* Subtle visual link accent */}
                <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-wider font-semibold text-coffee/20 group-hover:text-caramel transition-colors">
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
