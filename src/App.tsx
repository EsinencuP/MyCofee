/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuCarousel from './components/MenuCarousel';
import Advantages from './components/Advantages';
import Gallery from './components/Gallery';
import Promotions from './components/Promotions';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ToastContainer from './components/ToastContainer';
import { Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('ro');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div id="app-root" className="bg-cream text-coffee relative selection:bg-caramel/20 selection:text-caramel min-h-screen flex flex-col justify-between">
      {/* Upper Sticky Navigation with Language selector */}
      <Navbar lang={lang} onChangeLang={setLang} onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Block */}
        <Hero lang={lang} onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Decorative Divider */}
        <div className="h-px bg-coffee/5 max-w-5xl mx-auto" />

        {/* 2. Story / Philosophy Block */}
        <About lang={lang} />

        {/* 3. Horizontal Menu Swipe Block */}
        <MenuCarousel lang={lang} />

        {/* 4. Minimal Advantages Block */}
        <Advantages lang={lang} />

        {/* 5. Parallax Atmosphere Photo Grid */}
        <Gallery lang={lang} />

        {/* 6. Seasonal Promotions and Happy Hours */}
        <Promotions lang={lang} />

        {/* 7. Contact Details and interactive Google Map */}
        <Contacts lang={lang} />
      </main>

      {/* 8. Modern Elegant Footer */}
      <Footer lang={lang} />

      {/* Interactive Table Booking Modal overlays */}
      <BookingModal lang={lang} isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Global Toast Notification System overlay */}
      <ToastContainer />
    </div>
  );
}
