import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";

export default function AboutPreview() {
  return (
    <section className="grid grid-cols-2 items-start gap-20 px-10 pb-27.5 max-[860px]:grid-cols-1 max-[640px]:px-5">
      <div className="relative z-[2] h-140 w-full overflow-hidden rounded-[20px] shadow-[0_40px_80px_-40px_rgba(17,17,17,0.45),0_2px_0_rgba(255,255,255,0.6)]">
        <ImageSlot
          src="https://picsum.photos/seed/kkg-tent/900/1200"
          alt="Reading tent, last edition"
        />
      </div>
      <div>
        <div className="mb-7 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
          About KILF 2027
        </div>
        <h2 className="m-0 mb-6 font-sans text-[32px] leading-[1.3] font-extrabold tracking-[-0.02em] text-ink">
          Connecting Kerala&apos;s literary heritage with the global community.
        </h2>
        <p className="m-0 mb-5 text-[15px] leading-loose text-ink/75">
          The <strong className="text-accent">Kollam International Literature Festival (KILF)</strong> is an international platform that brings together renowned writers, poets, thinkers, artists, publishers, translators, educators, and readers from around the world.
        </p>
        <p className="m-0 mb-5 text-[15px] leading-loose text-ink/75">
          Inspired by Kerala&apos;s rich literary heritage, KILF aims to create meaningful dialogue between cultures, languages, and generations while celebrating the universal power of literature.
        </p>
        <p className="m-0 mb-8 text-[15px] leading-loose text-ink/70">
          More than a literary festival, KILF is a movement that promotes creativity, knowledge, cultural exchange, and intellectual engagement, positioning Kollam as an emerging global destination for literature and the arts. Organised by Capital Media.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-6 py-3 font-mono text-[11px] tracking-[0.14em] text-accent uppercase transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
        >
          <span>Discover Our Vision &amp; Impact</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
