import { useEffect, useState } from "react";

// Dark/light tema — localStorage-da saxlanır, ilk dəfə sistem üstünlüyünü götürür.

const KEY = "ensclo.theme";
export type ThemeMode = "light" | "dark";

function getInitial(): ThemeMode {
  try {
    const saved = localStorage.getItem(KEY) as ThemeMode | null;
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* keç */
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function apply(mode: ThemeMode) {
  document.documentElement.classList.toggle("dark", mode === "dark");
}

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(getInitial);

  useEffect(() => {
    apply(mode);
    try {
      localStorage.setItem(KEY, mode);
    } catch {
      /* keç */
    }
  }, [mode]);

  const toggle = () => setMode((m) => (m === "dark" ? "light" : "dark"));
  return { mode, toggle };
}
