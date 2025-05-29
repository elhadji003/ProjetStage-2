import React, { createContext, useState, useEffect } from "react";
import { setApiToken } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedUser !== "undefined" && savedToken) {
      try {
        setUser(JSON.parse(savedUser));
        setToken(savedToken);
        setApiToken(savedToken);
      } catch (error) {
        console.error("Erreur parsing user dans localStorage", error);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
    setIsLoading(false);
  }, []);

  const loginUser = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", jwtToken);
    setApiToken(jwtToken);
  };

  const logoutUser = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
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
