import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { ImpactStats } from "@/components/impact-stats";
import ScrollReveal from "@/components/scroll-reveal";
import { SectionWrapper } from "@/components/section-wrapper";
import { StoryBlock } from "@/components/story-block";

export const revalidate = 60;

export const metadata = {
  title: "Home",
  description:
    "Football. Hope. Community. Hope Football Foundation backs locally led football projects for young people.",
};

const DEFAULT_TITLE = "Hope through";
const DEFAULT_ACCENT = "football.";
const DEFAULT_SUBTITLE =
  "Backing locally led football projects with coaching, kit, mentoring, and trusted support for young people.";
const DEFAULT_HERO_IMAGE = "/images/yakaar-training.jpeg";

const MODEL_ITEMS = [
  {
    title: "Local leaders first",
    text: "We support coaches and organisers who already know the young people, families, and realities around them.",
  },
  {
    title: "Weekly rhythm",
    text: "Reliable sessions create belonging: the same place, familiar adults, clear standards, and room to grow.",
  },
  {
    title: "Practical backing",
    text: "Funds go toward things that keep football happening: kit, equipment, safeguarding, travel, and programme delivery.",
  },
] as const;

const SUPPORT_ITEMS = [
  "Training kit and boots",
  "Coaching equipment",
  "Safe weekly sessions",
  "Mentoring and leadership",
  "Local staff support",
  "Safeguarding and governance",
] as const;

export default async function HomePage() {
  return (
    <>
      <HeroSection
        title={DEFAULT_TITLE}
        titleAccent={DEFAULT_ACCENT}
        subtitle={DEFAULT_SUBTITLE}
        imageSrc={DEFAULT_HERO_IMAGE}
        imageAlt="Yakaar FC players seated under a goal in Senegal"
        tagline="Football. Hope. Community."
        primaryCta={{ href: "/donate", label: "Give Hope" }}
        secondaryCta={{ href: "/about", label: "Our story" }}
      />

      <main className="bg-white">
        <SectionWrapper sectionClassName="bg-neutral-50" aria-labelledby="work-heading">
          <ScrollReveal>
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  How it works
                </p>
                <h2
                  id="work-heading"
                  className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
                >
                  A foundation for lasting football projects.
                </h2>
                <p className="mt-5 text-neutral-600 sm:text-lg">
                  Hope Football is built for the work after the launch moment: the weekly sessions,
                  coach relationships, safe routines, and practical support that let a young person
                  keep showing up.
                </p>
                <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {MODEL_ITEMS.map((item) => (
                    <div
                      key={item.title}
                      className="group relative overflow-hidden rounded-md border border-neutral-200 bg-white p-5 shadow-card transition hover:border-accent/25 hover:shadow-soft"
                    >
                      <span className="absolute right-0 top-0 h-2 w-16 -skew-x-12 bg-accent transition group-hover:w-24" aria-hidden />
                      <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[22rem] overflow-hidden rounded-md shadow-soft ring-1 ring-black/5">
                <Image
                  src="/images/yakaar-hero.jpeg"
                  alt="Yakaar FC players and coaches together in Senegal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-white" aria-labelledby="partner-heading" id="yakaar">
          <ScrollReveal>
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
              <div className="relative min-h-[24rem] overflow-hidden rounded-md bg-ink shadow-card ring-1 ring-black/5">
                <Image
                  src="/images/yakaar-action.jpeg"
                  alt="Young players competing for the ball on a sandy pitch"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    Yakaar means hope
                  </p>
                  <p className="mt-2 text-lg font-semibold">Senegal is where the first partnership begins.</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  First partner club
                </p>
                <h2
                  id="partner-heading"
                  className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
                >
                  Yakaar FC in Senegal.
                </h2>
                <div className="mt-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
                  <p>
                    Yakaar means hope. As the first partner club under Hope Football, Yakaar FC gives
                    young people in Senegal a place to train, belong, and be known.
                  </p>
                  <p className="mt-5">
                    More clubs will come on at different times. For now the priority is to support
                    Yakaar well, learn carefully, and build a model that can grow with integrity.
                  </p>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {["Senegal first", "Future partners later", "Coach-led", "Child-first"].map((label) => (
                    <div
                      key={label}
                      className="rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-semibold text-ink"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-ink text-white" aria-labelledby="support-heading">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-muted">
                  What support funds
                </p>
                <h2
                  id="support-heading"
                  className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
                >
                  The simple things that make football consistent.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                  A good project does not run on inspiration alone. It needs people, equipment,
                  safeguarding, communication, transport, and the patience to keep going.
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2" role="list">
                {SUPPORT_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="relative overflow-hidden rounded-md border border-white/10 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-white shadow-sm"
                  >
                    <span className="absolute left-0 top-0 h-full w-1 bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-neutral-50" aria-labelledby="impact-heading">
          <ScrollReveal>
            <h2
              id="impact-heading"
              className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
            >
              Built to grow carefully.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-sm text-neutral-600 sm:text-base">
              The first job is not to look large. It is to be faithful, transparent, and useful to
              the people already doing the work.
            </p>
            <div className="mt-14">
              <ImpactStats />
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-white" aria-labelledby="story-heading">
          <ScrollReveal>
            <h2 id="story-heading" className="sr-only">
              Story
            </h2>
            <StoryBlock />
          </ScrollReveal>
        </SectionWrapper>
      </main>

      <CTASection
        headline="Help keep the next session on the calendar."
        body="Your giving helps turn hope into something practical: a coach, a ball, a safe space, and a reason to come back next week."
        ctaHref="/donate"
        ctaLabel="Give Hope"
      />
    </>
  );
}
