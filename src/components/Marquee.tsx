import { SPEAKERS, ACCENT } from "@/data/festival";

export default function Marquee() {
  const names = SPEAKERS.map((p) => p.name).concat(SPEAKERS.map((p) => p.name));

  return (
    <section
      style={{
        padding: "70px 0",
        borderTop: "1px solid rgba(17,17,17,0.12)",
        borderBottom: "1px solid rgba(17,17,17,0.12)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 38s linear infinite",
        }}
      >
        {names.map((m, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              fontSize: 44,
              padding: "0 28px",
              whiteSpace: "nowrap",
              color: "rgba(17,17,17,0.82)",
            }}
          >
            {m}{" "}
            <span style={{ color: ACCENT, fontSize: 22, verticalAlign: "middle" }}>
              &#9679;
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
