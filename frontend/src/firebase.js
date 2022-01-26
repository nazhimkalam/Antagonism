import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAYzZGbuB5TpM1T2L8-78lANi1lJe2vST8",
  authDomain: "antagonism-5c27c.firebaseapp.com",
  projectId: "antagonism-5c27c",
  storageBucket: "antagonism-5c27c.appspot.com",
  messagingSenderId: "816177450068",
  appId: "1:816177450068:web:c68415c3bfc86d8cf9f1c1",
  measurementId: "G-V1JF10XKKD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider, auth };