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

  return (
    <div className="relative bg-black/5 backdrop-blur-sm rounded-2xl p-4 my-16 px-8 lg:px-32">
      <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
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

        {mediaItems[currentIndex]?.type === 'video' && (
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

      {/* Additional sections like hero, services, testimonials, and contact follow */}
      {/* Ensure you continue as before for a complete design consistency */}
    </div>
  );
}
