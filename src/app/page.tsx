import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import {
  About,
  BeyondCode,
  Contact,
  Education,
  Experience,
  Skills,
} from "@/components/Sections";
import { Work } from "@/components/Work";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-20 focus:rounded focus:bg-rose focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div id="top" />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Education />
        <BeyondCode />
        <Contact />
      </main>
      <footer className="mx-auto max-w-6xl border-t border-line px-6 py-8 font-mono text-xs text-mist">
        {profile.name.first} {profile.name.last} · {profile.location}
      </footer>
    </>
  );
}
