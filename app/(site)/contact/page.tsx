import Link from "next/link";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata = {
  title: "Contact",
  description:
    "Contact Ambassadors Football Ireland for Hope Football at Ambassadors Arena, Craigavon, Northern Ireland.",
};

const CONTACT_DETAILS = [
  {
    label: "Organisation",
    value: "Ambassadors Football Ireland for Hope Football",
  },
  {
    label: "Address",
    value: "Ambassadors Arena, 9 Brownlow Road, Craigavon, Northern Ireland",
  },
  {
    label: "Charity number",
    value: "102267",
  },
] as const;

export default function ContactPage() {
  return (
    <main className="bg-white pt-28 pb-20">
      <SectionWrapper aria-labelledby="contact-heading">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Contact
            </p>
            <h1
              id="contact-heading"
              className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl"
            >
              Get in touch with Hope Football.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              For donations, partnerships, safeguarding, or general enquiries, contact Ambassadors
              Football Ireland for Hope Football.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-md border border-neutral-200 bg-neutral-50 p-6 shadow-card sm:p-8">
            <span className="absolute right-0 top-0 h-2 w-24 -skew-x-12 bg-accent" aria-hidden />
            <div className="space-y-6">
              {CONTACT_DETAILS.map((detail) => (
                <div key={detail.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    {detail.label}
                  </p>
                  <p className="mt-2 text-base font-medium leading-relaxed text-ink">
                    {detail.value}
                  </p>
                </div>
              ))}

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Phone
                </p>
                <a
                  href="tel:+447739017143"
                  className="mt-2 block text-base font-semibold text-accent hover:text-accent-muted"
                >
                  07739 017143
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Email
                </p>
                <a
                  href="mailto:hello@hopefootball.org"
                  className="mt-2 block text-base font-semibold text-accent hover:text-accent-muted"
                >
                  hello@hopefootball.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-md bg-ink p-8 text-white sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-muted">
            Partnerships
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Interested in supporting the work?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Hope Football supports locally led football ministry across West Africa, beginning with
            Yakaar FC in Senegal. We would love to hear from churches, donors, coaches, and partners
            who want to stand with the work.
          </p>
          <Link
            href="/donate"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-muted"
          >
            Give Hope
          </Link>
        </div>
      </SectionWrapper>
    </main>
  );
}
