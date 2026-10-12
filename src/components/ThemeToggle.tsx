"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-[3.75rem] shrink-0 items-center rounded-full border-2 border-line bg-card-bg px-1.5 shadow-[inset_0_1px_3px_var(--shadow)] transition-colors"
    >
      <span
        className={`pointer-events-none absolute left-1 top-1 z-10 h-[1.35rem] w-[1.35rem] rounded-full bg-accent shadow-[0_2px_8px_var(--accent-glow)] transition-transform duration-300 ${
          isDark ? "translate-x-[1.85rem]" : "translate-x-0"
        }`}
      />
      <span
        className={`relative z-0 flex w-full items-center justify-between px-0.5 text-[0.7rem] ${
          isDark ? "opacity-40" : ""
        }`}
        aria-hidden
      >
        <SunIcon />
        <MoonIcon />
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-amber-500" fill="currentColor">
      <path d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1Zm0 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.5-2.5a1 1 0 1 1 0-2H21a1 1 0 1 1 0 2h-1.5ZM12 17a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1ZM4.5 12a1 1 0 0 1-1-1H2a1 1 0 1 1 0 2h1.5a1 1 0 0 1 1-1Zm1.67-5.83a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 1 1-1.42 1.42L6.17 7.59a1 1 0 0 1 0-1.42Zm9.9 9.9a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1-1.42 1.42l-1.06-1.06a1 1 0 0 1 0-1.42ZM17.83 6.17a1 1 0 0 1 0 1.42l-1.06 1.06a1 1 0 1 1-1.42-1.42l1.06-1.06a1 1 0 0 1 1.42 0ZM7.23 15.24a1 1 0 0 1 0 1.42L6.17 17.72a1 1 0 0 1-1.42-1.42l1.06-1.06a1 1 0 0 1 1.42 0Z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-sky-300" fill="currentColor">
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 1 0 11.5 11.5Z" />
    </svg>
  );
}
