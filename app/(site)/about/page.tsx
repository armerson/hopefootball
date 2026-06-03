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
    title: "Transparent giving",
    text: "Donors see where money goes; families see why it matters.",
  },
];

const MISSION_ITEMS = [
  "Support locally led football projects with coaching, kit, equipment, and governance.",
  "Help partner clubs create safe weekly spaces where young people are known and encouraged.",
  "Build long-term relationships that allow football ministry to grow with care and accountability.",
] as const;

const IMPACT_ITEMS = [
  {
    title: "Belonging",
    text: "Regular sessions give young people a place to be expected, welcomed, and part of a team.",
  },
  {
    title: "Leadership",
    text: "Local coaches and volunteers are equipped to lead with consistency, care, and clear standards.",
  },
  {
    title: "Opportunity",
    text: "Football opens doors for mentoring, education, travel, service, and future pathways.",
  },
] as const;

export const metadata = {
  title: "About",
  description:
    "Hope Football is a Northern Ireland charity born in 2026 from 20 years of Ambassadors Football (Ireland) work in West Africa.",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="Hope through"
        titleAccent="football."
        tagline="About us"
        subtitle="A Northern Ireland charity supporting locally led football projects across West Africa."
        imageSrc="/images/yakaar-hero.jpeg"
        imageAlt="Yakaar FC players and coaches together in Senegal"
        primaryCta={{ href: "/donate", label: "Give Hope" }}
        secondaryCta={{ href: "/contact", label: "Contact us" }}
      />
      <main className="bg-white">
        <SectionWrapper aria-labelledby="ministry-heading">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
              <div className="relative min-h-[18rem] overflow-hidden rounded-md shadow-card ring-1 ring-black/5">
                <Image
                  src="/images/yakaar-celebration.jpeg"
                  alt="Young players celebrating during a football session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Football ministry vision
                </p>
                <h2 id="ministry-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Hope that is practical, weekly, and lived out through football.
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700 sm:text-xl">
                  We believe football can create trusted relationships where young people are seen,
                  encouraged, challenged, and supported. The vision is ministry through presence:
                  coaches, clubs, and communities showing up faithfully, week after week.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-neutral-50" aria-labelledby="history-heading">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              History
            </p>
            <h2 id="history-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Born from 20 years of football ministry in West Africa.
            </h2>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div className="max-w-3xl space-y-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
                <p>
                  Hope Football is a Northern Ireland charity born in 2026 out of the work of
                  Ambassadors Football (Ireland). After 20 years of relationships, coaching, and
                  football projects in West Africa, it became clear that the growing work needed a
                  dedicated charity with its own focus.
                </p>
                <p>
                  Today Hope Football exists to support locally led football projects with care,
                  structure, and long-term backing, beginning with Yakaar FC in Senegal.
                </p>
              </div>
              <div className="relative min-h-[18rem] overflow-hidden rounded-md shadow-card ring-1 ring-black/5">
                <Image
                  src="/images/yakaar-trophy.jpeg"
                  alt="Yakaar FC player receiving recognition after football"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-white" aria-labelledby="mission-heading">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Mission
                </p>
                <h2 id="mission-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  To strengthen locally led football projects that help young people flourish.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                  Hope Football exists to focus support, prayer, governance, and resources around
                  growing football ministry in West Africa, starting with Yakaar FC in Senegal.
                </p>
              </div>
              <ul className="grid gap-4" role="list">
                {MISSION_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="relative overflow-hidden rounded-md border border-neutral-200 bg-neutral-50 p-5 text-sm font-medium leading-relaxed text-neutral-700 shadow-card sm:text-base"
                  >
                    <span className="absolute left-0 top-0 h-full w-1 bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-ink text-white" aria-labelledby="team-heading">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-muted">
                Staff and team
              </p>
              <h2 id="team-heading" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                A Northern Ireland charity serving locally led clubs.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                Hope Football provides board oversight, staff support, safeguarding, programme
                coordination, and donor accountability. Local clubs are led by people embedded in
                their own communities.
              </p>
            </div>
            <div
              className="relative mt-12 overflow-hidden rounded-md border border-white/10 bg-ink p-6 shadow-soft sm:p-10"
              role="img"
              aria-label="Diagram: Hope Football Foundation supports Yakaar FC first, with future partners to follow"
            >
              <span className="absolute -left-8 top-8 h-48 w-2 rotate-[35deg] bg-accent" aria-hidden />
              <span className="absolute -right-10 bottom-10 h-56 w-2 rotate-[35deg] bg-accent" aria-hidden />
              <div className="relative mx-auto flex max-w-4xl flex-col items-center">
                <Image
                  src="/hope-football.png"
                  alt=""
                  width={1835}
                  height={857}
                  className="h-auto w-48 rounded-md bg-white p-2 sm:w-64"
                />

                <div className="mt-8 grid w-full max-w-xl gap-4">
                  {[
                    {
                      title: "Hope Football Board",
                      text: "Strategic leadership, charity governance, accountability, and oversight.",
                    },
                    {
                      title: "Hope Football Staff",
                      text: "Programme delivery, club support, safeguarding, fundraising, and operations.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-md border border-accent/70 bg-white/[0.03] px-5 py-4 text-left shadow-[0_0_24px_rgba(215,154,20,0.18)]"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-muted">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white/75">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="h-10 w-px bg-white/40" aria-hidden />
                <div className="rounded-md bg-accent px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-accent/25">
                  Partnerships are locally led
                </div>

                <div className="grid w-full gap-6 pt-10 sm:grid-cols-2">
                  <div className="rounded-md border border-accent/60 bg-white/[0.04] p-6 text-center">
                    <Image
                      src="/images/yakaar-logo.jpg"
                      alt="Yakaar Football Senegal logo"
                      width={132}
                      height={132}
                      className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-white/20 sm:h-28 sm:w-28"
                    />
                    <h3 className="mt-5 text-lg font-semibold uppercase tracking-[0.14em] text-accent-muted">
                      Yakaar FC
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                      First partnership
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      Community driven football in Senegal, supported first and built carefully.
                    </p>
                  </div>
                  <div className="rounded-md border border-dashed border-white/25 bg-white/[0.02] p-6 text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-3xl font-semibold text-white/30 sm:h-28 sm:w-28">
                      +
                    </div>
                    <h3 className="mt-5 text-lg font-semibold uppercase tracking-[0.14em] text-white/40">
                      Future Partners
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/45">
                      New clubs will come on at the right time, with the same care and standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-white" aria-labelledby="partnerships-heading">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
              <div className="relative min-h-[20rem] overflow-hidden rounded-md bg-ink shadow-card ring-1 ring-black/5">
                <Image
                  src="/images/yakaar-action.jpeg"
                  alt="Young players competing for the ball on a sandy pitch"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Partnerships
                </p>
                <h2 id="partnerships-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  We grow through trusted local relationships.
                </h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-neutral-700 sm:text-lg">
                  <p>
                    The first Hope Football partnership is with Yakaar FC in Senegal. Yakaar means
                    hope, and the club represents the kind of community-rooted work the charity was
                    formed to strengthen.
                  </p>
                  <p>
                    Future partnerships will be added carefully, at the right time, with local
                    leadership, shared safeguarding standards, and clear accountability.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-neutral-50" aria-labelledby="impact-heading">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Community impact
              </p>
              <h2 id="impact-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Football becomes a doorway into deeper community support.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                The impact is not only measured in matches played. It is seen in relationships,
                leadership, confidence, and the steady presence of adults who keep showing up.
              </p>
            </div>
            <ul className="mt-12 grid gap-6 md:grid-cols-3" role="list">
              {IMPACT_ITEMS.map((item) => (
                <li
                  key={item.title}
                  className="relative overflow-hidden rounded-md border border-neutral-200 bg-white p-6 shadow-card sm:p-8"
                >
                  <span className="absolute right-0 top-0 h-2 w-16 -skew-x-12 bg-accent" aria-hidden />
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">{item.text}</p>
                </li>
              ))}
            </ul>
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
                  className="relative overflow-hidden rounded-md border border-neutral-200 bg-white p-6 shadow-card transition hover:border-accent/25 hover:shadow-soft sm:p-8"
                >
                  <span className="absolute right-0 top-0 h-2 w-20 -skew-x-12 bg-accent" aria-hidden />
                  <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">{v.text}</p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-white" aria-labelledby="org-heading">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <h2 id="org-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Who we are
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
                <p>
                  Hope Football is a Northern Ireland charity that grew out of{" "}
                  <strong>Ambassadors Football (Ireland)</strong> after two decades of work in West
                  Africa.
                </p>
                <p>
                  The charity was formed in 2026 to give focused support to the football work as it
                  grows, beginning with Yakaar FC in Senegal.
                </p>
              </div>
              <div className="mt-8 rounded-md border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-600">
                <p className="font-semibold text-ink">Hope Football</p>
                <p>Ambassadors Arena, 9 Brownlow Road, Craigavon, Northern Ireland</p>
                <p>Charity No: 102267</p>
                <p>Born in 2026 from Ambassadors Football (Ireland)</p>
                <a href="mailto:hello@hopefootball.org" className="mt-1 block text-accent hover:text-accent-muted">
                  hello@hopefootball.org
                </a>
                <a href="tel:+447739017143" className="mt-1 block text-neutral-600 hover:text-ink">
                  07739 017 143
                </a>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <section className="border-t border-black/5 bg-ink py-20 text-center text-white sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-2xl font-semibold tracking-tight sm:text-3xl">Ready to stand with us?</p>
            <Link
              href="/donate"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent-muted"
            >
              Give Hope
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
