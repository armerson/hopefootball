import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity.image";
import type { ClubDocument } from "@/lib/sanity.types";

type ClubCardProps = {
  club: ClubDocument;
};

export function ClubCard({ club }: ClubCardProps) {
  const slug = club.slug?.current;
  const href = slug ? `/clubs/${slug}` : "#";
  const src = club.image ? urlFor(club.image)?.width(900).height(600).fit("crop").url() : null;
  const alt =
    (club.image && "alt" in club.image && typeof (club.image as { alt?: string }).alt === "string"
      ? (club.image as { alt?: string }).alt
      : undefined) || club.name || "Club";

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={href} className="relative aspect-[3/2] w-full overflow-hidden bg-slate-100">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 text-slate-400">
            Photo coming soon
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {club.country ? (
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            {club.country}
          </p>
        ) : null}
        <h3 className="mt-2 text-xl font-semibold text-slate-900">
          <Link href={href} className="hover:text-blue-700">
            {club.name}
          </Link>
        </h3>
        {club.description ? (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
            {club.description}
          </p>
        ) : null}
        <Link
          href={href}
          className="mt-6 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
