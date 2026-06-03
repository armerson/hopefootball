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
    name: "Yakaar Football Club",
    country: "Senegal",
    flag: "🇸🇳",
    shortDescription:
      "Yakaar Football Club exists to provide young people in Senegal with opportunities to grow through football, leadership, education, and community.",
    imageSrc: "/images/yakaar-hero.jpeg",
    imageAlt: "Yakaar FC players and coaches together in Senegal",
  },
  {
    slug: "elikia-fc",
    name: "Elikia Football Club",
    country: "Republic of Congo",
    flag: "🇨🇬",
    shortDescription:
      "Elikia Football Club exists to serve young people and communities in the Republic of Congo through football, leadership development, and community engagement.",
    imageSrc: "/images/yakaar-celebration.jpeg",
    imageAlt: "Young players celebrating during a football session",
  },
];

export function getTeamBySlug(slug: string): Team | undefined {
  return TEAMS.find((t) => t.slug === slug);
}
