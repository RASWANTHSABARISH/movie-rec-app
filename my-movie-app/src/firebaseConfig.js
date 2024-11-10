// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database"; // Import necessary functions for Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyCZ9SqHRuCMjvYYJn5BfU1ioTJtBHYGlaE",
  authDomain: "movie-recommendation-using-api.firebaseapp.com",
  projectId: "movie-recommendation-using-api",
  storageBucket: "movie-recommendation-using-api.firebasestorage.app",
  messagingSenderId: "652104079856",
  appId: "1:652104079856:web:c3d7a19060ba4b92f92535",
  measurementId: "G-WWLH02TFDG",
  databaseURL: "https://movie-recommendation-using-api-default-rtdb.firebaseio.com/"  // Add your database URL here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);  // Initialize Realtime Database

// Add the additional scope for contacts
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// Export Firebase services
export { auth, provider, database, ref, get };
