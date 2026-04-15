type SectionBlockProps = {
  title: string;
  content?: string | null;
};

/** Homepage CMS section: title + body with generous spacing. */
export function SectionBlock({ title, content }: SectionBlockProps) {
  if (!content && !title) return null;
  return (
    <section className="border-b border-slate-100 py-20 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
          {title}
        </h2>
        {content ? (
          <p className="mt-6 whitespace-pre-wrap text-base leading-relaxed text-slate-600 sm:text-lg">
            {content}
          </p>
        ) : null}
      </div>
    </section>
  );
}
