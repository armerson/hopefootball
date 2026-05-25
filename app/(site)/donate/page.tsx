import Image from "next/image";
import { DonationBox } from "@/components/donation-box";
import ScrollReveal from "@/components/scroll-reveal";

export const metadata = {
  title: "Donate",
  description:
    "Give Hope — support Hope Football Foundation with secure, transparent donations for kit, coaching, and partner clubs.",
};

export default function DonatePage() {
  return (
    <main className="bg-neutral-50">
      <div className="border-b border-black/5 bg-white pt-28 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Donate</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">
            When you give, a child walks on knowing someone chose them.
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <DonationBox />
          </ScrollReveal>
          <ScrollReveal>
            <div className="sticky top-28 space-y-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-soft ring-1 ring-black/5">
                <div className="absolute inset-0">
                  <Image
                    src="/images/yakaar-trophy.jpeg"
                    alt="Yakaar FC player receiving recognition after football"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="rounded-md border border-neutral-200 bg-white p-6 shadow-card sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Why it matters</p>
                <p className="mt-3 text-base font-medium leading-relaxed text-ink sm:text-lg">
                  Coaches text us when a shy player shows up early. That is the work your donation
                  protects—week in, week out, starting with Yakaar FC in Senegal.
                </p>
                <p className="mt-4 text-sm text-neutral-600">James M., programme lead (placeholder)</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
