
import React from "react"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md hover:bg-accent transition-colors"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  )
}
