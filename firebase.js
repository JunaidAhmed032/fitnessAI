// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmvnVIaDMDuw0y7DD7Opc6Fo5W-LhBO50",
  authDomain: "fitness-trainer-ar.firebaseapp.com",
  projectId: "fitness-trainer-ar",
  storageBucket: "fitness-trainer-ar.appspot.com",
  messagingSenderId: "1009419141912",
  appId: "1:1009419141912:web:825cd8c985d0db9d67946d"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app =  firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth()
export {auth};