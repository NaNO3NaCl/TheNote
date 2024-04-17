import {auth, db} from './firebaseConfig.js'
import {doc, setDoc,
        collection, getDocs } from "firebase/firestore"
//Can be removed
import {setLogLevel} from "firebase/firestore"

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth"

  //No Errors - tested, currently appears to be working 8/4/2024
  export const currentUser = () => {
    return new Promise((resolve, reject) => { // Further research into how JS handles Promise needed
      // Listen for changes in authentication state
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        // Unsubscribe from the listener
        unsubscribe(); // this is unsubscribing from events, apparently its common practice to use unsubscribe to be the reference and still call a function named unsubscribe
        resolve(user);
      }, (error) => {
        // Reject with the error if there's a problem
        reject(error);
      });

  })
};

//Working, leaving this as is to allow us to later filter signups/process differently. Consider a whitelist.
export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signOutUser = ()=> {
  return signOut(auth);
};

export async function addNote(note, title) {
  try {
    setLogLevel("debug");
    console.log("Attempting setDoc");
    // Update this write to a collection that is the users ID and
    // a random doc ID
    await setDoc(doc(db, "users", "test22"), {
      noteData: note,
      noteTitle: title
    });
    console.log("Note added successfully");
  } catch (error) {
    console.error("Failed to add note:", error);
  }
}

export async function getNotes() {
  try {
    const qSnap = await getDocs(collection(db, "users"));
    qSnap.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    console.log("Notes retrieved successfully");
    return qSnap;
  } catch (error) {
    console.error("Failed to retrieve notes:", error);
  }
}