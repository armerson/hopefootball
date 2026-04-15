"use client";

import { useMemo, useRef, useState } from "react";

const PRESETS = [10, 25, 50, 100] as const;

const IMPACT = [
  { amount: 10, text: "£10 = kit for a child" },
  { amount: 25, text: "£25 = coaching session" },
  { amount: 100, text: "£100 = supports a team" },
] as const;

function buildMailto(preset: number | null, customPounds: string) {
  const parsed = customPounds.trim() ? Number.parseFloat(customPounds) : NaN;
  const value =
    preset !== null ? preset : Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  const subject =
    value !== null
      ? encodeURIComponent(`Donation — £${value}`)
      : encodeURIComponent("Donation enquiry");
  return `mailto:hello@hopefootball.org?subject=${subject}`;
}

export function DonationBox() {
  const [preset, setPreset] = useState<number | null>(25);
  const [custom, setCustom] = useState("");
  const [useCustom, setUseCustom] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card sm:p-8 lg:p-10">
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Your gift goes straight to the pitch
      </h2>
      <p className="mt-3 text-sm text-neutral-600 sm:text-base">
        Choose an amount—every pound helps young people train, learn, and belong.
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

      <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-neutral-500">Amount</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Donation amount">
        {PRESETS.map(presetButton)}
        <button
          type="button"
          onClick={() => {
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
            setCustom(e.target.value);
            setUseCustom(true);
            setPreset(null);
          }}
          onFocus={() => {
            setUseCustom(true);
            setPreset(null);
          }}
          className="min-h-12 flex-1 border-0 bg-transparent py-3 pl-1 text-ink outline-none"
          aria-describedby="custom-hint"
        />
      </div>
      <p id="custom-hint" className="mt-2 text-xs text-neutral-500">
        Placeholder flow until Stripe is live—Continue opens your email client.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={mailto}
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl bg-accent px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-sky-500 sm:flex-none sm:px-8"
        >
          Continue with email
        </a>
        <button
          type="button"
          disabled
          className="inline-flex min-h-12 cursor-not-allowed flex-1 items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-3 text-sm font-semibold text-neutral-400 sm:flex-none"
          aria-disabled="true"
          title="Stripe integration coming soon"
        >
          Pay with Stripe (soon)
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
          Secure donation
        </p>
        <p>
          Hope Football Foundation publishes how funds support clubs and safeguarding (placeholder
          transparency note). Registered structure details on request.
        </p>
      </div>
    </div>
  );
}
