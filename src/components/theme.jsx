import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleDarkTheme: () => {},
  isRedTheme: false,
  toggleRedTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isRedTheme, setIsRedTheme] = useState(false);
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleRedTheme = () => {
    setIsRedTheme(!isRedTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkTheme, isRedTheme, toggleDarkTheme, toggleRedTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
