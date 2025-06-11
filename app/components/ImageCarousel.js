'use client';

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JEGjEiaid8rE5KoWCecXywHaE7%26pid%3DApi&f=1&ipt=ca78510a07f62203e4a2a43537400b95b7bafe3c7000544b722fc470bc9a7b77&ipo=images",
    title: "Premium Plywood Collection",
    description: "High-quality plywood sheets for construction",
    gradient: "from-amber-500/20 to-orange-600/20"
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.bv9ZH-aS5tc9t5QAkYaCHwHaEK%26pid%3DApi&f=1&ipt=a6d78a1a9ca4fa9256aa9d93fc962406aa70067b9bd34b12f7c4416c58e3da6b&ipo=images",
    title: "Expert Craftsmanship",
    description: "Custom carpentry and woodworking services",
    gradient: "from-blue-500/20 to-indigo-600/20"
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.V71SL-BSq1omczz-5LTT-gHaE9%26r%3D0%26pid%3DApi&f=1&ipt=26fe4887fab268e4ac18df1e5c1c8dc83e14b2222516146fd30b0af7a3a5b6b2&ipo=images",
    title: "Interior Wood Panels",
    description: "Elegant solutions for modern interiors",
    gradient: "from-green-500/20 to-emerald-600/20"
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.C69GyPOR8dN0TPsgz2vAugHaE8%26pid%3DApi&f=1&ipt=d2a7b289bcf0034ba72e447c70a8bd0cc07fb1b631e31579b550072c886fec73&ipo=images",
    title: "Wholesale Supply",
    description: "Bulk timber for large-scale projects",
    gradient: "from-purple-500/20 to-pink-600/20"
  },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setDirection(1);
      }, 4000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [current, isPlaying]);

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((current - 1 + images.length) % images.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((current + 1) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-8 group">
      {/* Main Carousel Container */}
      <motion.div 
        className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-white/20 dark:border-gray-700/50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none"></div>
        <div className={`absolute inset-0 bg-gradient-to-br ${images[current].gradient} transition-all duration-1000`}></div>
        
        {/* Image Container */}
        <div className="relative h-80 md:h-96 lg:h-[28rem] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.6 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  next();
                } else if (swipe > swipeConfidenceThreshold) {
                  prev();
                }
              }}
              className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
            >
              <div className="relative w-full h-full flex items-center justify-center p-8">
                <motion.img
                  src={images[current].url}
                  alt={images[current].title}
                  className="max-h-full max-w-full object-contain rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                
                {/* Image Overlay with Info */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                    {images[current].title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {images[current].description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/20"
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous image"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7"/>
          </svg>
        </motion.button>

        <motion.button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/20"
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next image"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7"/>
          </svg>
        </motion.button>

        {/* Play/Pause Button */}
        <motion.button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </motion.button>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 dark:bg-gray-700/50">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 to-orange-600"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            key={current}
          />
        </div>
      </motion.div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-3">
        {images.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => goTo(idx)}
            className={`relative overflow-hidden rounded-full transition-all duration-300 ${
              idx === current 
                ? 'w-8 h-3 bg-gradient-to-r from-amber-500 to-orange-600' 
                : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {idx === current && (
              <motion.div
                className="absolute inset-0 bg-white/30"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Thumbnail Preview */}
      <div className="hidden md:flex justify-center mt-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {images.map((image, idx) => (
          <motion.button
            key={idx}
            onClick={() => goTo(idx)}
            className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              idx === current 
                ? 'border-amber-500 scale-110' 
                : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
            }`}
            whileHover={{ scale: idx === current ? 1.1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {idx === current && (
              <div className="absolute inset-0 bg-amber-500/20"></div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}