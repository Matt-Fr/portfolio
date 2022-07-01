import React, { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else setTheme("light-theme");
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return <button onClick={toggleTheme}>ToggleTheme</button>;
};

export default ToggleTheme;
