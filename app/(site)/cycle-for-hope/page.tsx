import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=2400&q=85";

export const metadata = {
  title: "Cycle for Hope",
  description:
    "Cycle for Hope — riding from Northern Ireland to Spain to raise support for young people through Hope Football Foundation programmes.",
};

export default function CycleForHopePage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* HERO */}
      <section className="relative flex h-[70vh] min-h-[22rem] items-center justify-center overflow-hidden text-center text-white">
        <Image
          src={HERO_IMAGE}
          alt="Cyclists on a road at sunrise — Cycle for Hope"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/60" aria-hidden />

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Cycle for Hope</h1>

          <p className="text-lg text-neutral-200 md:text-xl">
            Riding for young people. Riding for opportunity. Riding for hope.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-lg leading-relaxed text-neutral-700">
          In less than three months, the Cycle for Hope team will set off across Europe, travelling from
          Northern Ireland to Spain.
          <br />
          <br />
          But this is more than a ride.
          <br />
          <br />
          This journey is about creating opportunities for young people through football — supporting
          communities locally and partnering with clubs in Senegal and Congo.
        </p>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-neutral-50 px-6 py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-neutral-900">Why it matters</h2>

        <p className="mx-auto mb-6 max-w-2xl text-neutral-600">
          Across the communities we serve, many young people face challenges that limit their opportunities.
        </p>

        <div className="mx-auto grid max-w-3xl gap-6 text-sm text-neutral-700 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-6 shadow-sm">
            Build confidence
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-6 shadow-sm">
            Form strong relationships
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-6 shadow-sm">
            Develop skills for life
          </div>
        </div>
      </section>

      {/* THE RIDE */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-neutral-900">The journey</h2>

        <p className="text-neutral-600">
          The team will travel thousands of kilometres across Europe, raising awareness and support along the
          way. Every mile represents a commitment to young people and the belief that sport can change lives.
        </p>
      </section>

      {/* DONATE */}
      <section className="bg-gradient-to-r from-sky-800 to-accent px-6 py-24 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Support the journey</h2>

        <p className="mb-8 text-lg text-sky-100">
          Your support creates opportunities where they&apos;re needed most.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/donate"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-sky-800 transition hover:bg-neutral-100"
          >
            Donate Now
          </Link>

          <a
            href="mailto:hello@hopefootball.org?subject=Cycle%20for%20Hope%20%E2%80%94%20Sponsor%20enquiry"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Sponsor the Team
          </a>
        </div>
      </section>
    </main>
  );
}
