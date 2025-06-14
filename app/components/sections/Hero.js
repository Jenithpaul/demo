import ImageCarousel from "./ImageCarousel";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-white/8 to-white/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-white/5 to-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Hero Text Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          {/* Subtitle */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 animate-fade-in shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-white to-gray-300 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-white tracking-wide">Premium Electric Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-white animate-fade-in-up">Powering</span>
            <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-100 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Innovation
            </span>
            <span className="block text-gray-300 text-5xl md:text-6xl lg:text-7xl mt-2 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Every Connection
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
            Where cutting-edge technology meets reliable electrical expertise.<br />
            <span className="block mt-2 text-lg text-gray-400">
              Complete solutions for residential, commercial, and industrial needs.<br />
              <span className="font-semibold text-white">Safe, efficient, and built for the future.</span>
            </span>
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 shadow-sm flex flex-col items-center">
              <span className="text-2xl font-bold text-white">50+</span>
              <span className="text-sm text-gray-300">Service Types</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 shadow-sm flex flex-col items-center">
              <span className="text-2xl font-bold text-white">24/7</span>
              <span className="text-sm text-gray-300">Support</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 shadow-sm flex flex-col items-center">
              <span className="text-2xl font-bold text-white">15+</span>
              <span className="text-sm text-gray-300">Years Experience</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 shadow-sm flex flex-col items-center">
              <span className="text-2xl font-bold text-white">100%</span>
              <span className="text-sm text-gray-300">Licensed & Insured</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '1s'}}>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10">Explore Our Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-white to-gray-100 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
            <button className="group px-8 py-4 bg-black/50 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:border-white/60 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center">
                Emergency Service
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2 animate-fade-in" style={{animationDelay: '1s'}}>Discover More</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-white to-gray-300 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Image Carousel Section */}
      <div className="relative z-20 mt-20">
        <ImageCarousel />
      </div>

      {/* Floating Stats/Features */}
      <div className="absolute top-1/4 left-8 hidden xl:block animate-fade-in" style={{animationDelay: '1.2s'}}>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="text-3xl font-bold text-white mb-1">1000+</div>
          <div className="text-sm text-gray-300">Projects Completed</div>
        </div>
      </div>
      <div className="absolute top-1/3 right-8 hidden xl:block animate-fade-in" style={{animationDelay: '1.4s'}}>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="text-3xl font-bold text-white mb-1">24/7</div>
          <div className="text-sm text-gray-300">Emergency Response</div>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-8 hidden xl:block animate-fade-in" style={{animationDelay: '1.6s'}}>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="text-3xl font-bold text-white mb-1">100%</div>
          <div className="text-sm text-gray-300">Safety Compliant</div>
        </div>
      </div>
    </section>
  )
}