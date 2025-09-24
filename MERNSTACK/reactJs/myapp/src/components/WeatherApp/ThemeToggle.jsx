import React from "react";

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
      <button
        className={`button theme ${darkMode ? "dark" : ""}`}
        onClick={toggleTheme}
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
};

export  {ThemeToggle};
