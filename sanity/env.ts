export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() || "2024-11-21";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || "";
