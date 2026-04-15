import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity.image";
import type { SanityImage } from "@/lib/sanity.types";

type HeroProps = {
  /** Used for image `alt` text when a CMS hero image is set. */
  title: string;
  subtitle?: string | null;
  image?: SanityImage | null;
};

/**
 * Flagship full-screen hero. Uses Sanity `heroImage` when set; otherwise a brand gradient
 * (avoids 404s when `public/images/hero.jpg` is not present yet).
 */
export function Hero({ title, subtitle, image }: HeroProps) {
  const sanitySrc = image ? urlFor(image)?.width(2400).height(1400).fit("crop").url() : null;
  const alt =
    (image && "alt" in image && typeof (image as { alt?: string }).alt === "string"
      ? (image as { alt?: string }).alt
      : undefined) || title;

  const lead =
    subtitle?.trim() ||
    "Building character, community, and opportunity for young people across Northern Ireland and the world.";

  return (
    <section className="relative flex h-screen min-h-[32rem] items-center justify-center text-white">
      {sanitySrc ? (
        <Image
          src={sanitySrc}
          alt={alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary via-slate-900 to-accent"
          aria-hidden
        />
      )}

      <div className="absolute inset-0 bg-black/60" aria-hidden />

      <div className="relative z-10 max-w-4xl px-6 pt-24 text-center sm:pt-20">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
          Football that <span className="text-accent">changes lives</span>
        </h1>

        <p className="mb-8 text-base text-gray-200 sm:text-lg md:text-xl">{lead}</p>

        <div className="flex w-full max-w-lg flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <Link
            href="/clubs"
            className="flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-8 py-4 text-center text-base font-semibold text-white transition hover:opacity-95 active:opacity-90 sm:w-auto sm:min-h-[3rem] sm:hover:scale-105"
          >
            Explore Our Clubs
          </Link>
          <Link
            href="/#donate"
            className="flex min-h-12 w-full items-center justify-center rounded-full border-2 border-white px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-white hover:text-slate-900 active:opacity-90 sm:w-auto sm:min-h-[3rem]"
          >
            Support the Work
          </Link>
        </div>
      </div>
    </section>
  );
}
