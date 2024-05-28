// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW3oQ0QybCWDPIrcmZeynLeIV6xnaZjhY",
  authDomain: "bulkhouse-a47cd.firebaseapp.com",
  projectId: "bulkhouse-a47cd",
  storageBucket: "bulkhouse-a47cd.appspot.com",
  messagingSenderId: "427061021292",
  appId: "1:427061021292:web:6fca88432201cadae6e649"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);