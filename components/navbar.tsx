"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useLayoutEffect, useEffect, useState } from "react";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/teams", label: "Teams" },
  { href: "/cycle-for-hope", label: "Cycle for Hope" },
  { href: "/#contact", label: "Contact" },
] as const;

/** Become solid after scrolling past hero header */
const ELEVATE_AT = 48;
/** Stay solid until well back at top — stops flicker when rubber-banding or hovering around the threshold */
const DE_ELEVATE_AT = 12;

function computeElevated(prev: boolean, scrollY: number): boolean {
  if (scrollY >= ELEVATE_AT) return true;
  if (scrollY <= DE_ELEVATE_AT) return false;
  return prev;
}

function initialElevated(scrollY: number): boolean {
  if (scrollY >= ELEVATE_AT) return true;
  if (scrollY <= DE_ELEVATE_AT) return false;
  return scrollY > (ELEVATE_AT + DE_ELEVATE_AT) / 2;
}

/**
 * Sticky navbar — on home: glass bar over hero at top, solid bar when scrolled.
 * Hysteresis avoids solid/transparent flicker when scrolling back to the top.
 */
export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);

  const syncScroll = useCallback(() => {
    if (!isHome) return;
    setElevated((prev) => computeElevated(prev, window.scrollY));
  }, [isHome]);

  useLayoutEffect(() => {
    if (!isHome) return;
    queueMicrotask(() => setElevated(initialElevated(window.scrollY)));
    const onScroll = () => syncScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, syncScroll]);

  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted && isHome) setElevated(initialElevated(window.scrollY));
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, [isHome]);

  const solidBar = !isHome || elevated;
  const closeMenu = () => setOpen(false);

  const linkDesktop = solidBar
    ? "text-sm font-medium text-neutral-800 transition hover:text-accent"
    : "text-sm font-medium text-white/95 transition hover:text-white";

  const linkMobile =
    "flex min-h-12 items-center rounded-xl px-3 text-base font-semibold text-ink hover:bg-neutral-100";

  const navSurface = solidBar
    ? "border-b border-black/5 bg-white/95 text-ink shadow-sm backdrop-blur-md"
    : "border-b border-white/10 bg-black/35 text-white shadow-sm backdrop-blur-md";

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        aria-label="Primary"
        className={`transition-[background-color,box-shadow,border-color,backdrop-filter] duration-200 ${navSurface}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:py-4">
          <Link
            href="/"
            className={`shrink-0 text-lg font-semibold tracking-tight ${
              solidBar ? "text-ink" : "text-white"
            }`}
          >
            Hope Football
          </Link>

          <div className="hidden shrink-0 items-center gap-8 md:flex">
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

          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <Link
              href="/donate"
              className="inline-flex min-h-11 items-center rounded-2xl bg-accent px-4 py-2.5 text-sm font-semibold text-white"
            >
              Donate
            </Link>
            <button
              type="button"
              className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border ${
                solidBar ? "border-neutral-200 bg-white text-ink" : "border-white/40 bg-white/15 text-white"
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
