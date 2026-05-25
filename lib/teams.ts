export type Team = {
  /** URL segment under `/teams/[slug]` */
  slug: string;
  name: string;
  country: string;
  flag: string;
  shortDescription: string;
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
    imageSrc: "/images/yakaar-hero.jpeg",
    imageAlt: "Yakaar FC players and coaches together in Senegal",
  },
];

export function getTeamBySlug(slug: string): Team | undefined {
  return TEAMS.find((t) => t.slug === slug);
}
