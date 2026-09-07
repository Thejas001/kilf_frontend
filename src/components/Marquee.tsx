import { SPEAKERS } from "@/data/festival";
import WaveBand from "@/components/WaveBand";

export default function Marquee() {
  const names = SPEAKERS.map((p) => p.name).concat(SPEAKERS.map((p) => p.name));

  return (
    <section aria-hidden className="overflow-hidden">
      <WaveBand />
      <div className="flex w-max items-center bg-paper py-12.5 motion-safe:animate-marquee motion-reduce:animate-none">
        {names.map((m, i) => (
          <span
            key={i}
            className="px-7 text-[44px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-ink/82"
          >
            {m} <span className="align-middle text-2xl text-gold">&#9679;</span>
          </span>
        ))}
      </div>
      <WaveBand flip />
    </section>
  );
}
