// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC65BFvAk_BwBzvS3Qa9bYsUFaLVxPEauc",
  authDomain: "entertainmentapp-b07d5.firebaseapp.com",
  projectId: "entertainmentapp-b07d5",
  storageBucket: "entertainmentapp-b07d5.appspot.com",
  messagingSenderId: "704178819482",
  appId: "1:704178819482:web:e3e18b0f48e886f754aa23",
  measurementId: "G-W4D1XRLP1T"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
const provider = new GoogleAuthProvider();
 export {auth , provider} 