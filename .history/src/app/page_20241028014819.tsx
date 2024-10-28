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

  const togglePlay = async () => {
    const currentItem = mediaItems[currentIndex];
    if (currentItem?.type === 'video' && videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          await videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error('Error playing video:', error);
        if (!isPlaying) {
          setIsPlaying(false);
        }
      }
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
            onClick={() => void togglePlay()}
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

export default MediaCarousel;
