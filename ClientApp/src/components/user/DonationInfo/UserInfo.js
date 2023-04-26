/**
 * @fileoverview: Use the user's userID from a cookie to get the rest
 * of the user's information from the server.
 * 
 * * */

import { useState, useEffect } from 'react';
import axios from 'axios';

// Takes the name of a cookie as a parameter and returns its value.
export function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[0].trim();
    console.log('cookie:', cookie);
    if (cookie.startsWith(name + '=')) {
      const cookieValue = cookie.substring(name.length + 1);
      console.log('cookie: ', + cookieValue);
      return cookieValue;
    }
  }
  return null;
}

// Store user information in a state.
export function UserInfo() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Get the user ID from the cookie.
    const userID = getCookie("UserID");
    if (userID !== null) {
      axios
        .get("/api/users/" + userID)
        .then(function (response) {
          // Set the user information in the state.
          setUser(response.data);
        })
        .catch(function (error) {
          console.error("Error getting user information:", error);
        });
    } else {
      setUser(null);
    }
  }, []);
  // Return user state containing user's information
  return user;
}

