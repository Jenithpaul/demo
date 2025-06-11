"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Plywood Sheets",
    description: "Premium quality plywood for all construction and furniture needs with superior durability.",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JEGjEiaid8rE5KoWCecXywHaE7%26pid%3DApi&f=1&ipt=ca78510a07f62203e4a2a43537400b95b7bafe3c7000544b722fc470bc9a7b77&ipo=images",
    gradient: "from-amber-500 to-orange-600",
    icon: "🪵"
  },
  {
    id: 2,
    title: "Custom Carpentry",
    description: "Tailored carpentry solutions for homes, offices, and retail spaces with expert craftsmanship.",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.bv9ZH-aS5tc9t5QAkYaCHwHaEK%26pid%3DApi&f=1&ipt=a6d78a1a9ca4fa9256aa9d93fc962406aa70067b9bd34b12f7c4416c58e3da6b&ipo=images",
    gradient: "from-blue-500 to-indigo-600",
    icon: "🔨"
  },
  {
    id: 3,
    title: "Interior Wood Panels",
    description: "Elegant wood panels to enhance your interiors with warmth, style, and natural beauty.",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.V71SL-BSq1omczz-5LTT-gHaE9%26r%3D0%26pid%3DApi&f=1&ipt=26fe4887fab268e4ac18df1e5c1c8dc83e14b2222516146fd30b0af7a3a5b6b2&ipo=images",
    gradient: "from-green-500 to-emerald-600",
    icon: "🏠"
  },
  {
    id: 4,
    title: "Wholesale Timber Supply",
    description: "Bulk timber supply for contractors, builders, and large projects with competitive pricing.",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.C69GyPOR8dN0TPsgz2vAugHaE8%26pid%3DApi&f=1&ipt=d2a7b289bcf0034ba72e447c70a8bd0cc07fb1b631e31579b550072c886fec73&ipo=images",
    gradient: "from-purple-500 to-pink-600",
    icon: "🚛"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

export default function Services() {
  return (
    <section 
      id="services" 
      className="relative py-20 bg-gradient-to-br from-brand-beige via-stone-50 to-amber-50 dark:from-brand-dark dark:via-gray-900 dark:to-slate-900 text-brand-walnut dark:text-brand-sand overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-sm font-medium text-amber-700 dark:text-amber-300 uppercase tracking-wider">
              What We Offer
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-brand-walnut to-amber-700 dark:from-brand-sand dark:to-amber-300 bg-clip-text text-transparent">
            Our Premium Services
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of wood products and services, crafted with precision and delivered with excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-white/20 dark:border-gray-700/50 overflow-hidden">
                
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  
                  {/* Icon/Image Container */}
                  <div className="relative mb-6">
                    <motion.div
                      className="w-20 h-20 mb-2 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                    
                    {/* Floating Icon */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center shadow-lg text-sm"
                      whileHover={{ rotate: 20, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-amber-600 dark:group-hover:from-gray-100 dark:group-hover:to-amber-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-grow group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Call to Action */}
                  <motion.div
                    className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="inline-flex items-center text-sm font-medium text-amber-600 dark:text-amber-400 cursor-pointer">
                      Learn More
                      <motion.svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </span>
                  </motion.div>
                </div>

                {/* Decorative Corner Element */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-2xl transition-opacity duration-300 group-hover:opacity-20`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started Today</span>
            <motion.svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 3, 0] }}
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