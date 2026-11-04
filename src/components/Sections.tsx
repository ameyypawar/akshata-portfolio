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
    <Section id="about" label="About">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <p className="font-display text-3xl leading-tight text-balance sm:text-4xl">
          Engineering student at {profile.school}, building across{" "}
          <em className="text-rose">web, AI, and the cloud.</em>
        </p>
        <div className="space-y-5 text-lg leading-relaxed text-mist">
          {profile.about.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" label="Experience & training">
      <ol className="divide-y divide-line border-y border-line">
        {experience.map((e) => (
          <li
            key={e.title}
            className="grid gap-3 py-8 sm:grid-cols-[12rem_1fr] sm:gap-10"
          >
            <p className="font-mono text-xs tracking-[0.12em] text-mist uppercase sm:pt-2">
              {e.when}
            </p>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl">{e.title}</h3>
              <p className="mt-1 text-rose">{e.org}</p>
              {e.points.length > 0 && (
                <ul className="mt-4 space-y-2 leading-relaxed text-mist">
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
    <Section id="skills" label="Skills">
      <dl className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group}>
            <dt className="font-display text-xl italic">{s.group}</dt>
            <dd className="mt-3 leading-relaxed text-mist">
              {s.items.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" label="Education">
      <ul className="space-y-8">
        {education.map((ed) => (
          <li
            key={ed.school}
            className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
          >
            <div>
              <h3 className="font-display text-2xl">{ed.school}</h3>
              <p className="mt-1 text-mist">{ed.detail}</p>
            </div>
            <p className="font-mono text-sm text-mist sm:text-right">
              {[ed.when, ed.score].filter(Boolean).join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function BeyondCode() {
  return (
    <Section id="beyond" label="Beyond code">
      <blockquote className="max-w-4xl font-display text-3xl leading-snug text-balance italic sm:text-4xl">
        {beyondCode}
      </blockquote>
    </Section>
  );
}

export function Contact() {
  const { email, github, linkedin, resume } = profile.links;
  return (
    <Section id="contact" label="Contact">
      <p className="max-w-xl text-lg leading-relaxed text-pretty text-mist">
        {profile.contactNote}
      </p>
      <a
        href={`mailto:${email}`}
        className="mt-6 block font-display text-[clamp(1.6rem,5.5vw,4.5rem)] leading-tight break-words text-blush transition-colors hover:text-rose"
      >
        {email}
      </a>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
        <li>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose hover:text-blush"
          >
            GitHub ↗
          </a>
        </li>
        {linkedin && (
          <li>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose hover:text-blush"
            >
              LinkedIn ↗
            </a>
          </li>
        )}
        <li>
          <a href={resume} download className="text-rose hover:text-blush">
            Download resume ↓
          </a>
        </li>
      </ul>
    </Section>
  );
}
