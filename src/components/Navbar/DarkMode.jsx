import React, { useState, useEffect } from "react";
import darkPng from "../../../src/assets/website/dark-mode-button.png";
import lightPng from "../../../src/assets/website/light-mode-button.png";

const DarkMode = ({ onThemeChange }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    onThemeChange(theme); // Notify parent component of theme change
  }, [theme, onThemeChange]);

  return (
    <div className="relative">
      <img
        src={lightPng}
        alt="dark"
        onClick={() =>
          setTheme((data) => (data === "dark" ? "light" : "dark"))
        }
        className={`w-12 cursor-pointer transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={darkPng}
        alt="dark"
        onClick={() =>
          setTheme((data) => (data === "dark" ? "light" : "dark"))
        }
        className="w-12 cursor-pointer duration-300"
      />
    </div>
  );
};

export default DarkMode;
