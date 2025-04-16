"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="hover:scale-110 transition-all"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <div className="flex gap-2 items-center">
        <span>{theme === "light" ? "Night Mode" : "Day Mode"}</span>
        {theme === "light" ? <Moon size={30} /> : <Sun size={30} />}
      </div>
    </button>
  );
}
