"use client";

import clsx from "clsx";
import type { Pass } from "@/data/festival";
import { useMagnetic } from "@/lib/hooks";

export default function PassCard({ pass }: { pass: Pass }) {
  const {
    ref: bookRef,
    onMouseMove: bookMouseMove,
    onMouseLeave: bookMouseLeave,
  } = useMagnetic<HTMLButtonElement>();

  return (
    <div
      className={clsx(
        "flex flex-col border px-7 pt-7.5 pb-7",
        pass.feature ? "border-accent bg-accent/6" : "border-ink/15 bg-transparent"
      )}
    >
      <div className="font-mono text-[11px] tracking-[0.16em] text-ink/50 uppercase">
        {pass.name}
      </div>
      <div className="mt-5.5 mb-5 font-sans text-[56px] leading-none font-extrabold tracking-[-0.02em]">
        {pass.price}
      </div>
      <div className="min-h-19.5 text-sm leading-relaxed text-ink/62">{pass.detail}</div>
      <button
        ref={bookRef}
        type="button"
        aria-label={`Book the ${pass.name}`}
        onMouseMove={bookMouseMove}
        onMouseLeave={bookMouseLeave}
        className={clsx(
          "mt-6.5 border py-3.5 text-center font-mono text-[11px] tracking-[0.16em] uppercase",
          pass.feature
            ? "border-accent bg-accent text-white"
            : "border-ink/25 bg-transparent text-ink"
        )}
      >
        Book
      </button>
    </div>
  );
}
