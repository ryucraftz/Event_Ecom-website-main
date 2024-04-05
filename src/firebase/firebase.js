import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZkMYDHITxg4t2ypLjeYW8gUGLYQGW6Vs",
  authDomain: "event-ecom-website-main.firebaseapp.com",
  projectId: "event-ecom-website-main",
  storageBucket: "event-ecom-website-main.appspot.com",
  messagingSenderId: "213265672433",
  appId: "1:213265672433:web:3fa2213884e0469d922150"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};