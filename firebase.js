// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAQN-FzfxWDFXHLiAecLumJABAawt9hRjs",
  authDomain: "venky-360-trader.firebaseapp.com",
  projectId: "venky-360-trader",
  storageBucket: "venky-360-trader.firebasestorage.app",
  messagingSenderId: "65911533116",
  appId: "1:65911533116:web:66b72848a9d8c3eef75d39",
  measurementId: "G-LX57KNZM2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth & Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
