import { createContext, useState } from 'react';

export const UserContext = createContext({
  logout: () => {}
});

export const UserProvider = ({ children }) => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

  const [userContextData, setUserContextData] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cart, setCart] = useState(cartFromLocalStorage)

  const logout = () => {
      setIsLoggedIn(false)
  }

  const login = () => {
    setIsLoggedIn(true)
  }


  return (
    <UserContext.Provider value={{ userContextData, setUserContextData, isLoggedIn, logout, cart, setCart }}>
      {children}
    </UserContext.Provider>
  );
};
