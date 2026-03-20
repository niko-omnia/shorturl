"use client";

import { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";
import { ButtonRounded } from "./buttonRounded";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  if (!mounted) return null;

  return (
    <ButtonRounded
      onClick={toggleTheme}
      icon={resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    />
  );
}
