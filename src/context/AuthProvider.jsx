import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        const userData = { email: currentUser.email };
        axios
          .post("http://localhost:3000/jwt", userData, {
            withCredentials: true
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.error("JWT Fetch Error:", err);
          });
      }

      setLoading(false);
      console.log("user in the auth state change ", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // signOut
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    loginUser,
    logout,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
