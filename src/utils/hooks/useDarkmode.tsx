import { useEffect, useState } from "react";
export const useDarkMode = () => {
  // FIXME: Fix local storage issue, and Fix Prop Drilling
  const localTheme = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState(localTheme);

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    console.log(theme);
    localTheme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, [theme]);
  return { theme, themeToggler };
};
