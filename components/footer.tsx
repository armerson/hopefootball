import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-black/5 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold tracking-tight">Hope Football Foundation</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              Football. Hope. Community. We back partner clubs so young people can play, grow, and lead
              with dignity—Northern Ireland, Senegal, and the Republic of the Congo.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Explore</p>
            <nav aria-label="Footer" className="mt-4 flex flex-col gap-2">
              <Link href="/about" className="text-sm font-medium text-white/85 hover:text-accent">
                About
              </Link>
              <Link href="/teams" className="text-sm font-medium text-white/85 hover:text-accent">
                Teams
              </Link>
              <Link href="/donate" className="text-sm font-medium text-white/85 hover:text-accent">
                Donate
              </Link>
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Contact</p>
            <a
              href="mailto:hello@hopefootball.org"
              className="mt-4 block text-sm font-medium text-accent hover:text-accent-muted"
            >
              hello@hopefootball.org
            </a>
            <p className="mt-6 text-xs leading-relaxed text-white/45">
              Northern Ireland–based charity supporting international partner programmes.
            </p>
          </div>
        </div>
        <p className="mt-14 border-t border-white/10 pt-8 text-xs text-white/45">
          © {new Date().getFullYear()} Hope Football Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
