import ImageCarousel from "./ImageCarousel";

export default function Hero() {
  return (
    <section className="bg-[url('/images/hero-wood.jpg')] bg-cover bg-center text-white py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-5xl font-bold mb-4 drop-shadow-lg animate-pulse">Crafting Excellence in Wood & Ply</h2>
        <p className="text-xl mb-6 animate-fade-in">Premium materials, custom solutions, and expert craftsmanship.</p>
      </div>
      <ImageCarousel />
    </section>
  )
}

// Tailwind custom animations (add to globals.css or tailwind.config.js if not present):
// .animate-fade-in-up { animation: fadeInUp 1s ease-out; }
// .animate-fade-in { animation: fadeIn 1.2s ease; }
// @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// .animate-pulse { animation: pulse 2s infinite; }
