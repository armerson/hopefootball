import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TEAMS, getTeamBySlug } from "@/lib/teams";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TEAMS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const team = getTeamBySlug(slug);
  if (!team) return { title: "Team" };
  return {
    title: team.name,
    description: team.shortDescription,
  };
}

export default async function TeamDetailPage({ params }: Props) {
  const { slug } = await params;
  const team = getTeamBySlug(slug);
  if (!team) notFound();

  return (
    <main className="bg-white">
      <div className="relative h-[min(70vh,36rem)] min-h-[20rem] w-full">
        <Image
          src={team.imageSrc}
          alt={team.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-12 sm:px-6">
          <Link
            href="/teams"
            className="inline-flex text-sm font-medium text-white/90 underline-offset-4 hover:text-white hover:underline"
          >
            ← All teams
          </Link>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-white/80">
            {team.flag} {team.country}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            {team.name}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-lg leading-relaxed text-neutral-700">{team.shortDescription}</p>
        <p className="mt-8 text-neutral-600">
          Full club story, gallery, and programme timeline will live here—placeholder for the next
          release. In the meantime, your support keeps sessions on the calendar.
        </p>
        <Link
          href="/donate"
          className="mt-10 inline-flex min-h-12 items-center rounded-2xl bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
        >
          Fund this team
        </Link>
      </div>
    </main>
  );
}
