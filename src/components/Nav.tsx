const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-line/60 bg-ink/85 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a
          href="#top"
          className="font-display text-2xl text-rose italic"
          aria-label="Akshata Nalawade, back to top"
        >
          an
        </a>
        <ul className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href} className="hidden sm:block">
              <a href={l.href} className="text-mist transition-colors hover:text-blush">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full border border-line px-4 py-1.5 transition-colors hover:border-rose hover:text-rose"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
