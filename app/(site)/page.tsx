import Image from "next/image";
import Link from "next/link";
import { DonateSection } from "@/components/donate-section";
import { Hero } from "@/components/hero";
import { SectionBlock } from "@/components/section-block";
import { sanityFetch } from "@/lib/sanity.fetch";
import {
  getClubs,
  getHomepage,
} from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import type { ClubDocument, HomepageDocument } from "@/lib/sanity.types";

export const revalidate = 60;

export default async function HomePage() {
  const homepage = await sanityFetch<HomepageDocument | null>(getHomepage);
  const clubs = await sanityFetch<ClubDocument[] | null>(getClubs);

  const title =
    homepage?.heroTitle?.trim() || "Football that changes lives";
  const subtitle =
    homepage?.heroSubtitle?.trim() ||
    "Building character, community, and opportunity for young people across Northern Ireland and the world.";

  return (
    <>
      <Hero title={title} subtitle={subtitle} image={homepage?.heroImage ?? null} />

      <section className="bg-gray-50 px-4 py-20 text-center sm:px-6 sm:py-16">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Why it matters</h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          Across the communities we serve, young people face challenges that go beyond football.
          Through coaching and mentoring, we create safe spaces where they can grow, belong, and
          build a better future.
        </p>
      </section>

      {homepage?.sections?.map((section) => (
        <SectionBlock
          key={section._key ?? section.title}
          title={section.title ?? ""}
          content={section.content}
        />
      ))}

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Our clubs
              </h2>
              <p className="mt-2 max-w-xl text-base text-slate-600 sm:text-lg">
                Partner programmes backed by the foundation—ordered for display in Sanity.
              </p>
            </div>
            <Link
              href="/clubs"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-50 px-4 text-sm font-semibold text-blue-800 ring-1 ring-blue-200/80 transition hover:bg-blue-100 sm:w-auto sm:shrink-0 sm:px-5"
            >
              View all clubs →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
            {(clubs ?? []).slice(0, 6).map((club) => {
              const imageUrl = club.image
                ? urlFor(club.image)?.width(900).height(560).fit("crop").url()
                : null;
              const href = club.slug?.current
                ? `/clubs/${club.slug.current}`
                : "/clubs";
              const alt =
                (club.image &&
                  "alt" in club.image &&
                  typeof (club.image as { alt?: string }).alt === "string" &&
                  (club.image as { alt?: string }).alt) ||
                club.name ||
                "";

              return (
                <Link
                  key={club._id}
                  href={href}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
                >
                  {imageUrl ? (
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={alt}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="flex h-56 w-full items-center justify-center bg-gray-100 text-sm text-gray-400">
                      No photo
                    </div>
                  )}

                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900">{club.name}</h3>
                    <p className="text-sm text-gray-500">{club.country}</p>

                    <p className="mt-3 line-clamp-3 text-sm text-gray-600">{club.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          {!clubs?.length ? (
            <p className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600">
              No clubs in Sanity yet. Add documents in the{" "}
              <Link href="/studio" className="font-medium text-blue-700 underline">
                CMS
              </Link>{" "}
              and set <code className="rounded bg-slate-100 px-1">NEXT_PUBLIC_SANITY_PROJECT_ID</code>{" "}
              in <code className="rounded bg-slate-100 px-1">.env.local</code>.
            </p>
          ) : null}
        </div>
      </section>

      <section className="bg-primary px-4 py-20 text-center text-white sm:px-6 sm:py-24">
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">More than football</h2>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
          We create safe spaces where young people can grow in confidence, build friendships, and
          discover new opportunities.
        </p>
      </section>

      <DonateSection />
    </>
  );
}
