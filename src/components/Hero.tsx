import Image from "next/image";
import { profile } from "@/content/profile";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Avatar() {
  const size = "size-[clamp(190px,23vw,360px)]";
  if (profile.avatar) {
    return (
      <Image
        src={profile.avatar}
        alt={`3D avatar of ${profile.name.first}`}
        width={880}
        height={880}
        priority
        className={`${size} animate-float object-contain drop-shadow-[0_40px_80px_rgb(240_80_155/0.35)]`}
      />
    );
  }
  return <div aria-hidden className={`orb ${size} animate-float`} />;
}

export function Hero() {
  return (
    <header className="relative mx-auto max-w-[1600px] px-5 pt-6 pb-16 sm:px-10 sm:pb-20">
      <nav aria-label="Main">
        <ul className="flex justify-between text-[0.7rem] font-bold tracking-[0.08em] uppercase sm:justify-around sm:text-xs">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-pink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <h1 className="enter relative mt-10 text-center text-[18vw] leading-[0.82] font-black tracking-[-0.05em] text-fog uppercase sm:mt-8 sm:text-[min(11.4vw,184px)]">
        <span className="block sm:inline">Hi, I&apos;m </span>
        <span className="block sm:inline">{profile.name.first}</span>
      </h1>

      <div className="relative z-10 grid items-start gap-10 sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
        <div className="enter order-2 [animation-delay:250ms] sm:order-1 sm:pt-10">
          <p className="max-w-[21rem] text-sm leading-snug font-bold tracking-[0.02em] uppercase sm:text-[0.95rem]">
            {profile.intro}
          </p>
          <p className="mt-4 text-xs font-semibold tracking-[0.12em] text-ash uppercase">
            {profile.location} · B.Tech ECS, VIT &apos;{profile.classOf.slice(2)}
          </p>
        </div>

        <div className="order-1 -mt-[5vw] justify-self-center sm:order-2 sm:-mt-[3.4vw]">
          <Avatar />
        </div>

        <div className="enter order-3 flex flex-col items-start gap-4 [animation-delay:400ms] sm:items-end sm:pt-10">
          <a
            href={`mailto:${profile.links.email}`}
            className="bg-signature rounded-full px-7 py-3.5 text-sm font-extrabold tracking-[0.06em] text-white uppercase shadow-[0_10px_40px_rgb(240_80_155/0.35)] transition-transform hover:scale-[1.04]"
          >
            Contact me
          </a>
          <a
            href={profile.links.resume}
            download
            className="text-xs font-bold tracking-[0.1em] text-ash uppercase underline-offset-4 transition-colors hover:text-fog hover:underline"
          >
            Download resume ↓
          </a>
        </div>
      </div>
    </header>
  );
}
