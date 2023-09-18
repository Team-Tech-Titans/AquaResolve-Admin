    import { initializeApp } from "firebase/app";
    import { getAuth, updateProfile, updatePhoneNumber, signInWithEmailAndPassword, initializeAuth, getReactNativePersistence, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
    import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
    import { getStorage, ref, uploadBytes } from "firebase/storage";
    import { getFirestore, collection, addDoc, query, where, getDocs} from "firebase/firestore";

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

    const auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    });
    
    const storage = getStorage(app);
    const db = getFirestore(app);

    export { collection, query, where, getDocs, addDoc, db, storage, uploadBytes, ref, auth, getAuth, updateProfile, updatePhoneNumber, signInWithEmailAndPassword, initializeApp, getReactNativePersistence, onAuthStateChanged, createUserWithEmailAndPassword, signOut };