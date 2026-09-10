"use client";

import { useState } from "react";
import clsx from "clsx";
import { DAY_TABS, FESTIVAL_FEATURES, SESSIONS } from "@/data/festival";
import { rowInteractive, rowLabel, rowMeta, rowTitle } from "@/lib/ui";
import { useHoverPeek } from "@/lib/useHoverPeek";

export default function ProgrammeContent() {
  const [day, setDay] = useState("d1");
  const [stageFilter, setStageFilter] = useState("All");
  const { hovered, cx, cy, trackCursor, clearHover, hoverRow } = useHoverPeek();

  const allDaySessions = SESSIONS[day] || [];
  const stages = ["All", ...Array.from(new Set(allDaySessions.map((s) => s.stage)))];

  const daySessions =
    stageFilter === "All"
      ? allDaySessions
      : allDaySessions.filter((s) => s.stage === stageFilter);

  const peek = daySessions.find((s) => s.id === hovered);

  return (
    <section className="px-10 pt-37.5 pb-27.5 max-[640px]:px-5">
      {/* Header (PDF Page 5) */}
      <div className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
        /programme &bull; kilf 2027
      </div>
      <h1 className="mt-6 mb-4 font-sans text-[clamp(44px,7.5vw,110px)] leading-[0.95] font-black break-words text-accent max-[480px]:text-[clamp(34px,10vw,80px)]">
        Three Days of
        <br />
        Literature Without Borders.
      </h1>
      <p className="m-0 mb-10 max-w-180 text-[16px] leading-relaxed text-ink/75 font-medium">
        A vibrant celebration where literature, cinema, music, art, culture, and ideas converge
        to inspire meaningful conversations. Featuring 100+ International &amp; Indian Authors
        across six dedicated stages in Kollam, Kerala.
      </p>

      {/* PDF Page 5 Features Overview */}
      <div className="mb-10 rounded-[28px] border border-ink/10 bg-white/60 p-6 md:p-8 backdrop-blur-sm shadow-xs">
        <div className="font-mono text-[11px] tracking-[0.18em] text-gold uppercase font-bold mb-4">
          KILF 2027 Highlights &bull; Three Days of Cultural Immersion
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {FESTIVAL_FEATURES.map((feat) => (
            <div
              key={feat}
              className="flex items-center gap-2.5 rounded-xl border border-ink/10 bg-white px-3.5 py-2.5 text-xs font-semibold text-ink"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>



      {/* Day Selector Tabs */}
      <div
        role="tablist"
        aria-label="Festival day"
        className="mb-4 flex flex-wrap gap-2.5 border-b border-ink/12 pb-6"
      >
        {DAY_TABS.map((d) => {
          const active = day === d.key;
          return (
            <button
              key={d.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setDay(d.key);
                setStageFilter("All");
                clearHover();
              }}
              className={clsx(
                "rounded-full border font-mono text-[11px] tracking-[0.14em] uppercase transition-all duration-300 px-5 py-2.5",
                active
                  ? "border-accent bg-accent text-white shadow-xs"
                  : "border-ink/20 bg-white/40 text-ink/70 hover:border-accent hover:text-ink"
              )}
            >
              {d.label}
            </button>
          );
        })}
      </div>

      {/* Stage Filter Sub-tabs */}
      {stages.length > 1 && (
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-ink/45 mr-2">
            Filter Stage:
          </span>
          {stages.map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setStageFilter(st)}
              className={clsx(
                "rounded-md px-3 py-1 font-mono text-[10px] tracking-wider uppercase transition-colors",
                stageFilter === st
                  ? "bg-accent/15 text-accent font-bold"
                  : "text-ink/60 hover:text-ink"
              )}
            >
              {st}
            </button>
          ))}
        </div>
      )}

      {/* Sessions Table */}
      <div onMouseMove={trackCursor} onMouseLeave={clearHover} role="tabpanel">
        {daySessions.map((s) => (
          <div
            key={s.id}
            onMouseEnter={() => hoverRow(s.id)}
            className={clsx(rowInteractive, "items-start py-8")}
          >
            <span className={`${rowLabel} w-24 text-[13px] font-mono text-accent font-bold tracking-normal`}>
              {s.time}
            </span>
            <div className="flex-1 max-[640px]:basis-full">
              {s.type && (
                <span className="mb-1.5 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-accent font-bold">
                  {s.type}
                </span>
              )}
              <div className={`${rowTitle} text-[clamp(22px,2.6vw,34px)] leading-[1.15]`}>
                {s.title}
              </div>
              <div className="mt-2 text-[14px] font-medium text-ink/80">{s.people}</div>
              {s.desc && (
                <p className="mt-2 text-[13px] leading-relaxed text-ink/60 max-w-180">
                  {s.desc}
                </p>
              )}
            </div>
            <span className={`${rowMeta} w-60 text-right max-[640px]:text-left max-[640px]:mt-3`}>
              <span className="font-bold text-ink">{s.stage}</span>
              <br />
              <span className="text-gold">{s.lang}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Floating Stage / Session Indicator */}
      <div
        aria-hidden
        style={{ left: cx + 26, top: cy - 90 }}
        className={clsx(
          "fixed z-[55] h-37.5 w-68 items-end rounded-[20px] bg-[linear-gradient(135deg,var(--color-amber)_0%,var(--color-accent)_48%,#4a1420_100%)] p-5 font-sans text-[17px] leading-tight font-extrabold text-white shadow-[0_30px_60px_-28px_rgba(143,44,52,0.55)]",
          peek ? "flex" : "hidden"
        )}
      >
        {peek ? `${peek.stage} — ${peek.time}` : ""}
      </div>
    </section>
  );
}
