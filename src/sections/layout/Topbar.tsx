"use client";

import { FC, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button, IconButton, Typography } from "@/shared/components";
import { cn } from "@/shared/config/functions";

const NAV_LINKS = [
  { label: "Articles", href: "#articles" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const RESUME_FILENAME = "Full Stack Developer - Ali Razipour.pdf";
const RESUME_HREF = encodeURI(`/${RESUME_FILENAME}`);

const Topbar: FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 backdrop-blur-md dark:border-gray-800">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          prefetch={false}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Typography variant="brand">Ali Razipour.</Typography>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} prefetch={false}>
              <Typography variant="nav">{link.label}</Typography>
            </Link>
          ))}
        </nav>

        {/* Actions (Theme & Resume) */}
        <div className="flex items-center gap-1.5 md:gap-4">
          <IconButton aria-label="Toggle dark mode" onClick={toggleTheme}>
            {mounted && isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </IconButton>

          <Button
            href={RESUME_HREF}
            download={RESUME_FILENAME}
            external
            arrow
            size="sm"
            className="hidden md:inline-flex"
          >
            Resume
          </Button>

          {/* Mobile Menu Toggle */}
          <IconButton
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-5 w-6" />
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile Navigation (Animated Dropdown) */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col space-y-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-6 shadow-lg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={false}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Typography variant="navMobile">{link.label}</Typography>
            </Link>
          ))}

          <div className="pt-2">
            <Button
              href={RESUME_HREF}
              download={RESUME_FILENAME}
              external
              arrow
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
};

export default Topbar;
