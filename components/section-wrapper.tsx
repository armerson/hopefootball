type SectionWrapperProps = {
  children: React.ReactNode;
  /** Section label for accessibility */
  "aria-labelledby"?: string;
  className?: string;
  /** Outer section classes (background, borders) */
  sectionClassName?: string;
  id?: string;
};

/**
 * Consistent horizontal rhythm and max width (spec: max-w-6xl, py-20).
 */
export function SectionWrapper({
  children,
  "aria-labelledby": labelledBy,
  className = "",
  sectionClassName = "",
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-20 sm:py-24 ${sectionClassName}`}
    >
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
    </section>
  );
}
