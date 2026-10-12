"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-nav-bg backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_24px_var(--shadow)]" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="bg-gradient-to-br from-accent to-ink bg-clip-text text-lg font-extrabold tracking-tight text-transparent"
        >
          {profile.nickname}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-ink-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-ink transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-line bg-nav-bg px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 font-semibold text-ink-muted hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
