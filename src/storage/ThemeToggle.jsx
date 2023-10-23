import React, { useContext } from "react";
import { MoonIcon } from '@heroicons/react/24/solid';
import ThemeContext from "../context/ContextTheme";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext); // Use useContext instead of useState

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <button className={`rounded-lg border-1 border-slate-400 p-2 absolute right-8 xl:right-32 shadow-lg ${darkMode ? "bg-neutral-100" : " bg-slate-600"}`} onClick={toggleDarkMode}>
      <MoonIcon
  className={`h-8 w-8 cursor-pointer stroke-1 fill-none ${darkMode ? "stroke-slate-600" : "stroke-slate-200"}`}
  onClick={toggleDarkMode}
  />
    </button>
  );
};

export default ThemeToggle;


