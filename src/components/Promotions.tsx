import { motion } from 'motion/react';
import { Sparkles, Percent, CupSoda, CakeSlice } from 'lucide-react';
import { Language, TRANSLATIONS } from '../translations';
import croissantDeal from '../assets/images/croissant_deal_1781468150137.jpg';

interface PromotionsProps {
  lang: Language;
}

export default function Promotions({ lang }: PromotionsProps) {
  const t = TRANSLATIONS[lang];

  const promotions = [
    {
      id: 'p1',
      title: lang === 'ro' ? 'Duo de Dimineață' : 'Утренний Крафтовый Дуэт',
      description: lang === 'ro' 
        ? 'Cappuccino aromat sau Flat White intens pregătit cu boabe proaspăt prăjite din lotul săptămânii, asortat cu un croissant crocant cu unt, obținând 40% reducere.'
        : 'Фирменный капучино или насыщенный флэт-уайт утренней обжарки в дуэте с хрустящим французским круассаном со скидкой 40%.',
      originalPrice: 85,
      promoPrice: 60,
      badge: lang === 'ro' ? 'Zilnic până la 11:30' : 'Каждый день до 11:30',
      image: croissantDeal,
      promoCode: 'MORNING60'
    },
    {
      id: 'p2',
      title: lang === 'ro' ? 'Meniu Special de Sezon' : 'Летнее сезонное меню',
      description: lang === 'ro'
        ? 'Băuturi răcoritoare de vară: Espresso Tonic revigorant cu mentă proaspătă, Bumble Coffee cu portocale și Frappé cremos cu cocos.'
        : 'Авторские освежающие хиты: цитрусовые бамбл-кофе, мятный колд-брю с тоником и десертный фраппе на кокосовом молоке.',
      badge: lang === 'ro' ? 'Noutate' : 'Новинка сезона',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80',
      promoCode: 'SUMMER_COOL'
    },
    {
      id: 'p3',
      title: lang === 'ro' ? 'Happy Hour de Seară' : 'Вечерние Счастливые часы',
      description: lang === 'ro'
        ? 'Reducere de 20% la orice desert, muffin proaspăt sau produs de patiserie din vitrină, ideal pentru a-ti îndulci seara de după birou.'
        : 'Скидка 20% на весь ассортимент свежей выпечки, маффинов и премиальных десертов, чтобы скрасить ваш уютный вечер после работы.',
      originalPrice: 65,
      promoPrice: 52,
      badge: lang === 'ro' ? 'Luni-Vineri începând cu 19:30' : 'Пн-Пт с 19:30 до 21:00',
      image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?w=600&auto=format&fit=crop&q=80',
      promoCode: 'HAPPYHOUR'
    }
  ];

  return (
    <section
      id="promotions"
      className="py-24 md:py-32 bg-cream text-coffee relative overflow-hidden"
    >
      {/* Editorial aesthetic grid background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b1b1802_1px,transparent_1px),linear-gradient(to_bottom,#1b1b1803_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold text-caramel uppercase tracking-[0.25em] block">
              {lang === 'ro' ? 'Campanii active' : 'Сезонные предложения'}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-coffee font-light tracking-tight">
              {lang === 'ro' ? 'Promoții Speciale' : 'Специально для вас'}
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-coffee/60 max-w-sm font-light leading-relaxed">
            {lang === 'ro'
              ? 'Răsfățați-vă gustul cu oferte delicioase asortate. Menționați codul promoțional baristei la bar când comandați!'
              : 'Побалуйте себя изысканными комбинациями вкусов по эксклюзивным ценам. Назовите промокод бариста при заказе!'}
          </p>
        </div>

        {/* Promotions layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Huge Deal (Featured Promotion - 7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="bg-milk border border-coffee/5 h-full flex flex-col justify-between overflow-hidden group relative"
            >
              <div>
                {/* Image */}
                <div className="aspect-16/9 overflow-hidden bg-cream relative">
                  <span className="absolute top-4 left-4 z-10 bg-caramel text-cream text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 font-bold shadow-md flex items-center gap-1.5 font-sans">
                    <Sparkles className="w-3 h-3 animate-spin" />
                    {promotions[0].badge}
                  </span>
                  
                  <img
                    src={promotions[0].image}
                    alt={promotions[0].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Info Text */}
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Percent className="w-4 h-4 text-warm-green" />
                    <span className="text-xs tracking-widest uppercase font-mono text-warm-green font-semibold">
                      {lang === 'ro' ? 'Set combo matinal' : 'Утренний комбо-сет'}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-3xl md:text-4xl font-light text-coffee tracking-wide mb-4">
                    {promotions[0].title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-coffee/70 font-light leading-relaxed max-w-xl mb-6 font-sans">
                    {promotions[0].description}
                  </p>
                </div>
              </div>

              {/* Price Tag and Promo Code Block */}
              <div className="px-8 md:px-10 pb-10 flex flex-wrap items-center justify-between gap-6 border-t border-coffee/5 pt-6 bg-cream/10">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl font-semibold text-caramel">{promotions[0].promoPrice} {t.priceMDL}</span>
                  <span className="line-through text-sm text-coffee/40 font-light">{promotions[0].originalPrice} {t.priceMDL}</span>
                </div>
                
                <div className="flex items-center gap-3 bg-cream border border-coffee/10 px-4 py-2.5">
                  <span className="text-[10px] uppercase tracking-widest text-coffee/50 font-sans">
                    {lang === 'ro' ? 'Cod:' : 'Код:'}
                  </span>
                  <span className="font-mono text-sm font-semibold tracking-wider text-coffee select-all">{promotions[0].promoCode}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Secondary Deals (Staggered Column - 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {promotions.slice(1).map((promo, index) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="bg-milk border border-coffee/5 flex-1 flex flex-col sm:flex-row overflow-hidden group hover:border-caramel/20 transition-all duration-300"
              >
                {/* Left side Vector Illustration */}
                <div className="aspect-video sm:aspect-square sm:w-5/12 overflow-hidden bg-milk relative flex items-center justify-center border-r border-coffee/5 select-none shrink-0">
                  <span className="absolute top-3 left-3 z-10 bg-coffee text-cream text-[9px] uppercase tracking-[0.15em] px-2 py-1 font-semibold font-sans">
                    {promo.badge}
                  </span>
                  
                  {/* Styled vector placeholder background with circles and stripes */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1b1b1803_1px,transparent_1px)] [background-size:8px_8px]" />

                  <div className="relative z-10 flex flex-col items-center justify-center text-coffee/80 transition-transform duration-700 ease-out group-hover:scale-110">
                    <div className="w-14 h-14 rounded-full bg-cream border border-coffee/10 shadow-inner flex items-center justify-center text-caramel relative group-hover:shadow-md transition-shadow">
                      {promo.id === 'p2' ? (
                        <CupSoda className="w-7 h-7 stroke-[1.25]" />
                      ) : (
                        <CakeSlice className="w-7 h-7 stroke-[1.25]" />
                      )}
                      
                      {/* Interactive ring detail */}
                      <div className="absolute inset-0 rounded-full border border-dashed border-caramel/10 group-hover:rotate-90 transition-transform duration-1000" />
                    </div>
                  </div>

                  {/* Decorative corner tag lines */}
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-coffee/10" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-coffee/10" />
                </div>

                {/* Right side Text */}
                <div className="p-6 sm:w-7/12 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl sm:text-2xl font-light text-coffee tracking-wide leading-snug">
                      {promo.title}
                    </h4>
                    <p className="text-xs text-coffee/60 font-sans leading-relaxed font-light line-clamp-3">
                      {promo.description}
                    </p>
                  </div>

                  {/* Pricing / Promo Code */}
                  <div className="border-t border-coffee/5 pt-4 mt-4 flex items-center justify-between gap-4">
                    {promo.promoPrice ? (
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif font-semibold text-base text-caramel">{promo.promoPrice} {t.priceMDL}</span>
                        <span className="line-through text-xs text-coffee/40 font-light">{promo.originalPrice} {t.priceMDL}</span>
                      </div>
                    ) : (
                      <span className="text-xs text-caramel uppercase tracking-widest font-semibold flex items-center gap-1.5 font-sans">
                        <Sparkles className="w-3 h-3" />
                        {lang === 'ro' ? 'Meniu Special' : 'Спец-меню'}
                      </span>
                    )}

                    <div className="bg-cream px-2.5 py-1.5 border border-coffee/5 font-mono text-[10px] tracking-wider text-coffee font-semibold select-all">
                      {promo.promoCode}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
