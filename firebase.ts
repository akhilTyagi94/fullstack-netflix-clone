// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "fullstack-netflix-clone-27307.firebaseapp.com",
  projectId: "fullstack-netflix-clone-27307",
  storageBucket: "fullstack-netflix-clone-27307.appspot.com",
  messagingSenderId: "173480184380",
  appId: "1:173480184380:web:c644778279ac35e5721139",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
