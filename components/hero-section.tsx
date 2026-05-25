import Image from "next/image";
import Link from "next/link";

function HeroCtaLink({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary";
}) {
  const isExternal = href.startsWith("mailto:") || href.startsWith("tel:");
  const primaryCls =
    "inline-flex min-h-12 items-center justify-center rounded-md bg-white px-8 py-3.5 text-center text-sm font-semibold text-ink shadow-lg shadow-black/20 transition hover:bg-white/90 active:scale-[0.99] sm:min-h-14 sm:px-10 sm:text-base";
  const secondaryCls =
    "inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 bg-white/5 px-8 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/10 sm:min-h-14 sm:px-10 sm:text-base";
  const className = variant === "primary" ? primaryCls : secondaryCls;
  if (isExternal) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

type HeroSectionProps = {
  title: string;
  /** Optional second line in accent colour */
  titleAccent?: string | null;
  tagline?: string;
  subtitle?: string;
  /** Remote or local URL; omit or `null` for gradient-only hero */
  imageSrc?: string | null;
  /** Alt text when `imageSrc` is set */
  imageAlt?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

/**
 * Full-viewport hero — bold type, image or gradient fallback, primary CTA (default: Give Hope).
 */
export function HeroSection({
  title,
  titleAccent,
  tagline = "Football. Hope. Community.",
  subtitle,
  imageSrc,
  imageAlt,
  primaryCta = { href: "/donate", label: "Give Hope" },
  secondaryCta = { href: "/about", label: "Our story" },
}: HeroSectionProps) {
  const accent = titleAccent?.trim();
  const hasImage = Boolean(imageSrc);
  const alt = imageAlt?.trim() || title;

  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-[100dvh] min-h-[32rem] items-end justify-center overflow-hidden bg-ink pb-16 pt-28 text-white md:items-center md:pb-24 md:pt-20"
    >
      {hasImage ? (
        <div className="absolute inset-0">
          <Image
            src={imageSrc as string}
            alt={alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-ink via-slate-900 to-accent"
          aria-hidden
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" aria-hidden />
      <div className="absolute right-0 top-24 hidden h-24 w-[28rem] -skew-x-12 bg-accent/80 opacity-90 lg:block" aria-hidden />
      <div className="absolute right-20 top-56 hidden h-20 w-[22rem] -skew-x-12 bg-accent/70 opacity-80 lg:block" aria-hidden />
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-accent" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 md:text-sm">
          {tagline}
        </p>
        <h1 className="block max-w-4xl break-words text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {accent ? (
            <>
              {title}
              {title.trim().length > 0 ? " " : null}
              <span className="text-accent">{accent}</span>
            </>
          ) : (
            title
          )}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{subtitle}</p>
        ) : null}
        <div className="mt-10 flex w-full max-w-lg flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
          <HeroCtaLink
            href={primaryCta.href}
            label={primaryCta.label}
            variant="primary"
          />
          <HeroCtaLink
            href={secondaryCta.href}
            label={secondaryCta.label}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}
