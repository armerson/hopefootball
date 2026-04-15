"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/teams", label: "Teams" },
  { href: "/#contact", label: "Contact" },
] as const;

/**
 * Sticky navbar — transparent over home hero; solid elsewhere. Mobile sheet menu.
 */
export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const solid = !isHome || scrolled;
  const closeMenu = () => setOpen(false);

  const linkDesktop = solid
    ? "text-sm font-medium text-neutral-800 transition hover:text-accent"
    : "text-sm font-medium text-white/90 transition hover:text-white";

  const linkMobile =
    "flex min-h-12 items-center rounded-xl px-3 text-base font-semibold text-ink hover:bg-neutral-100";

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        aria-label="Primary"
        className={`transition-all duration-300 ${
          solid
            ? "border-b border-black/5 bg-white/95 text-ink shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:py-4">
          <Link
            href="/"
            className={`text-lg font-semibold tracking-tight ${solid ? "text-ink" : "text-white"}`}
          >
            Hope Football
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={linkDesktop}>
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="inline-flex min-h-11 items-center rounded-2xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:bg-sky-500"
            >
              Donate
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/donate"
              className="inline-flex min-h-11 items-center rounded-2xl bg-accent px-4 py-2.5 text-sm font-semibold text-white"
            >
              Donate
            </Link>
            <button
              type="button"
              className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border ${
                solid ? "border-neutral-200 bg-white text-ink" : "border-white/30 bg-white/10 text-white"
              }`}
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
            className="border-t border-black/5 bg-white px-4 py-4 shadow-lg md:hidden"
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
