import Image from "next/image";
import Link from "next/link";

type StoryBlockProps = {
  id?: string;
};

/** Single featured story — placeholder names per spec. */
export function StoryBlock({ id = "story" }: StoryBlockProps) {
  return (
    <div
      id={id}
      className="grid gap-10 overflow-hidden rounded-2xl bg-neutral-50 ring-1 ring-black/5 lg:grid-cols-2 lg:gap-0"
    >
      <div className="relative min-h-[280px] lg:min-h-full">
        <div className="absolute inset-0 lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80"
            alt="Young players training together on a pitch"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">One story</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
          &ldquo;The pitch became my second home.&rdquo;
        </h2>
        <p className="mt-2 text-sm font-medium text-neutral-500">Amina K., programme participant (name placeholder)</p>
        <p className="mt-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
          When sessions started, I was quiet and unsure. Coaches noticed, kept showing up, and made space
          for everyone. Now I lead warm-ups and help new players settle in—small steps that changed how I
          see myself.
        </p>
        <Link
          href="/donate"
          className="mt-8 inline-flex w-fit min-h-12 items-center rounded-2xl bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Support more stories like this
        </Link>
      </div>
    </div>
  );
}
