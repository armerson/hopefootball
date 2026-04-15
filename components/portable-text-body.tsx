import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const components: Partial<PortableTextComponents> = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-semibold text-slate-900">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mt-4 text-base leading-relaxed text-slate-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 text-lg italic text-slate-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href as string | undefined;
      const rel = href?.startsWith("http") ? "noreferrer noopener" : undefined;
      const target = href?.startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={href}
          rel={rel}
          target={target}
          className="font-medium text-blue-700 underline underline-offset-2"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
  },
};

type PortableTextBodyProps = {
  value: PortableTextBlock[] | null | undefined;
};

/** Renders Sanity block content with readable typography (no prose plugin required). */
export function PortableTextBody({ value }: PortableTextBodyProps) {
  if (!value?.length) return null;
  return (
    <div className="max-w-3xl [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-slate-700 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-slate-700 [&_li]:mt-1">
      <PortableText value={value} components={components} />
    </div>
  );
}
