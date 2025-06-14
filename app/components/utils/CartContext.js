"use client";
import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, updateDoc, arrayUnion, onSnapshot } from "firebase/firestore";
import app from "../../backend/firebase.config";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage on first render
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          return [];
        }
      }
    }
    return [];
  });
  const [userId, setUserId] = useState(null);
  const isFromFirestore = useRef(false);
  const lastFirestoreCart = useRef(null);

  // Auth state listener
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setUserId(user ? user.uid : null);
      if (!user) {
        // LocalStorage for guests
        const storedCart = typeof window !== "undefined" ? localStorage.getItem("cart") : null;
        if (storedCart) setCart(JSON.parse(storedCart));
        else setCart([]);
      }
    });
    return () => unsubscribeAuth();
  }, []);

  // Firestore cart real-time listener (only for logged-in users)
  useEffect(() => {
    if (!userId) return;
    const db = getFirestore(app);
    const cartRef = doc(db, "carts", userId);
    const unsubscribeCart = onSnapshot(cartRef, (docSnap) => {
      if (docSnap.exists()) {
        isFromFirestore.current = true;
        lastFirestoreCart.current = JSON.stringify(docSnap.data().cart || []);
        setCart(docSnap.data().cart || []);
      } else {
        // Check localStorage before setting cart to []
        const storedCart = typeof window !== "undefined" ? localStorage.getItem("cart") : null;
        if (storedCart && JSON.parse(storedCart).length > 0) {
          // Push local cart to Firestore if it exists
          setDoc(cartRef, { cart: JSON.parse(storedCart) }, { merge: true });
          setCart(JSON.parse(storedCart));
        } else {
          isFromFirestore.current = true;
          lastFirestoreCart.current = JSON.stringify([]);
          setCart([]);
        }
      }
    });
    return () => unsubscribeCart();
  }, [userId]);

  useEffect(() => {
    if (userId) {
      // Only update Firestore if cart changed from UI (not from Firestore)
      if (isFromFirestore.current) {
        isFromFirestore.current = false;
        return;
      }
      if (JSON.stringify(cart) === lastFirestoreCart.current) {
        return;
      }
      const db = getFirestore(app);
      setDoc(doc(db, "carts", userId), { cart }, { merge: true });
    } else {
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  }, [cart, userId]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart: increment qty if exists, else add new
  function addToCart(product, qty = 1) {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.id === product.id);
      if (idx !== -1) {
        // Item exists, increment qty
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: (item.qty || 1) + (product.qty || qty) } : item
        );
      } else {
        // New item
        return [...prev, { ...product, qty: product.qty || qty }];
      }
    });
  }

  // Remove from cart
  function removeFromCart(productId) {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }

  // Update quantity
  function updateCartQty(productId, qty) {
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, qty } : item))
    );
  }

  // Clear cart
  function clearCart() {
    setCart([]);
  }

  const placeOrder = async (orderDetails) => {
    if (!userId) return;
    const db = getFirestore(app);
    const order = {
      items: cart,
      ...orderDetails,
      createdAt: new Date().toISOString(),
    };
    await updateDoc(doc(db, "orders", userId), {
      history: arrayUnion(order),
    }).catch(async (err) => {
      await setDoc(doc(db, "orders", userId), { history: [order] });
    });
    clearCart();
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, updateCartQty, clearCart, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
