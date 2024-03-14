import React, { createContext, useState, useEffect } from 'react';
import { getContent } from '../../utils/auth';
const VerifiedUserContext = createContext();

const VerifiedUserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token'); // Assuming token storage
      if (token) {
        try {
          const response = await getContent(token);
          setUserData(response);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures fetching only once

  return (
    <VerifiedUserContext.Provider value={{ userData }}>
      {children}
    </VerifiedUserContext.Provider>
  );
};

export { VerifiedUserContext, VerifiedUserProvider };