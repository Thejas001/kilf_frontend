import { EXPERIENCE_PILLARS, FESTIVAL_FEATURES } from "@/data/festival";
import Link from "next/link";

export default function FestivalPillars() {
  return (
    <section className="relative px-10 py-24 max-[640px]:px-5">
      {/* 4 Pillars Header */}
      <div className="mb-14">
        <div className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">
          Festival Experience • Beyond Books
        </div>
        <h2 className="mt-2 text-[clamp(32px,5vw,56px)] leading-[1.05] font-black tracking-[-0.03em] text-accent">
          Where Literature Connects With Every Creative Form
        </h2>
        <p className="mt-3 max-w-160 text-[15px] leading-relaxed text-ink/70">
          KILF offers an immersive cultural landscape where prose and poetry converse
          with visual arts, cinematic storytelling, traditional music, and vibrant
          community engagement across the historic port town of Kollam.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-4 gap-6 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
        {EXPERIENCE_PILLARS.map((pillar, idx) => (
          <div
            key={pillar.title}
            className="group relative flex flex-col justify-between rounded-[28px] border border-ink/10 bg-white/60 p-7 shadow-[0_30px_60px_-35px_rgba(17,17,17,0.3)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:bg-white hover:shadow-[0_40px_80px_-30px_rgba(111,31,47,0.25)]"
          >
            <div>
              <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                <span className="font-mono text-xs text-accent uppercase tracking-wider">
                  0{idx + 1}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-gold uppercase">
                  {pillar.tagline}
                </span>
              </div>
              <h3 className="mt-5 font-sans text-2xl font-extrabold text-ink group-hover:text-accent transition-colors">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/65">
                {pillar.desc}
              </p>
            </div>

            <div className="mt-6 border-t border-ink/10 pt-5">
              <ul className="space-y-2">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-ink/80 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* 12 Features Ticker / Box from PDF Page 5 */}
      <div className="mt-20 rounded-[32px] border border-ink/10 bg-[linear-gradient(135deg,rgba(111,31,47,0.06)_0%,rgba(156,122,60,0.08)_100%)] p-8 md:p-12">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-6">
          <div>
            <span className="font-mono text-[10px] tracking-[0.24em] text-accent uppercase">
              Festival Highlights
            </span>
            <h3 className="mt-1 font-sans text-3xl font-black text-ink">
              Three Days of Literature Without Borders
            </h3>
          </div>
          <Link
            href="/programme"
            className="font-mono text-xs tracking-wider text-accent uppercase hover:underline"
          >
            Explore Complete Schedule &rarr;
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {FESTIVAL_FEATURES.map((feat) => (
            <div
              key={feat}
              className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white/70 px-4 py-3 shadow-xs"
            >
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
              <span className="text-[13px] font-semibold text-ink">{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
