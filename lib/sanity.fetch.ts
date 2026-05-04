import { getSanityClient } from "./sanity.client";

const DEFAULT_TIMEOUT_MS = 6000;

function queryString(query: string | { query?: string; __metadata?: unknown }): string {
  if (typeof query === "string") return query;
  const q = (query as { query?: string }).query;
  return typeof q === "string" ? q : "";
}

/**
 * Typed fetch with graceful degradation when env is missing or the API errors (e.g. offline dev).
 * Aborts after `timeoutMs` so a hung CDN/API does not block the whole page in dev.
 */
export async function sanityFetch<T>(
  query: string | { query?: string; __metadata?: unknown },
  params: Record<string, unknown> = {},
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
): Promise<T | null> {
  const client = getSanityClient();
  if (!client) return null;
  const groq = queryString(query);
  if (!groq) return null;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await client.fetch<T>(groq, params, { signal: controller.signal });
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
