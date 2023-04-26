/**
 * @fileoverview: Login, Logout, check if a user is logged in or not.
 * 
 * * */

import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';
import { getCookie } from "./DonationInfo/UserInfo"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const checkLoggedIn = () => {
    // Get the user ID from the cookie.
     let userID = getCookie("UserID");
    // Check if user is logged in and set isLoggedIn accordingly
    setIsLoggedIn(userID !== null);
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const authValue = { isLoggedIn, login, logout };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);