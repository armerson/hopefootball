"use client";

import { usePathname } from "next/navigation";

/**
 * Inner pages need top padding under the fixed navbar (taller on mobile when nav stacks).
 * Home hero stays full-bleed under the transparent bar.
 */
/** Routes whose first section is a full-viewport hero under the fixed nav (no outer top padding). */
const FULL_BLEED_HERO = new Set(["/", "/about"]);

export function SiteMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const topPad = FULL_BLEED_HERO.has(pathname) ? "" : "pt-28 md:pt-16";

  return <div className={`flex-1 ${topPad}`}>{children}</div>;
}
