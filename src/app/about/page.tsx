import type { Metadata } from "next";
import Link from "next/link";
import {
  AUDIENCE_REACH,
  CAPITAL_MEDIA_INFO,
  EDITIONS,
  EXPERIENCE_PILLARS,
  IMPACT_BEYOND,
  VISION_2030,
  VISION_MISSION,
} from "@/data/festival";
import HistoryGallery from "@/components/HistoryGallery";

export const metadata: Metadata = {
  title: "About — Kollam International Literature Festival (KILF 2027)",
  description:
    "Learn about the Kollam International Literature Festival, organized by Capital Media. Discover our vision, mission, cultural and economic impact, and Vision 2030 roadmap.",
};

export default function AboutPage() {
  return (
    <section className="px-10 pt-37.5 pb-27.5 max-[640px]:px-5">
      {/* Page Header */}
      <div className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
        /about kilf 2027
      </div>
      <h1 className="mt-6 mb-8 font-sans text-[clamp(44px,7.5vw,110px)] leading-[0.95] font-black break-words text-accent max-[480px]:text-[clamp(34px,10vw,80px)]">
        Where Literature
        <br />
        Meets the World.
      </h1>
      <p className="mb-14 font-mono text-sm uppercase tracking-widest text-ink/60">
        Organised by Capital Media &bull; Kollam &bull; Kerala &bull; India
      </p>

      {/* 1. About KILF Narrative (PDF Page 2) */}
      <div className="mb-24 grid grid-cols-2 gap-16 border-b border-ink/12 pb-20 max-[860px]:grid-cols-1">
        <div className="font-sans text-[clamp(24px,2.8vw,34px)] leading-[1.3] font-extrabold tracking-[-0.02em] text-ink">
          The <span className="text-accent">Kollam International Literature Festival (KILF)</span> is an international platform that brings together renowned writers, poets, thinkers, artists, publishers, translators, educators, and readers from around the world.
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-ink/75">
          <p>
            Inspired by Kerala&apos;s rich literary heritage, KILF aims to create
            meaningful dialogue between cultures, languages, and generations while
            celebrating the universal power of literature.
          </p>
          <p>
            More than a literary festival, KILF is a movement that promotes
            creativity, knowledge, cultural exchange, and intellectual engagement,
            positioning Kollam as an emerging global destination for literature and the arts.
          </p>
          <p>
            From the shores of the Arabian Sea to the serene Ashtamudi backwaters,
            Kollam has stood for centuries as an ancient port of ideas, trade, and
            trans-oceanic cultural synthesis. KILF revives this spirit as a modern
            waterfront agora of thought.
          </p>
        </div>
      </div>

      {/* 2. Vision & Mission (PDF Page 4) */}
      <div className="mb-24 border-b border-ink/12 pb-20">
        <div className="mb-6 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
          Vision &amp; Mission
        </div>
        <div className="grid grid-cols-2 gap-16 max-[860px]:grid-cols-1">
          <div className="rounded-[28px] border border-accent/20 bg-accent/5 p-8 md:p-10 shadow-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              Our Vision
            </span>
            <h2 className="mt-4 font-sans text-[clamp(26px,2.8vw,38px)] font-extrabold leading-tight text-ink">
              To establish Kollam as an internationally recognised centre for literature, arts, culture, and intellectual exchange.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
              Connecting Kerala&apos;s deep literary heritage with the global community, creating permanent cultural capital for future generations.
            </p>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
              Our Mission
            </span>
            <ul className="mt-6 space-y-4">
              {VISION_MISSION.mission.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white/60 p-4 shadow-xs"
                >
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent text-white font-mono text-xs">
                    0{i + 1}
                  </span>
                  <span className="text-[15px] font-medium leading-normal text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Festival Experience — Beyond Books (PDF Page 7) */}
      <div className="mb-24 border-b border-ink/12 pb-20">
        <div className="mb-6 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
          Festival Experience &bull; Beyond Books
        </div>
        <h2 className="mb-10 font-sans text-[clamp(30px,4vw,50px)] font-extrabold text-ink">
          An Immersive Cultural Landscape
        </h2>
        <div className="grid grid-cols-4 gap-6 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
          {EXPERIENCE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[24px] border border-ink/10 bg-white/50 p-6 shadow-xs"
            >
              <div className="font-mono text-[11px] tracking-wider text-accent uppercase">
                {pillar.tagline}
              </div>
              <h3 className="mt-2 font-sans text-2xl font-bold text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-ink/65">
                {pillar.desc}
              </p>
              <ul className="mt-5 space-y-1.5 border-t border-ink/10 pt-4">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-medium text-ink/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Audience & Reach (PDF Page 8) */}
      <div className="mb-24 border-b border-ink/12 pb-20">
        <div className="mb-6 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
          Audience &amp; Reach
        </div>
        <h2 className="mb-6 font-sans text-[clamp(28px,3.6vw,44px)] font-extrabold text-ink">
          A Festival for Every Generation
        </h2>
        <p className="mb-10 max-w-160 text-[15px] leading-relaxed text-ink/70">
          {AUDIENCE_REACH.summary}
        </p>

        <div className="grid grid-cols-2 gap-12 max-[860px]:grid-cols-1">
          <div className="rounded-[24px] border border-ink/10 bg-white/60 p-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              Primary Audience
            </h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {AUDIENCE_REACH.primaryAudience.map((aud) => (
                <span
                  key={aud}
                  className="rounded-full border border-ink/12 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink"
                >
                  {aud}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-ink/10 bg-white/60 p-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
              Expected Reach &amp; Footfall
            </h3>
            <ul className="mt-6 space-y-3.5">
              {AUDIENCE_REACH.expectedReach.map((reach, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-semibold text-ink">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent/15 text-accent font-mono text-xs">
                    &bull;
                  </span>
                  {reach}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 5. Impact Beyond The Festival (PDF Page 10) */}
      <div className="mb-24 border-b border-ink/12 pb-20">
        <div className="mb-6 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
          Long-Term Legacy
        </div>
        <h2 className="mb-4 font-sans text-[clamp(28px,3.6vw,44px)] font-extrabold text-ink">
          Impact Beyond The Festival
        </h2>
        <p className="mb-10 max-w-170 text-[15px] leading-relaxed text-ink/70">
          {IMPACT_BEYOND.summary}
        </p>

        <div className="grid grid-cols-2 gap-10 max-[860px]:grid-cols-1">
          <div className="rounded-[24px] border border-ink/10 bg-white/60 p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              Cultural Impact
            </div>
            <ul className="mt-5 space-y-3">
              {IMPACT_BEYOND.culturalImpact.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-medium text-ink/85">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent flex-none" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-ink/10 bg-white/60 p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
              Economic Impact
            </div>
            <ul className="mt-5 space-y-3">
              {IMPACT_BEYOND.economicImpact.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-medium text-ink/85">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold flex-none" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 6. Vision 2030 (PDF Page 11) */}
      <div className="mb-24 rounded-[32px] border border-accent/20 bg-[linear-gradient(135deg,rgba(111,31,47,0.06)_0%,rgba(255,255,255,0.8)_100%)] p-8 md:p-14 shadow-sm">
        <div className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
          Strategic Roadmap
        </div>
        <h2 className="mt-2 font-sans text-[clamp(28px,3.8vw,48px)] font-black text-ink">
          {VISION_2030.title}
        </h2>
        <p className="mt-4 max-w-180 text-[16px] leading-relaxed text-ink/80 font-medium">
          {VISION_2030.statement}
        </p>

        <div className="mt-10 border-t border-ink/10 pt-8">
          <div className="font-mono text-xs uppercase tracking-wider text-gold font-bold mb-6">
            Future Strategic Initiatives
          </div>
          <div className="grid grid-cols-2 gap-4 max-[860px]:grid-cols-1">
            {VISION_2030.initiatives.map((init, i) => (
              <div
                key={i}
                className="flex items-start gap-3.5 rounded-xl border border-ink/10 bg-white/80 p-4"
              >
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-white font-mono text-[10px]">
                  {i + 1}
                </span>
                <span className="text-xs font-semibold leading-relaxed text-ink">
                  {init}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. Organised by Capital Media (PDF Page 12) */}
      <div className="mb-24 rounded-[28px] border border-ink/12 bg-white/80 p-8 md:p-12 shadow-sm">
        <div className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
          Leadership &amp; Organisers
        </div>
        <h2 className="mt-2 font-sans text-3xl font-extrabold text-ink">
          {CAPITAL_MEDIA_INFO.title}
        </h2>
        <p className="mt-5 text-[15px] leading-loose text-ink/75 max-w-200">
          {CAPITAL_MEDIA_INFO.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/volunteer"
            className="rounded-full bg-accent px-6 py-3 font-mono text-[11px] tracking-wider text-white uppercase shadow-sm hover:bg-accent/90 transition-colors"
          >
            Partner With Capital Media &rarr;
          </Link>
          <Link
            href="/venue"
            className="rounded-full border border-ink/20 px-6 py-3 font-mono text-[11px] tracking-wider text-ink uppercase hover:border-accent hover:text-accent transition-colors"
          >
            Attend KILF 2027
          </Link>
        </div>
      </div>

      {/* 8. Past Photos / Festival Archive (PDF Pages 13-14) */}
      <div className="mb-24">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
              Festival Archive &bull; PDF Pages 13&ndash;14
            </div>
            <h2 className="mt-1 font-sans text-3xl font-extrabold text-ink">
              Moments from Past Editions
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-6 py-2.5 font-mono text-[11px] tracking-wider text-accent uppercase hover:bg-accent hover:text-white transition-colors"
          >
            <span>Explore Full Photo Gallery &amp; PDF Schedule</span>
            <span>&rarr;</span>
          </Link>
        </div>
        <HistoryGallery />
      </div>

      {/* 9. Festival Editions Timeline */}
      <div className="mt-18 border-t border-ink/12">
        <div className="pt-8 pb-4 font-mono text-xs text-gold uppercase tracking-widest">
          Festival Chronicle
        </div>
        {EDITIONS.map((e) => (
          <div
            key={e.num}
            className="flex flex-wrap items-baseline gap-10 border-b border-ink/12 py-8.5"
          >
            <span className="w-15 flex-none font-mono text-[11px] tracking-[0.14em] text-accent font-bold">
              {e.num}
            </span>
            <span className="w-40 flex-none font-sans text-[34px] font-extrabold tracking-[-0.02em] max-[600px]:w-auto max-[600px]:flex-none text-ink">
              {e.year}
            </span>
            <span className="w-40 flex-none font-sans text-[24px] font-extrabold tracking-[-0.02em] max-[600px]:order-3 max-[600px]:basis-full text-accent">
              {e.city}
            </span>
            <span className="flex-1 text-sm text-ink/65 max-[600px]:order-4 max-[600px]:basis-full">
              {e.note}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
