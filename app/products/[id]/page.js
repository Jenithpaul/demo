"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { products } from "../../components/data/products";
import Footer from "../../components/sections/Footer";
import Header from '../../components/header/Header';
import { useCart } from '../../components/utils/CartContext';
import { Toaster, toast } from 'react-hot-toast';

const bulkPricing = [
  { min: 1, max: 4, discount: 30, price: 1365 },
  { min: 5, max: 9, discount: 33, price: 1306.5 },
  { min: 10, max: 20, discount: 35, price: 1267.5 },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);
  const [qty, setQty] = useState(1);
  const suggestions = products.filter(p => String(p.id) !== id).sort(() => 0.5 - Math.random()).slice(0, 4);
  const { addToCart } = useCart();

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center text-2xl font-bold">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 text-xs text-gray-500">
        <span className="font-semibold text-gray-700">{product.category}</span> / <span className="font-semibold text-gray-700">{product.name}</span>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="flex-1 flex flex-col items-center">
          <img src={product.image} alt={product.name} className="w-80 h-80 object-contain mb-4" />
          <div className="flex gap-2 mt-2">
            <img src={product.image} alt={product.name} className="w-16 h-16 object-contain border rounded" />
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-green-700"><i className="fab fa-facebook"></i> Facebook</a>
            <a href="#" className="text-green-700"><i className="fab fa-whatsapp"></i> WhatsApp</a>
            <a href="#" className="text-green-700"><i className="fab fa-twitter"></i> Twitter</a>
          </div>
        </div>
        {/* Details Section */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2 text-gray-900">{product.name}</h1>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-700 font-semibold text-lg">Available on request</span>
            <span className="ml-4 text-yellow-500">★ ★ ★ ★ ☆</span>
            <span className="text-gray-500 text-sm">20 reviews</span>
          </div>
          <div className="mb-4 text-gray-600 text-sm">*GST and Freight extra<br />*If zero or less stock, restock can be arranged in 3 to 4 days</div>
          <div className="flex items-center gap-4 mb-4">
            <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)} className="px-3 py-1 bg-gray-200 rounded">-</button>
            <span className="px-4 py-1 border rounded bg-white">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="px-3 py-1 bg-gray-200 rounded">+</button>
            <button
              className="ml-4 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 font-semibold"
              onClick={() => {
                addToCart({ ...product, qty });
                toast.success(`${product.name} added to cart!`, {
                  duration: 3000,
                  position: 'top-right',
                  style: { background: '#10B981', color: 'white', borderRadius: '12px', padding: '16px' },
                  iconTheme: { primary: 'white', secondary: '#10B981' },
                });
              }}
            >
              Add to Cart
            </button>
          </div>
          {/* Bulk Pricing Table */}
          <div className="bg-gray-50 border rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-gray-900">Buy in bulk quantities & save more</h3>
            <table className="w-full text-sm mb-2">
              <thead>
                <tr className="text-left">
                  <th className="py-1">Quantity</th>
                  <th className="py-1">Discount</th>
                  <th className="py-1">Price per item</th>
                </tr>
              </thead>
              <tbody>
                {bulkPricing.map((row, i) => (
                  <tr key={i}>
                    <td className="py-1">{row.min} - {row.max}</td>
                    <td className="py-1">{row.discount}%</td>
                    <td className="py-1">₹{row.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex gap-4 mt-2">
              <button className="bg-green-100 text-green-800 px-4 py-2 rounded font-semibold">Get Quote</button>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded font-semibold">Apply now</button>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <input type="text" placeholder="Check pincode for availability" className="border px-3 py-2 rounded" />
            <button className="bg-gray-300 px-4 py-2 rounded">Check</button>
            <button className="bg-green-200 px-6 py-2 rounded text-green-900 font-semibold ml-2">Buy now</button>
          </div>
          <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 text-yellow-800 text-sm mt-4">
            Buy Online and get <b>wonderful offers</b> on checkout. Valid on Credit / Debit Cards, Net Banking
          </div>
        </div>
      </div>
      {/* Suggestions Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">You may also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {suggestions.map((suggested) => (
            <div key={suggested.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <img src={suggested.image} alt={suggested.name} className="w-32 h-32 object-contain mb-4" />
              <h3 className="font-semibold text-gray-900 text-center mb-2">{suggested.name}</h3>
              <p className="text-green-700 font-bold mb-2">₹{suggested.price}</p>
              <button
                onClick={() => {
                  addToCart({ ...suggested, qty: 1 });
                  toast.success(`${suggested.name} added to cart!`, {
                    duration: 3000,
                    position: 'top-right',
                    style: { background: '#10B981', color: 'white', borderRadius: '12px', padding: '16px' },
                    iconTheme: { primary: 'white', secondary: '#10B981' },
                  });
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <Toaster />
      <Footer />
    </div>
  );
} 