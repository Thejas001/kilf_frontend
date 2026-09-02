"use client";

import { useMagnetic } from "@/lib/hooks";
import { ACCENT } from "@/data/festival";

export default function Footer() {
  const {
    ref: joinRef,
    onMouseMove: joinMouseMove,
    onMouseLeave: joinMouseLeave,
  } = useMagnetic<HTMLDivElement>();

  return (
    <footer
      className="kk-hpad"
      style={{
        background: "#0E0E0E",
        color: "#F4F3F1",
        padding: "96px 40px 40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1.4fr",
          gap: 50,
        }}
        className="footer-grid"
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-noto-malayalam), serif",
              fontSize: 40,
              lineHeight: 1,
              letterSpacing: "0.04em",
              marginBottom: 20,
            }}
          >
            ക ഖ ഗ
          </div>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: "rgba(244,243,241,0.55)",
              maxWidth: 280,
              margin: 0,
            }}
          >
            The Mirror Mind Literature Festival. Fourth edition, 15&ndash;18
            January 2027, Karunagappally.
          </p>
        </div>
        <div>
          <div className="footer-heading">Festival</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
            <a className="footer-link" href="/programme">Programme</a>
            <a className="footer-link" href="/voices">Voices</a>
            <a className="footer-link" href="/venue">Venue &amp; passes</a>
          </div>
        </div>
        <div>
          <div className="footer-heading">More</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
            <a className="footer-link" href="/journal">Journal</a>
            <a className="footer-link" href="/about">About</a>
            <a className="footer-link" href="#">Volunteer</a>
          </div>
        </div>
        <div>
          <div className="footer-heading">Programme drops in October</div>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              placeholder="your email"
              style={{
                flex: 1,
                padding: "13px 16px",
                background: "transparent",
                border: "1px solid rgba(244,243,241,0.24)",
                color: "#F4F3F1",
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 12,
                outline: "none",
              }}
            />
            <div
              ref={joinRef}
              onMouseMove={joinMouseMove}
              onMouseLeave={joinMouseLeave}
              style={{
                padding: "13px 20px",
                background: ACCENT,
                color: "#FFFFFF",
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "transform .25s ease",
              }}
            >
              Join
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 60,
          paddingTop: 22,
          borderTop: "1px solid rgba(244,243,241,0.14)",
          fontFamily: "var(--font-plex-mono), monospace",
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(244,243,241,0.4)",
        }}
        className="footer-bottom"
      >
        <span>&copy; 2027 KaKhaGa</span>
        <span>Karunagappally &mdash; 9.0544&deg; N, 76.5352&deg; E</span>
      </div>
      <style>{`
        .footer-heading {
          font-family: var(--font-plex-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(244,243,241,0.45);
          margin-bottom: 16px;
        }
        .footer-link { cursor: pointer; color: rgba(244,243,241,0.82); }
        .footer-link:hover { color: #2FE08A; }
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; row-gap: 40px; }
          .footer-bottom { flex-direction: column; gap: 8px; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
