import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBiiV1O3my1FDBCCQ73bj-M8q_KdezbSHs",
    authDomain: "fb-app-2dff2.firebaseapp.com",
    databaseURL: "https://fb-app-2dff2.firebaseio.com",
    projectId: "fb-app-2dff2",
    storageBucket: "fb-app-2dff2.appspot.com",
    messagingSenderId: "31565590701",
    appId: "1:31565590701:web:ce19fc33671f7e5c5ed624",
    measurementId: "G-FHZQR5HFYH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;