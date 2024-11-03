"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Wrench,
  Settings,
  MessageSquare,
  Phone,
  Info,
  ArrowRight,
  Menu,
  X,
  Clock,
  Tool,
  Shield,
  History,
  Activity,
  Award,
  Check,
  ChevronLeft,
  ChevronRight,
  WhatsApp,
  Play,
} from 'lucide-react';

// Base components for this page
const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group hover:shadow-lg transition-all duration-300 border rounded-lg p-6 bg-white/80 backdrop-blur-sm">
      <div className="pt-6">
        <div className="mb-6 relative">
          <div className="w-16 h-16 mx-auto bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <Icon className="w-8 h-8" />
          </div>
        </div>
        <h3 className="text-xl mb-4 text-center font-semibold">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

const BrandDisplay = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center py-8">
    {['Singer', 'Brother', 'Janome', 'Bernette'].map((brand) => (
      <motion.div
        key={brand}
        className="bg-white/80 backdrop-blur-sm p-6 rounded-xl w-full text-center"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-xl font-semibold text-gray-800">{brand}</h3>
      </motion.div>
    ))}
  </div>
);

const FeatureHighlight = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-blue-100 p-3 rounded-lg">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const works = [
    {
      imageUrl: "/api/placeholder/1200/800",
      title: "Riparazione Singer Moderna",
      description: "Intervento completo di manutenzione e riparazione su una moderna macchina Singer",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    },
    {
      imageUrl: "/api/placeholder/1200/800",
      title: "Restauro Macchina Vintage",
      description: "Restauro completo di una macchina da cucire degli anni '50 tornata a nuova vita",
      beforeImage: "/api/placeholder/800/600",
      afterImage: "/api/placeholder/800/600",
    },
    {
      imageUrl: "/api/placeholder/1200/800",
      title: "Manutenzione Bernette",
      description: "Intervento di manutenzione ordinaria su una Bernette di ultima generazione",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  const currentWork = works[currentIndex];

  return (
    <div className="relative w-full">
      <div className="relative h-[600px] overflow-hidden rounded-xl">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={currentWork.imageUrl}
              alt={currentWork.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">{currentWork.title}</h3>
              <p className="mb-4">{currentWork.description}</p>
              {currentWork.videoUrl && (
                <a
                  href={currentWork.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg inline-flex items-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Guarda il Video</span>
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default function ModernSingerPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#servizi', icon: Wrench, text: 'Servizi' },
    { href: '#lavori', icon: Tool, text: 'Lavori' },
    { href: '#chi-siamo', icon: Info, text: 'Chi Siamo' },
    { href: '#contatti', icon: Phone, text: 'Contatti' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl md:text-3xl font-bold">
              <a href="#" className={`${scrolled ? 'text-gray-900' : 'text-white'} hover:text-blue-600 transition-colors`}>
                Stefano Ricci
              </a>
            </motion.div>

            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                <motion.a key={index} href={item.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className={`flex items-center space-x-2 ${scrolled ? 'text-gray-900' : 'text-white'} hover:text-blue-600 transition-colors`}>
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </nav>

            <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 flex items-center justify-center z-40">
            <div className="space-y-8">
              {menuItems.map((item, index) => (
                <motion.a key={index} href={item.href} className="flex items-center space-x-4 text-white text-2xl hover:text-blue-400 transition-colors" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} onClick={() => setMenuOpen(false)}>
                  <item.icon className="w-6 h-6" />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image src="/api/placeholder/1920/1080" alt="Modern Sewing Workshop" fill className="object-cover brightness-50" priority />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Riparazione per la tua macchina da cucire</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">Esperti nella riparazione e manutenzione di macchine da cucire di ogni marca e modello</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#servizi" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition-colors group">
                <span>Scopri i Servizi</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/YOUR_PHONE_NUMBER" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition-colors">
                <WhatsApp className="w-5 h-5" />
                <span>Contattaci su WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Marchi Supportati</h2>
            <p className="text-gray-600">Esperienza specializzata con i principali marchi di macchine da cucire</p>
          </motion.div>
          <BrandDisplay />
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Servizi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Offriamo una gamma completa di servizi professionali per mantenere la tua macchina da cucire in condizioni ottimali</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard icon={Tool} title="Riparazioni Professionali" description="Interventi specializzati su macchine da cucire meccaniche ed elettroniche" />
            <ServiceCard icon={Settings} title="Manutenzione Preventiva" description="Programmi di manutenzione per prevenire problemi e garantire prestazioni ottimali" />
            <ServiceCard icon={MessageSquare} title="Consulenza Esperta" description="Consigli personalizzati per l'acquisto e l'utilizzo della tua macchina da cucire" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="lavori" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Lavori</h2>
            <p className="text-gray-600 max
            -w-2xl mx-auto">
              Scopri alcuni dei nostri interventi più recenti
            </p>
          </motion.div>

          <Carousel />

          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Galleria Lavori</h3>
            <Gallery />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perché Sceglierci</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              La nostra esperienza e professionalità al servizio della tua creatività
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <FeatureHighlight icon={History} title="30+ Anni di Esperienza" description="Competenza maturata su ogni tipo di macchina da cucire" />
              <FeatureHighlight icon={Clock} title="Interventi Rapidi" description="Riparazioni veloci e professionali" />
              <FeatureHighlight icon={Shield} title="Garanzia sugli Interventi" description="Tutti i nostri interventi sono garantiti" />
            </div>
            <div className="space-y-6">
              <FeatureHighlight icon={Activity} title="Diagnosi gratuita" description="Vi forniamo un preventivo gratuito" />
              <FeatureHighlight icon={Award} title="Certificazioni" description="Tecnici certificati dai principali produttori" />
              <FeatureHighlight icon={Check} title="Assistenza Post-Intervento" description="Supporto continuo dopo ogni riparazione" />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "30+", label: "Anni di Esperienza" },
              { number: "300+", label: "Riparazioni Completate" },
              { number: "100%", label: "Clienti Soddisfatti" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contattaci</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Siamo qui per aiutarti con la tua macchina da cucire
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER" // Replace with your WhatsApp number
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg transition-colors"
            >
              <WhatsApp className="w-6 h-6" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:YOUR_PHONE_NUMBER" // Replace with your phone number
              className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>Chiamaci</span>
            </a>
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