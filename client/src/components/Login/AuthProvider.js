import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./firebaseGoogleConfig";

export const AuthContext = React.createContext(null); // Cambio del valor predeterminado

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null); // Cambio del valor predeterminado

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthState(!!user);
    });

    return () => {
      // Se desconecta el oyente cuando el componente se desmonta
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
