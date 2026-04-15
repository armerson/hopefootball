import Image from "next/image";
import Link from "next/link";

type HeroSectionProps = {
  title: string;
  tagline?: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

/**
 * Full-viewport hero — bold type, strong image, primary CTA (default: Give Hope).
 */
export function HeroSection({
  title,
  tagline = "Football. Hope. Community.",
  subtitle,
  imageSrc,
  imageAlt,
  primaryCta = { href: "/donate", label: "Give Hope" },
  secondaryCta = { href: "/teams", label: "See the teams" },
}: HeroSectionProps) {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-[100dvh] min-h-[32rem] items-end justify-center overflow-hidden bg-ink pb-16 pt-28 text-white md:items-center md:pb-24 md:pt-20"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 md:text-sm">
          {tagline}
        </p>
        <h1 className="block max-w-4xl break-words text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{subtitle}</p>
        ) : null}
        <div className="mt-10 flex w-full max-w-lg flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href={primaryCta.href}
            className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-8 py-3.5 text-center text-sm font-semibold text-ink transition hover:bg-white/90 active:scale-[0.99] sm:min-h-14 sm:px-10 sm:text-base"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/40 bg-white/5 px-8 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/10 sm:min-h-14 sm:px-10 sm:text-base"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
