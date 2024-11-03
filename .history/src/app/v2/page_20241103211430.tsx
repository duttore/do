
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

// Components for displaying various sections
const ServiceCard = ({ icon: Icon, title, description }) => (
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
