import Image from "next/image";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/lib/sanity.fetch";
import { getClubBySlug, getClubSlugs } from "@/lib/sanity.queries";
import type { ClubDocument } from "@/lib/sanity.types";
import { urlFor } from "@/lib/sanity.image";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[] | null>(getClubSlugs);
  return (slugs ?? []).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const club = await sanityFetch<ClubDocument | null>(getClubBySlug, { slug });
  if (!club?.name) return { title: "Club" };
  return { title: club.name, description: club.description ?? undefined };
}

/**
 * Club detail. When `isSensitive` is true (e.g. Senegal), we keep the layout strictly neutral:
 * no optional faith-oriented blocks—only the fields defined in the CMS schema.
 */
export default async function ClubPage({ params }: Props) {
  const { slug } = await params;
  const club = await sanityFetch<ClubDocument | null>(getClubBySlug, { slug });

  if (!club?.name || !club.slug?.current) notFound();

  const src = club.image ? urlFor(club.image)?.width(1600).height(900).fit("crop").url() : null;
  const alt =
    (club.image && "alt" in club.image && typeof (club.image as { alt?: string }).alt === "string"
      ? (club.image as { alt?: string }).alt
      : undefined) || club.name;

  const sensitive = Boolean(club.isSensitive);

  return (
    <main className="bg-white pb-20">
      <div className="relative aspect-[21/9] max-h-[min(52vh,520px)] w-full bg-slate-100">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <div className="flex h-full min-h-[240px] items-center justify-center bg-gradient-to-br from-blue-100 to-white text-slate-400">
            No image
          </div>
        )}
      </div>

      <article className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 sm:pt-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          {club.country}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {club.name}
        </h1>

        {sensitive ? (
          <p className="mt-6 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            This programme page uses neutral, inclusive language suitable for all audiences
            and partner contexts.
          </p>
        ) : null}

        {club.description ? (
          <p className="mt-8 whitespace-pre-wrap text-lg leading-relaxed text-slate-700">
            {club.description}
          </p>
        ) : (
          <p className="mt-8 text-slate-500">More detail coming soon.</p>
        )}
      </article>
    </main>
  );
}
