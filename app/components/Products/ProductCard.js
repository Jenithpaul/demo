import React, { useState } from "react";
import { Star, Heart, ShoppingCart, Eye, Check, X } from "lucide-react";
import Link from 'next/link';

export default function ProductCard({ product, onAddToCart, onViewDetails }) {
  const [qty, setQty] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 ${
          index < Math.floor(rating) 
            ? "fill-yellow-400 text-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Link href={`/products/${product.id}`} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 transform hover:-translate-y-1 block">
      {/* Image Container with Badge */}
      <div className="relative overflow-hidden bg-gray-50">
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            -{discountPercentage}%
          </div>
        )}
        
        {/* Stock Status Badge */}
        <div className={`absolute top-3 right-3 z-10 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
          product.inStock 
            ? "bg-green-100 text-green-700 border border-green-200" 
            : "bg-red-100 text-red-700 border border-red-200"
        }`}>
          {product.inStock ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-12 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 shadow-sm"
        >
          <Heart 
            className={`w-4 h-4 ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
            }`} 
          />
        </button>

        {/* Product Image */}
        <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-pulse bg-gray-200 rounded w-16 h-16"></div>
            </div>
          )}
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full h-full object-contain transition-all duration-300 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Hover Overlay with Quick Actions */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 z-10">
            <button
              onClick={e => { e.preventDefault(); onViewDetails && onViewDetails(product); }}
              className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200 shadow-md"
              title="Quick View"
            >
              <Eye className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs font-medium text-green-600 uppercase tracking-wider mb-1">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {renderStars(product.rating)}
          </div>
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Key Features */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <span 
                key={index}
                className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full border border-green-200"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Price Section */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {product.specifications.size && (
            <p className="text-xs text-gray-500 mt-1">
              {product.specifications.size} • {product.specifications.thickness || product.specifications.material}
            </p>
          )}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3 mb-4">
          <label className="text-sm font-medium text-gray-700">Qty:</label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
              disabled={qty <= 1}
            >
              -
            </button>
            <input
              type="number"
              min={1}
              max={99}
              value={qty}
              onChange={(e) => setQty(Math.max(1, Math.min(99, Number(e.target.value))))}
              className="w-12 px-2 py-1 text-center text-sm border-0 focus:outline-none"
            />
            <button
              onClick={() => setQty(Math.min(99, qty + 1))}
              className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
              disabled={qty >= 99}
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product, qty)}
          disabled={!product.inStock}
          className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            product.inStock
              ? "bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transform hover:scale-[1.02]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </Link>
  );
}