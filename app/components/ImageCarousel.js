'use client';

import React, { useRef, useEffect, useState } from "react";

const images = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JEGjEiaid8rE5KoWCecXywHaE7%26pid%3DApi&f=1&ipt=ca78510a07f62203e4a2a43537400b95b7bafe3c7000544b722fc470bc9a7b77&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.bv9ZH-aS5tc9t5QAkYaCHwHaEK%26pid%3DApi&f=1&ipt=a6d78a1a9ca4fa9256aa9d93fc962406aa70067b9bd34b12f7c4416c58e3da6b&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.V71SL-BSq1omczz-5LTT-gHaE9%26r%3D0%26pid%3DApi&f=1&ipt=26fe4887fab268e4ac18df1e5c1c8dc83e14b2222516146fd30b0af7a3a5b6b2&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.C69GyPOR8dN0TPsgz2vAugHaE8%26pid%3DApi&f=1&ipt=d2a7b289bcf0034ba72e447c70a8bd0cc07fb1b631e31579b550072c886fec73&ipo=images",
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
