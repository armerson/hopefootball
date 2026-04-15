import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TEAMS } from "@/lib/teams";

export const metadata = {
  title: "Teams",
  description:
    "Partner clubs of Hope Football Foundation — Ambassadors FC (Northern Ireland), Yakaar FC (Senegal), Elikia FC (Republic of the Congo).",
};

export default function TeamsPage() {
  return (
    <main className="bg-white">
      <div className="border-b border-black/5 bg-neutral-50 pt-28 pb-16 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Teams</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
            Clubs we stand behind.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-600">
            Each partner is locally led. We fund kit, coaching, pitches, and pathways—so young people
            can thrive where they live.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <ul className="grid gap-10 md:grid-cols-3" role="list">
          {TEAMS.map((team) => (
            <li key={team.slug}>
              <ScrollReveal>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-soft">
                  <Link href={`/teams/${team.slug}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={team.imageSrc}
                        alt={team.imageAlt}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur-sm">
                        {team.flag} {team.country}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">{team.name}</h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
                        {team.shortDescription}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition group-hover:gap-2">
                        Team page
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
