"use client";
import React from "react";
import { useCart } from "../utils/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-green-800">
          Your Cart
        </h1>
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600 mb-4">Your cart is empty.</p>
            <Link
              href="/products"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <ul className="divide-y divide-gray-200 mb-6">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between py-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain rounded border border-gray-200"
                    />
                    <div>
                      <h2 className="font-semibold text-lg text-green-900">
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-500">{item.category}</p>
                      <p className="text-sm text-gray-700">
                        ₹{item.price} x {item.qty}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 px-3 py-1 rounded transition-colors border border-red-100 bg-red-50"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-xl text-green-800">Total:</span>
              <span className="font-bold text-2xl text-green-900">
                ₹{total.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <button
                onClick={clearCart}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Clear Cart
              </button>
              <button
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                disabled={cart.length === 0}
                onClick={() => router.push("/cart/order-summary")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
