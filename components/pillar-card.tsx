import Image from "next/image";
import Link from "next/link";

export type PillarCardProps = {
  flag: string;
  title: string;
  country: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export function PillarCard({
  flag,
  title,
  country,
  description,
  imageSrc,
  imageAlt,
  href,
}: PillarCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80 transition group-hover:opacity-90" />
        <span className="absolute left-4 top-4 text-2xl drop-shadow-md" aria-hidden>
          {flag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{country}</p>
        <h3 className="mt-1 text-xl font-semibold tracking-tight text-ink sm:text-2xl">{title}</h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition group-hover:gap-2">
          View team
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
