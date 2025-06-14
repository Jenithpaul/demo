"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from "./components/header/Header";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/services";
import About from "./components/sections/aboutus";
import Footer from "./components/sections/Footer";

// Sample images for carousel
const carouselImages = [
  '/images/plywood1.jpg',
  '/images/plywood2.jpg',
  '/images/plywood3.jpg',
  '/images/plywood4.jpg',
];

// Sample services
const services = [
  {
    title: "Quality Plywood",
    description: "Premium quality plywood for all your construction needs",
    icon: "🏗️"
  },
  {
    title: "Expert Consultation",
    description: "Professional guidance for your wood requirements",
    icon: "👨‍💼"
  },
  {
    title: "Fast Delivery",
    description: "Quick and reliable delivery across the country",
    icon: "🚚"
  },
  {
    title: "Custom Solutions",
    description: "Tailored wood solutions for your specific needs",
    icon: "⚙️"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <Hero />
      <Services />
      <About />
      {/* Gallery section can be added here if needed */}
      <Footer />
    </main>
  );
}
