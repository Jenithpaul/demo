'use client';

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JEGjEiaid8rE5KoWCecXywHaE7%26pid%3DApi&f=1&ipt=ca78510a07f62203e4a2a43537400b95b7bafe3c7000544b722fc470bc9a7b77&ipo=images",
    title: "Industrial Electrical Solutions",
    description: "High-voltage installations and industrial automation systems",
    gradient: "from-white/20 via-white/10 to-white/5"
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.bv9ZH-aS5tc9t5QAkYaCHwHaEK%26pid%3DApi&f=1&ipt=a6d78a1a9ca4fa9256aa9d93fc962406aa70067b9bd34b12f7c4416c58e3da6b&ipo=images",
    title: "Smart Home Integration",
    description: "Modern electrical systems with intelligent automation and control",
    gradient: "from-white/15 via-white/8 to-white/3"
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.V71SL-BSq1omczz-5LTT-gHaE9%26r%3D0%26pid%3DApi&f=1&ipt=26fe4887fab268e4ac18df1e5c1c8dc83e14b2222516fd30b0af7a3a5b6b2&ipo=images",
    title: "Commercial Electrical Services",
    description: "Comprehensive electrical solutions for offices and retail spaces",
    gradient: "from-white/18 via-white/12 to-white/6"
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.C69GyPOR8dN0TPsgz2vAugHaE8%26pid%3DApi&f=1&ipt=d2a7b287c0034ba72e447c70a8bd0cc07fb1b631e31579b550072c886fec73&ipo=images",
    title: "Emergency Electrical Repairs",
    description: "24/7 rapid response for critical electrical system failures",
    gradient: "from-white/22 via-white/14 to-white/8"
  },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setDirection(1);
      }, 5000);
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
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="relative w-full h-screen group">
      {/* Main Carousel Container - Full Screen */}
      <motion.div 
        className="relative w-full h-full overflow-hidden bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Image Container */}
        <div className="relative w-full h-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.6 },
                scale: { duration: 0.8 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  next();
                } else if (swipe > swipeConfidenceThreshold) {
                  prev();
                }
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={images[current].url}
                  alt={images[current].title}
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${images[current].gradient} mix-blend-screen`}></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-6"
                  >
                    <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                      <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                      <span className="text-sm font-medium tracking-wide">
                        {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                      </span>
                    </div>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  >
                    {images[current].title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed"
                  >
                    {images[current].description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  >
                    <button className="group px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <span className="flex items-center">
                        Get Quote
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                    
                    <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                      Emergency Call
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prev}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
          whileHover={{ scale: 1.1, x: -4 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous image"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7"/>
          </svg>
        </motion.button>

        <motion.button
          onClick={next}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
          whileHover={{ scale: 1.1, x: 4 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next image"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7"/>
          </svg>
        </motion.button>

        {/* Play/Pause Button */}
        <motion.button
          onClick={togglePlayPause}
          className="absolute top-8 right-8 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </motion.button>

        {/* Progress Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {images.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => goTo(idx)}
                className={`relative overflow-hidden transition-all duration-500 ${
                  idx === current 
                    ? 'w-12 h-2 bg-white rounded-full' 
                    : 'w-2 h-2 bg-white/50 hover:bg-white/75 rounded-full'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {idx === current && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    key={current}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 left-8 z-20 text-white/80">
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <span className="text-sm font-medium">
              {String(current + 1).padStart(2, '0')} — {String(images.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Brand Logo/Title */}
        <div className="absolute top-8 left-8 z-20 text-white">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-lg font-bold tracking-wide">Electric Solutions</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}