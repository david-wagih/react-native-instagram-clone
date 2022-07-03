import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDMHngNIaiJ8D0LMfEsUAecypxPgJewxDU",
  authDomain: "rn-instagram-clone-ac330.firebaseapp.com",
  projectId: "rn-instagram-clone-ac330",
  storageBucket: "rn-instagram-clone-ac330.appspot.com",
  messagingSenderId: "728756160013",
  appId: "1:728756160013:web:485e6edae3cbc7198ff744",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
