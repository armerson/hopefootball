const STATS = [
  {
    value: "500+",
    label: "Young people reached",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M16 4L4 10v6c0 7.5 5.2 14.5 12 16 6.8-1.5 12-8.5 12-16v-6L16 4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M11 16l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "3",
    label: "Partner clubs worldwide",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="10" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 12l-2 8M20 12l2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "12+",
    label: "Years of programmes",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M8 10h16M8 16h10M8 22h14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Coach-led, child-first",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M16 6c-5 0-9 4-9 9 0 6 9 13 9 13s9-7 9-13c0-5-4-9-9-9z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="15" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
] as const;

export function ImpactStats() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
      {STATS.map((s) => (
        <li
          key={s.label}
          className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card transition hover:border-accent/30 hover:shadow-soft"
        >
          <div className="text-accent">{s.icon}</div>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{s.value}</p>
          <p className="mt-1 text-sm font-medium text-neutral-600">{s.label}</p>
        </li>
      ))}
    </ul>
  );
}
