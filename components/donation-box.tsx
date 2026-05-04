"use client";

import { useMemo, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const PRESETS = [10, 25, 50, 100] as const;
const STAFF_PRESETS = [15, 25, 50] as const;

const IMPACT = [
  { amount: 10, text: "£10 = kit for a child" },
  { amount: 25, text: "£25 = coaching session" },
  { amount: 100, text: "£100 = supports a team" },
] as const;

function buildMailto(preset: number | null, customPounds: string) {
  const parsed = customPounds.trim() ? Number.parseFloat(customPounds) : Number.NaN;
  const value =
    preset !== null ? preset : Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  const subject =
    value !== null
      ? encodeURIComponent(`Donation — £${value}`)
      : encodeURIComponent("Donation enquiry");
  return `mailto:hello@hopefootball.org?subject=${subject}`;
}

function parseAmountGbp(useCustom: boolean, preset: number | null, custom: string): number | null {
  if (useCustom) {
    const n = Number.parseFloat(custom.trim());
    return Number.isFinite(n) && n > 0 ? n : null;
  }
  return preset;
}

async function startCheckout(mode: "payment" | "subscription", amountGbp: number) {
  const res = await fetch("/api/stripe/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mode, amountGbp }),
  });
  const data = (await res.json()) as { url?: string; error?: string };
  if (!res.ok) {
    throw new Error(data.error || "Could not start checkout");
  }
  if (!data.url) {
    throw new Error("No checkout URL returned");
  }
  window.location.assign(data.url);
}

function StripeReturnBanner() {
  const sp = useSearchParams();
  const stripe = sp.get("stripe");
  if (stripe === "success") {
    return (
      <div
        role="status"
        className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900"
      >
        Thank you — your payment was submitted. You will receive a confirmation from Stripe by email.
      </div>
    );
  }
  if (stripe === "cancel") {
    return (
      <div
        role="status"
        className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-950"
      >
        Checkout was cancelled. You can try again whenever you are ready.
      </div>
    );
  }
  return null;
}

function DonationBoxInner() {
  const [preset, setPreset] = useState<number | null>(25);
  const [custom, setCustom] = useState("");
  const [useCustom, setUseCustom] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [staffPreset, setStaffPreset] = useState<number | null>(25);
  const [staffCustom, setStaffCustom] = useState("");
  const [staffUseCustom, setStaffUseCustom] = useState(false);
  const staffInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState<null | "once" | "staff">(null);
  const [error, setError] = useState<string | null>(null);

  const mailto = useMemo(() => {
    if (useCustom) return buildMailto(null, custom);
    return buildMailto(preset, "");
  }, [preset, custom, useCustom]);

  const presetButton = (n: (typeof PRESETS)[number]) => {
    const active = !useCustom && preset === n;
    return (
      <button
        key={n}
        type="button"
        onClick={() => {
          setError(null);
          setUseCustom(false);
          setPreset(n);
          setCustom("");
        }}
        className={`min-h-12 min-w-[4.5rem] rounded-2xl px-4 text-sm font-semibold transition ${
          active ? "bg-ink text-white ring-2 ring-ink ring-offset-2" : "bg-neutral-100 text-ink hover:bg-neutral-200"
        }`}
      >
        £{n}
      </button>
    );
  };

  const staffPresetButton = (n: (typeof STAFF_PRESETS)[number]) => {
    const active = !staffUseCustom && staffPreset === n;
    return (
      <button
        key={n}
        type="button"
        onClick={() => {
          setError(null);
          setStaffUseCustom(false);
          setStaffPreset(n);
          setStaffCustom("");
        }}
        className={`min-h-12 min-w-[4.5rem] rounded-2xl px-4 text-sm font-semibold transition ${
          active
            ? "bg-ink text-white ring-2 ring-ink ring-offset-2"
            : "bg-neutral-100 text-ink hover:bg-neutral-200"
        }`}
      >
        £{n}/mo
      </button>
    );
  };

  const onDonateOnce = async () => {
    const amt = parseAmountGbp(useCustom, preset, custom);
    if (amt === null) {
      setError("Choose an amount or enter a valid custom donation.");
      return;
    }
    setLoading("once");
    setError(null);
    try {
      await startCheckout("payment", amt);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Checkout failed");
      setLoading(null);
    }
  };

  const onStaffMonthly = async () => {
    const amt = parseAmountGbp(staffUseCustom, staffPreset, staffCustom);
    if (amt === null) {
      setError("Choose a monthly amount or enter a valid custom figure.");
      return;
    }
    setLoading("staff");
    setError(null);
    try {
      await startCheckout("subscription", amt);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Checkout failed");
      setLoading(null);
    }
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card sm:p-8 lg:p-10">
      <StripeReturnBanner />

      {error ? (
        <p
          role="alert"
          className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-900"
        >
          {error}
        </p>
      ) : null}

      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Your gift goes straight to the pitch
      </h2>
      <p className="mt-3 text-sm text-neutral-600 sm:text-base">
        One-time donations are processed securely by Stripe (cards, Apple Pay, Google Pay where
        available).
      </p>

      <ul className="mt-8 space-y-3" role="list">
        {IMPACT.map((row) => (
          <li
            key={row.amount}
            className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50 px-4 py-3 text-sm font-medium text-ink sm:text-base"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              ✓
            </span>
            {row.text}
          </li>
        ))}
      </ul>

      <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-neutral-500">One-time amount</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Donation amount">
        {PRESETS.map(presetButton)}
        <button
          type="button"
          onClick={() => {
            setError(null);
            setUseCustom(true);
            setPreset(null);
            queueMicrotask(() => inputRef.current?.focus());
          }}
          className={`min-h-12 rounded-2xl px-4 text-sm font-semibold transition ${
            useCustom ? "bg-ink text-white ring-2 ring-ink ring-offset-2" : "bg-neutral-100 text-ink hover:bg-neutral-200"
          }`}
        >
          Custom
        </button>
      </div>

      <label className="mt-4 block text-sm text-neutral-600" htmlFor="custom-amount">
        Custom amount (GBP)
      </label>
      <div className="mt-1 flex max-w-xs items-center rounded-2xl border border-neutral-200 bg-white px-4 ring-offset-2 focus-within:ring-2 focus-within:ring-accent/40">
        <span className="text-neutral-400" aria-hidden>
          £
        </span>
        <input
          ref={inputRef}
          id="custom-amount"
          inputMode="decimal"
          placeholder="0.00"
          value={custom}
          onChange={(e) => {
            setError(null);
            setCustom(e.target.value);
            setUseCustom(true);
            setPreset(null);
          }}
          onFocus={() => {
            setError(null);
            setUseCustom(true);
            setPreset(null);
          }}
          className="min-h-12 flex-1 border-0 bg-transparent py-3 pl-1 text-ink outline-none"
          aria-describedby="custom-hint"
        />
      </div>
      <p id="custom-hint" className="mt-2 text-xs text-neutral-500">
        Minimum £0.30. You will confirm the amount on Stripe&apos;s secure page.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          onClick={onDonateOnce}
          disabled={loading !== null}
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl bg-accent px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-accent-muted disabled:cursor-wait disabled:opacity-70 sm:flex-none sm:px-8"
        >
          {loading === "once" ? "Redirecting…" : "Donate with Stripe"}
        </button>
        <a
          href={mailto}
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl border border-neutral-200 bg-white px-6 py-3 text-center text-sm font-semibold text-ink transition hover:bg-neutral-50 sm:flex-none sm:px-8"
        >
          Continue with email
        </a>
      </div>

      <div className="mt-14 border-t border-neutral-100 pt-10">
        <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">Monthly staff support</h3>
        <p className="mt-2 text-sm text-neutral-600 sm:text-base">
          Recurring gifts help cover staff time, safeguarding, and programme delivery. You can cancel
          anytime from the Stripe billing portal link in your receipt.
        </p>

        <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-neutral-500">Monthly amount</p>
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Monthly support amount">
          {STAFF_PRESETS.map(staffPresetButton)}
          <button
            type="button"
            onClick={() => {
              setError(null);
              setStaffUseCustom(true);
              setStaffPreset(null);
              queueMicrotask(() => staffInputRef.current?.focus());
            }}
            className={`min-h-12 rounded-2xl px-4 text-sm font-semibold transition ${
              staffUseCustom
                ? "bg-ink text-white ring-2 ring-ink ring-offset-2"
                : "bg-neutral-100 text-ink hover:bg-neutral-200"
            }`}
          >
            Custom
          </button>
        </div>

        <label className="mt-4 block text-sm text-neutral-600" htmlFor="staff-custom-amount">
          Custom monthly (GBP)
        </label>
        <div className="mt-1 flex max-w-xs items-center rounded-2xl border border-neutral-200 bg-white px-4 ring-offset-2 focus-within:ring-2 focus-within:ring-accent/40">
          <span className="text-neutral-400" aria-hidden>
            £
          </span>
          <input
            ref={staffInputRef}
            id="staff-custom-amount"
            inputMode="decimal"
            placeholder="0.00"
            value={staffCustom}
            onChange={(e) => {
              setError(null);
              setStaffCustom(e.target.value);
              setStaffUseCustom(true);
              setStaffPreset(null);
            }}
            onFocus={() => {
              setError(null);
              setStaffUseCustom(true);
              setStaffPreset(null);
            }}
            className="min-h-12 flex-1 border-0 bg-transparent py-3 pl-1 text-ink outline-none"
          />
        </div>

        <button
          type="button"
          onClick={onStaffMonthly}
          disabled={loading !== null}
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:px-8"
        >
          {loading === "staff" ? "Redirecting…" : "Start monthly support"}
        </button>
      </div>

      <div className="mt-10 space-y-4 border-t border-neutral-100 pt-8 text-sm text-neutral-600">
        <p className="flex items-center gap-2 font-medium text-ink">
          <svg className="h-5 w-5 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 3l8 4v5c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V7l8-4z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          Secure checkout
        </p>
        <p>
          Payments are handled by Stripe. Hope Football Foundation will use funds in line with its
          charitable purposes; publish impact and governance details as you formalise them.
        </p>
      </div>
    </div>
  );
}

export function DonationBox() {
  return (
    <Suspense fallback={<DonationBoxFallback />}>
      <DonationBoxInner />
    </Suspense>
  );
}

function DonationBoxFallback() {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card sm:p-8 lg:p-10">
      <div className="h-8 w-48 animate-pulse rounded-lg bg-neutral-100" />
      <div className="mt-6 h-24 animate-pulse rounded-xl bg-neutral-50" />
    </div>
  );
}
