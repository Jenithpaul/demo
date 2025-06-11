"use client";
import React, { useState } from "react";
import ProductList from "./components/ProductList";

const categories = [
  "PLYWOOD",
  "BLOCK BOARD",
  "LAMINATES",
  "VENEERS",
  "MDF",
  "PARTICLE BOARD",
  "DOORS",
  "FLUSH DOORS",
  "DECORATIVE PANELS",
  "WPC/PVC BOARDS",
  "FILM FACED SHUTTERING PLY",
  "COMMERCIAL PLY",
  "MARINE PLY",
];

const productImages = {
  "PLYWOOD": "/images/plywood.png",
  "BLOCK BOARD": "/images/wood1.jpg",
  "LAMINATES": "/images/ply1.jpg",
  "VENEERS": "/images/wood2.jpg",
  "MDF": "/images/ply2.jpg",
  "PARTICLE BOARD": "/images/wood1.jpg",
  "DOORS": "/images/plywood.png",
  "FLUSH DOORS": "/images/ply2.jpg",
  "DECORATIVE PANELS": "/images/ply1.jpg",
  "WPC/PVC BOARDS": "/images/wood2.jpg",
  "FILM FACED SHUTTERING PLY": "/images/plywood.png",
  "COMMERCIAL PLY": "/images/ply1.jpg",
  "MARINE PLY": "/images/ply2.jpg",
};

const allProducts = categories.map((cat, idx) => ({
  id: idx + 1,
  name: cat,
  category: cat,
  price: 1000 + idx * 250,
  image: productImages[cat],
}));

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Dummy addToCart handler
  const handleAddToCart = (product, qty) => {
    alert(`Added ${qty} x ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen bg-brand-beige">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">All Products</h1>
        <div className="flex gap-8">
          {/* Sidebar Categories */}
          <aside className="w-64 bg-white rounded shadow p-4 h-fit border border-brand-beige">
            <h3 className="font-bold mb-4">CATEGORIES</h3>
            <ul className="space-y-2 max-h-96 overflow-y-auto">
              <li>
                <button
                  className={`text-left w-full px-2 py-1 rounded hover:bg-brand-beige transition-colors ${
                    !selectedCategory ? "bg-brand-beige font-semibold" : ""
                  }`}
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    className={`text-left w-full px-2 py-1 rounded hover:bg-brand-beige transition-colors ${
                      selectedCategory === cat ? "bg-brand-beige font-semibold" : ""
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          {/* Product Cards */}
          <div className="flex-1">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {allProducts
                .filter(
                  (product) =>
                    !selectedCategory || product.category === selectedCategory
                )
                .map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center border border-brand-beige hover:shadow-lg transition-shadow">
                    <img src={product.image} alt={product.name} className="h-32 w-auto object-contain mb-3" />
                    <h3 className="font-heading text-lg font-semibold mb-1 text-center">{product.name}</h3>
                    <p className="text-sm text-brand-walnut mb-2 text-center">{product.category}</p>
                    <p className="font-bold text-brand-brown text-xl mb-3">₹{product.price}</p>
                    <button
                      onClick={() => handleAddToCart(product, 1)}
                      className="bg-brand-brown text-black px-4 py-2 rounded hover:bg-brand-walnut transition-colors w-full"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* WhatsApp Contact Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center space-x-2 transition-all"
        title="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.58 2.236 6.377L4 29l7.824-2.05A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.89 0-3.7-.52-5.26-1.5l-.37-.23-4.65 1.22 1.24-4.52-.24-.37A9.93 9.93 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.13-7.48c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.19-.44-2.26-1.4-.84-.75-1.41-1.68-1.57-1.96-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.26-1 1-.97 2.44.03 1.44 1.03 2.84 1.18 3.04.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.62.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/>
        </svg>
        <span className="font-semibold hidden md:inline">Contact Us</span>
      </a>
    </div>
  );
}
