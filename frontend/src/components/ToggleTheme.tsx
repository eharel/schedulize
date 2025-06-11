import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/Theme/useTheme";
import { Theme } from "../types";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the toggle once the component has mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 rounded-md flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
      title={theme === Theme.Dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === Theme.Dark ? (
        <Sun size={18} className="text-yellow-500" />
      ) : (
        <Moon size={18} className="text-blue-500" />
      )}
    </button>
  );
}
