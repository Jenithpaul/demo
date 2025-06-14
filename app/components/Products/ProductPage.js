"use client";
import React, { useState, useEffect } from "react";
import { products, categories } from "../data/products";
import ProductList from "./ProductsList";
import { useCart } from "../utils/CartContext";
import { Toaster, toast } from "react-hot-toast";
import Footer from '../sections/Footer';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import app from '../../backend/firebase.config';

function ProductsPageContent() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore(app);
    const productsCol = collection(db, 'products');
    const unsubscribe = onSnapshot(productsCol, (snapshot) => {
      const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
      const uniqueCategories = [...new Set(productsData.map(p => p.category))];
      setCategories(uniqueCategories);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleAddToCart = (product, qty) => {
    addToCart({ ...product, qty });
    toast.success(`${product.name} added to cart!`, {
      duration: 3000,
      position: 'top-right',
      style: {
        background: '#10B981',
        color: 'white',
        borderRadius: '12px',
        padding: '16px',
      },
      iconTheme: {
        primary: 'white',
        secondary: '#10B981',
      },
    });
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  function getSuggestions(products, count = 4) {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center text-2xl font-bold">Loading products...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Premium Building Materials
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Discover our extensive collection of high-quality plywood, boards, and construction materials. 
            Built for durability, crafted for excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold block">{products.length}+</span>
              <span className="text-sm text-green-100">Products</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold block">{categories.length}</span>
              <span className="text-sm text-green-100">Categories</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold block">10+</span>
              <span className="text-sm text-green-100">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductList
        products={products}
        categories={categories}
        onAddToCart={handleAddToCart}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        onViewDetails={handleViewDetails}
      />

      {/* Suggestions Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">You may also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {getSuggestions(products).map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-4" />
              <h3 className="font-semibold text-gray-900 text-center mb-2">{product.name}</h3>
              <p className="text-green-700 font-bold mb-2">₹{product.price}</p>
              <button
                onClick={() => handleAddToCart(product, 1)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Toast Notifications */}
      <Toaster />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <ProductsPageContent />
  );
}