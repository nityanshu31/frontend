// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  // Check localStorage for existing login status on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');
    setIsLoggedIn(!!token);
    setRole(userRole);
  }, []);

  const login = (role) => {
    setIsLoggedIn(true);
    setRole(role);
    localStorage.setItem('token', 'your_token_here');
    localStorage.setItem('role', role);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
