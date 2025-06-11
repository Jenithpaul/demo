"use client";
import React from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Main footer content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent mb-4">
                  Prime Woods & Ply
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Crafting excellence in premium wood and ply solutions. Your trusted partner for quality materials that bring your vision to life.
                </p>
              </div>
              
              {/* Quick contact info */}
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call us now</p>
                    <p className="text-white font-semibold">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email us</p>
                    <p className="text-white font-semibold">info@primewoodsply.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {['Home', 'Products', 'Services', 'Gallery', 'About Us', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group"
                    >
                      <span className="relative z-10">{link}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Hours & Location */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white relative">
                Visit Us
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Business Hours</p>
                    <p className="text-white">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-white">Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white">Mumbai, Maharashtra</p>
                    <p className="text-white">India</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <p className="text-gray-400 text-sm mb-3">Follow us</p>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="group relative bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <a 
                    href="#" 
                    className="group relative bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <a 
                    href="#" 
                    className="group relative bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-110"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="mb-4 lg:mb-0">
                <p className="text-gray-400 text-center lg:text-left">
                  &copy; {new Date().getFullYear()} Prime Woods & Ply. All rights reserved.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex space-x-6 text-sm">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</a>
                </div>
                
                {/* Scroll to top button */}
                <button 
                  onClick={scrollToTop}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/25"
                >
                  <ArrowUp className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}