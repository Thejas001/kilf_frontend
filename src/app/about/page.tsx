import type { Metadata } from "next";
import { EDITIONS } from "@/data/festival";
import HistoryGallery from "@/components/HistoryGallery";

export const metadata: Metadata = {
  title: "About — KILF",
};

export default function AboutPage() {
  return (
    <section className="px-10 pt-37.5 pb-27.5 max-[640px]:px-5">
      <div className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
        /about
      </div>
      <h1 className="mt-6 mb-10 font-sans text-[clamp(48px,8vw,120px)] leading-[0.95] font-extrabold break-words text-accent max-[480px]:text-[clamp(34px,11vw,120px)]">
        Kerala’s literary waterfront.
      </h1>
      <div className="mb-22.5 grid grid-cols-2 gap-20 max-[860px]:grid-cols-1">
        <p className="m-0 font-sans text-[30px] leading-[1.35] font-extrabold tracking-[-0.02em]">
          KILF is a public festival for poets, thinkers, translators, and readers
          shaped by Kerala’s living literary traditions, from the coastal margins
          of Kollam to the city’s bookshops and classrooms.
        </p>
        <div>
          <p className="m-0 mb-4.5 text-[15px] leading-loose text-ink/65">
            Since 2021, the festival has brought together the voices of Malayalam
            poetry, criticism, theatre, translation, and essay-writing in a shared
            civic space. The festival’s heart is the public conversation: a reading
            room, a long table, a stage by the water, and a crowd that stays long
            enough to argue with the authors.
          </p>
          <p className="m-0 text-[15px] leading-loose text-ink/65">
            This edition is hosted in Kollam district, a place deeply connected to
            maritime movement, cultural exchange, and the enduring influence of
            Malayalam letters. It is a natural home for a festival that keeps the
            written word open to the sea, the street, and the next generation.
          </p>
        </div>
      </div>

      <HistoryGallery />

      <div className="mt-18 border-t border-ink/12">
        {EDITIONS.map((e) => (
          <div
            key={e.num}
            className="flex flex-wrap items-baseline gap-10 border-b border-ink/12 py-8.5"
          >
            <span className="w-15 flex-none font-mono text-[11px] tracking-[0.14em] text-accent">
              {e.num}
            </span>
            <span className="w-50 flex-none font-sans text-[34px] font-extrabold tracking-[-0.02em] max-[600px]:w-auto max-[600px]:flex-none">
              {e.year}
            </span>
            <span className="flex-1 font-sans text-[26px] font-extrabold tracking-[-0.02em] max-[600px]:order-3 max-[600px]:basis-full">
              {e.city}
            </span>
            <span className="flex-1 text-sm text-ink/55 max-[600px]:order-4 max-[600px]:basis-full">
              {e.note}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
