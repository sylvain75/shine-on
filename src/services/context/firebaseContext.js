import React, { createContext, useContext } from 'react';

export const FirebaseContext = createContext(null);

const FirebaseContextProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={FirebaseContext}>
      {children}
    </ProductContext.Provider>
  );
};