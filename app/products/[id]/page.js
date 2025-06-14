import React from "react";
import { getFirestore, doc, getDoc, collection, getDocs, DocumentData } from "firebase/firestore";
import app from "../../backend/firebase.config";
import EnhancedAboutFooter from "../../components/sections/Footer";
import Header from "../../components/header/Header";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images?: string[];
}

function getProductData(id: string): Promise<Product | null> {
  const db = getFirestore(app);
  const productsRef = collection(db, "products");
  return getDocs(productsRef).then(querySnapshot => {
    const product = querySnapshot.docs.find((doc) => doc.data().id === parseInt(id));
    return product ? (product.data() as Product) : null;
  });
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const db = getFirestore(app);
  const productsRef = collection(db, "products");
  const productsSnap = await getDocs(productsRef);

  // Map IDs from Firestore documents
  return productsSnap.docs.map((doc) => ({
    id: String(doc.data().id),
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
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