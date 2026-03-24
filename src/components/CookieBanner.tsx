"use client";

import { useState, useEffect } from "react";

const COOKIE_KEY = "gong-cookies-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[90] border-t border-card-border bg-card-bg/95 backdrop-blur p-4 shadow-lg sm:p-6">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-foreground">
          <p className="font-medium">Táto stránka používa cookies</p>
          <p className="mt-1 text-muted">
            Používame cookies na zlepšenie funkčnosti stránky a analýzu
            návštevnosti. Podrobnosti nájdete v{" "}
            <a href="#gdpr" className="text-accent underline">
              zásadách ochrany osobných údajov
            </a>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={decline}
            className="rounded-lg border border-card-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary-light hover:text-foreground"
          >
            Odmietnuť
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-primary-dark transition-colors hover:bg-accent-dark"
          >
            Súhlasím
          </button>
        </div>
      </div>
    </div>
  );
}
