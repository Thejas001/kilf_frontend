"use client";

import clsx from "clsx";
import { SPEAKERS } from "@/data/festival";
import { rowInteractive, rowLabel, rowMeta, rowTitle } from "@/lib/ui";
import { useHoverPeek } from "@/lib/useHoverPeek";

export default function VoicesContent() {
  const { hovered, cx, cy, trackCursor, clearHover, hoverRow } = useHoverPeek();
  const hoveredSpeaker = SPEAKERS.find((p) => p.id === hovered);

  return (
    <section
      onMouseMove={trackCursor}
      className="px-10 pt-37.5 pb-27.5 max-[640px]:px-5"
    >
      <div className="font-mono text-[11px] tracking-[0.2em] text-ink/50 uppercase">
        /voices
      </div>
      <h1 className="mt-6 mb-5 font-sans text-[clamp(48px,8vw,120px)] leading-[0.95] font-extrabold break-words max-[480px]:text-[clamp(34px,11vw,120px)]">
        Writers, translators,
        <br />
        troublemakers.
      </h1>
      <p className="m-0 mb-15 max-w-130 text-[15px] text-ink/55">
        Hover a name to see them. Forty-two participants across ten
        languages.
      </p>
      <div onMouseLeave={clearHover}>
        {SPEAKERS.map((p, i) => (
          <div
            key={p.id}
            onMouseEnter={() => hoverRow(p.id)}
            className={clsx(rowInteractive, "py-6.5")}
          >
            <span className={`${rowLabel} w-15 text-ink/40`}>
              {(i + 1 < 10 ? "00" : "0") + (i + 1)}
            </span>
            <span className={`${rowTitle} text-[clamp(26px,3.4vw,48px)] leading-[1.05]`}>
              {p.name}
            </span>
            <span className={`${rowMeta} w-70`}>
              {p.role} &mdash; {p.lang}
            </span>
          </div>
        ))}
      </div>
      <div
        aria-hidden
        style={{
          left: cx + 24,
          top: cy - 160,
          backgroundImage: hoveredSpeaker
            ? `url(https://picsum.photos/seed/kkg-face-${hoveredSpeaker.id}/700/900)`
            : undefined,
        }}
        className={clsx(
          "fixed z-[50] h-80 w-60 items-end overflow-hidden rounded-[20px] bg-[#E9E7E4] bg-cover bg-center shadow-[0_40px_70px_-34px_rgba(17,17,17,0.55)] transition-opacity duration-300",
          hoveredSpeaker ? "flex opacity-100" : "hidden opacity-0"
        )}
      >
        <div className="w-full bg-[linear-gradient(to_top,rgba(17,17,17,0.72),transparent)] p-4 px-4 py-3.5 font-sans text-base font-extrabold text-white">
          {hoveredSpeaker ? hoveredSpeaker.name : ""}
        </div>
      </div>
    </section>
  );
}
