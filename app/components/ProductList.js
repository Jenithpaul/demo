import React from "react";
import ProductCard from "./ProductCard";

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

export default function ProductList({ products, onAddToCart, selectedCategory, onCategorySelect }) {
  return (
    <section className="py-12 bg-brand-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-8 text-center">Shop Products</h2>
        <div className="flex gap-8">
          {/* Sidebar Categories */}
          <aside className="w-64 bg-white rounded shadow p-4 h-fit border border-brand-beige">
            <h3 className="font-bold mb-4">CATEGORIES</h3>
            <ul className="space-y-2 max-h-96 overflow-y-auto">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    className={`text-left w-full px-2 py-1 rounded hover:bg-brand-beige transition-colors ${
                      selectedCategory === cat ? "bg-brand-beige font-semibold" : ""
                    }`}
                    onClick={() => onCategorySelect && onCategorySelect(cat)}
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
              {products
                .filter(
                  (product) =>
                    !selectedCategory || product.category === selectedCategory
                )
                .map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
