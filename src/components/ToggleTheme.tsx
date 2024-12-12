"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ToggleTheme() {
	const { theme, setTheme } = useTheme();

	return (
		<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
			{theme === "light" ? <Moon /> : <Sun />}
		</button>
	);
}
