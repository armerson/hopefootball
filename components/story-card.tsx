import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity.image";
import type { StoryDocument } from "@/lib/sanity.types";

type StoryCardProps = {
  story: StoryDocument;
};

export function StoryCard({ story }: StoryCardProps) {
  const slug = story.slug?.current;
  const href = slug ? `/stories/${slug}` : "#";
  const src = story.image ? urlFor(story.image)?.width(800).height(520).fit("crop").url() : null;
  const alt =
    (story.image && "alt" in story.image && typeof (story.image as { alt?: string }).alt === "string"
      ? (story.image as { alt?: string }).alt
      : undefined) || story.title || "Story";

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md md:flex-row">
      <Link
        href={href}
        className="relative aspect-[16/10] w-full shrink-0 bg-slate-100 md:aspect-auto md:w-[42%] md:min-h-[220px]"
      >
        {src ? (
          <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
        ) : (
          <div className="flex h-full min-h-[200px] items-center justify-center bg-slate-100 text-slate-400">
            No image
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
        {story.country ? (
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            {story.country}
          </span>
        ) : null}
        <h2 className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">
          <Link href={href} className="hover:text-blue-700">
            {story.title}
          </Link>
        </h2>
        {story.excerpt ? (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {story.excerpt}
          </p>
        ) : null}
        <Link href={href} className="mt-4 text-sm font-semibold text-blue-700 hover:text-blue-800">
          Continue reading →
        </Link>
      </div>
    </article>
  );
}
