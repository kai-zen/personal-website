"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, IconButton, Typography } from "@/shared/components";

const NAV_LINKS = [
  { label: "Articles", href: "#articles" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Topbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleTheme = () => {
    // Placeholder for actual theme switching logic (e.g., next-themes)
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
          <Typography variant="brand">Ali Razipour.</Typography>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href}>
              <Typography variant="nav">{link.label}</Typography>
            </Link>
          ))}
        </nav>

        {/* Actions (Theme & Resume) */}
        <div className="flex items-center gap-4">
          <IconButton aria-label="Toggle dark mode" onClick={toggleTheme}>
            {/* Sun/Moon Icon Placeholder */}
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </IconButton>

          <Button href="/resume.pdf" external className="hidden md:inline-flex">
            Resume
          </Button>

          {/* Mobile Menu Toggle */}
          <IconButton
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {/* Hamburger / Close Icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </IconButton>
        </div>
      </div>

      {/* Mobile Navigation (Animated Dropdown) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-6 shadow-lg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Typography variant="navMobile">{link.label}</Typography>
            </Link>
          ))}

          <div className="pt-2">
            <Button
              href="/resume.pdf"
              external
              fullWidth
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download Resume
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
