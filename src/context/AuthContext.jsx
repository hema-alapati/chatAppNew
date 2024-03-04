import { createContext, useState, useContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

//create context
const AuthContext = createContext();
//provider context
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("John");

  // signin with google
  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth);
  };

  const value = {
    currentUser,
    setCurrentUser,
    signinWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
