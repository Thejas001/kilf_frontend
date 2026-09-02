import Link from "next/link";
import { ACCENT, SPEAKERS } from "@/data/festival";
import ImageSlot from "@/components/ImageSlot";

const FLOATS = ["floatA 7.5s", "floatC 8.5s", "floatB 9.5s", "floatA 8s"];

export default function VoicesPreview() {
  const homeSpeakers = SPEAKERS.slice(0, 4);

  return (
    <section className="kk-hpad" style={{ padding: "0 40px 110px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 40,
          borderTop: "1px solid rgba(17,17,17,0.12)",
          paddingTop: 30,
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
          Voices, 2027
        </h2>
        <Link
          href="/voices"
          style={{
            fontFamily: "var(--font-plex-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            cursor: "pointer",
            color: ACCENT,
          }}
        >
          All 42 &rarr;
        </Link>
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 24 }}
        className="voices-preview-grid"
      >
        {homeSpeakers.map((p, i) => (
          <Link
            key={p.id}
            href="/voices"
            className="voices-preview-card"
            style={{ minWidth: 0, cursor: "pointer", transition: "transform .5s cubic-bezier(.16,1,.3,1)", display: "block" }}
          >
            <div
              style={{
                width: "100%",
                height: 300,
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 34px 60px -34px rgba(17,17,17,0.42)",
                animation: `${FLOATS[i]} ease-in-out infinite`,
                animationDelay: `${i * 0.55}s`,
              }}
            >
              <ImageSlot src={`https://picsum.photos/seed/kkg-face-${p.id}/700/900`} alt={p.name} />
            </div>
            <div
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                fontSize: 22,
                marginTop: 16,
                color: "#111111",
              }}
            >
              {p.name}
            </div>
            <div
              style={{
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(17,17,17,0.45)",
                marginTop: 6,
              }}
            >
              {p.role}
            </div>
          </Link>
        ))}
      </div>
      <style>{`
        .voices-preview-card:hover { transform: translateY(-10px); }
        @media (max-width: 860px) {
          .voices-preview-grid { grid-template-columns: repeat(2,minmax(0,1fr)) !important; }
        }
      `}</style>
    </section>
  );
}
