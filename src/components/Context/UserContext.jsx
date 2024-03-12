import { createContext, useState } from 'react';

export const UserContext = createContext({
  logout: () => {}
});

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))

export const UserProvider = ({ children }) => {
  const [userContextData, setUserContextData] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cart, setCart] = useState(cartFromLocalStorage || '[]')


  const logout = () => {
      setIsLoggedIn(false)
  }

  const login = () => {
    setIsLoggedIn(true)
  }

  // Remove Item from Cart
  const handleRemoveItem = (itemToRemove) => {
    setCart(cart.filter(item => item !== itemToRemove))
    localStorage.setItem('cart', JSON.stringify(cart))
  }


  return (
    <UserContext.Provider value={{ userContextData, setUserContextData, isLoggedIn, logout, cart, setCart, handleRemoveItem }}>
      {children}
    </UserContext.Provider>
  );
};
