import { BulletList, CardGrid, CTA, PageIntro, TextSection } from "@/components/content-page";
import ScrollReveal from "@/components/scroll-reveal";
import { SectionWrapper } from "@/components/section-wrapper";

export const revalidate = 60;

export const metadata = {
  title: "Home",
  description:
    "Building healthy football clubs that develop young people, strengthen communities, and inspire hope.",
};

const WHAT_WE_DO = [
  {
    title: "Football Development",
    text: "Building healthy, sustainable football clubs that serve their communities with excellence.",
  },
  {
    title: "Leadership Development",
    text: "Training coaches and young leaders to influence others positively on and off the pitch.",
  },
  {
    title: "Community Impact",
    text: "Creating environments where young people can grow in confidence, character, and hope.",
  },
  {
    title: "International Partnerships",
    text: "Connecting churches, schools, clubs, universities, and supporters to what God is doing through football around the world.",
  },
] as const;

const CLUBS = [
  {
    title: "Yakaar Football Club — Senegal",
    text: "A community football club bringing hope, opportunity, and leadership development to young people in Senegal.",
    href: "/yakaar-fc",
    cta: "Discover Yakaar FC",
  },
  {
    title: "Elikia Football Club — Republic of Congo",
    text: "A developing football initiative focused on youth development, leadership, and community transformation in Congo.",
    href: "/elikia-fc",
    cta: "Learn About Elikia FC",
  },
  {
    title: "Hope Football Centre — Senegal",
    text: "A growing training and community hub designed to support football development, education, leadership training, and long-term sustainability.",
    href: "/hope-football-centre",
    cta: "Explore the Centre",
  },
] as const;

const HEART = [
  {
    title: "FOR GOD",
    text: "Driven by faith and a desire to serve others with humility and integrity.",
  },
  {
    title: "FOR GOOD",
    text: "Using football to bring positive and lasting impact to communities.",
  },
  {
    title: "FOR ALL",
    text: "Creating environments where everyone is welcomed, valued, and encouraged.",
  },
] as const;

const INVOLVEMENT = [
  "Join a tour",
  "Partner financially",
  "Pray with us",
  "Volunteer your skills",
  "Connect your church or club",
] as const;

export default function HomePage() {
  return (
    <>
      <PageIntro
        eyebrow="For God. For Good. For All."
        title="Hope Through Football"
        subtitle="Building healthy football clubs that develop young people, strengthen communities, and inspire hope."
        imageSrc="/images/yakaar-training.jpeg"
        imageAlt="Young footballers at a Hope Football session"
        actions={[
          { href: "/about", label: "Learn More" },
          { href: "/get-involved", label: "Get Involved" },
        ]}
      />

      <main className="bg-white">
        <TextSection
          eyebrow="Who We Are"
          title="Hope Football is a Northern Ireland–based charity."
          imageSrc="/images/yakaar-hero.jpeg"
          imageAlt="Yakaar FC players and coaches together in Senegal"
        >
          <p>
            Hope Football is a Northern Ireland–based charity that uses football as a platform for
            leadership development, community transformation, and long-term impact.
          </p>
          <p>
            We support and strengthen football clubs in communities where young people need
            opportunity, guidance, belonging, and hope.
          </p>
          <p>
            Our vision is to see football used to help young people discover their God-given
            identity, purpose, and potential.
          </p>
        </TextSection>

        <SectionWrapper sectionClassName="bg-neutral-50" aria-labelledby="what-we-do">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What We Do</p>
            <h2 id="what-we-do" className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Football, leadership, community, and partnership.
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {WHAT_WE_DO.map((item) => (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-md border border-neutral-200 bg-white p-6 shadow-card"
                >
                  <span className="absolute right-0 top-0 h-2 w-16 -skew-x-12 bg-accent" aria-hidden />
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">{item.text}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-white" aria-labelledby="our-clubs">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Clubs</p>
            <h2 id="our-clubs" className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              A growing Hope Football story.
            </h2>
            <div className="mt-10">
              <CardGrid cards={CLUBS} />
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-ink text-white" aria-labelledby="our-heart">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-muted">Our Heart</p>
            <h2 id="our-heart" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              For God. For Good. For All.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {HEART.map((item) => (
                <article key={item.title} className="rounded-md border border-white/10 bg-white/[0.06] p-6">
                  <h3 className="text-lg font-semibold text-accent-muted">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">{item.text}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <TextSection
          eyebrow="Get Involved"
          title="Become part of the Hope Football story."
          imageSrc="/images/yakaar-celebration.jpeg"
          imageAlt="Young players celebrating during a football session"
          sectionClassName="bg-neutral-50"
          reverse
        >
          <p>
            Whether you are a coach, player, church, supporter, volunteer, or football fan, there
            are many ways to become part of the Hope Football story.
          </p>
          <BulletList items={INVOLVEMENT} />
        </TextSection>
      </main>

      <CTA title="Get Involved" href="/get-involved" label="Get Involved" />
    </>
  );
}
