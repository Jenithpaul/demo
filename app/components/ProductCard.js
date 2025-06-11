import React, { useState } from "react";

export default function ProductCard({ product, onAddToCart }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center border border-brand-beige hover:shadow-lg transition-shadow">
      <img src={product.image} alt={product.name} className="h-32 w-auto object-contain mb-3" />
      <h3 className="font-heading text-lg font-semibold mb-1 text-center">{product.name}</h3>
      <p className="text-sm text-brand-walnut mb-2 text-center">{product.category}</p>
      <p className="font-bold text-brand-brown text-xl mb-3">₹{product.price}</p>
      <div className="flex items-center mb-3">
        <label htmlFor={`qty-${product.id}`} className="mr-2 text-sm">Qty:</label>
        <input
          id={`qty-${product.id}`}
          type="number"
          min={1}
          value={qty}
          onChange={e => setQty(Number(e.target.value))}
          className="w-16 px-2 py-1 border rounded"
        />
      </div>
      <button
        onClick={() => onAddToCart(product, qty)}
        className="bg-brand-brown text-black px-4 py-2 rounded hover:bg-brand-walnut transition-colors w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}
