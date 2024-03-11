import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userContextData, setUserContextData] = useState('');

  return (
    <UserContext.Provider value={{ userContextData, setUserContextData }}>
      {children}
    </UserContext.Provider>
  );
};
