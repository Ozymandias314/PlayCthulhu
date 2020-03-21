import firebase from "firebase/app";

import "firebase/database";
import "firebase/auth";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyCk7sOOUoW_G3utGH_r4hGznye-RDstCAs",
  authDomain: "playcthulhu.firebaseapp.com",
  databaseURL: "https://playcthulhu.firebaseio.com",
  projectId: "playcthulhu",
  storageBucket: "playcthulhu.appspot.com",
  messagingSenderId: "202473805991",
  appId: "1:202473805991:web:376ef37b1921e0f6f9e382",
  measurementId: "G-PEZTKBMS85"
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase;
