import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
export default function GgLogin() {
  const handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log("🚀 ========= result:", result);
    return result;
  };
  return (
    <div>
      <button
        onClick={handleGoogle}
        className="mx-auto bg-green-500 text-white rounded-full p-2 px-4"
      >
        Sign in with Google
      </button>
    </div>
  );
}
