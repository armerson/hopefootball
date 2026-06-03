import { BulletList, CTA, PageIntro, TextSection } from "@/components/content-page";

export const metadata = {
  title: "Cycle for Hope",
  description: "Riding for Hope Since 2009.",
};

const WHY = [
  "Raise awareness of football projects in Africa",
  "Support the long-term development of clubs and leaders",
  "Inspire churches and communities to get involved",
  "Create opportunities for partnership and generosity",
  "Connect people personally to the vision and mission of Hope Football",
] as const;

const HELPED = [
  "Support football projects in Senegal and beyond",
  "Raise funds for facilities, equipment, and leadership development",
  "Build long-term partnerships with churches and supporters",
  "Create opportunities for conversations about faith, football, and mission",
  "Inspire people to use their gifts and passions for a greater purpose",
] as const;

const SUPPORTS = [
  "Football equipment and kits",
  "Youth development programmes",
  "Leadership and coach training",
  "Community outreach initiatives",
  "Facility development",
  "Educational opportunities",
  "The Hope Football Centre in Senegal",
  "Support for local football clubs including Yakaar FC and Elikia FC",
] as const;

const JOIN = [
  "Join an organised ride",
  "Create your own cycling challenge",
  "Fundraise individually or as a team",
  "Sponsor a cyclist",
  "Partner as a church or organisation",
  "Volunteer with events and logistics",
] as const;

export default function CycleForHopePage() {
  return (
    <>
      <PageIntro
        eyebrow="Cycle for Hope"
        title="Riding for Hope Since 2009"
        subtitle="Cycle for Hope is a fundraising and awareness initiative that began in 2009 with a simple vision: to use cycling to support football projects bringing hope and opportunity to young people in Africa."
        imageSrc="/images/yakaar-training.jpeg"
        imageAlt="Young footballers seated under a goal in Senegal"
        actions={[
          { href: "/contact", label: "Register Interest" },
          { href: "/donate", label: "Support Cycle for Hope" },
        ]}
      />

      <main className="bg-white">
        <TextSection title="What started as a single challenge ride has grown into an ongoing movement.">
          <p>
            What started as a single challenge ride has grown into an ongoing movement of people
            using their passion, endurance, and community connections to support football clubs,
            leadership development, and community transformation through Hope Football.
          </p>
        </TextSection>

        <TextSection eyebrow="Why Cycle for Hope Exists" title="Football has the power to open doors, build relationships, and create lasting impact in communities." sectionClassName="bg-neutral-50">
          <p>
            But healthy football clubs and community initiatives require long-term support,
            leadership development, facilities, equipment, and sustainable investment.
          </p>
          <p>Cycle for Hope exists to:</p>
          <BulletList items={WHY} />
          <p>
            Every ride helps support young people, coaches, leaders, and communities through
            football.
          </p>
        </TextSection>

        <TextSection
          eyebrow="More Than a Fundraiser"
          title="Cycle for Hope is about more than cycling."
          imageSrc="/images/yakaar-celebration.jpeg"
          imageAlt="Young players celebrating during a football session"
        >
          <p>
            It is about people coming together around a shared vision of hope, community, and
            transformation.
          </p>
          <p>Over the years, Cycle for Hope has helped:</p>
          <BulletList items={HELPED} />
        </TextSection>

        <TextSection eyebrow="A Journey That Began in 2009" title="Since the first Cycle for Hope ride in 2009, cyclists, supporters, churches, and communities have played an important role." sectionClassName="bg-neutral-50">
          <p>
            Since the first Cycle for Hope ride in 2009, cyclists, supporters, churches, and
            communities have played an important role in helping sustain and grow football-based
            initiatives in Africa.
          </p>
          <p>
            Through every mile ridden and every partnership formed, Cycle for Hope has become part
            of the wider Hope Football story — helping create opportunities for young people to grow,
            belong, and thrive.
          </p>
        </TextSection>

        <TextSection
          eyebrow="What Cycle for Hope Supports"
          title="Funds raised through Cycle for Hope help support areas such as:"
          imageSrc="/images/yakaar-action.jpeg"
          imageAlt="Young players competing for the ball on a sandy pitch"
        >
          <BulletList items={SUPPORTS} />
        </TextSection>

        <TextSection eyebrow="Join the Ride" title="Cycle for Hope is open to anyone who wants to get involved." sectionClassName="bg-neutral-50">
          <p>
            Whether you are an experienced cyclist, a casual rider, a church group, a football club,
            or simply someone who wants to support the vision, there are many ways to participate.
          </p>
          <p>You can:</p>
          <BulletList items={JOIN} />
        </TextSection>

        <TextSection title="Cycling With Purpose">
          <p>Every ride tells a story.</p>
          <p>
            A story of hope. A story of partnership. A story of communities being strengthened
            through football, leadership, and long-term investment in young people.
          </p>
          <p>
            Cycle for Hope is one practical way ordinary people can become part of something bigger
            — helping bring hope to communities through football.
          </p>
        </TextSection>

        <TextSection eyebrow="Get Involved" title="Interested in taking part in Cycle for Hope or organising an event?" sectionClassName="bg-neutral-50">
          <p>We would love to connect with you.</p>
        </TextSection>
      </main>

      <CTA title="Get Involved" href="/contact" label="Contact Us" />
    </>
  );
}
