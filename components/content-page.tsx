import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/section-wrapper";

type Action = {
  href: string;
  label: string;
};

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  actions?: Action[];
};

type TextSectionProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  sectionClassName?: string;
  reverse?: boolean;
};

type Card = {
  title: string;
  text: string;
  href?: string;
  cta?: string;
};

const actionClass =
  "inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:bg-accent-muted";

const outlineActionClass =
  "inline-flex min-h-12 items-center justify-center rounded-md border border-white/45 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10";

export function PageIntro({
  eyebrow,
  title,
  subtitle,
  imageSrc = "/images/yakaar-training.jpeg",
  imageAlt = "Young footballers at a Hope Football session",
  actions = [],
}: PageIntroProps) {
  return (
    <section className="relative flex min-h-[34rem] items-end overflow-hidden bg-ink pt-28 text-white">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/25" aria-hidden />
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-accent" aria-hidden />
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/75">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle ? <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/82 sm:text-lg">{subtitle}</p> : null}
        {actions.length ? (
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {actions.map((action, index) => (
              <Link key={action.href} href={action.href} className={index === 0 ? actionClass : outlineActionClass}>
                {action.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function TextSection({
  eyebrow,
  title,
  children,
  imageSrc,
  imageAlt = "",
  sectionClassName = "bg-white",
  reverse = false,
}: TextSectionProps) {
  const hasImage = Boolean(imageSrc);

  return (
    <SectionWrapper sectionClassName={sectionClassName} aria-labelledby={title.toLowerCase().replaceAll(" ", "-")}>
      <div className={`grid gap-10 lg:items-center ${hasImage ? "lg:grid-cols-2" : ""}`}>
        <div className={reverse ? "lg:order-2" : ""}>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          ) : null}
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-neutral-700 sm:text-lg">{children}</div>
        </div>
        {hasImage ? (
          <div className={`relative min-h-[20rem] overflow-hidden rounded-md shadow-card ring-1 ring-black/5 ${reverse ? "lg:order-1" : ""}`}>
            <Image
              src={imageSrc as string}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ) : null}
      </div>
    </SectionWrapper>
  );
}

export function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3" role="list">
      {items.map((item) => (
        <li key={item} className="relative pl-5">
          <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CardGrid({ cards }: { cards: readonly Card[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {cards.map((card) => {
        const body = (
          <article className="relative h-full overflow-hidden rounded-md border border-neutral-200 bg-white p-6 shadow-card transition hover:border-accent/30 hover:shadow-soft">
            <span className="absolute right-0 top-0 h-2 w-16 -skew-x-12 bg-accent" aria-hidden />
            <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">{card.text}</p>
            {card.cta ? <p className="mt-5 text-sm font-semibold text-accent">{card.cta}</p> : null}
          </article>
        );

        return card.href ? (
          <Link key={card.title} href={card.href} className="block">
            {body}
          </Link>
        ) : (
          <div key={card.title}>{body}</div>
        );
      })}
    </div>
  );
}

export function CTA({
  title,
  body,
  href = "/contact",
  label = "Contact Us",
}: {
  title: string;
  body?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {body ? <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">{body}</p> : null}
        <Link href={href} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent-muted">
          {label}
        </Link>
      </div>
    </section>
  );
}
