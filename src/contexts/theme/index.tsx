"use client";

import { ThemeContextType } from "./types";
import React, { createContext, useLayoutEffect, useState } from "react";

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    const localStorageDarkThemeValue = localStorage.getItem("app.isDark");
    setIsDark(localStorageDarkThemeValue === "true");
  }, []);

  const toggleTheme = () => {
    localStorage.setItem("app.isDark", !isDark ? "true" : "false");
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`${isDark ? "dark" : ""}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
