import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId, sanityConfigured } from "./sanity.env";

/**
 * Read-only browser-safe client (public dataset).
 * useCdn: true serves cached API responses for faster reads.
 */
export function getSanityClient(): SanityClient | null {
  if (!sanityConfigured) return null;
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  });
}
