import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionWrapper } from "@/components/section-wrapper";

const VALUES = [
  {
    title: "Child-first",
    text: "Safeguarding and wellbeing lead every session.",
  },
  {
    title: "Local leadership",
    text: "We equip coaches and communities—they set the pace.",
  },
  {
    title: "Global solidarity",
    text: "What works in Belfast informs Brazzaville and Dakar, and vice versa.",
  },
  {
    title: "Radical clarity",
    text: "Donors see where money goes; families see why it matters.",
  },
];

export const metadata = {
  title: "About",
  description:
    "Vision, story, and values of Hope Football Foundation—umbrella charity for Ambassadors FC, Yakaar FC, and Elikia FC.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <div className="border-b border-black/5 bg-neutral-50 pt-28 pb-16 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">About us</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
            Built from pitches, planes, and persistence.
          </h1>
        </div>
      </div>

      <SectionWrapper aria-labelledby="vision-heading">
        <ScrollReveal>
          <h2 id="vision-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Vision
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700 sm:text-xl">
            A world where every young person who wants to play has a club that believes in them—where
            hope is practical, weekly, and worn on a jersey.
          </p>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper sectionClassName="bg-neutral-50" aria-labelledby="story-heading">
        <ScrollReveal>
          <h2 id="story-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How it started
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
            <p>
              Hope Football began on mission trips and touchlines—seeing how a ball and a committed
              coach could steady a week. Volunteers returned home asking: what if we did not stop at
              the trip?
            </p>
            <p>
              Today the foundation is the umbrella: one governance home in Northern Ireland, partner
              clubs in three countries, and a single promise—football used with care, structure, and
              long-term support.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="structure-heading">
        <ScrollReveal>
          <h2 id="structure-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How we are organised
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600 sm:text-lg">
            Hope Football Foundation sits above three partner clubs—each with local leadership and
            programmes tailored to context.
          </p>
          <div
            className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 shadow-card sm:p-12"
            role="img"
            aria-label="Diagram: Hope Football Foundation connects to Ambassadors FC, Yakaar FC, and Elikia FC"
          >
            <div className="mx-auto flex max-w-lg flex-col items-center gap-6">
              <div className="w-full rounded-2xl bg-ink px-6 py-4 text-center text-sm font-semibold text-white sm:text-base">
                Hope Football Foundation
              </div>
              <div className="flex h-10 w-px bg-neutral-300" aria-hidden />
              <div className="grid w-full gap-4 sm:grid-cols-3">
                {["Ambassadors FC", "Yakaar FC", "Elikia FC"].map((name) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-neutral-200 bg-white px-3 py-4 text-center text-xs font-semibold text-ink shadow-sm sm:text-sm"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper sectionClassName="bg-neutral-50" aria-labelledby="values-heading">
        <ScrollReveal>
          <h2 id="values-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Values
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2" role="list">
            {VALUES.map((v) => (
              <li
                key={v.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card transition hover:border-accent/25 hover:shadow-soft sm:p-8"
              >
                <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">{v.text}</p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </SectionWrapper>

      <section className="border-t border-black/5 bg-ink py-20 text-center text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-2xl font-semibold tracking-tight sm:text-3xl">Ready to stand with us?</p>
          <Link
            href="/donate"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-2xl bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
          >
            Give Hope
          </Link>
        </div>
      </section>
    </main>
  );
}
