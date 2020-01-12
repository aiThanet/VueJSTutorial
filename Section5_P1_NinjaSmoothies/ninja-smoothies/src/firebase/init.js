import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDzjjABjctoW1NnxBEOt3j_yj6vmaSewfg",
  authDomain: "ninja-smoothies-d68d6.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-d68d6.firebaseio.com",
  projectId: "ninja-smoothies-d68d6",
  storageBucket: "ninja-smoothies-d68d6.appspot.com",
  messagingSenderId: "475840255243",
  appId: "1:475840255243:web:de0d23c0d6510b2b21be0e"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
