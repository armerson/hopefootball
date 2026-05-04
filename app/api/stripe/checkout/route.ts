import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

/** UK card minimum is typically £0.30; keep a sane upper bound. */
const MIN_MINOR = 30;
const MAX_MINOR = 10_000_000; // £100,000

type CheckoutBody = {
  mode?: "payment" | "subscription";
  amountGbp?: number | string;
};

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe is not configured. Add STRIPE_SECRET_KEY to .env.local." },
      { status: 503 },
    );
  }

  let body: CheckoutBody;
  try {
    body = (await req.json()) as CheckoutBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const mode = body.mode === "subscription" ? "subscription" : "payment";
  const raw = body.amountGbp;
  const amountGbp =
    typeof raw === "number" ? raw : typeof raw === "string" ? Number.parseFloat(raw) : Number.NaN;

  if (!Number.isFinite(amountGbp)) {
    return NextResponse.json({ error: "amountGbp must be a number" }, { status: 400 });
  }

  const minor = Math.round(amountGbp * 100);
  if (minor < MIN_MINOR || minor > MAX_MINOR) {
    return NextResponse.json(
      { error: "Amount must be between £0.30 and £100,000" },
      { status: 400 },
    );
  }

  const origin = req.nextUrl.origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "gbp",
            unit_amount: minor,
            product_data: {
              name:
                mode === "subscription"
                  ? "Monthly staff support"
                  : "One-time donation — Hope Football Foundation",
              description:
                mode === "subscription"
                  ? "Recurring monthly support for staff and programmes."
                  : "Charitable donation to Hope Football Foundation.",
            },
            ...(mode === "subscription" ? { recurring: { interval: "month" as const } } : {}),
          },
        },
      ],
      success_url: `${origin}/donate?stripe=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate?stripe=cancel`,
      allow_promotion_codes: mode === "payment",
      billing_address_collection: "required",
      metadata: {
        fund_type: mode === "subscription" ? "staff_monthly" : "one_off_donation",
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: "Checkout did not return a URL" }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (e) {
    console.error("[stripe checkout]", e);
    const message = e instanceof Error ? e.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
