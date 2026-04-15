/**
 * Central place for Sanity public env vars used by the Next.js app and Studio.
 * Set these in `.env.local` (see `.env.example`).
 */
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-11-21";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

/** Required for live data; use a real ID from sanity.io/manage */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";

export const sanityConfigured = Boolean(projectId);
