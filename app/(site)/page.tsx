import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { ImpactStats } from "@/components/impact-stats";
import ScrollReveal from "@/components/scroll-reveal";
import { SectionWrapper } from "@/components/section-wrapper";
import { StoryBlock } from "@/components/story-block";
import { sanityFetch } from "@/lib/sanity.fetch";
import { getHomepage } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import type { HomepageDocument } from "@/lib/sanity.types";

export const revalidate = 60;

export const metadata = {
  title: "Home",
  description:
    "Football. Hope. Community. Hope Football Foundation backs locally led football projects for young people.",
};

const DEFAULT_TITLE = "Hope through";
const DEFAULT_ACCENT = "football.";
const DEFAULT_SUBTITLE =
  "We use football to open doors for young people: coaching, kit, mentoring, and community that stay long after the final whistle.";
const DEFAULT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=2400&q=85";

export default async function HomePage() {
  const homepage = await sanityFetch<HomepageDocument | null>(getHomepage);

  const titleLine = homepage?.heroTitle?.trim() || DEFAULT_TITLE;
  const accent =
    homepage?.heroTitleAccent?.trim() ||
    (homepage?.heroTitle?.trim() ? "" : DEFAULT_ACCENT);
  const subtitle = homepage?.heroSubtitle?.trim() || DEFAULT_SUBTITLE;

  const heroUrl = homepage?.heroImage
    ? urlFor(homepage.heroImage)?.width(2400).height(1400).fit("crop").url()
    : DEFAULT_HERO_IMAGE;

  const heroAlt =
    (homepage?.heroImage &&
      "alt" in homepage.heroImage &&
      typeof (homepage.heroImage as { alt?: string }).alt === "string" &&
      (homepage.heroImage as { alt?: string }).alt) ||
    (heroUrl === DEFAULT_HERO_IMAGE
      ? "Young footballers training together on a pitch"
      : `${titleLine} ${accent}`.trim());

  return (
    <>
      <HeroSection
        title={titleLine}
        titleAccent={accent || undefined}
        subtitle={subtitle}
        imageSrc={heroUrl}
        imageAlt={heroAlt}
        tagline="Football. Hope. Community."
        primaryCta={{ href: "/donate", label: "Give Hope" }}
        secondaryCta={{ href: "/about", label: "Our story" }}
      />

      <main className="bg-white">
        {homepage?.sections?.length ? (
          <SectionWrapper sectionClassName="bg-white" aria-labelledby="cms-sections">
            <ScrollReveal>
              <h2 id="cms-sections" className="sr-only">
                Updates
              </h2>
              <div className="space-y-16">
                {homepage.sections.map((section) => (
                  <div
                    key={section._key ?? section.title}
                    className="mx-auto max-w-3xl border-b border-neutral-100 pb-16 text-center last:border-0 last:pb-0"
                  >
                    {section.title ? (
                      <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                        {section.title}
                      </h3>
                    ) : null}
                    {section.content ? (
                      <p className="mt-4 text-base leading-relaxed text-neutral-600 whitespace-pre-wrap sm:text-lg">
                        {section.content}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </SectionWrapper>
        ) : null}

        <SectionWrapper sectionClassName="bg-neutral-50" aria-labelledby="work-heading">
          <ScrollReveal>
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <h2
                  id="work-heading"
                  className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
                >
                  A foundation for lasting football projects.
                </h2>
                <p className="mt-5 text-neutral-600 sm:text-lg">
                  Hope Football supports local leaders who know their communities. We help with the
                  practical things that keep a project alive: kit, coaching, safeguarding, mentoring,
                  and trusted governance.
                </p>
                <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {[
                    {
                      title: "Local leadership",
                      text: "Projects are led by people rooted in the place they serve.",
                    },
                    {
                      title: "Weekly presence",
                      text: "Support is built around regular sessions, trusted adults, and safe spaces.",
                    },
                    {
                      title: "Clear support",
                      text: "Donations go toward practical needs that help young people play and grow.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card"
                    >
                      <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[22rem] overflow-hidden rounded-2xl shadow-soft ring-1 ring-black/5">
                <Image
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=85"
                  alt="Football players gathered together on a pitch"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-white" aria-labelledby="partner-heading">
          <ScrollReveal>
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
              <div className="relative min-h-[20rem] overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
                <Image
                  src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1400&q=85"
                  alt="Football on grass with players in the background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
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
                    Yakaar means hope. As the first partner club to come under Hope Football, Yakaar FC
                    gives young people in Senegal a place to train, belong, and be known.
                  </p>
                  <p className="mt-5">
                    More clubs will come on at different times. For now, the focus is simple: support
                    Yakaar FC well, learn carefully, and build a model that can grow with integrity.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-white" aria-labelledby="why-heading">
          <ScrollReveal>
            <h2
              id="why-heading"
              className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
            >
              More than football
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-neutral-600 sm:text-lg">
              Young people face challenges that go beyond sport. Through coaching and mentoring, Hope
              Football helps create safe spaces where they can grow, belong, and build a better future.
            </p>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-neutral-50" aria-labelledby="impact-heading">
          <ScrollReveal>
            <h2
              id="impact-heading"
              className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
            >
              Impact that adds up
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-sm text-neutral-600 sm:text-base">
              Early foundation markers. These can be updated as Yakaar FC and future partners report
              live programme data.
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
        headline="Every pound builds opportunity."
        body="Transparent, coach-led, child-first. Your gift opens sessions, kit, and belonging."
        ctaHref="/donate"
        ctaLabel="Give Hope"
      />
    </>
  );
}
