import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBevMXxtrvRqE6WEkVDesiSZVOl4-Ce5zQ",
  authDomain: "rm-db-efe09.firebaseapp.com",
  databaseURL: "https://rm-db-efe09.firebaseio.com",
  projectId: "rm-db-efe09",
  storageBucket: "rm-db-efe09.appspot.com",
  messagingSenderId: "413386138077",
  appId: "1:413386138077:web:5c77bd7b0e22188ab75634",
  measurementId: "G-XBDWCJ23WC"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating an User", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
