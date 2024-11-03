"use client";

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faTimes, faHome, faImages
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function ForumPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const menuItems = [
    { href: '/', icon: faHome, text: 'Home' },
    // Add other menu items here if needed
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      {/* Navbar */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl md:text-3xl font-bold"
            >
              <a href="#" className={`${scrolled ? 'text-gray-900' : 'text-white'} hover:text-blue-600 transition-colors`}>
                Singer - Macchine per Cucire
              </a>
            </motion.div>

            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
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
            </nav>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
          >
            <ul className="space-y-8">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-3xl text-white hover:text-blue-400 transition-colors duration-300"
                >
                  <a href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center space-x-4">
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="container mx-auto p-4 pt-24">
        <Head>
          <title>L'Incredibilità delle Macchine da Cucire Singer</title>
          <meta name="description" content="Scopri perché le macchine da cucire Singer sono considerate tra le migliori al mondo, grazie alla loro innovazione, affidabilità e versatilità." />
          <meta name="keywords" content="macchine da cucire Singer, caratteristiche Singer, cucito, affidabilità, versatilità" />
        </Head>
        <h1 className="text-4xl font-bold my-4">L'Incredibilità delle Macchine da Cucire Singer</h1>

        <section className="my-8">
          <h2 className="text-2xl font-semibold my-2">Innovazione Continua</h2>
          <p>
            Da oltre 170 anni, le macchine da cucire <strong>Singer</strong> rappresentano l'apice dell'innovazione nel settore del cucito. Sin dalla loro prima macchina brevettata nel 1851, Singer ha portato al mercato miglioramenti rivoluzionari come la frizione a piedino e il braccio mobile, che hanno reso il cucito più semplice ed efficiente. Queste innovazioni hanno permesso agli utenti di ottenere cuciture più precise e di risparmiare tempo prezioso.
          </p>
          <div className="my-4">
            <Image
              src="https://pyxis.nymag.com/v1/imgs/727/a66/30f0a3ad0b67d8b7fe0ae62fce4af9afde-bic-sewing-machine.rhorizontal.w1100.jpg"
              alt="Innovazione Singer"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold my-2">Affidabilità e Durata</h2>
          <p>
            Una delle caratteristiche più apprezzate delle macchine da cucire Singer è la loro <strong>affidabilità</strong>. Ogni macchina è progettata per durare nel tempo, anche con un uso intensivo. I modelli vintage, come la celebre <strong>Singer Featherweight 221</strong>, sono ancora oggi ricercati per la loro incredibile resistenza e capacità di funzionare perfettamente anche dopo decenni.
          </p>
          <p>
            Questa affidabilità è il risultato di un'attenzione meticolosa ai dettagli nella progettazione e nella produzione, garantendo che ogni macchina Singer possa sostenere lavori sartoriali complessi senza compromettere la qualità.
          </p>
          <div className="my-4">
            <Image
              src="https://www.example.com/image2.jpg"
              alt="Macchina Singer Affidabile"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold my-2">Versatilità per Tutti i Tipi di Cucito</h2>
          <p>
            Che tu sia un principiante o un professionista, Singer offre un modello adatto alle tue esigenze. Dai modelli meccanici semplici a quelli computerizzati avanzati, ogni macchina è progettata per gestire una vasta gamma di tessuti e tecniche di cucito. La <strong>Singer Quantum Stylist 9960</strong>, per esempio, offre oltre 600 punti incorporati e opzioni di personalizzazione, rendendola ideale per progetti complessi e creativi.
          </p>
          <p>
            La versatilità delle macchine Singer le rende una scelta perfetta per chiunque voglia esplorare il mondo del cucito, sia per progetti di moda, decorazioni per la casa o artigianato.
          </p>
          <div className="my-4">
            <Image
              src="https://www.example.com/image3.jpg"
              alt="Versatilità delle Macchine Singer"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold my-2">Precisione e Facilità d'Uso</h2>
          <p>
            Un altro aspetto straordinario delle macchine da cucire Singer è la loro <strong>precisione</strong>. Ogni punto è calibrato per garantire uniformità e perfezione. Le macchine moderne includono funzioni come la selezione automatica del punto, la regolazione della tensione e l'infilatura automatica dell'ago, rendendo il cucito un'esperienza semplice e senza stress.
          </p>
          <p>
            Anche i principianti possono iniziare a cucire con fiducia grazie alle istruzioni chiare e alle funzionalità intuitive che caratterizzano ogni macchina Singer.
          </p>
          <div className="my-4">
            <Image
              src="https://www.example.com/image4.jpg"
              alt="Precisione delle Macchine Singer"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold my-2">Innovazioni Tecnologiche Moderne</h2>
          <p>
            Singer ha saputo adattarsi alle tecnologie moderne, introducendo modelli che combinano tradizione e innovazione. Le macchine computerizzate offrono display LCD, memoria per punti personalizzati e possibilità di connessione per aggiornamenti software, rendendo ogni macchina un vero e proprio strumento tecnologico.
          </p>
          <p>
            Queste innovazioni rendono Singer un marchio senza tempo, che sa soddisfare le esigenze dei sarti contemporanei mantenendo al contempo i valori classici di qualità e semplicità.
          </p>
          <div className="my-4">
            <Image
              src="https://www.example.com/image5.jpg"
              alt="Innovazioni Tecnologiche Singer"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="my-8">
          <Link href="/" className="text-blue-500 hover:underline">
            Torna alla home
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Stefano Ricci - Tutti i diritti riservati</p>
        </div>
      </footer>
    </div>
  );
}