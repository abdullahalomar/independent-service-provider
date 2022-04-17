// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu0pFnJ1JN7QKzjBzW28TodXn3IQgop1s",
  authDomain: "fitness-heroes-eaa20.firebaseapp.com",
  projectId: "fitness-heroes-eaa20",
  storageBucket: "fitness-heroes-eaa20.appspot.com",
  messagingSenderId: "887504207537",
  appId: "1:887504207537:web:85614b66d86420b8f72c90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;