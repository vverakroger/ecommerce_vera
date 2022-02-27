import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

//Web Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0wEQyMFRsjFvNU9X1jo7myLTa1P2tScM",
  authDomain: "ecommerce-vera.firebaseapp.com",
  projectId: "ecommerce-vera",
  storageBucket: "ecommerce-vera.appspot.com",
  messagingSenderId: "186132647913",
  appId: "1:186132647913:web:7a11e884c598b4ba004578"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);