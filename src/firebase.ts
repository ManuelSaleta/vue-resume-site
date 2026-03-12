import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

// Define the structure of your data for better DX
export interface Poem {
  number: number;
  title: string;
  body: string;
  updated_at?: Date;
}

// Load .env
const ENV = import.meta.env;

const firebaseConfig = {
  apiKey: ENV.VITE_FIREBASE_API_KEY,
  authDomain: ENV.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: ENV.VITE_FIREBASE_PROJECT_ID,
  storageBucket: ENV.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ENV.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: ENV.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with your specific database ID
// Casting to Firestore ensures type safety across the app
export const documentDb: Firestore = getFirestore(app, "slice-of-life-poems");
