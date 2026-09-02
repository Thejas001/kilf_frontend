import type { Metadata } from "next";
import { PASSES } from "@/data/festival";
import ImageSlot from "@/components/ImageSlot";
import PassCard from "@/components/PassCard";

export const metadata: Metadata = {
  title: "Venue & passes — KaKhaGa",
};

export default function VenuePage() {
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
        /venue &amp; passes
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
        Karunagappally.
      </h1>
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "56vh",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 40px 80px -40px rgba(17,17,17,0.45), 0 2px 0 rgba(255,255,255,0.6)",
        }}
      >
        <ImageSlot
          src="https://picsum.photos/seed/kkg-venue/1600/900"
          alt="Venue / aerial of the festival ground"
          sizes="100vw"
        />
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40, margin: "70px 0 90px" }}
        className="venue-info-grid"
      >
        <div>
          <div className="venue-label">Getting there</div>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(17,17,17,0.7)", margin: 0 }}>
            Two kilometres from Karunagappally bus stand. Shuttles run every
            twenty minutes from the town square, 08:00&ndash;23:30.
          </p>
        </div>
        <div>
          <div className="venue-label">Six stages</div>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(17,17,17,0.7)", margin: 0 }}>
            Sand Stage, The Long Table, Translation Room, Poetry Shed,
            Children&apos;s Yard, and the Late Hall &mdash; open until 01:00.
          </p>
        </div>
        <div>
          <div className="venue-label">Access</div>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(17,17,17,0.7)", margin: 0 }}>
            All stages are step-free. Live captioning in the Long Table and
            Translation Room. Quiet room beside the Poetry Shed.
          </p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(17,17,17,0.12)", paddingTop: 40 }}>
        <div
          style={{
            fontFamily: "var(--font-plex-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(17,17,17,0.5)",
            marginBottom: 30,
          }}
        >
          Passes
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="passes-grid">
          {PASSES.map((t) => (
            <PassCard key={t.name} pass={t} />
          ))}
        </div>
        <p style={{ fontSize: 13, color: "rgba(17,17,17,0.45)", marginTop: 24 }}>
          Students enter free with a valid ID. Volunteer applications open in
          October.
        </p>
      </div>
      <style>{`
        .venue-label {
          font-family: var(--font-plex-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(17,17,17,0.45);
          margin-bottom: 14px;
        }
        @media (max-width: 860px) {
          .venue-info-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
          .passes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
