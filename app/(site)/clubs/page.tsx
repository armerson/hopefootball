import { ClubCard } from "@/components/club-card";
import { sanityFetch } from "@/lib/sanity.fetch";
import { getClubs } from "@/lib/sanity.queries";
import type { ClubDocument } from "@/lib/sanity.types";

export const revalidate = 60;

export default async function ClubsPage() {
  const clubs = await sanityFetch<ClubDocument[] | null>(getClubs);

  return (
    <main className="bg-white">
      <div className="border-b border-slate-100 bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Clubs
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Hope Football partner clubs—each page pulls name, country, image, and description
            from Sanity.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {(clubs ?? []).map((club) => (
            <li key={club._id}>
              <ClubCard club={club} />
            </li>
          ))}
        </ul>
        {!clubs?.length ? (
          <p className="text-center text-slate-600">No clubs published yet.</p>
        ) : null}
      </div>
    </main>
  );
}
