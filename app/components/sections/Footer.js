"use client";
import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, ArrowUp, Award, Users, Sparkles, Heart, Target, Zap } from "lucide-react";

const EnhancedFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", color: "from-pink-500 to-purple-600" },
    { icon: Facebook, label: "Facebook", color: "from-blue-500 to-blue-600" },
    { icon: MessageCircle, label: "WhatsApp", color: "from-green-500 to-green-600" }
  ];

  const quickLinks = [
    'Home', 'Products', 'Services', 'Gallery', 'About Us', 'Contact'
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-100/50 border-t border-gray-100/50 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-gray-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gray-400/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-black bg-clip-text text-transparent mb-4">
                Prime Woods & Ply
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Your trusted partner for premium wood and ply solutions. We bring craftsmanship, 
                quality, and sustainability together to create exceptional results.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="group flex items-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/60 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-gray-500 to-gray-700 p-3 rounded-xl mr-4 shadow-lg shadow-gray-500/25">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Call us now</p>
                  <p className="text-black font-semibold text-lg">+91 98765 43210</p>
                </div>
              </div>

              <div className="group flex items-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/60 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-gray-500 to-gray-700 p-3 rounded-xl mr-4 shadow-lg shadow-gray-500/25">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Email us</p>
                  <p className="text-black font-semibold text-lg">info@primewoodsply.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-2xl font-bold mb-6 text-black relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="group inline-flex items-center text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="font-medium">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div className="lg:col-span-4">
            <h4 className="text-2xl font-bold mb-6 text-black relative">
              Visit Us
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full"></div>
            </h4>
            
            <div className="space-y-6">
              {/* Business Hours */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/60 shadow-sm">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-gray-500 to-gray-700 p-2 rounded-lg mr-3 shadow-lg shadow-gray-500/25">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">Business Hours</p>
                    <p className="text-black font-semibold">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/60 shadow-sm">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-gray-500 to-gray-700 p-2 rounded-lg mr-3 shadow-lg shadow-gray-500/25">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">Location</p>
                    <p className="text-black font-semibold">Mumbai, Maharashtra</p>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-500 text-sm font-medium mb-4">Follow us</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a 
                        key={index}
                        href="#" 
                        className={`group relative bg-gradient-to-r from-gray-500 to-gray-700 p-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                        title={social.label}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                        <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <p className="text-gray-500 text-center lg:text-left">
                &copy; {new Date().getFullYear()} Prime Woods & Ply. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300 font-medium">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300 font-medium">Terms of Service</a>
                <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300 font-medium">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-gray-500 to-black hover:from-gray-700 hover:to-black p-4 rounded-full shadow-2xl shadow-gray-500/25 hover:shadow-gray-500/40 transition-all duration-300 hover:-translate-y-1 group"
        >
          <ArrowUp className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}
    </footer>
  );
};

export default function EnhancedAboutFooter() {
  return (
    <div className="font-sans">
      <EnhancedFooter />
    </div>
  );
}