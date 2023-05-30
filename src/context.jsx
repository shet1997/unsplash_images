import React, { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();

const getInitialDarkMode = () => {
  const darkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const localValue = localStorage.getItem("darkTheme") === "true";
  return localValue || darkMode;
};

const ContextAPIs = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode);
  const [searchTerm, setSearchTerm] = useState("cat");
  const toggleTheme = () => {
    let newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("darkTheme", newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default ContextAPIs;
