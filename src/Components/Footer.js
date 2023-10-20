import React, { useContext } from "react";
import { ThemeContext } from "@/app/Contexts/ThemeContext";

export function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
        toggleTheme();
  };

  return (
    <footer className={`relative flex items-center justify-center w-full h-10 ${theme === "dark" ? "bg-zinc-500/10" : "bg-white text-zinc-800"}`}>
      <div className="max-w-6xl mx-7 flex justify-between items-center">
          <button
          onClick={handleThemeToggle}
          className="text-gray-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-500"
        >
          Alternar Tema
        </button>
      </div>
      <div>© 2023 Todos os direitos reservados | Brasil</div>
    </footer>
  );
}