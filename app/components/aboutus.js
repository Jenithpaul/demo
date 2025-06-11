"use client";

import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    icon: "🏆",
    title: "Mission",
    subtitle: "Our Purpose",
    description: "To provide top-quality wood products and bespoke carpentry with integrity and craftsmanship that stands the test of time.",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30"
  },
  {
    icon: "💎",
    title: "Values",
    subtitle: "What We Stand For",
    description: "Quality, Trust, Sustainability, and Customer Satisfaction drive every decision we make and every product we deliver.",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30"
  },
  {
    icon: "⭐",
    title: "Excellence",
    subtitle: "Our Commitment",
    description: "Decades of experience in woodworking, ensuring every detail is perfect and every project exceeds expectations.",
    gradient: "from-emerald-500 to-green-600",
    bgGradient: "from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30"
  }
];

const stats = [
  { number: "25+", label: "Years Experience", icon: "📅" },
  { number: "1000+", label: "Projects Completed", icon: "🏗️" },
  { number: "500+", label: "Happy Clients", icon: "😊" },
  { number: "99%", label: "Satisfaction Rate", icon: "📈" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function About() {
  return (
    <section 
      id="about" 
      className="relative py-20 lg:py-28 bg-gradient-to-br from-[#a9744f]/70 via-amber-100/50 to-orange-100/30 dark:from-brand-dark dark:via-gray-900 dark:to-slate-900 text-brand-walnut dark:text-brand-sand overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-purple-500/15 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-green-500/10 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full border border-amber-200/50 dark:border-amber-700/30"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-sm font-medium text-amber-700 dark:text-amber-300 uppercase tracking-wider">
              About Our Company
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 bg-gradient-to-r from-brand-walnut via-amber-700 to-orange-600 dark:from-brand-sand dark:via-amber-300 dark:to-orange-400 bg-clip-text text-transparent">
            Prime Woods & Ply
          </h2>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-700 dark:text-gray-200 font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            At Prime Woods & Ply, we are passionate about delivering the finest timber, plywood, and custom woodwork solutions. Our mission is to craft excellence in every project, big or small.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="text-center group"
            >
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 dark:border-gray-700/30">
                <motion.div
                  className="text-3xl mb-2"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="grid gap-8 md:gap-10 lg:grid-cols-3 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative"
            >
              <div className={`relative overflow-hidden bg-gradient-to-br ${value.bgGradient} backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/40 dark:border-gray-700/40`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-current to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-current to-transparent rounded-full blur-xl"></div>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-4xl mb-4 inline-block"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {value.icon}
                  </motion.div>

                  {/* Title with Subtitle */}
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                      {value.subtitle}
                    </div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                      {value.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative Element */}
                  <motion.div
                    className={`absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br ${value.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                    whileHover={{ scale: 1.5, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-white/40 to-amber-50/40 dark:from-gray-800/40 dark:to-gray-700/40 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/30 dark:border-gray-700/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block text-4xl mb-4"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            🌟
          </motion.div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-brand-walnut to-amber-600 dark:from-brand-sand dark:to-amber-400 bg-clip-text text-transparent">
            Discover the Difference
          </h3>
          
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
            Experience what true craftsmanship and premium materials can make for your next project. Let us bring your vision to life with unmatched quality and attention to detail.
          </p>

          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Your Project</span>
            <motion.svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}