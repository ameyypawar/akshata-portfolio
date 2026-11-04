export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mx-auto max-w-[1600px] px-5 py-20 sm:px-10 sm:py-28"
    >
      <h2
        id={`${id}-heading`}
        className="mb-12 text-[clamp(3rem,10vw,9rem)] leading-[0.85] font-black tracking-[-0.045em] uppercase sm:mb-16"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-line px-3 py-1 text-[0.7rem] font-semibold tracking-[0.06em] text-ash uppercase"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export function ArrowLink({
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
      className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.1em] uppercase transition-colors hover:text-pink"
    >
      {children} <span aria-hidden>↗</span>
    </a>
  );
}
