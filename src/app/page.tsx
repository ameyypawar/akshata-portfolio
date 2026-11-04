import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About, Contact, Experience, Skills } from "@/components/Sections";
import { Work } from "@/components/Work";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-20 focus:rounded-full focus:bg-pink focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Hero />
      <main id="main">
        <Marquee />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="mx-auto flex max-w-[1600px] flex-wrap justify-between gap-2 border-t border-line px-5 py-8 text-[0.7rem] font-bold tracking-[0.12em] text-ash uppercase sm:px-10">
        <span>
          {profile.name.first} {profile.name.last}
        </span>
        <span>{profile.location}</span>
      </footer>
    </>
  );
}
