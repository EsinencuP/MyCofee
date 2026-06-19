import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronLeft, ChevronRight, Coffee, Compass, Users, Flame } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { Language, TRANSLATIONS } from '../translations';

interface GalleryProps {
  lang: Language;
}

export default function Gallery({ lang }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});
  const t = TRANSLATIONS[lang];

  // Filter logic
  const filteredPhotos = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((p) => p.category === activeFilter);

  const filters = [
    { id: 'all', label: lang === 'ro' ? 'Toate' : 'Все' },
    { id: 'interior', label: lang === 'ro' ? 'Interior' : 'Интерьер' },
    { id: 'drinks', label: lang === 'ro' ? 'Băuturi' : 'Напитки' },
    { id: 'process', label: lang === 'ro' ? 'Etape' : 'Процесс' },
    { id: 'guests', label: lang === 'ro' ? 'Oaspeți' : 'Гости' },
  ];

  const handleNextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null) {
      const nextIndex = (selectedPhotoIndex + 1) % filteredPhotos.length;
      setSelectedPhotoIndex(nextIndex);
    }
  };

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null) {
      const prevIndex = (selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      setSelectedPhotoIndex(prevIndex);
    }
  };

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-milk text-coffee relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-caramel uppercase tracking-[0.25em] block">
            {lang === 'ro' ? 'Atmosfera Caffee / MD' : 'Атмосфера кофейни'}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-coffee font-light tracking-tight">
            {t.galleryTitle}
          </h2>
          <p className="font-sans text-sm md:text-base text-coffee/60 font-light leading-relaxed">
            {t.gallerySubtitle}
          </p>
        </div>

        {/* Filter Badges (Editorial) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`py-1.5 px-4 text-xs uppercase tracking-widest font-medium transition-all duration-300 border cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-coffee text-cream border-coffee'
                  : 'bg-transparent text-coffee/60 border-transparent hover:text-coffee hover:border-coffee/20'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Bento Grid layout with slight floating parallax effect on scroll/hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((item, index) => {
              // Get absolute index in current filtered category for the lightbox
              const itemIndexInFiltered = filteredPhotos.findIndex((p) => p.id === item.id);
              
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  onClick={() => setSelectedPhotoIndex(itemIndexInFiltered)}
                  className={`relative group overflow-hidden bg-cream border border-coffee/5 cursor-pointer shadow-md shadow-coffee/3 ${
                    index === 1 ? 'lg:col-span-2' : ''
                  } ${
                    index === 4 ? 'lg:row-span-2 lg:h-[480px]' : 'aspect-4/3'
                  } h-full min-h-[240px]`}
                >
                  {/* Image wrapper */}
                  <div className="w-full h-full overflow-hidden relative bg-milk">
                    {brokenImages[item.id] ? (
                      <div className="w-full h-full bg-cream/75 flex flex-col items-center justify-center p-6 relative select-none">
                        <div className="absolute inset-0 bg-[radial-gradient(#1b1b1803_1px,transparent_1px)] [background-size:10px_10px] opacity-40" />
                        <div className="w-14 h-14 rounded-full bg-milk border border-coffee/5 flex items-center justify-center text-caramel mb-3 relative shadow-inner">
                          {item.category === 'interior' && <Compass className="w-6 h-6 stroke-[1.25]" />}
                          {item.category === 'drinks' && <Coffee className="w-6 h-6 stroke-[1.25]" />}
                          {item.category === 'process' && <Flame className="w-6 h-6 stroke-[1.25]" />}
                          {item.category === 'guests' && <Users className="w-6 h-6 stroke-[1.25]" />}
                        </div>
                        <span className="text-[10px] tracking-[0.2em] font-mono text-coffee/30 uppercase font-bold text-center">
                          Caffee / MD Atmosphere
                        </span>
                      </div>
                    ) : (
                      <img
                        src={item.url}
                        alt={lang === 'ro' ? item.captionRo : item.captionRu}
                        referrerPolicy="no-referrer"
                        onError={() => setBrokenImages(prev => ({ ...prev, [item.id]: true }))}
                        className="w-full h-full object-cover grayscale-[12%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                    )}

                    {/* Scrim Overlay */}
                    <div className="absolute inset-0 bg-coffee/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6" />

                    {/* Floating Info */}
                    <div className="absolute inset-x-6 bottom-6 flex justify-between items-end transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10 font-sans">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-caramel font-semibold">
                          {item.category === 'interior' 
                            ? (lang === 'ro' ? 'Interior' : 'Интерьер') 
                            : item.category === 'drinks' 
                              ? (lang === 'ro' ? 'Băutură' : 'Напиток') 
                              : item.category === 'process' 
                                ? (lang === 'ro' ? 'Preparare' : 'Процесс') 
                                : (lang === 'ro' ? 'Oaspeți' : 'Наши гости')}
                        </span>
                        <h4 className="font-serif text-lg text-cream leading-tight mt-0.5 font-light">
                          {lang === 'ro' ? item.captionRo : item.captionRu}
                        </h4>
                      </div>
                      <div className="p-2.5 bg-cream/20 backdrop-blur-md rounded-full text-cream border border-cream/15">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Full screen Lightbox Gallery Viewer */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
            {/* Dark Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.98 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute inset-0 bg-coffee"
            />

            {/* Lightbox Controls */}
            <div className="absolute top-6 left-6 z-10 text-cream/60 text-xs tracking-wider uppercase font-sans">
              Caffee / MD • {lang === 'ro' ? 'Piesa' : 'Кадр'} {selectedPhotoIndex + 1} {lang === 'ro' ? 'din' : 'из'} {filteredPhotos.length}
            </div>
            
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-4 right-4 z-10 p-2.5 text-cream/70 hover:text-cream rounded-full hover:bg-cream/10 border border-white/10 backdrop-blur-sm cursor-pointer transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main Lightbox Stage */}
            <div className="relative w-full max-w-5xl aspect-16/10 max-h-[80vh] flex items-center justify-center z-10">
              
              {/* Left Arrow */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-2 sm:-left-12 p-3 text-cream/70 hover:text-cream rounded-full hover:bg-cream/10 border border-white/10 backdrop-blur-sm cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Central Image Container */}
              <motion.div
                key={selectedPhotoIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-full overflow-hidden border border-white/5 shadow-2xl relative"
              >
                {brokenImages[filteredPhotos[selectedPhotoIndex].id] ? (
                  <div className="w-[400px] h-[300px] max-w-full bg-cream/95 flex flex-col items-center justify-center p-8 relative rounded-none mx-auto shadow-2xl text-coffee">
                    <div className="absolute inset-0 bg-[radial-gradient(#1b1b1803_1px,transparent_1px)] [background-size:10px_10px] opacity-40" />
                    <div className="w-16 h-16 rounded-full bg-milk border border-coffee/10 flex items-center justify-center text-caramel mb-4 relative shadow-inner">
                      {filteredPhotos[selectedPhotoIndex].category === 'interior' && <Compass className="w-7 h-7 stroke-[1.25]" />}
                      {filteredPhotos[selectedPhotoIndex].category === 'drinks' && <Coffee className="w-7 h-7 stroke-[1.25]" />}
                      {filteredPhotos[selectedPhotoIndex].category === 'process' && <Flame className="w-7 h-7 stroke-[1.25]" />}
                      {filteredPhotos[selectedPhotoIndex].category === 'guests' && <Users className="w-7 h-7 stroke-[1.25]" />}
                    </div>
                    <span className="text-xs tracking-[0.2em] font-mono text-coffee/60 uppercase font-bold text-center mb-1">
                      Caffee / MD Atmosphere
                    </span>
                    <span className="text-[10px] text-coffee/40 uppercase font-sans tracking-widest font-bold">
                      {filteredPhotos[selectedPhotoIndex].category}
                    </span>
                  </div>
                ) : (
                  <img
                    src={filteredPhotos[selectedPhotoIndex].url}
                    alt={lang === 'ro' ? filteredPhotos[selectedPhotoIndex].captionRo : filteredPhotos[selectedPhotoIndex].captionRu}
                    referrerPolicy="no-referrer"
                    onError={() => setBrokenImages(prev => ({ ...prev, [filteredPhotos[selectedPhotoIndex].id]: true }))}
                    className="max-w-full max-h-[70vh] object-contain mx-auto"
                  />
                )}
                
                {/* Caption Block */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-coffee/90 via-coffee/40 to-transparent p-6 text-cream text-center">
                  <span className="text-[10px] uppercase tracking-widest text-caramel block mb-1">
                    Caffee / MD Specialty Coffee
                  </span>
                  <p className="font-serif text-lg sm:text-xl font-light">
                    {lang === 'ro' ? filteredPhotos[selectedPhotoIndex].captionRo : filteredPhotos[selectedPhotoIndex].captionRu}
                  </p>
                </div>
              </motion.div>

              {/* Right Arrow */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-2 sm:-right-12 p-3 text-cream/70 hover:text-cream rounded-full hover:bg-cream/10 border border-white/10 backdrop-blur-sm cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
