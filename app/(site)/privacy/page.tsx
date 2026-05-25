import { SectionWrapper } from "@/components/section-wrapper";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for hopefootball.org — operated by Hope Football, a Northern Ireland charity.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white pt-28 pb-20">
      <SectionWrapper aria-labelledby="privacy-heading">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Legal
          </p>
          <h1 id="privacy-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-neutral-500">Last updated: May 2025</p>

          <div className="mt-10 space-y-10 text-base leading-relaxed text-neutral-700">

            <section aria-labelledby="who-heading">
              <h2 id="who-heading" className="text-xl font-semibold text-ink">
                1. Who we are
              </h2>
              <p className="mt-3">
                This website, hopefootball.org, is owned and operated by{" "}
                <strong>Hope Football</strong>, a Northern Ireland charity born in 2026 out of
                Ambassadors Football (Ireland) after 20 years of work in West Africa.
              </p>
              <p className="mt-3">
                You can contact us at{" "}
                <a href="mailto:hello@hopefootball.org" className="text-accent hover:text-accent-muted underline">
                  hello@hopefootball.org
                </a>{" "}
                or by phone on 07739 017 143.
              </p>
            </section>

            <section aria-labelledby="collect-heading">
              <h2 id="collect-heading" className="text-xl font-semibold text-ink">
                2. Information we collect
              </h2>
              <p className="mt-3">We may collect the following information:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Your name and email address when you contact us or donate</li>
                <li>Payment information processed securely via Stripe (we never store card details)</li>
                <li>Basic usage data via analytics to understand how the site is used</li>
              </ul>
            </section>

            <section aria-labelledby="use-heading">
              <h2 id="use-heading" className="text-xl font-semibold text-ink">
                3. How we use your information
              </h2>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>To process donations and send you a receipt</li>
                <li>To respond to your enquiries</li>
                <li>To improve the website and our services</li>
                <li>To keep you updated on our work (only with your consent)</li>
              </ul>
              <p className="mt-3">
                We do not sell, trade, or share your personal data with third parties except as
                required to process payments or comply with the law.
              </p>
            </section>

            <section aria-labelledby="stripe-heading">
              <h2 id="stripe-heading" className="text-xl font-semibold text-ink">
                4. Payments
              </h2>
              <p className="mt-3">
                Donations are processed securely by{" "}
                <a
                  href="https://stripe.com/gb/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-muted underline"
                >
                  Stripe
                </a>
                . We do not store your card details. Stripe&apos;s privacy policy applies to all
                payment transactions.
              </p>
            </section>

            <section aria-labelledby="cookies-heading">
              <h2 id="cookies-heading" className="text-xl font-semibold text-ink">
                5. Cookies
              </h2>
              <p className="mt-3">
                This site may use essential cookies to function correctly. We do not use tracking
                or advertising cookies. By using this site you consent to essential cookies being
                stored on your device.
              </p>
            </section>

            <section aria-labelledby="rights-heading">
              <h2 id="rights-heading" className="text-xl font-semibold text-ink">
                6. Your rights
              </h2>
              <p className="mt-3">
                Under UK data protection law you have the right to access, correct, or request
                deletion of any personal data we hold about you. To exercise these rights, contact
                us at{" "}
                <a href="mailto:hello@hopefootball.org" className="text-accent hover:text-accent-muted underline">
                  hello@hopefootball.org
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="changes-heading">
              <h2 id="changes-heading" className="text-xl font-semibold text-ink">
                7. Changes to this policy
              </h2>
              <p className="mt-3">
                We may update this policy from time to time. The current version will always be
                available at hopefootball.org/privacy.
              </p>
            </section>

          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
