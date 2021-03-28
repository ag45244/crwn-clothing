import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCSkInFkNyEjMeYiZf9LU4N3DiFgU1NI1w",
    authDomain: "crwn-db-cc690.firebaseapp.com",
    projectId: "crwn-db-cc690",
    storageBucket: "crwn-db-cc690.appspot.com",
    messagingSenderId: "110817320786",
    appId: "1:110817320786:web:c9b9aa42e815ee83ab248b",
    measurementId: "G-8TZTWWX3DK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;