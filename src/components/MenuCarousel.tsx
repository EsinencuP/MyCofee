import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Hand } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { Language, TRANSLATIONS } from '../translations';

interface MenuCarouselProps {
  lang: Language;
}

export default function MenuCarousel({ lang }: MenuCarouselProps) {
  const [activeCategory, setActiveCategory] = useState<'coffee' | 'cold' | 'tea' | 'pastry'>('coffee');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[lang];
  
  // Custom drag scrolling state variables
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const categories = [
    { id: 'coffee', label: t.catCoffee },
    { id: 'cold', label: t.catCold },
    { id: 'tea', label: t.catTea },
    { id: 'pastry', label: t.catPastry },
  ] as const;

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  // Monitor scroll progress to toggle navigation arrows
  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (el) {
      setShowLeftArrow(el.scrollLeft > 10);
      setShowRightArrow(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      // Run once on load/render
      checkScroll();
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScroll);
      }
    };
  }, [activeCategory, filteredItems]);

  // Handle Drag Scroll (Desktop Mouse Dragging)
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = scrollContainerRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed modifier
    el.scrollLeft = scrollLeft - walk;
    checkScroll();
  };

  // Button-based scroll navigations
  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = 350; // Approximates card width + gaps
      el.scrollTo({
        left: direction === 'left' ? el.scrollLeft - scrollAmount : el.scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="menu"
      className="py-24 md:py-32 bg-milk text-coffee relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title with Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold text-caramel uppercase tracking-[0.25em] block">
              {lang === 'ro' ? 'Meniu Boutique' : 'Наше меню'}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-coffee font-light tracking-tight">
              {t.menuTitle}
            </h2>
          </div>
          
          {/* Descriptive micro-text info */}
          <p className="font-sans text-sm md:text-base text-coffee/60 max-w-sm font-light leading-relaxed">
            {lang === 'ro'
              ? 'Fiecare băutură este o creație artizanală aromată, desăvârșită de baristul nostru. Toate prețurile sunt exprimate în MDL lei moldovenești.'
              : 'От свежевыжатого эспрессо до авторских освежающих напитков и хрустящих круассанов. Все цены указаны в молдавских леях (MDL).'}
          </p>
        </div>

        {/* Category Tab Buttons (Editorial Aesthetic) */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 border-b border-coffee/10 pb-6 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollLeft = 0;
                  }
                }}
                className={`py-2 px-5 text-xs sm:text-sm uppercase tracking-widest font-medium border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-coffee text-cream border-coffee shadow-md shadow-coffee/10'
                    : 'bg-transparent text-coffee border-coffee/10 hover:border-coffee/50 hover:bg-cream'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
          
          {/* Subtle drag-to-scroll hint helper */}
          <div className="hidden lg:flex items-center gap-1.5 ml-auto text-xs text-coffee/40 uppercase tracking-widest font-light pointer-events-none">
            <Hand className="w-3.5 h-3.5 text-caramel" />
            {lang === 'ro' ? 'Trageți stânga/dreapta' : 'Тяните для прокрутки'}
          </div>
        </div>

        {/* Custom Chevron Navigation Arrows */}
        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-coffee/10 bg-cream/90 backdrop-blur-md shadow-lg flex items-center justify-center text-coffee hover:bg-coffee hover:text-cream transition-all duration-300 cursor-pointer hover:scale-105"
              aria-label="Previous items"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-coffee/10 bg-cream/90 backdrop-blur-md shadow-lg flex items-center justify-center text-coffee hover:bg-coffee hover:text-cream transition-all duration-300 cursor-pointer hover:scale-105"
              aria-label="Next items"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

          {/* Carousel Scroll Container */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`w-full flex gap-6 md:gap-8 overflow-x-auto select-none no-scrollbar py-4 cursor-grab ${
              isDragging ? 'cursor-grabbing active-scroll' : ''
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex-shrink-0 w-72 sm:w-80 group relative bg-cream border border-coffee/5 shadow-md flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Visual Card Image with Zoom-on-hover effect */}
                    <div className="aspect-4/3 overflow-hidden bg-milk relative">
                      {item.isPopular && (
                        <span className="absolute top-4 left-4 z-10 bg-caramel text-cream text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold shadow-md">
                          {t.popularBadge}
                        </span>
                      )}
                      
                      <img
                        src={item.image}
                        alt={lang === 'ro' ? item.nameRo : item.nameRu}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out select-none pointer-events-none"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h3 className="font-serif text-xl sm:text-2xl font-light text-coffee tracking-wide truncate pr-2">
                          {lang === 'ro' ? item.nameRo : item.nameRu}
                        </h3>
                        <span className="font-serif font-semibold text-lg text-caramel whitespace-nowrap">
                          {item.price} {t.priceMDL}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-coffee/60 font-sans leading-relaxed min-h-[50px] font-light">
                        {lang === 'ro' ? item.descriptionRo : item.descriptionRu}
                      </p>
                    </div>
                  </div>

                  {/* Aesthetic card bottom line highlight */}
                  <div className="h-1 bg-transparent group-hover:bg-caramel transition-all duration-500 w-full" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Minimal Scroll Progress Bar */}
        <div className="mt-12 max-w-[200px] mx-auto h-[1.5px] bg-coffee/10 relative rounded-full">
          <motion.div
            className="absolute h-full bg-caramel rounded-full"
            style={{ left: 0, right: 0 }}
            animate={{
              width: showLeftArrow && showRightArrow ? '60%' : showLeftArrow ? '100%' : '35%',
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

      </div>
    </section>
  );
}
