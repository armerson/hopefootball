import { CTA, PageIntro } from "@/components/content-page";
import ScrollReveal from "@/components/scroll-reveal";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata = {
  title: "Get Involved",
  description: "Join the Hope Football Story.",
};

const WAYS = [
  {
    title: "Pray",
    text: "Stand with us in prayer for players, leaders, communities, and future growth.",
  },
  {
    title: "Give",
    text: "Support the long-term sustainability and development of Hope Football clubs and projects.",
  },
  {
    title: "Join a Tour",
    text: "Travel with us to encourage clubs, serve communities, and experience football-based mission firsthand.",
  },
  {
    title: "Volunteer Your Skills",
    text: "Coaching, media, administration, education, mentoring, fundraising, and more.",
  },
  {
    title: "Partner as a Church or Organisation",
    text: "Help support long-term development through strategic partnership and collaboration.",
  },
] as const;

export default function GetInvolvedPage() {
  return (
    <>
      <PageIntro
        eyebrow="Get Involved"
        title="Join the Hope Football Story"
        subtitle="Hope Football is built through people, partnership, and shared vision."
        imageSrc="/images/yakaar-celebration.jpeg"
        imageAlt="Young players celebrating during a football session"
        actions={[
          { href: "/contact", label: "Contact Us" },
          { href: "/donate", label: "Give" },
        ]}
      />

      <main className="bg-white">
        <SectionWrapper aria-labelledby="intro-heading">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="intro-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Whether you are passionate about football, leadership, young people, mission, education, or community development — there is a place for you to get involved.
              </h2>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <SectionWrapper sectionClassName="bg-neutral-50" aria-labelledby="ways-heading">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Ways to Get Involved</p>
            <h2 id="ways-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              People, partnership, and shared vision.
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WAYS.map((way) => (
                <article key={way.title} className="relative overflow-hidden rounded-md border border-neutral-200 bg-white p-6 shadow-card">
                  <span className="absolute right-0 top-0 h-2 w-16 -skew-x-12 bg-accent" aria-hidden />
                  <h3 className="text-lg font-semibold text-ink">{way.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">{way.text}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </SectionWrapper>
      </main>

      <CTA title="Together We Can Build Hope Through Football" href="/contact" label="Contact Us" />
    </>
  );
}
