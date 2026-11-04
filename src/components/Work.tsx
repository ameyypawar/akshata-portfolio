import { otherWork, projects } from "@/content/profile";
import { ArrowLink, Section, Tags } from "./Section";

export function Work() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" title="Projects">
      {featured && (
        <article
          id={featured.slug}
          className="border-signature grid gap-10 rounded-[2rem] p-7 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
        >
          <div className="flex flex-col">
            <p className="text-signature text-xs font-extrabold tracking-[0.14em] uppercase">
              Flagship project
            </p>
            <h3 className="mt-4 text-[clamp(2.75rem,7vw,6rem)] leading-[0.85] font-black tracking-[-0.045em] uppercase">
              {featured.title}
            </h3>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty sm:text-xl">
              {featured.summary}
            </p>
            <div className="mt-8 lg:mt-auto lg:pt-10">
              <Tags items={featured.tech} />
              {featured.repo && (
                <p className="mt-6">
                  <ArrowLink href={featured.repo}>View the code</ArrowLink>
                </p>
              )}
            </div>
          </div>
          <ul className="space-y-5 leading-relaxed text-ash lg:pt-10">
            {featured.points.map((pt) => (
              <li key={pt} className="flex gap-4">
                <span
                  aria-hidden
                  className="bg-signature mt-2.5 size-1.5 shrink-0 rounded-full"
                />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </article>
      )}

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {rest.map((p) => (
          <article
            key={p.slug}
            id={p.slug}
            className="group flex flex-col rounded-[2rem] border-[1.5px] border-line bg-panel p-7 transition-colors hover:border-pink/60 sm:p-8"
          >
            <h3 className="text-3xl leading-[0.9] font-black tracking-[-0.03em] uppercase sm:text-4xl">
              {p.title}
            </h3>
            <p className="mt-4 leading-relaxed">{p.summary}</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ash">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Tags items={p.tech} />
              {p.repo && (
                <p className="mt-6">
                  <ArrowLink href={p.repo}>View the code</ArrowLink>
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      <h3 className="mt-20 mb-4 text-xs font-extrabold tracking-[0.14em] text-ash uppercase">
        Also on GitHub
      </h3>
      <ul className="divide-y divide-line border-y border-line">
        {otherWork.map((w) => (
          <li key={w.title}>
            <a
              href={w.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-2 py-7 sm:grid-cols-[minmax(0,22rem)_1fr_auto] sm:items-center sm:gap-10"
            >
              <span className="text-2xl font-black tracking-[-0.03em] uppercase transition-colors group-hover:text-pink sm:text-3xl">
                {w.title}
              </span>
              <span className="text-ash">{w.summary}</span>
              <span
                aria-hidden
                className="hidden text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:block"
              >
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
