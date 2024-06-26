import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjClEUAfT5X-PvuyEwTHvzeKyQ-41AjYA",
  authDomain: "components-98285.firebaseapp.com",
  projectId: "components-98285",
  storageBucket: "components-98285.appspot.com",
  messagingSenderId: "166029698043",
  appId: "1:166029698043:web:5a834ebb2cd4d98f1fe15e",
  measurementId: "G-NGQKJVNCB6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
