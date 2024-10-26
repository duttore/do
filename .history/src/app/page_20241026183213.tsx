

"use client";

import { useState, useEffect, useRef } from 'react';
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
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF } from '@fortawesome/free-brands-svg-icons';

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
  // Placeholder items (replace URLs with actual content)
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
  const videoRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const togglePlay = () => {
    if (mediaItems[currentIndex].type === 'video' && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative bg-black/5 backdrop-blur-sm rounded-2xl p-4 my-8">
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <AnimatePresence mode="wait">
          {mediaItems[currentIndex].type === 'image' ? (
            <motion.img
              key={`image-${currentIndex}`}
              src={mediaItems[currentIndex].url}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <motion.video
              key={`video-${currentIndex}`}
              ref={videoRef}
              src={mediaItems[currentIndex].url}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 rounded-full text-white transition-all"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 rounded-full text-white transition-all"
        >
          <FontAwesomeIcon icon={faChevronRight} className="h-6 w-6" />
        </button>

        {/* Play/Pause Button for Videos */}
        {mediaItems[currentIndex].type === 'video' && (
          <button
            onClick={togglePlay}
            className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 rounded-full text-white transition-all"
          >
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 snap-x">
        {mediaItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden snap-start ${
              currentIndex === index ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img
              src={item.thumbnail}
              alt={`Thumbnail ${index + 1}`}
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
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="logo text-2xl md:text-3xl font-bold"
            >
              <a href="#" className={`${scrolled ? 'text-gray-900' : 'text-white'}`}>
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
                  className={`flex items-center space-x-2 ${
                    scrolled ? 'text-gray-900' : 'text-white'
                  } hover:text-blue-600 transition-colors duration-300`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-sm" />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      {/* WhatsApp Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ 
          y: scrollDirection === 'down' && scrolled ? 0 : -100 
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-40 bg-green-500 text-white py-2 shadow-lg"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
            <span className="font-medium">Hai bisogno di assistenza?</span>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/393343156903"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-500 px-4 py-1 rounded-full hover:bg-green-50 transition-colors duration-300"
            >
              Scrivimi su WhatsApp
            </a>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} className="mr-2" />
              Facebook
            </a>
          </div>
        </div>
      </motion.div>

      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-center">
              Assistenza Professionale per Macchine da Cucire
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center text-gray-600">
              Riparazioni rapide ed efficienti per garantire il massimo delle prestazioni della tua macchina da cucire.
            </p>
            
            <MediaCarousel />
            
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#servizi"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                <span>Scopri i servizi</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
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

      {/* Contact Section */}
      <section id="contatti" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-2xl mx-auto"
          >
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Stefano Ricci - Tutti i diritti riservati</p>
        </div>
      </footer>

    </div>
  );
}