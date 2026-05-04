import Stripe from "stripe";

let client: Stripe | null = null;

/** Server-only Stripe client. Returns null when `STRIPE_SECRET_KEY` is unset. */
export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key) return null;
  if (!client) {
    client = new Stripe(key, { typescript: true });
  }
  return client;
}
