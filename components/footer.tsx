import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Hope Football Foundation</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
              Bringing Hope through Football — a Northern Ireland charity supporting young
              people and partner clubs.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2"
          >
            <Link
              href="/clubs"
              className="flex min-h-12 items-center rounded-lg px-2 text-base font-medium text-slate-700 hover:bg-slate-200/80 hover:text-blue-800 sm:min-h-0 sm:px-0 sm:text-sm sm:hover:bg-transparent"
            >
              Clubs
            </Link>
            <Link
              href="/stories"
              className="flex min-h-12 items-center rounded-lg px-2 text-base font-medium text-slate-700 hover:bg-slate-200/80 hover:text-blue-800 sm:min-h-0 sm:px-0 sm:text-sm sm:hover:bg-transparent"
            >
              Stories
            </Link>
            <a
              href="mailto:hello@hopefootball.org"
              className="flex min-h-12 items-center rounded-lg px-2 text-base font-medium text-slate-700 hover:bg-slate-200/80 hover:text-blue-800 sm:min-h-0 sm:px-0 sm:text-sm sm:hover:bg-transparent"
            >
              Contact
            </a>
          </nav>
        </div>
        <p className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Hope Football Foundation
        </p>
      </div>
    </footer>
  );
}
