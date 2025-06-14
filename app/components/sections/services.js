"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
	{
		id: 1,
		title: "Electrical Installation",
		subtitle: "Professional Wiring Solutions",
		description:
			"Complete electrical installation services for residential and commercial properties. From new constructions to renovations, we ensure safe and efficient power distribution.",
		image:
			"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
		gradient: "from-gray-900 to-black",
		borderGradient: "from-white/20 to-white/5",
		icon: "⚡",
		features: ["Code Compliant", "Safety Certified", "Warranty Included"],
	},
	{
		id: 2,
		title: "Smart Home Automation",
		subtitle: "Intelligent Control Systems",
		description:
			"Transform your home into a smart living space with cutting-edge automation technology. Control lighting, security, climate, and entertainment systems seamlessly.",
		image:
			"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		gradient: "from-gray-900 to-black",
		borderGradient: "from-white/20 to-white/5",
		icon: "🏠",
		features: ["Voice Control", "Remote Access", "Energy Efficient"],
	},
	{
		id: 3,
		title: "LED Lighting Solutions",
		subtitle: "Energy-Efficient Illumination",
		description:
			"Upgrade to modern LED lighting systems that reduce energy consumption while providing superior illumination. Custom designs for any space or application.",
		image:
			"https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		gradient: "from-gray-900 to-black",
		borderGradient: "from-white/20 to-white/5",
		icon: "💡",
		features: ["Custom Design", "Energy Savings", "Long Lifespan"],
	},
	{
		id: 4,
		title: "Electrical Maintenance",
		subtitle: "Preventive Care Services",
		description:
			"Comprehensive electrical maintenance and emergency repair services. Keep your systems running safely and efficiently with our expert technicians.",
		image:
			"https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		gradient: "from-gray-900 to-black",
		borderGradient: "from-white/20 to-white/5",
		icon: "🔧",
		features: ["24/7 Emergency", "Certified Technicians", "Quality Parts"],
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: {
		opacity: 0,
		y: 60,
		scale: 0.95,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
			duration: 0.8,
		},
	},
};

export default function ElectricServices() {
	return (
		<section
			id="services"
			className="relative py-24 bg-black overflow-hidden"
			style={{ backgroundColor: '#000000' }}
		>
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div 
					className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-white/5 to-white/2 rounded-full blur-3xl"
					animate={{ 
						x: [0, 30, 0],
						y: [0, -20, 0],
						scale: [1, 1.1, 1]
					}}
					transition={{ 
						duration: 20,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
				<motion.div 
					className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-bl from-white/5 to-white/2 rounded-full blur-3xl"
					animate={{ 
						x: [0, -40, 0],
						y: [0, 25, 0],
						scale: [1, 1.2, 1]
					}}
					transition={{ 
						duration: 25,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 5
					}}
				/>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-white/3 to-white/1 rounded-full blur-3xl animate-pulse"></div>
				
				{/* Electric-themed animated elements */}
				<motion.div
					className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full"
					animate={{
						opacity: [0, 1, 0],
						scale: [1, 1.5, 1],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						delay: 0,
					}}
				/>
				<motion.div
					className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full"
					animate={{
						opacity: [0, 1, 0],
						scale: [1, 2, 1],
					}}
					transition={{
						duration: 3,
						repeat: Infinity,
						delay: 1,
					}}
				/>
			</div>

			<div className="container relative mx-auto px-4 lg:px-8 max-w-7xl">
				{/* Enhanced Header Section */}
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: -40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					{/* Subtitle Badge */}
					<motion.div
						className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 shadow-lg"
						whileHover={{ scale: 1.05, y: -2 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<div className="w-2 h-2 bg-gradient-to-r from-white to-white/80 rounded-full mr-3 animate-pulse"></div>
						<span className="text-sm font-semibold text-white uppercase tracking-wider">
							Premium Electric Services
						</span>
					</motion.div>

					{/* Main Heading */}
					<h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
						<span className="block mb-2">Powering Your</span>
						<span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
							Future Today
						</span>
					</h2>

					{/* Description */}
					<p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
						From cutting-edge installations to smart automation, we electrify your world with precision and expertise.
						<span className="block mt-3 text-lg text-gray-400 font-medium">
							Your trusted electrical partner since 2010.
						</span>
					</p>

					{/* Stats Row */}
					<motion.div 
						className="flex flex-wrap justify-center gap-8 mt-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						viewport={{ once: true }}
					>
						{[
							{ number: "1000+", label: "Installations Completed" },
							{ number: "13+", label: "Years Experience" },
							{ number: "24/7", label: "Emergency Support" }
						].map((stat, index) => (
							<div key={index} className="text-center">
								<div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
								<div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
							</div>
						))}
					</motion.div>
				</motion.div>

				{/* Enhanced Services Grid */}
				<motion.div
					className="grid gap-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
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
								y: -15,
								scale: 1.03,
								transition: { type: "spring", stiffness: 300, damping: 20 },
							}}
							className="group relative"
						>
							{/* Card Container */}
							<div className="relative h-full bg-black/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-white/10 transition-all duration-500 p-8 border border-white/10 overflow-hidden">
								
								{/* Gradient Background */}
								<div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
								<div className={`absolute inset-0 bg-gradient-to-br ${service.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

								{/* Content */}
								<div className="relative z-10 flex flex-col h-full">
									
									{/* Image & Icon Container */}
									<div className="relative mb-6">
										<motion.div
											className="w-full h-48 mb-4 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-white/20 transition-all duration-500 border border-white/10"
											whileHover={{ scale: 1.05 }}
											transition={{ type: "spring", stiffness: 300 }}
										>
											<img
												src={service.image}
												alt={service.title}
												className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-75 group-hover:brightness-90"
											/>
											{/* Image Overlay */}
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>
										</motion.div>

										{/* Floating Icon */}
										<motion.div
											className="absolute -top-3 -right-3 w-12 h-12 bg-black shadow-lg rounded-2xl flex items-center justify-center text-2xl border border-white/20"
											whileHover={{ rotate: 12, scale: 1.1 }}
											transition={{ type: "spring", stiffness: 400 }}
										>
											{service.icon}
										</motion.div>
									</div>

									{/* Text Content */}
									<div className="flex-grow">
										{/* Subtitle */}
										<span className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2 block">
											{service.subtitle}
										</span>

										{/* Title */}
										<h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors duration-300">
											{service.title}
										</h3>

										{/* Description */}
										<p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
											{service.description}
										</p>

										{/* Features List */}
										<ul className="space-y-2 mb-6">
											{service.features.map((feature, idx) => (
												<motion.li
													key={idx}
													className="flex items-center text-sm text-gray-400"
													initial={{ opacity: 0, x: -10 }}
													whileInView={{ opacity: 1, x: 0 }}
													transition={{ delay: idx * 0.1 }}
												>
													<div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
													{feature}
												</motion.li>
											))}
										</ul>
									</div>

									{/* Call to Action */}
									<motion.button
										className="w-full py-3 bg-gradient-to-r from-white to-gray-200 text-black font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:from-gray-100 hover:to-white"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<span className="flex items-center justify-center">
											Learn More
											<motion.svg
												className="ml-2 w-4 h-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												animate={{ x: [0, 3, 0] }}
												transition={{ repeat: Infinity, duration: 1.5 }}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17 8l4 4m0 0l-4 4m4-4H3"
												/>
											</motion.svg>
										</span>
									</motion.button>
								</div>

								{/* Decorative Elements */}
								<div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Enhanced Bottom CTA Section */}
				<motion.div
					className="text-center mt-20"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					viewport={{ once: true }}
				>
					<div className="bg-black/60 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl max-w-4xl mx-auto">
						<h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
							Ready to Electrify Your Space?
						</h3>
						<p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
							Let's discuss your electrical needs and create a powerful solution together. 
							Our certified electricians are ready to energize your vision.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.button
								className="px-8 py-4 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-black font-semibold rounded-2xl shadow-lg hover:shadow-white/20 transition-all duration-300"
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="flex items-center">
									Get Free Estimate
									<motion.svg
										className="ml-2 w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										animate={{ x: [0, 3, 0] }}
										transition={{ repeat: Infinity, duration: 2 }}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										/>
									</motion.svg>
								</span>
							</motion.button>
							
							<motion.button
								className="px-8 py-4 bg-black hover:bg-gray-900 text-white font-semibold rounded-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-300"
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
							>
								Emergency Service
							</motion.button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}