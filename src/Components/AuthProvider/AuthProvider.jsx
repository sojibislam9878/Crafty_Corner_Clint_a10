import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import { auth } from "../../firebase/FirebaseConfig";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const createUserWithEmail = (email, password, toast) => {
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

  const values = {
    createUserWithEmail,
    login
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AuthProvider;
