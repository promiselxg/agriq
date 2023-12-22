import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "agriq-408715.firebaseapp.com",
  projectId: "agriq-408715",
  storageBucket: "agriq-408715.appspot.com",
  messagingSenderId: "740689905175",
  appId: "1:740689905175:web:2ec4d71e34b6ae9b75fe52",
  measurementId: "G-Y47JF7Z38J",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
