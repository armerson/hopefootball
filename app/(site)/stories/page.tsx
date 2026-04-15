import { StoryCard } from "@/components/story-card";
import { sanityFetch } from "@/lib/sanity.fetch";
import { getStories } from "@/lib/sanity.queries";
import type { StoryDocument } from "@/lib/sanity.types";

export const revalidate = 60;

export default async function StoriesPage() {
  const stories = await sanityFetch<StoryDocument[] | null>(getStories);

  return (
    <main className="bg-white">
      <div className="border-b border-slate-100 bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Stories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            News and impact from the foundation and our clubs.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-16 sm:px-6 sm:py-20">
        {(stories ?? []).map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
        {!stories?.length ? (
          <p className="text-center text-slate-600">No stories published yet.</p>
        ) : null}
      </div>
    </main>
  );
}
