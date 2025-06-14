import React from "react";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";
import app from "../../backend/firebase.config";
import Footer from "../../components/sections/Footer";
import Header from "../../components/header/Header";

export async function getProductData(id) {
  const db = getFirestore(app);
  const productsRef = collection(db, "products");
  const querySnapshot = await getDocs(productsRef);

  // Find the product with the matching ID
  const product = querySnapshot.docs.find((doc) => doc.data().id === parseInt(id));

  return product ? product.data() : null;
}

export async function generateStaticParams() {
  const db = getFirestore(app);
  const productsRef = collection(db, "products");
  const productsSnap = await getDocs(productsRef);

  // Map IDs from Firestore documents
  return productsSnap.docs.map((doc) => ({
    id: String(doc.data().id),
  }));
}

export default async function ProductDetailPage({ params }) {
  const { id } = params;
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
      <Footer />
    </div>
  );
}