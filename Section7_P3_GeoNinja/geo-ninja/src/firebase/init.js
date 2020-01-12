import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAD6bv36thE1L75GW-9z7FiWH1Vrrxd4bU",
  authDomain: "geo-ninja-1a724.firebaseapp.com",
  databaseURL: "https://geo-ninja-1a724.firebaseio.com",
  projectId: "geo-ninja-1a724",
  storageBucket: "geo-ninja-1a724.appspot.com",
  messagingSenderId: "56225998540",
  appId: "1:56225998540:web:d1d3b4bf320c42b0b00469"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
