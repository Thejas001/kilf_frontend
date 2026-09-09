import type { Metadata } from "next";
import { PASSES } from "@/data/festival";
import ImageSlot from "@/components/ImageSlot";
import PassCard from "@/components/PassCard";

export const metadata: Metadata = {
  title: "Venue & passes — KILF",
};

export default function VenuePage() {
  return (
    <section className="px-10 pt-37.5 pb-27.5 max-[640px]:px-5">
      <div className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
        /venue &amp; passes
      </div>
      <h1 className="mt-6 mb-12.5 font-sans text-[clamp(48px,8vw,120px)] leading-[0.95] font-extrabold break-words text-accent max-[480px]:text-[clamp(34px,11vw,120px)]">
        Karunagappally.
      </h1>
      <div className="border-t border-ink/12 pt-10">
        <div className="mb-7.5 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
          Passes
        </div>
        <div className="grid grid-cols-3 gap-6 max-[860px]:grid-cols-1">
          {PASSES.map((t) => (
            <PassCard key={t.name} pass={t} />
          ))}
        </div>
        <p className="mt-6 text-[13px] text-ink/45">
          Students enter free with a valid ID. Volunteer applications open in
          October.
        </p>
      </div>
      <div className="relative z-[2] mt-17.5 h-[56vh] w-full overflow-hidden rounded-[28px] shadow-[0_40px_80px_-40px_rgba(17,17,17,0.45),0_2px_0_rgba(255,255,255,0.6)]">
        <ImageSlot
          src="https://picsum.photos/seed/kkg-venue/1600/900"
          alt="Venue / aerial of the festival ground"
          sizes="100vw"
        />
      </div>
      <div className="mt-17.5 mb-22.5 grid grid-cols-3 gap-10 max-[860px]:grid-cols-1 max-[860px]:gap-7.5">
        <div>
          <div className="mb-3.5 font-mono text-[11px] tracking-[0.18em] text-ink/45 uppercase">
            Getting there
          </div>
          <p className="m-0 text-[15px] leading-loose text-ink/70">
            Two kilometres from Karunagappally bus stand. Shuttles run every
            twenty minutes from the town square, 08:00&ndash;23:30.
          </p>
        </div>
        <div>
          <div className="mb-3.5 font-mono text-[11px] tracking-[0.18em] text-ink/45 uppercase">
            Six stages
          </div>
          <p className="m-0 text-[15px] leading-loose text-ink/70">
            Sand Stage, The Long Table, Translation Room, Poetry Shed,
            Children&apos;s Yard, and the Late Hall &mdash; open until 01:00.
          </p>
        </div>
        <div>
          <div className="mb-3.5 font-mono text-[11px] tracking-[0.18em] text-ink/45 uppercase">
            Access
          </div>
          <p className="m-0 text-[15px] leading-loose text-ink/70">
            All stages are step-free. Live captioning in the Long Table and
            Translation Room. Quiet room beside the Poetry Shed.
          </p>
        </div>
      </div>
    </section>
  );
}
