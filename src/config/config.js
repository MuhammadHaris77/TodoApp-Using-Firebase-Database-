// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1rf5i3CX6ir-nP0YPwHoqR36iKhVHsxk",
  authDomain: "expertizotodoapp.firebaseapp.com",
  projectId: "expertizotodoapp",
  storageBucket: "expertizotodoapp.appspot.com",
  messagingSenderId: "130439762046",
  appId: "1:130439762046:web:5be4621ee9c9b67f73882f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);