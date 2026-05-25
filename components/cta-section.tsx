import Link from "next/link";

type CTASectionProps = {
  id?: string;
  headline: string;
  body?: string;
  ctaHref?: string;
  ctaLabel?: string;
  /** Optional second action (e.g. mailto sponsor) */
  secondaryCta?: { href: string; label: string };
};

export function CTASection({
  id = "donate-cta",
  headline,
  body,
  ctaHref = "/donate",
  ctaLabel = "Give Hope",
  secondaryCta,
}: CTASectionProps) {
  const secondaryOutline =
    "inline-flex min-h-14 items-center justify-center rounded-md border border-white/50 bg-transparent px-10 py-4 text-base font-semibold text-white transition hover:bg-white/10 active:scale-[0.99]";

  return (
    <section
      id={id}
      className="relative scroll-mt-24 overflow-hidden border-y border-black/5 bg-ink py-20 text-white sm:py-24"
      aria-labelledby={`${id}-heading`}
    >
      <div className="absolute -right-24 top-10 h-16 w-96 -skew-x-12 bg-accent/80" aria-hidden />
      <div className="absolute -left-28 bottom-10 h-10 w-80 -skew-x-12 bg-white/10" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-muted">
          Join the work
        </p>
        <h2
          id={`${id}-heading`}
          className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          {headline}
        </h2>
        {body ? <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{body}</p> : null}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href={ctaHref}
            className="inline-flex min-h-14 w-full items-center justify-center rounded-md bg-accent px-10 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-muted active:scale-[0.99] sm:w-auto"
          >
            {ctaLabel}
          </Link>
          {secondaryCta ? (
            secondaryCta.href.startsWith("mailto:") || secondaryCta.href.startsWith("tel:") ? (
              <a href={secondaryCta.href} className={`${secondaryOutline} w-full sm:w-auto`}>
                {secondaryCta.label}
              </a>
            ) : (
              <Link href={secondaryCta.href} className={`${secondaryOutline} w-full sm:w-auto`}>
                {secondaryCta.label}
              </Link>
            )
          ) : null}
        </div>
      </div>
    </section>
  );
}
