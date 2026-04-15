import { getSanityClient } from "./sanity.client";

/**
 * Typed fetch with graceful degradation when env is missing or the API errors (e.g. offline dev).
 */
export async function sanityFetch<T>(
  query: string | { query?: string; __metadata?: unknown },
  params: Record<string, unknown> = {},
): Promise<T | null> {
  const client = getSanityClient();
  if (!client) return null;
  try {
    return await client.fetch<T>(query as string, params);
  } catch {
    return null;
  }
}
