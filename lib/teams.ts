export type Team = {
  /** URL segment under `/teams/[slug]` */
  slug: string;
  /**
   * Sanity `slug.current` when it differs from `slug` (e.g. URL `ambassadors-fc` vs Studio `ambassadors-fcni`).
   * Omit when they match.
   */
  cmsSlug?: string;
  name: string;
  country: string;
  flag: string;
  shortDescription: string;
  /** Fallback when the club has no image in Sanity */
  imageSrc: string;
  imageAlt: string;
};

export const TEAMS: Team[] = [
  {
    slug: "yakaar-fc",
    name: "Yakaar FC",
    country: "Senegal",
    flag: "🇸🇳",
    shortDescription:
      "Training, kit, and safe pitches for young players—hope through structure, coaching, and community.",
    imageSrc:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Young footballers running on a sunny training pitch",
  },
];

export function getTeamBySlug(slug: string): Team | undefined {
  return TEAMS.find((t) => t.slug === slug);
}
