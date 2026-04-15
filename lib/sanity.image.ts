import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { dataset, projectId, sanityConfigured } from "./sanity.env";

/**
 * Builds optimized image URLs for Sanity image assets.
 * Returns null when CMS is not configured or source is missing.
 */
const builder = sanityConfigured
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

export function urlFor(source: SanityImageSource | null | undefined) {
  if (!builder || !source) return null;
  return builder.image(source);
}
