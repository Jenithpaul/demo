'use client';

import React, { useRef, useEffect, useState } from "react";

const images = [
  "/images/plywood.png",
  "/images/carpentry.png",
  "/images/panels.png",
  "/images/timber.png",
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-8 overflow-hidden rounded-lg shadow-lg bg-brand-beige dark:bg-brand-dark flex items-center">
      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-brand-brown/80 hover:bg-brand-walnut text-white p-2 rounded-full shadow transition-colors"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      <div className="flex w-full h-48 items-center justify-center transition-all duration-700">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Showcase ${idx + 1}`}
            className={`h-40 w-auto object-contain mx-auto transition-opacity duration-700 ${idx === current ? 'opacity-100 scale-105' : 'opacity-0 scale-95'} absolute left-0 right-0`}
            style={{position: idx === current ? 'relative' : 'absolute'}}
          />
        ))}
      </div>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-brand-brown/80 hover:bg-brand-walnut text-white p-2 rounded-full shadow transition-colors"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-2 h-2 rounded-full ${idx === current ? 'bg-brand-brown' : 'bg-brand-beige dark:bg-brand-dark'} border border-brand-brown`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
