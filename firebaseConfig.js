import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAUWF6msXBjl2sCZRwWoeOe2lVk46X9O9c",
  authDomain: "aquaresolve-466f2.firebaseapp.com",
  projectId: "aquaresolve-466f2",
  storageBucket: "aquaresolve-466f2.appspot.com",
  messagingSenderId: "148309252297",
  appId: "1:148309252297:web:a359f833b4de611ee39518",
  measurementId: "G-6RR8L0EMZX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);