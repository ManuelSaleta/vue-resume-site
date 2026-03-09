import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

// Define the structure of your data for better DX
export interface Poem {
  number: number;
  title: string;
  body: string;
  updated_at?: Date;
}

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "vue-resume-site.firebaseapp.com",
  projectId: "vue-resume-site",
  storageBucket: "vue-resume-site.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with your specific database ID
// Casting to Firestore ensures type safety across the app
export const documentDb: Firestore = getFirestore(app, "slice-of-life-poems");
