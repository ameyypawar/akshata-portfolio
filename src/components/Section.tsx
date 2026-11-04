export function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mx-auto max-w-6xl border-t border-line px-6 py-20 sm:py-28"
    >
      <h2
        id={`${id}-heading`}
        className="mb-12 font-mono text-xs tracking-[0.2em] text-rose uppercase"
      >
        {label}
      </h2>
      {children}
    </section>
  );
}

export function TechList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-mist">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-semibold text-rose underline decoration-mulberry underline-offset-4 transition-colors hover:decoration-rose"
    >
      {children}
    </a>
  );
}
