import { BulletList, CTA, PageIntro, TextSection } from "@/components/content-page";
import ScrollReveal from "@/components/scroll-reveal";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata = {
  title: "About",
  description:
    "Hope Football has grown out of more than twenty years of football ministry, mission, and community engagement through Ambassadors Football Ireland.",
};

const FOUNDATION_POINTS = [
  "Supporting and strengthening football clubs",
  "Developing long-term sustainability",
  "Expanding leadership training",
  "Building international partnerships",
  "Supporting staff and projects internationally",
  "Creating structures that allow the work to grow responsibly and effectively",
] as const;

const MISSION_POINTS = [
  "Serve communities",
  "Develop young people",
  "Raise up leaders",
  "Create opportunities",
  "Build meaningful relationships",
  "Share hope through everyday life and authentic service",
] as const;

const APPROACH_POINTS = [
  "Compete locally",
  "Develop young players",
  "Train leaders",
  "Serve communities",
  "Operate sustainably",
  "Create long-term impact",
] as const;

const VALUES = [
  {
    title: "Faith",
    text: "Living with dependence on God and seeking to reflect His character in everything we do.",
  },
  {
    title: "Hope",
    text: "Helping young people and communities believe that a different future is possible.",
  },
  {
    title: "Love",
    text: "Serving others with humility, compassion, respect, and integrity.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Our Story"
        subtitle="Hope Football has grown out of more than twenty years of football ministry, mission, and community engagement through Ambassadors Football Ireland."
        imageSrc="/images/yakaar-hero.jpeg"
        imageAlt="Yakaar FC players and coaches together in Senegal"
        actions={[
          { href: "/get-involved", label: "Get Involved" },
          { href: "/contact", label: "Contact Us" },
        ]}
      />

      <main className="bg-white">
        <TextSection
          eyebrow="Our Story"
          title="What began with a single football tour in 2005 has grown into something far bigger."
          imageSrc="/images/yakaar-trophy.jpeg"
          imageAlt="Yakaar FC player receiving recognition after football"
        >
          <p>
            Hope Football has grown out of more than twenty years of football ministry, mission, and
            community engagement through Ambassadors Football Ireland.
          </p>
          <p>
            The story began in 2005 with a football tour to Senegal and over the following years,
            regular trips, partnerships, and football initiatives continued to develop in Senegal.
            Through these experiences, we saw firsthand how football could become a powerful platform
            for leadership development, discipleship, community engagement, and long-term
            transformation.
          </p>
          <p>As the work expanded, the vision also grew.</p>
          <p>
            In 2017, Robert and Kyla Cuthbert moved to Senegal full-time to help establish what would
            become the Hope Football Centre — a growing hub for football development, leadership
            training, education, and community impact. Since then, the work has continued to grow
            significantly through football clubs, youth development programmes, leadership
            initiatives, community relationships, and international partnerships.
          </p>
        </TextSection>

        <TextSection
          title="Hope Football is being established to provide that foundation."
          sectionClassName="bg-neutral-50"
          imageSrc="/images/yakaar-training.jpeg"
          imageAlt="Young footballers seated under a goal in Senegal"
          reverse
        >
          <p>
            Throughout this journey, Ambassadors Football Ireland has played a hugely important role
            in supporting and helping develop the work. The relationship, encouragement,
            accountability, and partnership built over many years remain deeply valued.
          </p>
          <p>
            However, as the ministry has continued to expand — particularly in Senegal and now into
            Congo and other potential future opportunities — it has become clear that the work now
            requires its own dedicated charity structure in order to build a strong foundation for the
            future.
          </p>
          <BulletList items={FOUNDATION_POINTS} />
          <p>
            While Hope Football will operate as its own charity, we continue to work closely with
            Ambassadors Football Ireland and remain incredibly grateful for the part they have played
            — and continue to play — in the story.
          </p>
          <p>
            What began with a single football tour in 2005 has grown into something far bigger than
            we could have imagined. Step by step, through relationships, faith, and a shared desire
            to serve communities through football, God has continued to open doors and create
            opportunities for hope to grow.
          </p>
          <p>And we believe this is still only the beginning.</p>
        </TextSection>

        <TextSection eyebrow="Our Vision" title="God-given identity, purpose, and potential.">
          <p>
            To see a growing network of people and football initiatives using football to help young
            people discover their God-given identity, purpose, and potential.
          </p>
        </TextSection>

        <TextSection eyebrow="Our Mission" title="We use football as a platform to:" sectionClassName="bg-neutral-50">
          <BulletList items={MISSION_POINTS} />
        </TextSection>

        <TextSection
          eyebrow="Our Approach"
          title="Hope Football operates through real football clubs embedded within local communities."
          imageSrc="/images/yakaar-action.jpeg"
          imageAlt="Young players competing for the ball on a sandy pitch"
        >
          <p>
            Rather than simply running short-term programmes, we seek to build clubs that:
          </p>
          <BulletList items={APPROACH_POINTS} />
          <p>
            Our public profile is intentionally football, education, and community focused,
            particularly in sensitive regions where overt religious branding can create barriers.
          </p>
          <p>
            At the same time, our Christian faith remains the foundation of why we serve. Through
            newsletters, prayer updates, and supporter communication, we share the deeper stories of
            faith, transformation, and discipleship that shape the work behind the scenes.
          </p>
        </TextSection>

        <SectionWrapper sectionClassName="bg-ink text-white" aria-labelledby="values-heading">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-muted">Our Values</p>
            <h2 id="values-heading" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Faith. Hope. Love.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {VALUES.map((value) => (
                <article key={value.title} className="rounded-md border border-white/10 bg-white/[0.06] p-6">
                  <h3 className="text-lg font-semibold text-accent-muted">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">{value.text}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </SectionWrapper>
      </main>

      <CTA title="And we believe this is still only the beginning." href="/get-involved" label="Get Involved" />
    </>
  );
}
