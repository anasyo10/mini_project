import React, { createContext, useEffect, useState } from "react";
import api from "../../api/axios";

export const AuthContext = createContext({
  currentUser: null,
  checkAuth: null,
  logout: null,
  loading: true,
});

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = () => {
    api.get("/auth").then(({ data }) => {
      setCurrentUser(data.current_user);
      setLoading(false);
    });
  };

  const logout = () => {
    setLoading(true);
    api.delete("/logout").then(() => {
      setCurrentUser(null);
      setLoading(false);
    });
  };

  useEffect(checkAuth, []);

  const context = {
    currentUser,
    checkAuth,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
