// firebase.config.js
// Firebase initialization for backend usage
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCvcy_H0WmnKLnTPMnl_gcX96IArDjUvG8",
  authDomain: "wood-ply-5467f.firebaseapp.com",
  projectId: "wood-ply-5467f",
  storageBucket: "wood-ply-5467f.appspot.com",
  messagingSenderId: "11936944340",
  appId: "1:11936944340:web:d723588893d69d5dfb2b41"
};

const app = initializeApp(firebaseConfig);

export default app;
