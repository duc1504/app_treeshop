// ShowAllContext.js
import React, { createContext, useContext, useState } from 'react';

const ShowContext = createContext();

const ShowAllContext = ({ children }) => {
  const [statusSelect, setStatusSelect] = useState('');

  const contextValue = {
    statusSelect,
    setStatusSelect,
  };

  return (
    <ShowContext.Provider value={contextValue}>
      {children}
    </ShowContext.Provider>
  );
};

 const useShowContext = () => {
  return useContext(ShowContext);
};

export { ShowContext, ShowAllContext, useShowContext };
