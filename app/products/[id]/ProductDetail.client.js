"use client";

import React, { useState } from "react";
import { useCart } from "../../components/utils/CartContext";
import { toast } from "react-hot-toast";

export default function ProductDetailClient({ product, suggestions }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, qty);
    toast.success("Added to cart!");
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-4">
      {/* Product Images */}
      <div className="md:w-1/2">
        {product.images && product.images.length > 0 ? (
          <img
            src={product.images && product.images[0] ? product.images[0] : '/placeholder-image.png'}
            alt={product.name || 'Product Image'}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        ) : (
          <p>No image available</p>
        )}
        {product.images && product.images.length > 1 && (
          <div className="grid grid-cols-4 gap-2 mt-4">
            {product.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} view ${index + 2}`}
                className="w-full h-auto rounded-lg cursor-pointer"
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        {/* Price and Quantity */}
        <div className="mb-6">
          <p className="text-2xl font-bold text-green-600">₹{product.price}</p>
          <div className="flex items-center mt-4">
            <label htmlFor="quantity" className="mr-4">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={qty}
              onChange={(e) => setQty(Math.max(1, parseInt(e.target.value)))}
              className="w-20 p-2 border rounded"
            />
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>

        {/* Specifications */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Specifications</h2>
          {Array.isArray(product.specifications) && product.specifications.length > 0 ? (
          <ul className="list-disc pl-5 space-y-2">
            {product.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        ) : (
          <p>No specifications available</p>
        )}
        </div>

        {/* Similar Products */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Similar Products</h2>
          {Array.isArray(suggestions) && suggestions.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {suggestions.map((suggestion) => (
              <div key={suggestion.id} className="cursor-pointer">
                {suggestion.images && suggestion.images[0] ? (
                  <img
                    src={suggestion.images[0]}
                    alt={suggestion.name}
                    className="w-full h-auto rounded-lg"
                  />
                ) : (
                  <p>No image available</p>
                )}
                <p className="mt-2 text-sm font-medium">{suggestion.name}</p>
                <p className="text-sm text-gray-600">₹{suggestion.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No suggestions available</p>
        )}
        </div>
      </div>
    </div>
  );
}
