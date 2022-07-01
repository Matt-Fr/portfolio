import React, { useEffect, useState } from "react";

const getStoragetheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const ToggleTheme = () => {
  const [theme, setTheme] = useState(getStoragetheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else setTheme("light-theme");
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button onClick={toggleTheme} className="themeBtn">
      {theme === "light-theme" ? "light" : "dark"}
    </button>
  );
};

export default ToggleTheme;
