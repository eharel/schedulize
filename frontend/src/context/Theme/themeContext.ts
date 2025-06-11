import { createContext } from "react";
import type { Theme } from "../../types/theme.types";

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
