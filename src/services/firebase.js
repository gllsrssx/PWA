import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  apiKey: "AIzaSyAPF1KB8Eq9X9cFCIqYOfINNyljAVPqW64",
  authDomain: "react-ep.firebaseapp.com",
  projectId: "react-ep",
  storageBucket: "react-ep.appspot.com",
  messagingSenderId: "384745751994",
  appId: "1:384745751994:web:075f257eb78a4c1c950983",
  measurementId: "G-37369YJVSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const firestoreDB = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(firestoreDB)
  .then(() => {
    console.log("Firestore persistence enabled");
  })
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.log("Multiple tabs open, persistence can only be enabled in one tab at a a time.");
    } else if (err.code === 'unimplemented') {
      console.log("The current browser does not support all of the features required to enable persistence");
    }
  });

export { firestoreDB, analytics };