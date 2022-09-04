import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7PNZvaoGuh55eCWcq1IBUF6lkPYpCuvE",
  authDomain: "slack-clone-c52cf.firebaseapp.com",
  projectId: "slack-clone-c52cf",
  storageBucket: "slack-clone-c52cf.appspot.com",
  messagingSenderId: "799314087155",
  appId: "1:799314087155:web:a3270cb1f026a6d3623b86",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
