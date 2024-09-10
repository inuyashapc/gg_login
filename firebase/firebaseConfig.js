import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyApIkg9F90gj6BoYcGgCIcUKiseOh7VzgM",
  authDomain: "gglogin-c912b.firebaseapp.com",
  projectId: "gglogin-c912b",
  storageBucket: "gglogin-c912b.appspot.com",
  messagingSenderId: "778322012461",
  appId: "1:778322012461:web:f341038402d971f04fcba4",
  measurementId: "G-99VWBTDS37",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
