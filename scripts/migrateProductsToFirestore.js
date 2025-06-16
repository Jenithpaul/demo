const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

// Import the static product list
const { products } = require('../app/components/data/products');

// Firebase configuration from your existing firebase.config.js


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
