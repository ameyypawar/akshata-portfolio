import Image from "next/image";
import { profile, ui } from "@/content/profile";
import { HeroMotion } from "./motion/HeroMotion";
import { AvailabilityPill } from "./Section";

function Avatar() {
  const size = "size-[min(56vw,14rem)] sm:size-[clamp(12rem,22vw,21rem)]";
  if (profile.avatar) {
    return (
      <Image
        src={profile.avatar}
        alt={`3D avatar of ${profile.name.first}`}
        width={880}
        height={880}
        loading="eager"
        fetchPriority="high"
        sizes="(min-width: 640px) 22vw, 56vw"
        className={`${size} object-contain`}
      />
    );
  }
  return (
    <div aria-hidden className={`relative ${size}`}>
      <div className="orb-glow" />
      <div className="orb animate-float size-full">
        <div data-orb-light className="orb-light" />
      </div>
      <div className="orb-floor" />
    </div>
  );
}

export function Hero() {
  return (
    <header id="top" className="relative">
      <HeroMotion>
        <div className="container-page flex min-h-svh flex-col pt-5 pb-8 sm:pt-6 sm:pb-10">
          <div data-hero-fade>
            <nav aria-label="Main">
              <ul className="flex justify-between text-[0.6875rem] font-bold tracking-[0.08em] uppercase sm:text-label sm:font-stretch-expanded">
                {ui.nav.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="link-underline transition-colors hover:text-pink"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center pt-10 sm:pt-6">
            <div data-hero-fade className="mb-6 sm:mb-8">
              <div className="enter">
                <AvailabilityPill />
              </div>
            </div>
            <div data-hero-title>
              <h1 className="enter text-center text-[15.5vw] leading-[0.86] font-black tracking-[-0.045em] text-fog uppercase sm:text-display">
                <span className="block sm:inline">{ui.greeting} </span>
                <span className="block sm:inline">{profile.name.first}</span>
              </h1>
            </div>
            <div
              data-hero-orb-scroll
              className="relative z-10 mt-[2.5vw] sm:-mt-[2.6vw]"
            >
              <div data-hero-orb-pointer>
                <div className="enter [animation-delay:150ms]">
                  <Avatar />
                </div>
              </div>
            </div>
          </div>

          <div
            data-hero-fade
            className="relative z-20 mt-10 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end"
          >
            <div className="enter [animation-delay:250ms]">
              <p className="max-w-[22rem] text-[0.8125rem] leading-snug font-bold tracking-[0.02em] uppercase sm:text-sm">
                {profile.intro}
              </p>
              <p className="text-label mt-3 text-ash uppercase">
                {profile.location} · B.Tech ECS, VIT &apos;
                {profile.classOf.slice(2)}
              </p>
            </div>
            <div className="enter flex flex-col items-start gap-3 [animation-delay:400ms] sm:items-end">
              <a href="#contact" className="pill-cta">
                {ui.contactCta}
              </a>
              <a
                href={profile.links.resume}
                download
                className="text-label link-underline text-ash uppercase hover:text-fog"
              >
                {ui.resumeCta} ↓
              </a>
            </div>
          </div>
        </div>
      </HeroMotion>
    </header>
  );
}
