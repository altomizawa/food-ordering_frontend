import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isLoggedIn: f,
  userData: null,
  login: () => {},
  logout: () => {},
  setUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userData, setUserData] = useState(null);

  const login = () => {
    console.log('hello there')
    setIsLoggedIn(true)}
  const logout = () => setIsLoggedIn(false)
  const setUser = (user) => setUserData(user) 

  // Implement login and logout logic here

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
