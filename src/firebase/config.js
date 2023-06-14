import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB7dp5Wh48Ma867-tE-VBTfCOBuM7xABm0",
    authDomain: "playlist-vue-13872.firebaseapp.com",
    projectId: "playlist-vue-13872",
    storageBucket: "playlist-vue-13872.appspot.com",
    messagingSenderId: "247608130299",
    appId: "1:247608130299:web:c2a9d1049e89f628df4e5e"
  };

  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();
  const projectStorage = firebase.storage();

  const timestamp =firebase.firestore.FieldValue.serverTimestamp;

  export {projectFirestore, projectAuth, timestamp, projectStorage};