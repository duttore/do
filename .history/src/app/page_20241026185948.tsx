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

        {mediaItems[currentIndex].type === 'video' && (
          <button
            onClick={togglePlay}
            className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 rounded-full text-white transition-all"
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
      {/* Navbar */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blue-600/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl md:text-3xl font-bold"
            >
              <a href="#" className={scrolled ? 'text-white' : 'text-white'}>
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
                  className={`flex items-center space-x-2 ${scrolled ? 'text-white' : 'text-white'} hover:text-yellow-400 transition-colors duration-300`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-sm" />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </nav>

            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-white' : 'text-white'}`}
            >
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
          </div>

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-blue-600/80 shadow-lg rounded-b-lg"
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
                  className="flex items-center space-x-2 px-6 py-4 hover:bg-blue-700 text-white"
                >
                  <FontAwesomeIcon icon={item.icon} />
                  <span>{item.text}</span>
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </header>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/393343156903"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        initial={{ y: 100 }}
        animate={{ y: scrollDirection === 'down' ? 0 : 100 }}
        transition={{ duration: 0.3 }}
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
      </motion.a>

      <section className="relative min-h-screen flex items-center pt-20">
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
              className="inline-flex items-center space-x-2 bg-yellow-500 text-white px-8 py-4 rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
            >
              <span>Scopri i servizi</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Rest of the code continues as before */}
      {/* Include all other sections as you previously structured them */}
    </div>
  );
}