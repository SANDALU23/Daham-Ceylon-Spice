/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-brand-gold selection:text-brand-dark">
        <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        
        <AnimatedRoutes />

        <Footer />

        {/* Floating WhatsApp */}
        <a 
          href="https://wa.me/64223104144" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="fixed bottom-8 right-8 z-50 h-12 md:h-14 rounded-full shadow-2xl hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] overflow-hidden"
        >
          <img 
            src="https://storage.googleapis.com/macaulay-api-storage-dir/11717646-6084-484c-b582-7278d6573c73/image_1.png" 
            alt="WhatsApp" 
            className="h-full w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>
      </div>
    </Router>
  );
}
