"use client";

import { ACCENT, JOURNAL } from "@/data/festival";
import { rowStyle } from "@/lib/hooks";
import { useHoverPeek } from "@/lib/useHoverPeek";

export default function JournalContent() {
  const { hovered, clearHover, hoverRow } = useHoverPeek();

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
        /journal
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
        Notes between
        <br />
        editions.
      </h1>
      <div onMouseLeave={clearHover}>
        {JOURNAL.map((j) => (
          <div
            key={j.id}
            onMouseEnter={() => hoverRow(j.id)}
            style={rowStyle(hovered, j.id, ACCENT, { align: "flex-start", pad: "30px 0" })}
            className="journal-row"
          >
            <span
              className="j-date"
              style={{
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 11,
                color: "rgba(17,17,17,0.45)",
                width: 130,
                flex: "0 0 130px",
              }}
            >
              {j.date}
            </span>
            <div
              className="j-thumb"
              style={{
                flex: "0 0 150px",
                width: 150,
                height: 100,
                borderRadius: 20,
                overflow: "hidden",
                backgroundImage: `url(https://picsum.photos/seed/kkg-${j.id}/600/400)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 20px 40px -24px rgba(17,17,17,0.4)",
                transform: hovered === j.id ? "scale(1.04)" : "scale(1)",
                transition: "transform .5s cubic-bezier(.16,1,.3,1)",
              }}
            />
            <div className="j-body" style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  fontSize: "clamp(24px,2.8vw,38px)",
                  lineHeight: 1.15,
                }}
              >
                {j.title}
              </div>
              <div style={{ fontSize: 14, color: "rgba(17,17,17,0.55)", marginTop: 8, maxWidth: 620 }}>
                {j.excerpt}
              </div>
            </div>
            <span
              className="j-kind"
              style={{
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(17,17,17,0.45)",
                width: 120,
                flex: "0 0 120px",
                textAlign: "right",
              }}
            >
              {j.kind}
            </span>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 700px) {
          .journal-row { flex-wrap: wrap; }
          .j-thumb { width: 100% !important; flex: 1 1 100% !important; height: 160px !important; order: 1; }
          .j-date { order: 2; width: auto !important; flex: 0 0 auto !important; }
          .j-kind { order: 2; margin-left: auto; width: auto !important; flex: 0 0 auto !important; }
          .j-body { order: 3; flex: 1 1 100% !important; width: 100% !important; margin-top: 6px; }
        }
      `}</style>
    </section>
  );
}
