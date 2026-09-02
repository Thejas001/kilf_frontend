"use client";

import { ACCENT, SPEAKERS } from "@/data/festival";
import { rowStyle } from "@/lib/hooks";
import { useHoverPeek } from "@/lib/useHoverPeek";

export default function VoicesContent() {
  const { hovered, cx, cy, trackCursor, clearHover, hoverRow } = useHoverPeek();
  const hoveredSpeaker = SPEAKERS.find((p) => p.id === hovered);

  return (
    <section onMouseMove={trackCursor} className="kk-hpad" style={{ padding: "150px 40px 110px" }}>
      <div
        style={{
          fontFamily: "var(--font-plex-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(17,17,17,0.5)",
        }}
      >
        /voices
      </div>
      <h1
        className="kk-h1"
        style={{
          fontFamily: "var(--font-archivo), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(48px,8vw,120px)",
          lineHeight: 0.95,
          margin: "24px 0 20px",
        }}
      >
        Writers, translators,
        <br />
        troublemakers.
      </h1>
      <p style={{ fontSize: 15, color: "rgba(17,17,17,0.55)", maxWidth: 520, margin: "0 0 60px" }}>
        Hover a name to see them. Forty-two participants across ten
        languages.
      </p>
      <div onMouseLeave={clearHover}>
        {SPEAKERS.map((p, i) => (
          <div
            key={p.id}
            onMouseEnter={() => hoverRow(p.id)}
            className="kk-row-stack"
            style={rowStyle(hovered, p.id, ACCENT, { pad: "26px 0" })}
          >
            <span
              style={{
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 11,
                color: "rgba(17,17,17,0.4)",
                width: 60,
                flex: "0 0 60px",
              }}
            >
              {(i + 1 < 10 ? "00" : "0") + (i + 1)}
            </span>
            <span
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                fontSize: "clamp(26px,3.4vw,48px)",
                lineHeight: 1.05,
                flex: 1,
              }}
            >
              {p.name}
            </span>
            <span
              style={{
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(17,17,17,0.5)",
                width: 280,
                flex: "0 0 280px",
                textAlign: "right",
              }}
            >
              {p.role} &mdash; {p.lang}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "fixed",
          left: cx + 24,
          top: cy - 160,
          width: 240,
          height: 320,
          pointerEvents: "none",
          zIndex: 50,
          borderRadius: 20,
          overflow: "hidden",
          backgroundColor: "#E9E7E4",
          backgroundImage: hoveredSpeaker
            ? `url(https://picsum.photos/seed/kkg-face-${hoveredSpeaker.id}/700/900)`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: hoveredSpeaker ? "flex" : "none",
          alignItems: "flex-end",
          boxShadow: "0 40px 70px -34px rgba(17,17,17,0.55)",
          opacity: hoveredSpeaker ? 1 : 0,
          transition: "opacity .3s ease",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "14px 16px",
            background: "linear-gradient(to top, rgba(17,17,17,0.72), transparent)",
            color: "#FFFFFF",
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 800,
            fontSize: 16,
          }}
        >
          {hoveredSpeaker ? hoveredSpeaker.name : ""}
        </div>
      </div>
    </section>
  );
}
