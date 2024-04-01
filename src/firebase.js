import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC74HOceI1vEqVQYadF1zRE-fU-BFuiejE",
  authDomain: "cvupload-dbbc9.firebaseapp.com",
  projectId: "cvupload-dbbc9",
  storageBucket: "cvupload-dbbc9.appspot.com",
  messagingSenderId: "1056486885951",
  appId: "1:1056486885951:web:ffa0a4921e2fa5ab27068a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
