import React from "react";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";
import app from "../../backend/firebase.config";
import EnhancedAboutFooter from "../../components/sections/Footer";
import Header from "../../components/header/Header";

// Define a plain JavaScript object for Product
function getProductData(id) {
  return new Promise((resolve) => {
    const product = { id, name: "Sample Product", price: 100 }; // Example product data
    resolve(product);
  });
}

export async function generateStaticParams() {
  const products = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
  return products;
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getProductData(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-green-600">₹{product.price}</p>
        {product.images && product.images.length > 0 && (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        )}
      </main>
      <EnhancedAboutFooter />
    </div>
  );
}