export type Team = {
  slug: string;
  name: string;
  country: string;
  flag: string;
  shortDescription: string;
  /** Full URL for next/image remote */
  imageSrc: string;
  imageAlt: string;
};

export const TEAMS: Team[] = [
  {
    slug: "ambassadors-fc",
    name: "Ambassadors FC",
    country: "Northern Ireland",
    flag: "🇬🇧",
    shortDescription:
      "Grassroots sessions and mentoring in Belfast and beyond—building confidence on and off the pitch.",
    imageSrc:
      "https://images.unsplash.com/photo-1489944440615-453fc2b6cfe9?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Players celebrating together on a football pitch at dusk",
  },
  {
    slug: "yakaar-fc",
    name: "Yakaar FC",
    country: "Senegal",
    flag: "🇸🇳",
    shortDescription:
      "Training, kit, and safe pitches for young players—hope through structure, coaching, and community.",
    imageSrc:
      "https://images.unsplash.com/photo-1575367099403-cf6f8c01fcf5?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Young footballers running on a sunny training pitch",
  },
  {
    slug: "elikia-fc",
    name: "Elikia FC",
    country: "Republic of the Congo",
    flag: "🇨🇩",
    shortDescription:
      "Local leaders and coaches backed by the foundation—pathways to play, learn, and belong.",
    imageSrc:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Close-up of a football on grass with teammates in the background",
  },
];

export function getTeamBySlug(slug: string): Team | undefined {
  return TEAMS.find((t) => t.slug === slug);
}
