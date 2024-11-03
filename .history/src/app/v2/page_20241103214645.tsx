"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Wrench,
  Settings,
  MessagesSquare,
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
  Play
} from 'lucide-react';

// Ensure all icons and imported components are correctly used.

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group hover:shadow-lg transition-all duration-300 border rounded-lg p-6 bg-white/80 backdrop-blur-sm">
    <div className="pt-6">
      <div className="mb-6 relative">
        <div className="w-16 h-16 mx-auto bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          {Icon && <Icon className="w-8 h-8" />}
        </div>
      </div>
      <h3 className="text-xl mb-4 text-center font-semibold">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  </div>
);

const FeatureHighlight = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-blue-100 p-3 rounded-lg">
      {Icon && <Icon className="w-6 h-6 text-blue-600" />}
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
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

const VideoModal = ({ videoUrl, onClose }) => {
  if (!videoUrl) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl mx-4">
        <button
          className="absolute -top-10 right-0 text-white p-2"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative pt-[56.25%]">
          <iframe
            src={videoUrl}
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
          />
        </div>
      </div>
    </motion.div>
  );
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const works = [
    {
      imageUrl: "/api/placeholder/1200/800",
      title: "Riparazione Singer Moderna",
      description: "Intervento completo di manutenzione e riparazione su una moderna macchina Singer",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },
    {
      imageUrl: "/api/placeholder/1200/800",
      title: "Restauro Macchina Vintage",
      description: "Restauro completo di una macchina da cucire degli anni '50 tornata a nuova vita"
    },
    {
      imageUrl: "/api/placeholder/1200/800",
      title: "Manutenzione Bernette",
      description: "Intervento di manutenzione ordinaria su una Bernette di ultima generazione"
    }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % works.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

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
              className="object-cover cursor-pointer"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">{currentWork.title}</h3>
              <p className="mb-4">{currentWork.description}</p>
              {currentWork.videoUrl && (
                <button
                  onClick={() => setShowVideo(true)}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
                >
                  <Play className="w-4 h-4" />
                  <span>Guarda il Video</span>
                </button>
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

      <AnimatePresence>
        {showVideo && (
          <VideoModal
            videoUrl={currentWork.videoUrl}
            onClose={() => setShowVideo(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      imageUrl: "/api/placeholder/800/600",
      title: "Riparazione Singer",
      description: "Riparazione completa di una Singer moderna",
      category: "riparazioni"
    },
    {
      imageUrl: "/api/placeholder/800/600",
      title: "Manutenzione Brother",
      description: "Intervento di manutenzione ordinaria",
      category: "manutenzione"
    },
    {
      imageUrl: "/api/placeholder/800/600",
      title: "Restauro Vintage",
      description: "Restauro completo di una macchina antica",
      category: "restauri"
    }
  ];

  const categories = [
    { id: 'all', label: 'Tutti' },
    { id: 'riparazioni', label: 'Riparazioni' },
    { id: 'manutenzione', label: 'Manutenzione' },
    { id: 'restauri', label: 'Restauri' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div>
      <div className="flex justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.02 }}
            className="relative h-64 rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full max-w-7
