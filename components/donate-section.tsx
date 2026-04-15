/**
 * Donation CTA — swap the mailto link for a payment URL when ready (Stripe, Enthuse, etc.).
 */
export function DonateSection() {
  return (
    <section
      id="donate"
      className="scroll-mt-20 bg-gradient-to-r from-blue-700 to-blue-500 px-4 py-20 text-center text-white sm:py-24"
    >
      <div className="mx-auto max-w-3xl sm:px-2">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Help bring hope through football</h2>

        <p className="mb-8 text-base text-blue-100 sm:text-lg">
          {`Your support creates opportunities where they're needed most.`}
        </p>

        <a
          href="mailto:hello@hopefootball.org?subject=Donation%20enquiry"
          className="mx-auto flex min-h-14 w-full max-w-md items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-700 transition hover:opacity-95 active:opacity-90 sm:min-h-12 sm:w-auto sm:max-w-none"
        >
          Donate Now
        </a>
      </div>
    </section>
  );
}
