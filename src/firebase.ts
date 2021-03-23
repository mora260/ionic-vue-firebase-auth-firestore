import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
};

const app = firebase.initializeApp(firebaseConfig);

// Get a Firestore and Auth instance
export const FirebaseFirestore = app.firestore();
export const FirebaseAuthentication = app.auth();

// Export types that exists in Firestore. Useful sometimes.
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint }