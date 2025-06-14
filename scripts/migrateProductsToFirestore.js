const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

// Import the static product list
const { products } = require('../app/components/data/products');

// Firebase configuration from your existing firebase.config.js
const firebaseConfig = {
  apiKey: "AIzaSyCvcy_H0WmnKLnTPMnl_gcX96IArDjUvG8",
  authDomain: "wood-ply-5467f.firebaseapp.com",
  projectId: "wood-ply-5467f",
  storageBucket: "wood-ply-5467f.firebasestorage.app",
  messagingSenderId: "11936944340",
  appId: "1:11936944340:web:d723588893d69d5dfb2b41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function migrateProducts() {
  console.log('Starting migration of products to Firestore...');
  const productsCollection = collection(db, 'products');
  
  for (const product of products) {
    try {
      await addDoc(productsCollection, product);
      console.log(`Product "${product.name}" migrated successfully.`);
    } catch (error) {
      console.error(`Error migrating product "${product.name}":`, error);
    }
  }
  console.log('Migration completed.');
}

migrateProducts().catch(console.error); 