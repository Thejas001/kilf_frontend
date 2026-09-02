import type { Metadata } from "next";
import { ACCENT, EDITIONS } from "@/data/festival";

export const metadata: Metadata = {
  title: "About — KaKhaGa",
};

export default function AboutPage() {
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
        /about
      </div>
      <h1
        className="kk-h1"
        style={{
          fontFamily: "var(--font-archivo), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(48px,8vw,120px)",
          lineHeight: 0.95,
          margin: "24px 0 40px",
        }}
      >
        ക ഖ ഗ
      </h1>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 90 }}
        className="about-grid"
      >
        <p
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            fontSize: 30,
            lineHeight: 1.35,
            margin: 0,
          }}
        >
          Ka, kha, ga. The first three letters a Malayali child learns to
          write, and the smallest possible name for a festival about
          beginnings.
        </p>
        <div>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(17,17,17,0.65)", margin: "0 0 18px" }}>
            We started in a rented hall in Thrissur with eleven translators
            and no budget. The idea was narrow: put writers who work between
            languages in the same room and let the audience listen in.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(17,17,17,0.65)", margin: 0 }}>
            The festival has grown, but the shape has not changed. No
            keynote stages, no closed rooms, no session longer than an
            hour. Everything happens in public.
          </p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(17,17,17,0.12)" }}>
        {EDITIONS.map((e) => (
          <div
            key={e.num}
            className="edition-row"
            style={{
              display: "flex",
              gap: 40,
              alignItems: "baseline",
              padding: "34px 0",
              borderBottom: "1px solid rgba(17,17,17,0.12)",
              flexWrap: "wrap",
            }}
          >
            <span
              className="e-num"
              style={{
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                color: ACCENT,
                width: 60,
                flex: "0 0 60px",
              }}
            >
              {e.num}
            </span>
            <span
              className="e-year"
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                fontSize: 34,
                width: 200,
                flex: "0 0 200px",
              }}
            >
              {e.year}
            </span>
            <span
              className="e-city"
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                fontSize: 26,
                flex: 1,
              }}
            >
              {e.city}
            </span>
            <span className="e-note" style={{ fontSize: 14, color: "rgba(17,17,17,0.55)", flex: 1 }}>{e.note}</span>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .e-year { width: auto !important; flex: 0 0 auto !important; }
          .e-city { flex: 1 1 100% !important; order: 3; }
          .e-note { flex: 1 1 100% !important; order: 4; }
        }
      `}</style>
    </section>
  );
}
