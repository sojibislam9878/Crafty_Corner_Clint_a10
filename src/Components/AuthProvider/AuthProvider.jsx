import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/FirebaseConfig";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const createUserWithEmail = (email, password, toast) => {
    setLoading(true);
    if (password.length < 6) {
      return toast.warn("Password must be at least 6 characters long", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (!/^(?=.*[a-z]).*$/.test(password)) {
      return toast.warn("Password must contain a lowercase letter", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (!/^(?=.*[A-Z]).*$/.test(password)) {
      return toast.warn("Password must contain a uppercase letter", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    toast.success("Account created successfuly", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   userlogin
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // social login providers

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignUP = () => {
    signInWithPopup(auth, googleProvider);
  };
  const githubSignUP = () => {
    signInWithPopup(auth, githubProvider);
  };

  const [loading, setLoading] = useState(true);

  //   user
  const [user, setUser] = useState(null);
  //   check user
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });
    return () => unsubcribe();
  }, []);
  // logout
  const logout = () => {
    setUser(null);
    signOut(auth);
  };

  // update user
  const updateUser = (name, photo) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
    // .then(() => {
    // Profile updated!
    // ...
    // }).catch((error) => {
    // An error occurred
    // ...
    // });
  };
  console.log(loading);

  const [subCategory, setSubCategory] = useState("");

  const values = {
    createUserWithEmail,
    login,
    googleSignUP,
    githubSignUP,
    user,
    logout,
    updateUser,
    loading,
    subCategory,
    setSubCategory,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AuthProvider;
