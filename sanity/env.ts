/**
 * Studio (`sanity dev`) injects `SANITY_STUDIO_*` into the browser bundle.
 * Next.js uses `NEXT_PUBLIC_*`. Support both so standalone Studio and `/studio` work.
 */
export const apiVersion =
  process.env.SANITY_STUDIO_API_VERSION?.trim() ||
  process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() ||
  "2024-11-21";

export const dataset =
  process.env.SANITY_STUDIO_DATASET?.trim() ||
  process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() ||
  "production";

export const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID?.trim() ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() ||
  "";
