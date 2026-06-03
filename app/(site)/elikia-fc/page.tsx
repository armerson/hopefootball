import { BulletList, CTA, PageIntro, TextSection } from "@/components/content-page";

export const metadata = {
  title: "Elikia Football Club",
  description: "Building Hope and Opportunity in Congo.",
};

const VISION = [
  "A trusted community football club",
  "A place of belonging and development",
  "A centre for leadership growth",
  "A platform for positive influence within the community",
] as const;

const DEVELOPMENT = [
  "Confidence",
  "Leadership",
  "Responsibility",
  "Character",
  "Hope for the future",
] as const;

const GROWTH = [
  "Expand youth teams and programmes",
  "Develop facilities and infrastructure",
  "Train more coaches and leaders",
  "Build educational and community partnerships",
  "Create opportunities for wider community impact",
] as const;

export default function ElikiaPage() {
  return (
    <>
      <PageIntro
        eyebrow="Elikia Football Club"
        title="Building Hope and Opportunity in Congo"
        subtitle="“Elikia” means hope."
        imageSrc="/images/yakaar-celebration.jpeg"
        imageAlt="Young players celebrating during a football session"
        actions={[{ href: "/get-involved", label: "Partner With Elikia FC" }]}
      />

      <main className="bg-white">
        <TextSection title="Elikia Football Club exists to serve young people and communities in the Republic of Congo.">
          <p>
            Elikia Football Club exists to serve young people and communities in the Republic of
            Congo through football, leadership development, and community engagement.
          </p>
          <p>
            In partnership with local leaders and organisations, Elikia FC seeks to build a healthy
            football culture that develops both players and people.
          </p>
        </TextSection>

        <TextSection eyebrow="Our Vision for Congo" title="Football has the power to unite communities." sectionClassName="bg-neutral-50">
          <p>
            We believe football has the power to unite communities, inspire young people, and create
            opportunities for long-term transformation.
          </p>
          <p>Elikia FC aims to become:</p>
          <BulletList items={VISION} />
        </TextSection>

        <TextSection
          eyebrow="Developing Young People"
          title="Football provides structure, discipline, teamwork, and opportunity."
          imageSrc="/images/yakaar-action.jpeg"
          imageAlt="Young players competing for the ball on a sandy pitch"
        >
          <p>
            Through coaching, mentoring, and community involvement, Elikia FC seeks to help young
            people grow in:
          </p>
          <BulletList items={DEVELOPMENT} />
        </TextSection>

        <TextSection eyebrow="Building Local Leadership" title="One of the long-term goals of Elikia FC is to strengthen local leadership and ownership." sectionClassName="bg-neutral-50">
          <p>
            We want to equip local coaches, mentors, and leaders who can sustainably develop the club
            and influence future generations.
          </p>
        </TextSection>

        <TextSection
          eyebrow="Partnership and Growth"
          title="Elikia FC is part of the wider Hope Football network."
          imageSrc="/images/yakaar-training.jpeg"
          imageAlt="Young footballers seated under a goal in Senegal"
        >
          <p>
            Elikia FC is part of the wider Hope Football network, receiving support, encouragement,
            training, and partnership from Hope Football and international supporters.
          </p>
          <p>As the club grows, we hope to:</p>
          <BulletList items={GROWTH} />
        </TextSection>

        <TextSection eyebrow="Join the Journey" title="We believe the future of Elikia FC will be built through partnership, prayer, and people willing to invest in young lives." sectionClassName="bg-neutral-50">
          <p>
            We believe the future of Elikia FC will be built through partnership, prayer, and people
            willing to invest in young lives.
          </p>
        </TextSection>
      </main>

      <CTA title="Join the Journey" href="/get-involved" label="Partner With Elikia FC" />
    </>
  );
}
