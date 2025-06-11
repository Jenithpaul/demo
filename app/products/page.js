"use client";
import React, { useState } from "react";
import ProductList from "../components/ProductList";

// ...existing categories, productImages, allProducts code from previous suggestions...

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
        <ProductList
          products={allProducts}
          onAddToCart={handleAddToCart}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
      </div>
    </div>
  );
}
