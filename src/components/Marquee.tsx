import { SPEAKERS } from "@/data/festival";

export default function Marquee() {
  const names = SPEAKERS.map((p) => p.name).concat(SPEAKERS.map((p) => p.name));

  return (
    <section
      aria-hidden
      className="overflow-hidden border-t border-b border-ink/12 py-17.5"
    >
      <div className="flex w-max motion-safe:animate-marquee motion-reduce:animate-none">
        {names.map((m, i) => (
          <span
            key={i}
            className="px-7 text-[44px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-ink/82"
          >
            {m} <span className="align-middle text-2xl text-accent">&#9679;</span>
          </span>
        ))}
      </div>
    </section>
  );
}
