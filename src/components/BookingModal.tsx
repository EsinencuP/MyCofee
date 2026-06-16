import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Users, Clock, FileText, CheckCircle, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, TRANSLATIONS } from '../translations';
import { showToast } from './ToastContainer';

interface BookingModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

interface Reservation {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
  createdAt: string;
}

export default function BookingModal({ lang, isOpen, onClose }: BookingModalProps) {
  const t = TRANSLATIONS[lang];
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    notes: '',
  });

  const [activeReservations, setActiveReservations] = useState<Reservation[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Hydrate bookings from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('meso_coffee_bookings');
      if (stored) {
        setActiveReservations(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Could not fetch reservations", e);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validations
    if (!formData.name.trim()) {
      setErrorMessage(lang === 'ro' ? 'Vă rugăm să introduceți numele complet.' : 'Пожалуйста, введите ваше имя.');
      return;
    }
    if (!formData.phone.match(/^\+?[\d\s-]{8,15}$/)) {
      setErrorMessage(lang === 'ro' ? 'Vă rugăm să introduceți un număr de telefon valid.' : 'Пожалуйста, введите корректный номер телефона.');
      return;
    }
    if (!formData.date) {
      setErrorMessage(lang === 'ro' ? 'Vă rugăm să selectați data vizitei.' : 'Выберите дату посещения.');
      return;
    }
    if (!formData.time) {
      setErrorMessage(lang === 'ro' ? 'Vă rugăm să alegeți ora dorită.' : 'Выберите время.');
      return;
    }

    const newReservation: Reservation = {
      id: Date.now().toString(),
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      notes: formData.notes,
      createdAt: new Date().toLocaleDateString(lang === 'ro' ? 'ro-RO' : 'ru-RU', { hour: '2-digit', minute: '2-digit' }),
    };

    try {
      const updated = [newReservation, ...activeReservations];
      setActiveReservations(updated);
      localStorage.setItem('meso_coffee_bookings', JSON.stringify(updated));
      setIsSuccess(true);
      
      showToast(
        lang === 'ro'
          ? `Măsuța selectată pentru ${newReservation.name} la ora ${newReservation.time} a fost rezervată cu succes!`
          : `Столик на имя ${newReservation.name} на ${newReservation.time} успешно забронирован!`,
        'success'
      );

      // Reset form
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        notes: '',
      });
    } catch (err) {
      setErrorMessage(lang === 'ro' ? 'Eroare la salvarea rezervării dvs.' : 'Произошла ошибка при сохранении бронирования.');
    }
  };

  const handleDelete = (id: string) => {
    const reservationToDelete = activeReservations.find((r) => r.id === id);
    const filtered = activeReservations.filter((r) => r.id !== id);
    setActiveReservations(filtered);
    localStorage.setItem('meso_coffee_bookings', JSON.stringify(filtered));

    if (reservationToDelete) {
      showToast(
        lang === 'ro'
          ? `Rezervarea pentru ${reservationToDelete.name} a fost anulată.`
          : `Бронирование на имя ${reservationToDelete.name} было отменено.`,
        'info'
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-coffee/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative w-full max-w-2xl bg-cream border border-coffee/10 shadow-2xl overflow-hidden rounded-none flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] z-10"
          >
            {/* Elegant Side Banner (Left) */}
            <div className="md:w-5/12 bg-coffee p-6 md:p-8 text-cream flex flex-col justify-between border-b md:border-b-0 md:border-r border-coffee/20 shrink-0">
              <div>
                <span className="text-caramel uppercase text-xs tracking-widest font-semibold font-sans">
                  {lang === 'ro' ? 'Rezervare' : 'БРОНИРОВАНИЕ'}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-cream mt-1 md:mt-2 tracking-wide">
                  {lang === 'ro' ? 'Locul tău preferat' : 'Ваш уютный уголок'}
                </h3>
                <p className="hidden md:block text-cream/70 text-sm mt-3 font-sans leading-relaxed font-light">
                  {lang === 'ro'
                    ? 'Rezervați o masă online pentru lucru productiv la laptop, întâlniri călduroase sau o seară tihnită.'
                    : 'Забронируйте столик для продуктивной работы, ленивого завтрака или камерного вечера под винил.'}
                </p>
              </div>

              <div className="hidden md:block mt-8 border-t border-cream/10 pt-6">
                <p className="text-xs text-caramel tracking-wider uppercase font-sans">
                  {lang === 'ro' ? 'Adresă cafenea' : 'Адрес кофейни'}
                </p>
                <p className="text-sm text-cream/90 font-medium mt-1 font-serif">Chișinău, str. Pușkin 22</p>
                <p className="text-xs text-cream/50 mt-1 font-sans">Lu-Du: 08:00 - 22:00</p>
              </div>
            </div>

            {/* Form & Bookings Panel (Right) */}
            <div className="md:w-7/12 p-6 md:p-8 overflow-y-auto flex-1 text-coffee">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 text-coffee/60 hover:text-coffee transition-colors rounded-full hover:bg-milk z-20 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-full">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 h-full font-sans"
                  >
                    <div className="p-3 bg-warm-green/10 text-warm-green rounded-full mb-4">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <h4 className="font-serif text-2xl text-coffee">{t.formSuccess}</h4>
                    <p className="text-sm text-coffee/70 mt-2 max-w-[280px]">
                      {t.formSuccessDesc}
                    </p>
                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="px-5 py-2.5 bg-milk text-coffee text-xs uppercase tracking-widest hover:bg-coffee hover:text-cream transition-all duration-300 font-medium border border-coffee/10 cursor-pointer"
                      >
                        {lang === 'ro' ? 'Mai rezervă' : 'Ещё бронь'}
                      </button>
                      <button
                        onClick={onClose}
                        className="px-5 py-2.5 bg-caramel text-cream text-xs uppercase tracking-widest hover:bg-coffee transition-all duration-300 font-medium cursor-pointer"
                      >
                        {lang === 'ro' ? 'Închide' : 'Отлично'}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <div>
                    {/* Header Tab */}
                    <div className="flex border-b border-coffee/5 mb-6">
                      <h4 className="text-xs font-sans uppercase tracking-widest font-semibold border-b-2 border-caramel pb-2 text-coffee">
                        {lang === 'ro' ? 'Rezervare nouă' : 'Новая заявка'}
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                      {errorMessage && (
                        <div className="p-3 bg-red-50 border-l-2 border-red-500 text-red-700 text-xs">
                          {errorMessage}
                        </div>
                      )}

                      {/* Name */}
                      <div className="relative">
                        <label className="block text-[10px] uppercase tracking-wider text-coffee/70 font-semibold mb-1">
                          {t.formName}
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-coffee/40" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder={lang === 'ro' ? 'ex. Sandu Rusu' : 'Константин'}
                            className="w-full bg-milk border border-coffee/10 px-10 py-2.5 text-sm outline-none focus:border-caramel transition-colors rounded-none placeholder:text-coffee/30 text-coffee"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-coffee/70 font-semibold mb-1">
                          {t.formPhone}
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-coffee/40" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder={lang === 'ro' ? '060123456' : '+373 68 123456'}
                            className="w-full bg-milk border border-coffee/10 px-10 py-2.5 text-sm outline-none focus:border-caramel transition-colors rounded-none placeholder:text-coffee/30 text-coffee"
                          />
                        </div>
                      </div>

                      {/* Row: Date, Time */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-coffee/70 font-semibold mb-1">
                            {t.formDate}
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-coffee/40 pointer-events-none" />
                            <input
                              type="date"
                              required
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                              className="w-full bg-milk border border-coffee/10 pl-10 pr-3 py-2.5 text-sm outline-none focus:border-caramel transition-colors rounded-none text-coffee"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-coffee/70 font-semibold mb-1">
                            {t.formTime}
                          </label>
                          <div className="relative">
                            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-coffee/40 pointer-events-none" />
                            <select
                              required
                              value={formData.time}
                              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                              className="w-full bg-milk border border-coffee/10 pl-10 pr-3 py-2.5 text-sm outline-none focus:border-caramel transition-colors rounded-none appearance-none text-coffee"
                            >
                              <option value="">{lang === 'ro' ? 'Ora' : 'Выберите'}</option>
                              <option value="08:30">08:30</option>
                              <option value="10:00">10:00</option>
                              <option value="12:00">12:00</option>
                              <option value="14:30">14:30</option>
                              <option value="16:00">16:00</option>
                              <option value="18:00">18:00</option>
                              <option value="19:30">19:30</option>
                              <option value="21:00">21:00</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Guests */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-coffee/70 font-semibold mb-1">
                          {t.formGuests}
                        </label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-coffee/40 pointer-events-none" />
                          <select
                            value={formData.guests}
                            onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                            className="w-full bg-milk border border-coffee/10 pl-10 pr-3 py-2.5 text-sm outline-none focus:border-caramel transition-colors rounded-none appearance-none text-coffee"
                          >
                            <option value={1}>{lang === 'ro' ? '1 persoană' : '1 гость'}</option>
                            <option value={2}>{lang === 'ro' ? '2 persoane' : '2 гостя'}</option>
                            <option value={3}>{lang === 'ro' ? '3 persoane' : '3 гостя'}</option>
                            <option value={4}>{lang === 'ro' ? '4 persoane' : '4 гостя'}</option>
                            <option value={5}>{lang === 'ro' ? '5 persoane' : '5 гостей'}</option>
                            <option value={6}>{lang === 'ro' ? '6+ persoane' : '6+ гостей'}</option>
                          </select>
                        </div>
                      </div>

                      {/* Notes */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-coffee/70 font-semibold mb-1">
                          {t.formNotes}
                        </label>
                        <div className="relative">
                          <FileText className="absolute left-3 top-3 w-4 h-4 text-coffee/40" />
                          <textarea
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            placeholder={
                              lang === 'ro'
                                ? 'De exemplu: masă la geam, acces la priză, scaun pentru copil...'
                                : 'Например: столик у окна, нужна розетка для ноутбука или детский стульчик.'
                            }
                            rows={2}
                            className="w-full bg-milk border border-coffee/10 pl-10 pr-3 py-2 text-sm outline-none focus:border-caramel transition-colors rounded-none placeholder:text-coffee/30 resize-none text-coffee"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-coffee text-cream text-xs uppercase tracking-widest font-semibold hover:bg-caramel transition-all duration-300 rounded-none cursor-pointer text-center mt-3"
                      >
                        {t.formSubmit}
                      </button>
                    </form>

                    {/* Active bookings list inside the modal */}
                    {activeReservations.length > 0 && (
                      <div className="mt-8 border-t border-coffee/5 pt-6 font-sans">
                        <h5 className="text-[10px] uppercase tracking-widest font-semibold text-coffee/60 mb-3 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-caramel" />
                          {lang === 'ro' ? `Rezervările tale active (${activeReservations.length})` : `Ваши активные бронирования (${activeReservations.length})`}
                        </h5>
                        <div className="space-y-2.5 max-h-[140px] overflow-y-auto pr-1">
                          {activeReservations.map((res) => (
                            <div
                              key={res.id}
                              className="bg-milk p-3 border border-coffee/5 flex justify-between items-center text-xs text-coffee"
                            >
                              <div>
                                <span className="font-semibold block">{res.name} ({res.guests} {lang === 'ro' ? 'pers.' : 'гостей'})</span>
                                <span className="text-coffee/60">
                                  {lang === 'ro' ? 'Pe' : 'Дата'}: <strong className="text-caramel">{res.date}</strong> {lang === 'ro' ? 'la' : 'в'} <strong className="text-caramel">{res.time}</strong>
                                </span>
                              </div>
                              <button
                                onClick={() => handleDelete(res.id)}
                                className="p-1.5 text-coffee/40 hover:text-red-500 rounded-full hover:bg-white border border-transparent hover:border-red-500/10 cursor-pointer transition-colors"
                                title={lang === 'ro' ? 'Anulează' : 'Отменить'}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
