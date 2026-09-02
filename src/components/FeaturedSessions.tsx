"use client";

import Link from "next/link";
import { FEATURED_SESSIONS, ACCENT } from "@/data/festival";
import { rowStyle } from "@/lib/hooks";
import { useHoverPeek } from "@/lib/useHoverPeek";

export default function FeaturedSessions() {
  const { hovered, cx, cy, trackCursor, clearHover, hoverRow } = useHoverPeek();
  const peek = FEATURED_SESSIONS.find((s) => s.id === hovered);

  return (
    <section className="kk-hpad" style={{ padding: "110px 40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 50,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-plex-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(17,17,17,0.5)",
            margin: 0,
          }}
        >
          Selected sessions
        </h2>
        <Link
          href="/programme"
          style={{
            fontFamily: "var(--font-plex-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            cursor: "pointer",
            color: ACCENT,
          }}
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
            className="kk-row-stack"
            style={rowStyle(hovered, s.id, ACCENT)}
          >
            <span
              style={{
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "rgba(17,17,17,0.45)",
                width: 60,
                flex: "0 0 60px",
              }}
            >
              {s.num}
            </span>
            <span
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                fontSize: "clamp(24px,3.2vw,44px)",
                lineHeight: 1.1,
                flex: 1,
              }}
            >
              {s.title}
            </span>
            <span
              style={{
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(17,17,17,0.5)",
                width: 220,
                flex: "0 0 220px",
                textAlign: "right",
              }}
            >
              {s.meta}
            </span>
          </Link>
        ))}
      </div>
      <div
        style={{
          position: "fixed",
          left: cx + 26,
          top: cy - 90,
          width: 250,
          height: 150,
          zIndex: 55,
          pointerEvents: "none",
          borderRadius: 20,
          padding: "18px 20px",
          display: peek ? "flex" : "none",
          alignItems: "flex-end",
          background: "linear-gradient(140deg,#FFC61A,#F2295B 60%,#B02BE0)",
          color: "#FFFFFF",
          fontFamily: "var(--font-archivo), sans-serif",
          fontWeight: 800,
          fontSize: 19,
          lineHeight: 1.2,
          boxShadow: "0 30px 60px -28px rgba(242,41,91,0.55)",
        }}
      >
        {peek ? peek.meta : ""}
      </div>
    </section>
  );
}
