import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDOUTudXvX7DB9yjIYAd0R8vCLlRNGXB8Y",
  authDomain: "ninja-34183.firebaseapp.com",
  databaseURL: "https://ninja-34183.firebaseio.com",
  projectId: "ninja-34183",
  storageBucket: "ninja-34183.appspot.com",
  messagingSenderId: "319661647316",
  appId: "1:319661647316:web:89c82374555d02f99d2241"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
