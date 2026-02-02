import React from 'react';
import { createContext, useContext, useState } from 'react';

// 1. Create the context
const CanvasContext = createContext(null);

// 2. Provide state to children components
export const CanvasProvider = ({ children }) => {
  const [canvas, setCanvas] = useState(null);

  return (
    <CanvasContext.Provider value={{ canvas, setCanvas }}>
      {children}
    </CanvasContext.Provider>
  );
};

// 3. Custom hook to consume the context
export const useCanvasContext = () => useContext(CanvasContext);
