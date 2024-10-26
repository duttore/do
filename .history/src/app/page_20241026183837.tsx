"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faWrench, 
  faCogs, 
  faCommentDots, 
  faPhone, 
  faInfoCircle, 
  faArrowRight,
  faPlay,
  faPause,
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setScrolled(currentScrollY > 50);
        setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
        lastScrollY.current = currentScrollY;
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl md:text-3xl font-bold"
            >
              <a href="#" className={`${scrolled ? 'text-gray-900' : 'text-white'} hover:text-blue-600 transition-colors`}>
                Stefano Ricci
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { href: '#servizi', icon: faWrench, text: 'Servizi' },
                { href: '#chi-sono', icon: faInfoCircle, text: 'Chi Sono' },
                { href: '#contatti', icon: faPhone, text: 'Contatti' }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center space-x-2 ${scrolled ? 'text-gray-900' : 'text-white'} hover:text-blue-600 transition-colors duration-300`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-sm" />
                  <span>{item.text}</span>
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="https://wa.me/393343156903"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>WhatsApp</span>
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg"
              >
                {[
                  { href: '#servizi', icon: faWrench, text: 'Servizi' },
                  { href: '#chi-sono', icon: faInfoCircle, text: 'Chi Sono' },
                  { href: '#contatti', icon: faPhone, text: 'Contatti' }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center space-x-2 px-6 py-4 hover:bg-gray-50 text-gray-900"
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.text}</span>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/393343156903"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
      </a>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://milanimacchinepercucire.com/wp-content/uploads/2024/02/milani_shop_desio-1024x575.webp"
            alt="Negozio Macchine da Cucire"
            layout="fill"
            objectFit="cover"
            priority
            className="brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Assistenza Professionale per Macchine da Cucire
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Riparazioni rapide ed efficienti per garantire il massimo delle prestazioni della tua macchina da cucire.
            </p>
            <a
              href="#servizi"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
              <span>Scopri i servizi</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I nostri servizi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Offriamo soluzioni complete per la manutenzione e riparazione della tua macchina da cucire
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: faWrench, title: 'Riparazioni', description: 'Riparazioni complete per ogni tipo di macchina da cucire, meccanica o elettronica.' },
              { icon: faCogs, title: 'Manutenzione', description: 'Controllo e manutenzione preventiva per mantenere la macchina in condizioni ottimali.' },
              { icon: faCommentDots, title: 'Consulenza', description: 'Consulenza personalizzata per l\'acquisto di nuove macchine da cucire e accessori.' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FontAwesomeIcon icon={service.icon} className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Stefano Ricci - Tutti i diritti riservati</p>
        </div>
      </footer>
    </div>
  );
}
