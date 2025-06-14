"use client";
import React, { useState } from "react";
import { useCart } from "../utils/CartContext";
import { useAuth } from "../auth/AuthContext";
import Link from "next/link";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import app from "../../backend/firebase.config";

const WHATSAPP_NUMBER = "91999999999"; // Replace with your WhatsApp number

function getCartMessage(cart) {
  if (!cart.length) return "No items in cart.";
  let msg = "Order Details:%0A";
  cart.forEach((item, idx) => {
    msg += `${idx + 1}. ${item.name} x${item.qty || 1} - ₹${item.price} each%0A`;
  });
  const total = cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);
  msg += `%0ATotal: ₹${total}`;
  return msg;
}

export default function OrderSummary() {
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const db = getFirestore(app);

  const handlePlaceOrder = async () => {
    if (!user) {
      alert("Please login to place an order");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    setIsSubmitting(true);

    try {
      // Save order to Firebase
      const orderData = {
        userId: user.uid,
        userEmail: user.email,
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          qty: item.qty || 1
        })),
        total: cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0),
        status: "pending",
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, "orders"), orderData);
      
      // Send WhatsApp message
      const message = getCartMessage(cart);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
      
      // Clear the cart
      clearCart();
      
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const total = cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <ul className="mb-4">
        {cart.map((item, idx) => (
          <li key={item.id} className="flex justify-between py-2 border-b">
            <span>{idx + 1}. {item.name} x{item.qty || 1}</span>
            <span>₹{item.price * (item.qty || 1)}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between font-semibold text-lg mb-6">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
      <button
        onClick={handlePlaceOrder}
        disabled={cart.length === 0 || isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          "Processing..."
        ) : (
          <>
            <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
            Place Order via WhatsApp
          </>
        )}
      </button>
      <Link href="/cart" className="block text-center mt-4 text-green-700 hover:underline">
        Back to Cart
      </Link>
    </div>
  );
}
