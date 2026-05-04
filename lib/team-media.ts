import { sanityFetch } from "@/lib/sanity.fetch";
import { getClubBySlug } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import type { ClubDocument } from "@/lib/sanity.types";
import type { Team } from "@/lib/teams";

export function indexClubsBySlug(
  clubs: ClubDocument[] | null | undefined,
): Map<string, ClubDocument> {
  const map = new Map<string, ClubDocument>();
  if (!clubs) return map;
  for (const club of clubs) {
    const s = club.slug?.current?.trim();
    if (s) map.set(s, club);
  }
  return map;
}

/** Match a Sanity club to a route config row (tries `cmsSlug` when Studio slug ≠ URL slug). */
export function clubForTeam(
  team: Team,
  bySlug: Map<string, ClubDocument>,
): ClubDocument | undefined {
  const keys = [team.cmsSlug, team.slug].filter((k): k is string => Boolean(k?.trim()));
  const seen = new Set<string>();
  for (const k of keys) {
    if (seen.has(k)) continue;
    seen.add(k);
    const c = bySlug.get(k);
    if (c) return c;
  }
  return undefined;
}

type ImageSize = "card" | "hero";

function clubImageUrl(club: ClubDocument, size: ImageSize): string | null {
  if (!club.image) return null;
  const w = size === "hero" ? 2400 : 1600;
  const h = size === "hero" ? 1400 : 1200;
  return urlFor(club.image)?.width(w).height(h).fit("crop").auto("format").url() ?? null;
}

function clubImageAlt(club: ClubDocument, team: Team): string {
  const fromField =
    club.image &&
    "alt" in club.image &&
    typeof (club.image as { alt?: string }).alt === "string"
      ? (club.image as { alt?: string }).alt?.trim()
      : "";
  if (fromField) return fromField;
  const label = club.name?.trim() || team.name;
  const place = club.country?.trim() || team.country;
  return `${label} — ${place}`;
}

/** Prefer CMS image; otherwise static `TEAMS` Unsplash fallback. */
export function resolveTeamImage(
  team: Team,
  club: ClubDocument | undefined,
  size: ImageSize,
): { imageSrc: string; imageAlt: string } {
  if (club) {
    const url = clubImageUrl(club, size);
    if (url) return { imageSrc: url, imageAlt: clubImageAlt(club, team) };
  }
  return { imageSrc: team.imageSrc, imageAlt: team.imageAlt };
}

/** Resolve a club document from Sanity using URL slug and optional `cmsSlug`. */
export async function fetchClubForTeam(team: Team): Promise<ClubDocument | null> {
  const keys = [...new Set([team.cmsSlug, team.slug].filter((k): k is string => Boolean(k?.trim())))];
  for (const slug of keys) {
    const club = await sanityFetch<ClubDocument | null>(getClubBySlug, { slug });
    if (club) return club;
  }
  return null;
}
