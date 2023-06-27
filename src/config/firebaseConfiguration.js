import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8nstcCmwg3wdS58mubaB3bb4sxFP5Xr8",
  authDomain: "vue-dotted.firebaseapp.com",
  projectId: "vue-dotted",
  storageBucket: "vue-dotted.appspot.com",
  messagingSenderId: "879393246795",
  appId: "1:879393246795:web:99d6586fd18dcf944fc7ce",
};

export const initFirebase = () => {
  initializeApp(firebaseConfig);
};

export default {};
