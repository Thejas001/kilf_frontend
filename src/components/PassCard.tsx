"use client";

import { ACCENT } from "@/data/festival";
import type { Pass } from "@/data/festival";
import { useMagnetic } from "@/lib/hooks";

export default function PassCard({ pass }: { pass: Pass }) {
  const {
    ref: bookRef,
    onMouseMove: bookMouseMove,
    onMouseLeave: bookMouseLeave,
  } = useMagnetic<HTMLDivElement>();

  return (
    <div
      style={{
        border: pass.feature ? `1px solid ${ACCENT}` : "1px solid rgba(17,17,17,0.15)",
        padding: "30px 28px 28px",
        display: "flex",
        flexDirection: "column",
        background: pass.feature ? "rgba(234,31,69,0.06)" : "transparent",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-plex-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(17,17,17,0.5)",
        }}
      >
        {pass.name}
      </div>
      <div
        style={{
          fontFamily: "var(--font-archivo), sans-serif",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          fontSize: 56,
          lineHeight: 1,
          margin: "22px 0 20px",
        }}
      >
        {pass.price}
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(17,17,17,0.62)", minHeight: 78 }}>
        {pass.detail}
      </div>
      <div
        ref={bookRef}
        onMouseMove={bookMouseMove}
        onMouseLeave={bookMouseLeave}
        style={{
          marginTop: 26,
          padding: "14px 0",
          textAlign: "center",
          cursor: "pointer",
          fontFamily: "var(--font-plex-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          background: pass.feature ? ACCENT : "transparent",
          color: pass.feature ? "#FFFFFF" : "#111111",
          border: pass.feature ? `1px solid ${ACCENT}` : "1px solid rgba(17,17,17,0.25)",
        }}
      >
        Book
      </div>
    </div>
  );
}
