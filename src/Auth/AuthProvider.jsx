import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "./Firebase";
// import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(false);



  const register = (email, password) => {
    setloading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setloading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signinwithgoogle = () => {
                    setloading(true);
                    const Provider = new GoogleAuthProvider();
                    return signInWithPopup(auth, Provider);
                  };


  const authInfo = {
    login,
    register,
    signinwithgoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
