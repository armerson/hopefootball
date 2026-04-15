import Link from "next/link";

type CTASectionProps = {
  id?: string;
  headline: string;
  body?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function CTASection({
  id = "donate-cta",
  headline,
  body,
  ctaHref = "/donate",
  ctaLabel = "Give Hope",
}: CTASectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-y border-black/5 bg-ink py-20 text-white sm:py-24"
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2
          id={`${id}-heading`}
          className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          {headline}
        </h2>
        {body ? <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 sm:text-lg">{body}</p> : null}
        <Link
          href={ctaHref}
          className="mt-10 inline-flex min-h-14 items-center justify-center rounded-2xl bg-accent px-10 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-sky-400 active:scale-[0.99]"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
