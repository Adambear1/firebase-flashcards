import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

export const firebaseDB = {
  apiKey: "AIzaSyC5_98RXtM1Jz2oRjLN-yLtJXAf0W2BcPk",
  authDomain: "fir-flashcards-90e1d.firebaseapp.com",
  databaseURL: "https://fir-flashcards-90e1d.firebaseio.com",
  projectId: "fir-flashcards-90e1d",
  storageBucket: "fir-flashcards-90e1d.appspot.com",
  messagingSenderId: "752238802960",
  appId: "1:752238802960:web:de157f2e91d2c5f57ab295",
};
const app = firebase.initializeApp(firebaseDB);
export const database = app.database().ref().child("cards");
