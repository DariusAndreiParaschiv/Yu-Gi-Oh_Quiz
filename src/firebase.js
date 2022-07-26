import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQ2M1VOi5d_TCqQIkAkIfbNWLGAVPXjy4",
    authDomain: "react-proiect.firebaseapp.com",
    projectId: "react-proiect",
    storageBucket: "react-proiect.appspot.com",
    messagingSenderId: "1095189379631",
    appId: "1:1095189379631:web:f392a5f44cfc6f1514a4da",
    measurementId: "G-Z62SQ75XJL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;