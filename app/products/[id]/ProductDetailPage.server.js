import React from "react";
import { products } from "../../components/data/products";
import Footer from "../../components/sections/Footer";
import Header from '../../components/header/Header';
import ProductDetailClient from './ProductDetail.client';

// Generate static params for all product IDs
export async function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default function ProductDetailPage({ params }) {
  const { id } = params;
  const product = products.find((p) => String(p.id) === id);
  const suggestions = products.filter(p => String(p.id) !== id).sort(() => 0.5 - Math.random()).slice(0, 4);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <ProductDetailClient product={product} suggestions={suggestions} />
      </main>
      <Footer />
    </div>
  );
}
