import { BulletList, CTA, PageIntro, TextSection } from "@/components/content-page";

export const metadata = {
  title: "Hope Football Centre",
  description: "A Place for Development, Leadership, and Community.",
};

const BASE = [
  "Football training and development",
  "Leadership and coach education",
  "Community programmes",
  "Educational opportunities",
  "International teams and partnerships",
  "Training events and camps",
] as const;

const COMMUNITY = [
  "Education initiatives",
  "Youth programmes",
  "Leadership development",
  "Community events",
  "Mentoring and support",
] as const;

const FUTURE = [
  "Additional pitches and facilities",
  "Accommodation for teams and volunteers",
  "Classrooms and training spaces",
  "Expanded youth programmes",
  "Community outreach initiatives",
  "Regional leadership training opportunities",
] as const;

const SUPPORT = [
  "Financial giving",
  "Sponsorship",
  "Construction support",
  "Equipment donations",
  "Volunteer involvement",
  "Prayer partnership",
] as const;

export default function HopeCentrePage() {
  return (
    <>
      <PageIntro
        eyebrow="Hope Football Centre"
        title="A Place for Development, Leadership, and Community"
        subtitle="The Hope Football Centre in Senegal is being developed as a long-term hub for football development, leadership training, education, and community impact."
        imageSrc="/images/yakaar-training.jpeg"
        imageAlt="Young footballers seated under a goal in Senegal"
        actions={[{ href: "/get-involved", label: "Support the Hope Football Centre" }]}
      />

      <main className="bg-white">
        <TextSection title="The vision for the Centre is to create a space where young people, coaches, leaders, and communities can grow together.">
          <p>
            The Hope Football Centre in Senegal is being developed as a long-term hub for football
            development, leadership training, education, and community impact.
          </p>
          <p>
            The vision for the Centre is to create a space where young people, coaches, leaders, and
            communities can grow together.
          </p>
        </TextSection>

        <TextSection eyebrow="Why the Centre Matters" title="The Hope Football Centre is designed to strengthen and support the wider mission of Hope Football in West Africa." sectionClassName="bg-neutral-50">
          <p>It will provide a sustainable base for:</p>
          <BulletList items={BASE} />
        </TextSection>

        <TextSection
          eyebrow="A Hub for Leadership Development"
          title="One of the key purposes of the Centre is raising and equipping leaders."
          imageSrc="/images/yakaar-trophy.jpeg"
          imageAlt="Yakaar FC player receiving recognition after football"
        >
          <p>
            We want to create opportunities where local coaches and young leaders can be trained,
            mentored, and empowered to influence their communities positively.
          </p>
        </TextSection>

        <TextSection eyebrow="A Space for Community" title="The Centre is not only about football." sectionClassName="bg-neutral-50">
          <p>We want it to become a welcoming space that serves the wider community through:</p>
          <BulletList items={COMMUNITY} />
        </TextSection>

        <TextSection
          eyebrow="Looking to the Future"
          title="The Hope Football Centre represents a long-term investment in people and community transformation."
          imageSrc="/images/yakaar-hero.jpeg"
          imageAlt="Yakaar FC players and coaches together in Senegal"
        >
          <p>Future plans may include:</p>
          <BulletList items={FUTURE} />
        </TextSection>

        <TextSection eyebrow="Be Part of Building the Future" title="The Hope Football Centre is being developed through prayer, partnership, generosity, and vision." sectionClassName="bg-neutral-50">
          <p>There are many ways to support the project:</p>
          <BulletList items={SUPPORT} />
        </TextSection>
      </main>

      <CTA title="Be Part of Building the Future" href="/get-involved" label="Support the Hope Football Centre" />
    </>
  );
}
