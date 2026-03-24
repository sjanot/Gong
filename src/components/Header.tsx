"use client";

import { useState } from "react";

const navLinks = [
  { href: "#plochy", label: "Voľné plochy" },
  { href: "#centrum", label: "Centrum" },
  { href: "#okolie", label: "Okolie" },
  { href: "#dalsie", label: "Ďalšie plochy" },
  { href: "#cennik", label: "Cenník" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent font-bold text-primary-dark text-lg">
              G
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">
                GONG, s.r.o.
              </div>
              <div className="text-xs text-gray-300 leading-tight">
                prenájom reklamných plôch
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-primary-light hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#objednat"
              className="ml-3 rounded-md bg-accent px-4 py-2 text-sm font-bold text-primary-dark transition-colors hover:bg-accent-dark"
            >
              Objednať
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-md p-2 text-gray-300 hover:bg-primary-light hover:text-white"
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-primary-light bg-primary-dark px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-primary-light hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#objednat"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-md bg-accent px-4 py-2 text-center text-sm font-bold text-primary-dark hover:bg-accent-dark"
          >
            Objednať
          </a>
        </nav>
      )}
    </header>
  );
}
