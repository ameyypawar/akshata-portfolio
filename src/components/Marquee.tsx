import { skills } from "@/content/profile";

// A slow, endless ticker of everything she works with.
const items = skills.flatMap((s) => s.items).slice(0, 18);

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 sm:px-8">{item}</span>
          <span aria-hidden className="text-signature">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line py-5 text-2xl font-black tracking-[-0.02em] text-ash uppercase sm:py-7 sm:text-4xl">
      <div className="animate-marquee flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
