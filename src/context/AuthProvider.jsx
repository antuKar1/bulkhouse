import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user,setUser] = useState(null);

// Set Observer
useEffect(()=>{
  const subscribe=onAuthStateChanged(auth, (user) =>{
    setUser(user)
  })
  return ()=>subscribe()

},[])
// Sign Out
const logOut=()=>signOut(auth)

// google Sign In
const signInWithGoogle=(provider)=>{
    return signInWithPopup(auth, provider)
}
// Email Password Sign In
const namePassLogin=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}
// Create User
const createnamePassUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}


  const info = {signInWithGoogle ,namePassLogin,createnamePassUser,logOut,setUser,user};

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
