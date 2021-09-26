
import { initializeApp } from "firebase/app";
import firebase from "firebase/app"
import "firebase/firestore"




const firebaseConfig = {
  apiKey: "AIzaSyC5bUzJYd7-YFIno78YETdCXZBSKWxcVf8",
  authDomain: "randy-s-react-projects.firebaseapp.com",
  projectId: "randy-s-react-projects",
  storageBucket: "randy-s-react-projects.appspot.com",
  messagingSenderId: "169851039283",
  appId: "1:169851039283:web:2f7bcf2b88311e38327d46",
  measurementId: "G-4K062M9THL"
};


const app = initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);
// firebase.firestore()

export default firebase


// Explanation for the importation of firebase and firestore.
