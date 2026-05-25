"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const linkDesktop = "text-sm font-medium text-white/85 transition hover:text-white";

  const linkMobile =
    "flex min-h-12 items-center rounded-md px-3 text-base font-semibold text-white/90 hover:bg-white/10 hover:text-white";

  const navSurface = "border-b border-white/10 bg-ink text-white shadow-sm";

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        aria-label="Primary"
        className={`transition-[background-color,box-shadow,border-color,backdrop-filter] duration-200 ${navSurface}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:py-4">
          <Link
            href="/"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/hope-football.png"
              alt="Hope Football"
              width={1426}
              height={1103}
              priority
              className="h-12 w-auto md:h-14"
              sizes="(min-width: 768px) 178px, 153px"
            />
          </Link>

          <div className="hidden shrink-0 items-center gap-8 md:flex">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={linkDesktop}>
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="inline-flex min-h-11 items-center rounded-2xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:bg-accent-muted"
            >
              Donate
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <Link
              href="/donate"
              className="inline-flex min-h-11 items-center rounded-2xl bg-accent px-4 py-2.5 text-sm font-semibold text-white"
            >
              Donate
            </Link>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/25 bg-white/10 text-white"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {open ? (
          <div
            id="mobile-menu"
            className="border-t border-white/10 bg-ink px-4 py-4 shadow-lg md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 sm:px-2">
              <Link href="/" className={linkMobile} onClick={closeMenu}>
                Home
              </Link>
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className={linkMobile} onClick={closeMenu}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
