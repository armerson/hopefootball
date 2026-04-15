import { defineQuery } from "next-sanity";

/** Singleton-style homepage: first (or only) homepage document */
export const getHomepage = defineQuery(`
  *[_type == "homepage"][0]{
    _id,
    heroTitle,
    heroSubtitle,
    heroImage,
    sections[]{ _key, title, content }
  }
`);

export const getClubs = defineQuery(`
  *[_type == "club"] | order(order asc, name asc) {
    _id,
    name,
    slug,
    country,
    description,
    image,
    isSensitive,
    order
  }
`);

export const getStories = defineQuery(`
  *[_type == "story"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    image,
    country
  }
`);

export const getClubBySlug = defineQuery(`
  *[_type == "club" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    country,
    description,
    image,
    isSensitive,
    order
  }
`);

export const getStoryBySlug = defineQuery(`
  *[_type == "story" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    content,
    image,
    country
  }
`);

export const getClubSlugs = defineQuery(`
  *[_type == "club" && defined(slug.current)].slug.current
`);
