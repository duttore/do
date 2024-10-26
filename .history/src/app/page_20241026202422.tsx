"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWrench, faCogs, faCommentDots, faPhone, faInfoCircle, faArrowRight, faPlay, faPause, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const mediaItems = [
  {
    type: 'image',
    url: 'https://cdn.discordapp.com/attachments/1297273560158568598/1299764812267651132/Screenshot_2024-08-21_210751.png',
    thumbnail: 'https://cdn.discordapp.com/attachments/1297273560158568598/1299764812267651132/Screenshot_2024-08-21_210751.png'
  },
  {
    type: 'image',
    url: 'https://cdn.discordapp.com/attachments/1297273560158568598/1299764812925894656/Screenshot_2024-03-03_001724.png',
    thumbnail: 'https://cdn.discordapp.com/attachments/1297273560158568598/1299764812925894656/Screenshot_2024-03-03_001724.png'
  },
  {
    type: 'video',
    url: 'https://cdn.discordapp.com/attachments/1297273560158568598/1299766082802028584/C0C0C0.mp4',
    thumbnail: 'https://cdn.discordapp.com/attachments/1297273560158568598/1299764812267651132/Screenshot_2024-08-21_210751.png'
  },
  {
    type: 'image',
    url: 'https://cdn.discordapp.com/attachments/1297273560158568598/1299764812267651132/Screenshot_2024-08-21_210751.png',
    thumbnail: 'https://cdn.discordapp.com/attachments/1297273560158568598/1299764812267651132/Screenshot_2024-08-21_210751.png'
  },
  {
    type: 'video',
    url: 'https://cdn.discordapp.com/attachments/1297273560158568598/1299766082802028584/C0C0C0.mp4',
    thumbnail: 'https://cdn.discordapp.com/attachments/1297273560158568598/1299764812267651132/Screenshot_2024-08-21_210751.png'
  }
];

const MediaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlay = () => {
    const currentItem = mediaItems[currentIndex];
    if (currentItem && currentItem.type === 'video' && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const currentItem = mediaItems[currentIndex];

  return (
    <div className="relative bg-black/5 backdrop-blur-sm rounded-2xl p-4 my-16 px-8 lg:px-32">
      <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
        <AnimatePresence mode="wait">
          {currentItem && currentItem.type === 'image' ? (
            <motion.div
              key={`image-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={currentItem.url}
                alt={`Slide ${currentIndex + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </motion.div>
          ) : (
            currentItem && (
              <motion.video
                key={`video-${currentIndex}`}
                ref={videoRef}
                src={currentItem.url}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            )
          )}
        </AnimatePresence>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 backdrop-blur-md p-2 rounded-full text-white transition-all"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 backdrop-blur-md p-2 rounded-full text-white transition-all"
        >
          <FontAwesomeIcon icon={faChevronRight} className="h-6 w-6" />
        </button>

        {currentItem?.type === 'video' && (
          <button
            onClick={togglePlay}
            className="absolute bottom-4 right-4 bg-black/30 hover:bg-black/40 backdrop-blur-md p-2 rounded-full text-white transition-all"
          >
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="h-6 w-6" />
          </button>
        )}
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 snap-x">
        {mediaItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden snap-start ${
              currentIndex === index ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <Image
              src={item.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
            {item.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <FontAwesomeIcon icon={faPlay} className="h-6 w-6 text-white" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg' : 'bg-transparent'}`}>
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
            </nav>

            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
          </div>

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
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
        </div>
      </header>

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
            <div className="flex justify-center gap-4">
              <a
                href="#servizi"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                <span>Scopri i servizi</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <a
                href="https://wa.me/393343156903"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>Contattami</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="servizi" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
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

      <MediaCarousel />

      <section id="testimonials" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cosa dicono i nostri clienti</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Servizio eccellente e riparazione veloce. La mia macchina da cucire funziona come nuova!", name: "Maria Rossi" },
              { text: "Personale qualificato e molto disponibile. Consiglio vivamente!", name: "Luca Bianchi" },
              { text: "Ottimo servizio di consulenza per l'acquisto della mia nuova macchina da cucire.", name: "Federica Verdi" }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <p className="mb-4 text-gray-300">{testimonial.text}</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contatti" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contattami</h2>
            <p className="text-gray-600 mb-8">
              Per richiedere informazioni o prenotare un appuntamento, puoi contattarmi anche su WhatsApp.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+393343156903"
                className="flex items-center justify-center space-x-2 text-xl"
              >
                <FontAwesomeIcon icon={faPhone} className="text-blue-600" />
                <span>+39 334 315 6903</span>
              </a>
              <a
                href="https://wa.me/393343156903"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>Contattami su WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Stefano Ricci - Tutti i diritti riservati</p>
        </div>
      </footer>
    </div>
  );
}
