import { profile, projects } from "@/content/profile";

const coverLines = projects.slice(0, 3);

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[min(calc(100dvh-4rem),60rem)] max-w-6xl flex-col justify-between gap-12 px-6 pt-10 pb-14 sm:pt-16">
      <p className="fade-up font-mono text-xs tracking-[0.18em] text-mist uppercase">
        {profile.location} · {profile.role} · VIT, class of {profile.classOf}
      </p>

      <h1 className="font-display text-[clamp(4.25rem,16vw,13.5rem)] leading-[0.86] font-medium tracking-[-0.02em]">
        <span className="block overflow-hidden pb-[0.06em]">
          <span className="rise">{profile.name.first}</span>
        </span>
        <span className="block overflow-hidden pb-[0.1em] text-rose italic">
          <span className="rise [animation-delay:120ms]">{profile.name.last}</span>
        </span>
      </h1>

      <div className="grid gap-10 border-t border-line pt-8 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <div className="fade-up [animation-delay:500ms]">
          <p className="font-display text-2xl leading-snug text-balance italic sm:text-3xl">
            “{profile.thesis}”
          </p>
          <p className="mt-4 max-w-md text-mist">
            Full-stack web, applied machine learning, and conversational AI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.links.email}`}
              className="rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-blush"
            >
              Email Akshata
            </a>
            <a
              href={profile.links.resume}
              download
              className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold transition-colors hover:border-rose hover:text-rose"
            >
              Download resume ↓
            </a>
            <span className="flex gap-5 pl-2 font-mono text-xs">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mist transition-colors hover:text-rose"
              >
                GitHub ↗
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mist transition-colors hover:text-rose"
              >
                LinkedIn ↗
              </a>
            </span>
          </div>
        </div>

        <nav
          aria-label="Featured projects"
          className="fade-up [animation-delay:700ms]"
        >
          <p className="font-mono text-xs tracking-[0.2em] text-rose uppercase">
            Inside
          </p>
          <ul className="mt-4 divide-y divide-line">
            {coverLines.map((p) => (
              <li key={p.slug}>
                <a
                  href={`#${p.slug}`}
                  className="group block py-4 first:pt-2"
                >
                  <span className="font-mono text-[0.7rem] tracking-[0.18em] text-mist uppercase">
                    {p.title}
                  </span>
                  <span className="mt-1 block font-display text-xl leading-snug transition-colors group-hover:text-rose sm:text-2xl">
                    {p.kicker}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
