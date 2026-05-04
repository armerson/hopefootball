import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import ScrollReveal from "@/components/scroll-reveal";
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
    text: "What we learn through Yakaar FC in Senegal will shape the next partnerships with care.",
  },
  {
    title: "Radical clarity",
    text: "Donors see where money goes; families see why it matters.",
  },
];

export const metadata = {
  title: "About",
  description:
    "Vision, story, and values of Hope Football Foundation—supporting locally led football projects for young people.",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="Hope through"
        titleAccent="football."
        tagline="About us"
        subtitle="We support locally led football projects that give young people a place to play, belong, and grow."
        imageSrc="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=2400&q=85"
        imageAlt="Young footballers training together on a pitch"
        primaryCta={{ href: "/donate", label: "Give Hope" }}
        secondaryCta={{ href: "/#contact", label: "Contact us" }}
      />
      <main className="bg-white">
      <SectionWrapper aria-labelledby="vision-heading">
        <ScrollReveal>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <div className="relative min-h-[18rem] overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
              <Image
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1400&q=85"
                alt="Football boot beside a ball on grass"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div>
              <h2 id="vision-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Vision
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700 sm:text-xl">
                A world where every young person who wants to play has a club that believes in them,
                where hope is practical, weekly, and worn on a jersey.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper sectionClassName="bg-neutral-50" aria-labelledby="story-heading">
        <ScrollReveal>
          <h2 id="story-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How it started
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div className="max-w-3xl space-y-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
              <p>
                Hope Football began through relationships built around football, coaching, and young
                people who needed consistent support. The question became simple: how do we keep
                showing up after the trip ends?
              </p>
              <p>
                Today the foundation is building a home for locally led football projects, beginning
                with Yakaar FC in Senegal. The promise is simple: football used with care, structure,
                and long-term support.
              </p>
            </div>
            <div className="relative min-h-[18rem] overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
              <Image
                src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1400&q=85"
                alt="Football team gathered before a match"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="structure-heading">
        <ScrollReveal>
          <h2 id="structure-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How we are organised
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600 sm:text-lg">
            Hope Football Foundation supports partner clubs as they come on at the right time. Yakaar
            FC in Senegal is the first partner club.
          </p>
          <div
            className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 shadow-card sm:p-12"
            role="img"
            aria-label="Diagram: Hope Football Foundation supports Yakaar FC first, with future partners to follow"
          >
            <div className="mx-auto flex max-w-lg flex-col items-center gap-6">
              <div className="w-full rounded-2xl bg-ink px-6 py-4 text-center text-sm font-semibold text-white sm:text-base">
                Hope Football Foundation
              </div>
              <div className="flex h-10 w-px bg-neutral-300" aria-hidden />
              <div className="grid w-full gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-accent/30 bg-white px-3 py-4 text-center text-xs font-semibold text-ink shadow-sm sm:text-sm">
                  Yakaar FC, Senegal
                </div>
                <div className="rounded-2xl border border-dashed border-neutral-300 bg-white/70 px-3 py-4 text-center text-xs font-semibold text-neutral-500 shadow-sm sm:text-sm">
                  Future partners
                </div>
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
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-2xl bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent-muted"
          >
            Give Hope
          </Link>
        </div>
      </section>
      </main>
    </>
  );
}
