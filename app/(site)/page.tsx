import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { ImpactStats } from "@/components/impact-stats";
import { PillarCard } from "@/components/pillar-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionWrapper } from "@/components/section-wrapper";
import { StoryBlock } from "@/components/story-block";
import { TEAMS } from "@/lib/teams";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=2400&q=85";

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Hope belongs on every pitch."
        subtitle="We use football to open doors for young people—coaching, kit, and community that stay long after the final whistle."
        imageSrc={HERO_IMAGE}
        imageAlt="Football boot on grass in stadium light"
        primaryCta={{ href: "/donate", label: "Give Hope" }}
        secondaryCta={{ href: "/teams", label: "Meet the teams" }}
      />

      <SectionWrapper sectionClassName="bg-white" aria-labelledby="mission-heading">
        <ScrollReveal>
          <h2
            id="mission-heading"
            className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500"
          >
            Mission
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl md:text-3xl">
            Hope Football Foundation backs local clubs so every child can play with pride—no matter
            their postcode or passport.
          </p>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper
        sectionClassName="bg-neutral-50"
        aria-labelledby="pillars-heading"
        id="pillars"
      >
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="pillars-heading"
              className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
            >
              Three clubs. One mission.
            </h2>
            <p className="mt-4 text-neutral-600 sm:text-lg">
              Partner programmes in Northern Ireland, Senegal, and the Republic of the Congo.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {TEAMS.map((t) => (
              <PillarCard
                key={t.slug}
                flag={t.flag}
                title={t.name}
                country={t.country}
                description={t.shortDescription}
                imageSrc={t.imageSrc}
                imageAlt={t.imageAlt}
                href={`/teams/${t.slug}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper sectionClassName="bg-white" aria-labelledby="impact-heading">
        <ScrollReveal>
          <h2
            id="impact-heading"
            className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            Impact that adds up
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600 sm:text-lg">
            Real sessions, real coaches, real young people—numbers are illustrative placeholders.
          </p>
          <div className="mt-14">
            <ImpactStats />
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper sectionClassName="bg-neutral-50" aria-labelledby="story-heading">
        <ScrollReveal>
          <h2 id="story-heading" className="sr-only">
            Story
          </h2>
          <StoryBlock />
        </ScrollReveal>
      </SectionWrapper>

      <CTASection
        headline="Every pound builds opportunity."
        body="Transparent, coach-led, child-first. Join thousands who believe the pitch is a classroom for life."
        ctaHref="/donate"
        ctaLabel="Give Hope"
      />
    </>
  );
}
