import React, { createContext, useState, useEffect } from "react";
import { setApiToken } from "../services/api";
import { useSafeLocalStorage } from "../hooks/useSafeLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser, removeUser] = useSafeLocalStorage("user", null);
  const [token, setToken, removeToken] = useSafeLocalStorage("token", null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user && token) {
      setApiToken(token);
    }
    setIsLoading(false);
  }, [user, token]);

  const loginUser = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    setApiToken(jwtToken);
  };

  const logoutUser = () => {
    removeUser();
    removeToken();
    setApiToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, isLoading, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
