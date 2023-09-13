// ThemeContext.js

import React, { createContext, useContext, useState } from 'react';

// Create a context
const ThemeContext = createContext();

// Create a context provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for using the context
export function useTheme() {
  return useContext(ThemeContext);
}
