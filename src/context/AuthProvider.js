import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

// Default context for better auto complition
const defaultContext = {
  user: {},
  createUserHandler: () => {},
};

// Created context
export const AuthContext = createContext(defaultContext);

const auth = getAuth(app);

// ------------------------------------------- //
// Provider Function which returns AuthContext
// ------------------------------------------- //

const AuthProvider = ({ children }) => {
  const user = { displayName: "Muntashir wahid" };

  // Create user

  const createUserHandler = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Context value
  const userContext = { user, createUserHandler };

  return (
    <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
