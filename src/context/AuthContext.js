import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    email: localStorage.getItem("userEmail") || "",
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  });

  function login(email) {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("isLoggedIn", "true");

    setUser({
      email: email,
      isLoggedIn: true,
    });
  }

  function logout() {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("isLoggedIn");

    setUser({
      email: "",
      isLoggedIn: false,
    });
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}