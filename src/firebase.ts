import { initializeApp } from "firebase/app";
import { getFirestore, Firestore, connectFirestoreEmulator } from "firebase/firestore";
import { ENV } from "@/main";


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
//TODO: REFACTOR SUPA GROSS...
//Use Firestore emulator for local development, otherwise use production Firestore
let firestore: Firestore;
if (ENV.PROD) {
  console.log("Using production Firestore database");
   firestore = getFirestore(app, "slice-of-life-poems");
} else {
  console.log("Connecting to Firestore emulator at 127.0.0.1:5000");
  firestore = getFirestore(app);
}

// Initialize Firestore with your specific database ID
// Casting to Firestore ensures type safety across the app
export const documentDb: Firestore = firestore;

// Configure Firestore emulator for local development
// TODO: Consider making this conditional based on an environment variable for better flexibility
if (!ENV.PROD) {

  connectFirestoreEmulator(documentDb, '127.0.0.1', 5000);
} else {
  console.log("Using production Firestore database");
}