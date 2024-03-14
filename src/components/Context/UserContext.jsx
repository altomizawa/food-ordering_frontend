// import { createContext, useState } from 'react';

// export const UserContext = createContext({
//   logout: () => {}
// });

// const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))

// export const UserProvider = ({ children }) => {
//   // const [userContextData, setUserContextData] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [currentCart, setCurrentCart] = useState( cartFromLocalStorage || []);


//   const logout = () => {
//       setIsLoggedIn(false)
//   }

//   const login = () => {
//     setIsLoggedIn(true)
//   }

//   return (
//     <UserContext.Provider value={{ isLoggedIn, logout, currentCart, setCurrentCart }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
