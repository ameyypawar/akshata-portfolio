import { otherWork, projects } from "@/content/profile";
import { ExternalLink, Section, TechList } from "./Section";

export function Work() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="work" label="Selected work">
      {featured && (
        <article
          id={featured.slug}
          className="grid gap-10 rounded-2xl border border-line bg-surface p-8 sm:p-12 lg:grid-cols-[1fr_1.2fr]"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-mist uppercase">
              Flagship project
            </p>
            <h3 className="mt-3 font-display text-5xl font-medium sm:text-6xl">
              {featured.title}
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-balance">
              {featured.summary}
            </p>
            {featured.repo && (
              <p className="mt-6">
                <ExternalLink href={featured.repo}>View the code ↗</ExternalLink>
              </p>
            )}
          </div>
          <div>
            <ul className="space-y-4 leading-relaxed text-mist">
              {featured.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-rose" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-line pt-5">
              <TechList items={featured.tech} />
            </div>
          </div>
        </article>
      )}

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {rest.map((p) => (
          <article
            key={p.slug}
            id={p.slug}
            className="flex flex-col rounded-2xl border border-line p-7"
          >
            <h3 className="font-display text-3xl font-medium">{p.title}</h3>
            <p className="mt-3 leading-relaxed">{p.summary}</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-mist">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <TechList items={p.tech} />
              {p.repo && (
                <p className="mt-4">
                  <ExternalLink href={p.repo}>View the code ↗</ExternalLink>
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      <h3 className="mt-16 mb-2 font-mono text-xs tracking-[0.2em] text-mist uppercase">
        Also on GitHub
      </h3>
      <ul className="divide-y divide-line border-y border-line">
        {otherWork.map((w) => (
          <li key={w.title}>
            <a
              href={w.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-2 py-6 sm:grid-cols-[14rem_1fr_auto] sm:items-baseline sm:gap-8"
            >
              <span className="font-display text-2xl transition-colors group-hover:text-rose">
                {w.title}
              </span>
              <span className="text-mist">{w.summary}</span>
              <span className="hidden text-lg text-rose sm:block" aria-hidden>
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
