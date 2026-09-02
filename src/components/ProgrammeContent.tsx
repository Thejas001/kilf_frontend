"use client";

import { useState } from "react";
import { ACCENT, DAY_TABS, SESSIONS } from "@/data/festival";
import { rowStyle } from "@/lib/hooks";
import { useHoverPeek } from "@/lib/useHoverPeek";

export default function ProgrammeContent() {
  const [day, setDay] = useState("d1");
  const { hovered, cx, cy, trackCursor, clearHover, hoverRow } = useHoverPeek();

  const daySessions = SESSIONS[day];
  const peek = daySessions.find((s) => s.id === hovered);

  return (
    <section className="kk-hpad" style={{ padding: "150px 40px 110px" }}>
      <div
        style={{
          fontFamily: "var(--font-plex-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(17,17,17,0.5)",
        }}
      >
        /programme
      </div>
      <h1
        className="kk-h1"
        style={{
          fontFamily: "var(--font-archivo), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(48px,8vw,120px)",
          lineHeight: 0.95,
          margin: "24px 0 50px",
        }}
      >
        Ninety sessions,
        <br />
        four days.
      </h1>
      <div
        style={{
          display: "flex",
          gap: 10,
          borderBottom: "1px solid rgba(17,17,17,0.12)",
          paddingBottom: 24,
          marginBottom: 10,
          flexWrap: "wrap",
        }}
      >
        {DAY_TABS.map((d) => {
          const active = day === d.key;
          return (
            <div
              key={d.key}
              onClick={() => {
                setDay(d.key);
                clearHover();
              }}
              style={{
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "10px 16px",
                cursor: "pointer",
                border: active ? `1px solid ${ACCENT}` : "1px solid rgba(17,17,17,0.18)",
                color: active ? ACCENT : "rgba(17,17,17,0.6)",
                background: active ? "rgba(234,31,69,0.07)" : "transparent",
                transition: "all .3s ease",
              }}
            >
              {d.label}
            </div>
          );
        })}
      </div>
      <div onMouseMove={trackCursor} onMouseLeave={clearHover}>
        {daySessions.map((s) => (
          <div
            key={s.id}
            onMouseEnter={() => hoverRow(s.id)}
            className="kk-row-stack"
            style={rowStyle(hovered, s.id, ACCENT, { align: "flex-start", pad: "28px 0" })}
          >
            <span
              style={{
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 12,
                color: "rgba(17,17,17,0.5)",
                width: 110,
                flex: "0 0 110px",
              }}
            >
              {s.time}
            </span>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  fontSize: "clamp(22px,2.6vw,34px)",
                  lineHeight: 1.15,
                }}
              >
                {s.title}
              </div>
              <div style={{ fontSize: 13, color: "rgba(17,17,17,0.55)", marginTop: 8 }}>
                {s.people}
              </div>
            </div>
            <span
              style={{
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(17,17,17,0.5)",
                width: 200,
                flex: "0 0 200px",
                textAlign: "right",
              }}
            >
              {s.stage}
              <br />
              {s.lang}
            </span>
          </div>
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
        {peek ? `${peek.stage} — ${peek.time}` : ""}
      </div>
    </section>
  );
}
