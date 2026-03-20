"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";
import { ButtonRounded } from "./buttonRounded";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  
  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <ButtonRounded onClick={toggleTheme} icon={resolvedTheme == "dark" ? <SunIcon /> : <MoonIcon />} />
  );
}
