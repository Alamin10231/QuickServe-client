import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./Firebase";
import axios from "axios";
// import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const register = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signout = () => {
    setloading(true);
    return signOut(auth)
      .then(() => {
        setuser(null);
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
        throw error;
      });
  };
  const signinwithgoogle = () => {
    setloading(true);
    const Provider = new GoogleAuthProvider();
    return signInWithPopup(auth, Provider);
  };

  const authInfo = {
    user,
    loading,
    login,
    register,
    signinwithgoogle,
    signout,
  };

  useEffect(() => {
    const UnsubScribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setuser(currentUser);
      console.log("user login", currentUser?.email);
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post(`https://quick-serve-server.vercel.app/jwt`, user, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));
      } else {
        axios
          .post(
            `https://quick-serve-server.vercel.app/logout`,
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => console.log("logout:", res.data));
      }
      setloading(false);
      return () => UnsubScribe();
    });
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
