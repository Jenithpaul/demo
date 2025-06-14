"use client";
import React, { useState } from "react";

const brands = [
  {
    name: "DK New LP",
    type: "Catalogue",
    items: [
      {
        title: "DK New LP Catalogue",
        image: "/images/catalog/dknewlp.jpg",
        link: "/assets/cat1.pdf"
      },
    ],
  },
  {
    name: "SCHNEIDER",
    type: "Price List",
    items: [
      {
        title: "SCHNEIDER Price List",
        image: "/images/catalog/schneider.jpg",
        link: "/assets/cat2.pdf",
      },
    ],
  },
  {
    name: "Precision Electrical",
    type: "Price List",
    items: [
      {
        title: "Precision Electrical Price List",
        image: "/images/catalog/precision.jpg",
        link: "/assets/cat3.pdf",
      },
    ],
  },
];

export default function ECataloguePage() {
  const [selectedBrand, setSelectedBrand] = useState(brands[0].name);
  const selected = brands.find((b) => b.name === selectedBrand);

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white p-8 hidden md:block">
        <h2 className="text-xl font-bold mb-8">Brands</h2>
        <ul className="space-y-2">
          {brands.map((brand) => (
            <li key={brand.name}>
              <button
                className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedBrand === brand.name
                    ? "bg-black text-white"
                    : "hover:bg-gray-100 text-gray-900"
                }`}
                onClick={() => setSelectedBrand(brand.name)}
              >
                {brand.name}
                <span className="ml-2 text-xs text-gray-500">({brand.type})</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">E-Catalogues</h1>
          <p className="text-gray-600">Check out our product catalogues and price list</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {selected.items.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all w-64 text-center bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-contain mb-4 rounded"
              />
              <div className="font-semibold text-lg text-gray-900 mt-2">
                {item.title}
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}