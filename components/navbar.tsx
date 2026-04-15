"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Transparent over the home hero; solid white bar after scroll (or on every other route).
 * Mobile: stacked row, full-width links and Donate (≥48px tap targets).
 */
export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const solid = !isHome || scrolled;

  const linkBase =
    "flex min-h-12 w-full items-center justify-center rounded-xl px-4 text-sm font-semibold transition active:opacity-90 md:w-auto md:min-h-11 md:rounded-none md:px-3 md:py-2";

  const linkGhost = solid
    ? `${linkBase} text-slate-800 hover:bg-slate-100 md:hover:bg-transparent md:hover:text-accent`
    : `${linkBase} text-white hover:bg-white/10 md:hover:bg-transparent md:hover:text-white`;

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        solid
          ? "border-b border-slate-200/80 bg-white/95 text-slate-900 shadow-sm backdrop-blur-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:gap-4 md:px-6 md:py-4">
        <Link
          href="/"
          className="flex min-h-12 shrink-0 items-center text-lg font-bold leading-tight md:min-h-0"
        >
          Hope Football
        </Link>

        <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-x-2 md:gap-y-2">
          <Link href="/clubs" className={linkGhost}>
            Clubs
          </Link>
          <Link href="/stories" className={linkGhost}>
            Stories
          </Link>
          <Link href="/#contact" className={linkGhost}>
            Contact
          </Link>
          <Link
            href="/#donate"
            className="flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95 active:opacity-90 md:w-auto md:px-5 md:py-2"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}
