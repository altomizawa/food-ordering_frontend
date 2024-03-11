import { createContext, useState } from 'react';

export const UserContext = createContext({
  logout: () => {}
});

export const UserProvider = ({ children }) => {
  const [userContextData, setUserContextData] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logout = () => {
      setIsLoggedIn(false)
  }

  const login = () => {
    setIsLoggedIn(true)
  }


  return (
    <UserContext.Provider value={{ userContextData, setUserContextData, isLoggedIn, logout }}>
      {children}
    </UserContext.Provider>
  );
};
