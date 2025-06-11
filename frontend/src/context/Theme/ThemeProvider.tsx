import React, { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";
import { Theme } from "../../types";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Check if we have a theme in localStorage, otherwise use system preference
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? Theme.Dark
      : Theme.Light;
  });
  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.Light ? Theme.Dark : Theme.Light
    );
  };
  // Apply theme to document when theme changes
  useEffect(() => {
    const root = document.documentElement;
    // Set data-theme attribute for CSS variable switching
    root.setAttribute("data-theme", theme);
    // Save to localStorage for persistence
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
