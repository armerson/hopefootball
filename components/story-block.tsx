import Image from "next/image";
import Link from "next/link";

type StoryBlockProps = {
  id?: string;
};

export function StoryBlock({ id = "story" }: StoryBlockProps) {
  return (
    <div
      id={id}
      className="grid gap-10 overflow-hidden rounded-md bg-neutral-50 ring-1 ring-black/5 lg:grid-cols-2 lg:gap-0"
    >
      <div className="relative min-h-[280px] lg:min-h-full">
        <div className="absolute inset-0 lg:min-h-full">
          <Image
            src="/images/yakaar-celebration.jpeg"
            alt="Young players celebrating during a football session"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why it matters</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
          A football project can become the safest hour of the week.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
          The goal is not only a match day or a new shirt. It is a dependable place where young people
          are expected, encouraged, challenged, and known by name. Football gives the invitation;
          consistent leadership gives it weight.
        </p>
        <Link
          href="/donate"
          className="mt-8 inline-flex min-h-12 w-fit items-center rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Support more stories like this
        </Link>
      </div>
    </div>
  );
}
