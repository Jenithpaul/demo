"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, ArrowUp, Award, Users, Sparkles, Heart, Target, Zap, Shield, Wrench } from "lucide-react";

// Enhanced About Us Component
const EnhancedAbout = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  const values = [
    {
      icon: Target,
      title: "Mission",
      subtitle: "Our Purpose",
      description: "To deliver cutting-edge electrical solutions with safety, reliability, and innovation that powers your world efficiently.",
      color: "blue",
      delay: 0.1
    },
    {
      icon: Shield,
      title: "Safety First",
      subtitle: "What We Stand For",
      description: "Safety, Quality, Innovation, and Customer Satisfaction are the core principles that guide every electrical project we undertake.",
      color: "blue",
      delay: 0.2
    },
    {
      icon: Sparkles,
      title: "Excellence",
      subtitle: "Our Commitment",
      description: "Years of expertise in electrical systems, ensuring every installation meets the highest standards and exceeds expectations.",
      color: "blue",
      delay: 0.3
    }
  ];

  const stats = [
    { number: "13+", label: "Years Experience", icon: "⚡", color: "blue" },
    { number: "1500+", label: "Installations Completed", icon: "🔌", color: "blue" },
    { number: "800+", label: "Satisfied Customers", icon: "💡", color: "blue" },
    { number: "24/7", label: "Emergency Support", icon: "🚨", color: "blue" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-blue-100/40 overflow-hidden">
      {/* Floating Elements - Electric themed */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-60 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-30 delay-1000"></div>
        
        {/* Electric spark effects */}
        <div className="absolute top-1/2 left-1/4 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-0.5 h-6 bg-gradient-to-t from-yellow-400 to-transparent opacity-30 animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200/50 mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">About Our Company</span>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-500"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
            ElectroTech Solutions
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Powering the future with innovative electrical solutions, 
            <span className="text-blue-600 font-semibold"> certified expertise</span> and 
            <span className="text-blue-700 font-semibold"> cutting-edge technology</span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 filter drop-shadow-sm">{stat.icon}</div>
                <div className={`text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 ${activeCard === index ? 'scale-105' : ''}`}>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/25`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <div className={`text-xs uppercase tracking-wider text-blue-600 mb-2 font-semibold`}>
                      {value.subtitle}
                    </div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent`}>
                      {value.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Excellence Section */}
        <div className="bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-12 border border-white/60 shadow-xl mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-6 shadow-lg shadow-blue-500/25">
              <Wrench className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              Our Expert Team
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our certified electricians bring years of experience and continuous training to ensure every project meets the highest safety and quality standards. From residential installations to commercial systems, we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/50 rounded-2xl border border-blue-100">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="font-bold text-blue-700 mb-2">Certified Professionals</h4>
              <p className="text-gray-600 text-sm">Licensed and insured electricians with ongoing training</p>
            </div>
            <div className="text-center p-6 bg-white/50 rounded-2xl border border-blue-100">
              <div className="text-3xl mb-3">🔧</div>
              <h4 className="font-bold text-blue-700 mb-2">Modern Equipment</h4>
              <p className="text-gray-600 text-sm">Latest tools and technology for precise installations</p>
            </div>
            <div className="text-center p-6 bg-white/50 rounded-2xl border border-blue-100">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="font-bold text-blue-700 mb-2">Safety Guaranteed</h4>
              <p className="text-gray-600 text-sm">Strict adherence to electrical codes and safety protocols</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-12 border border-white/60 shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-6 shadow-lg shadow-blue-500/25">
            <Zap className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            Ready to Power Up Your Project?
          </h3>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the difference that professional electrical services and cutting-edge solutions can make
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
              <span>Get Free Consultation</span>
              <ArrowUp className="w-5 h-5 rotate-45 group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            <button className="group relative inline-flex items-center gap-3 bg-white hover:bg-blue-50 text-blue-700 font-semibold px-8 py-4 rounded-2xl border-2 border-blue-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <span>Emergency Service</span>
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component
export default function EnhancedElectricAbout() {
  return (
    <div className="font-sans">
      <EnhancedAbout />
    </div>
  );
}