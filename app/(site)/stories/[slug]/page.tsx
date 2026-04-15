import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableTextBody } from "@/components/portable-text-body";
import { sanityFetch } from "@/lib/sanity.fetch";
import { getStories, getStoryBySlug } from "@/lib/sanity.queries";
import type { StoryDocument } from "@/lib/sanity.types";
import { urlFor } from "@/lib/sanity.image";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const stories = await sanityFetch<StoryDocument[] | null>(getStories);
  return (stories ?? [])
    .map((s) => s.slug?.current)
    .filter(Boolean)
    .map((slug) => ({ slug: slug as string }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const story = await sanityFetch<StoryDocument | null>(getStoryBySlug, { slug });
  if (!story?.title) return { title: "Story" };
  return { title: story.title, description: story.excerpt ?? undefined };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = await sanityFetch<StoryDocument | null>(getStoryBySlug, { slug });

  if (!story?.title || !story.slug?.current) notFound();

  const src = story.image ? urlFor(story.image)?.width(1600).height(900).fit("crop").url() : null;
  const alt =
    (story.image && "alt" in story.image && typeof (story.image as { alt?: string }).alt === "string"
      ? (story.image as { alt?: string }).alt
      : undefined) || story.title;

  return (
    <main className="bg-white pb-24">
      <div className="relative aspect-[21/9] max-h-[min(48vh,480px)] w-full bg-slate-100">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : null}
      </div>
      <article className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 sm:pt-16">
        {story.country ? (
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            {story.country}
          </p>
        ) : null}
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {story.title}
        </h1>
        {story.excerpt ? (
          <p className="mt-6 text-xl leading-relaxed text-slate-600">{story.excerpt}</p>
        ) : null}
        <div className="mt-12">
          <PortableTextBody value={story.content ?? null} />
        </div>
      </article>
    </main>
  );
}
