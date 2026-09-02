"use client";

import { useState } from "react";
import clsx from "clsx";
import { DAY_TABS, SESSIONS } from "@/data/festival";
import { rowInteractive, rowLabel, rowMeta, rowTitle } from "@/lib/ui";
import { useHoverPeek } from "@/lib/useHoverPeek";

export default function ProgrammeContent() {
  const [day, setDay] = useState("d1");
  const { hovered, cx, cy, trackCursor, clearHover, hoverRow } = useHoverPeek();

  const daySessions = SESSIONS[day];
  const peek = daySessions.find((s) => s.id === hovered);

  return (
    <section className="px-10 pt-37.5 pb-27.5 max-[640px]:px-5">
      <div className="font-mono text-[11px] tracking-[0.2em] text-ink/50 uppercase">
        /programme
      </div>
      <h1 className="mt-6 mb-12.5 font-sans text-[clamp(48px,8vw,120px)] leading-[0.95] font-extrabold break-words max-[480px]:text-[clamp(34px,11vw,120px)]">
        Ninety sessions,
        <br />
        four days.
      </h1>
      <div
        role="tablist"
        aria-label="Festival day"
        className="mb-2.5 flex flex-wrap gap-2.5 border-b border-ink/12 pb-6"
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
                clearHover();
              }}
              className={clsx(
                "border font-mono text-[11px] tracking-[0.14em] uppercase transition-all duration-300",
                "px-4 py-2.5",
                active
                  ? "border-accent bg-accent/7 text-accent"
                  : "border-ink/18 bg-transparent text-ink/60"
              )}
            >
              {d.label}
            </button>
          );
        })}
      </div>
      <div onMouseMove={trackCursor} onMouseLeave={clearHover} role="tabpanel">
        {daySessions.map((s) => (
          <div
            key={s.id}
            onMouseEnter={() => hoverRow(s.id)}
            className={clsx(rowInteractive, "items-start")}
          >
            <span className={`${rowLabel} w-27.5 text-[12px] tracking-normal`}>{s.time}</span>
            <div className="flex-1 max-[640px]:basis-full">
              <div className={`${rowTitle} text-[clamp(22px,2.6vw,34px)] leading-[1.15]`}>
                {s.title}
              </div>
              <div className="mt-2 text-[13px] text-ink/55">{s.people}</div>
            </div>
            <span className={`${rowMeta} w-50`}>
              {s.stage}
              <br />
              {s.lang}
            </span>
          </div>
        ))}
      </div>
      <div
        aria-hidden
        style={{ left: cx + 26, top: cy - 90 }}
        className={clsx(
          "fixed z-[55] h-37.5 w-62.5 items-end rounded-[20px] bg-[linear-gradient(140deg,var(--color-gold),var(--color-magenta)_60%,var(--color-violet))] p-5 font-sans text-[19px] leading-tight font-extrabold text-white shadow-[0_30px_60px_-28px_rgba(242,41,91,0.55)]",
          peek ? "flex" : "hidden"
        )}
      >
        {peek ? `${peek.stage} — ${peek.time}` : ""}
      </div>
    </section>
  );
}
