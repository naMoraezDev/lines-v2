"use client";

import { setCookie } from "nookies";
import React, { createContext, useState } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({
  children,
  isOriginalyDark,
}: {
  isOriginalyDark: boolean;
  children: React.ReactElement;
}) => {
  const [isDark, setIsDark] = useState(isOriginalyDark);

  const toggleTheme = () => {
    setCookie(null, "app.isDark", !isDark ? "true" : "false", {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`${isDark ? "dark" : ""}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
