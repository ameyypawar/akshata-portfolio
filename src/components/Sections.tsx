import {
  beyondCode,
  education,
  experience,
  profile,
  skills,
} from "@/content/profile";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div className="space-y-6 text-xl leading-relaxed text-pretty sm:text-2xl">
          {profile.about.map((para, i) => (
            <p key={para} className={i === 0 ? "text-fog" : "text-ash"}>
              {para}
            </p>
          ))}
        </div>

        <div className="space-y-6">
          {education.map((ed) => (
            <div
              key={ed.school}
              className="rounded-[1.5rem] border-[1.5px] border-line bg-panel p-7"
            >
              <p className="text-xs font-extrabold tracking-[0.14em] text-ash uppercase">
                Education · {ed.when}
              </p>
              <p className="mt-3 text-2xl leading-tight font-black tracking-[-0.02em] uppercase">
                {ed.school}
              </p>
              <p className="mt-2 text-ash">{ed.detail}</p>
              <p className="text-signature mt-4 text-sm font-extrabold tracking-[0.06em] uppercase">
                {ed.score}
              </p>
            </div>
          ))}

          <div className="rounded-[1.5rem] border-[1.5px] border-line p-7">
            <p className="text-xs font-extrabold tracking-[0.14em] text-ash uppercase">
              Beyond code
            </p>
            <p className="mt-3 leading-relaxed">{beyondCode}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="divide-y divide-line border-y border-line">
        {experience.map((e) => (
          <li
            key={e.title}
            className="grid gap-4 py-10 md:grid-cols-[14rem_1fr] md:gap-12"
          >
            <p className="text-xs font-extrabold tracking-[0.14em] text-ash uppercase md:pt-2">
              {e.when}
            </p>
            <div>
              <h3 className="text-2xl leading-tight font-black tracking-[-0.03em] uppercase sm:text-4xl">
                {e.title}
              </h3>
              <p className="text-signature mt-2 inline-block font-bold">
                {e.org}
              </p>
              {e.points.length > 0 && (
                <ul className="mt-5 max-w-3xl space-y-2 leading-relaxed text-ash">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group}>
            <dt className="text-xs font-extrabold tracking-[0.14em] text-ash uppercase">
              {s.group}
            </dt>
            <dd className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-panel px-4 py-2 text-sm font-semibold"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Contact() {
  const { email, github, linkedin, resume } = profile.links;
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-[1600px] px-5 pt-20 pb-16 text-center sm:px-10 sm:pt-28"
    >
      <h2
        id="contact-heading"
        className="text-[clamp(3.5rem,15vw,14rem)] leading-[0.82] font-black tracking-[-0.05em] uppercase"
      >
        Let&apos;s <span className="text-signature">talk</span>
      </h2>
      <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-pretty text-ash">
        {profile.contactNote}
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href={`mailto:${email}`}
          className="bg-signature rounded-full px-8 py-4 text-sm font-extrabold tracking-[0.06em] text-white uppercase shadow-[0_10px_40px_rgb(240_80_155/0.35)] transition-transform hover:scale-[1.04]"
        >
          {email}
        </a>
        <a
          href={resume}
          download
          className="rounded-full border-[1.5px] border-line px-8 py-4 text-sm font-extrabold tracking-[0.06em] uppercase transition-colors hover:border-fog"
        >
          Download resume ↓
        </a>
      </div>
      <ul className="mt-10 flex justify-center gap-8 text-xs font-extrabold tracking-[0.14em] uppercase">
        <li>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ash transition-colors hover:text-pink"
          >
            GitHub ↗
          </a>
        </li>
        <li>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ash transition-colors hover:text-pink"
          >
            LinkedIn ↗
          </a>
        </li>
      </ul>
    </section>
  );
}
