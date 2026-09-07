"use client";

import Link from "next/link";
import clsx from "clsx";
import { FEATURED_SESSIONS } from "@/data/festival";
import { rowInteractive, rowLabel, rowMeta, rowTitle } from "@/lib/ui";
import { useHoverPeek } from "@/lib/useHoverPeek";

export default function FeaturedSessions() {
  const { hovered, cx, cy, trackCursor, clearHover, hoverRow } = useHoverPeek();
  const peek = FEATURED_SESSIONS.find((s) => s.id === hovered);

  return (
    <section className="px-10 py-27.5 max-[640px]:px-5">
      <div className="mb-12.5 flex items-baseline justify-between">
        <h2 className="m-0 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
          Selected sessions
        </h2>
        <Link
          href="/programme"
          className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase"
        >
          Full programme &rarr;
        </Link>
      </div>
      <div onMouseMove={trackCursor} onMouseLeave={clearHover}>
        {FEATURED_SESSIONS.map((s) => (
          <Link
            key={s.id}
            href="/programme"
            onMouseEnter={() => hoverRow(s.id)}
            onFocus={() => hoverRow(s.id)}
            className={rowInteractive}
          >
            <span className={`${rowLabel} w-15`}>{s.num}</span>
            <span className={`${rowTitle} text-[clamp(24px,3.2vw,44px)]`}>{s.title}</span>
            <span className={`${rowMeta} w-55`}>{s.meta}</span>
          </Link>
        ))}
      </div>
      <div
        aria-hidden
        style={{ left: cx + 26, top: cy - 90 }}
        className={clsx(
          "fixed z-[55] h-37.5 w-62.5 items-end rounded-[20px] bg-[linear-gradient(135deg,var(--color-amber)_0%,var(--color-accent)_48%,#4a1420_100%)] p-5 font-sans text-[19px] leading-tight font-extrabold text-white shadow-[0_30px_60px_-28px_rgba(143,44,52,0.55)]",
          peek ? "flex" : "hidden"
        )}
      >
        {peek ? peek.meta : ""}
      </div>
    </section>
  );
}
