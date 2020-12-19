import firebase from '@firebase/app';
import '@firebase/firestore'

export function loadDB() {
  try {
    var config = {
        apiKey: "AIzaSyD-QVy4zWHUu4xrjESIpy9dh-UiBwNUiXM",
        authDomain: "portfolio-1ad0f.firebaseapp.com",
        projectId: "portfolio-1ad0f",
        storageBucket: "portfolio-1ad0f.appspot.com",
        messagingSenderId: "995139086885",
        appId: "1:995139086885:web:c905da2e7d54d1c94badcc",
        measurementId: "G-8DEXBW27RN"        
    };
    firebase.initializeApp(config);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  return firebase;
}
