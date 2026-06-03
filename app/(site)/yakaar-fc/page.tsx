import { BulletList, CTA, PageIntro, TextSection } from "@/components/content-page";

export const metadata = {
  title: "Yakaar Football Club",
  description: "Bringing Hope Through Football in Senegal.",
};

const MORE_THAN_FOOTBALL = [
  "Building confidence",
  "Developing discipline and character",
  "Creating belonging and community",
  "Raising future leaders",
  "Inspiring hope for the future",
] as const;

const CULTURE = [
  "Respect",
  "Humility",
  "Excellence",
  "Teamwork",
  "Integrity",
  "Care for others",
] as const;

const FUTURE_GOALS = [
  "Expanding youth development programmes",
  "Developing improved facilities",
  "Increasing educational opportunities",
  "Training more local coaches and leaders",
  "Strengthening pathways for player development",
  "Supporting wider community initiatives",
] as const;

const SUPPORT = [
  "Prayer",
  "Financial partnership",
  "Coaching support",
  "Tours and visits",
  "Equipment and resources",
  "Long-term collaboration",
] as const;

export default function YakaarPage() {
  return (
    <>
      <PageIntro
        eyebrow="Yakaar Football Club"
        title="Bringing Hope Through Football in Senegal"
        subtitle="“Yakaar” means hope."
        imageSrc="/images/yakaar-hero.jpeg"
        imageAlt="Yakaar FC players and coaches together in Senegal"
        actions={[{ href: "/get-involved", label: "Support Yakaar FC" }]}
      />

      <main className="bg-white">
        <TextSection
          title="Yakaar Football Club exists to provide young people in Senegal with opportunities to grow."
          imageSrc="/images/yakaar-action.jpeg"
          imageAlt="Young players competing for the ball on a sandy pitch"
        >
          <p>
            Yakaar Football Club exists to provide young people in Senegal with opportunities to grow
            through football, leadership, education, and community.
          </p>
          <p>
            Based in Senegal, the club serves children and young people through coaching, mentoring,
            competition, and relational support — creating an environment where players are known,
            valued, encouraged, and challenged to grow.
          </p>
        </TextSection>

        <TextSection eyebrow="More Than Football" title="Yakaar FC is more than a team." sectionClassName="bg-neutral-50">
          <p>We believe football can be a powerful tool for:</p>
          <BulletList items={MORE_THAN_FOOTBALL} />
          <p>
            Through consistent investment in young people, we aim to create long-term impact both on
            and off the pitch.
          </p>
        </TextSection>

        <TextSection
          eyebrow="What We Do"
          title="Youth football, leadership, education, and community."
          imageSrc="/images/yakaar-training.jpeg"
          imageAlt="Young footballers seated under a goal in Senegal"
        >
          <p>
            <strong>Youth Football Development</strong>
          </p>
          <p>Providing structured football coaching and competitive opportunities for young players.</p>
          <p>
            <strong>Leadership Development</strong>
          </p>
          <p>Training coaches and young leaders to influence others positively.</p>
          <p>
            <strong>Education Support</strong>
          </p>
          <p>Creating pathways and opportunities that encourage learning and personal development.</p>
          <p>
            <strong>Community Engagement</strong>
          </p>
          <p>Building relationships with families, schools, and local communities through football and service.</p>
        </TextSection>

        <TextSection eyebrow="A Club Rooted in Relationships" title="At the heart of Yakaar FC is relationship." sectionClassName="bg-neutral-50">
          <p>Players are not simply athletes — they are young people with stories, dreams, challenges, and potential.</p>
          <p>We seek to create a culture marked by:</p>
          <BulletList items={CULTURE} />
        </TextSection>

        <TextSection
          eyebrow="Looking Ahead"
          title="Yakaar FC continues to grow as both a football club and community initiative."
          imageSrc="/images/yakaar-trophy.jpeg"
          imageAlt="Yakaar FC player receiving recognition after football"
        >
          <p>Future goals include:</p>
          <BulletList items={FUTURE_GOALS} />
        </TextSection>

        <TextSection eyebrow="Partner With Yakaar FC" title="We are always looking for people and organisations who want to support the work." sectionClassName="bg-neutral-50">
          <p>We are always looking for people and organisations who want to support the work through:</p>
          <BulletList items={SUPPORT} />
        </TextSection>
      </main>

      <CTA title="Partner With Yakaar FC" href="/get-involved" label="Support Yakaar FC" />
    </>
  );
}
