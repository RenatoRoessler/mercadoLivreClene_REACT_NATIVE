import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBWoQ6Z30n8Vj3RO8-EgNY4Wra-JR8p3_Y",
    authDomain: "mercadolivro-clone.firebaseapp.com",
    projectId: "mercadolivro-clone",
    storageBucket: "mercadolivro-clone.appspot.com",
    messagingSenderId: "1017856449426",
    appId: "1:1017856449426:web:38aa1a4e5d07a3e516bf4b"

};

firebase.initializeApp(firebaseConfig);

export default firebase