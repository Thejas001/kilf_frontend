import Link from "next/link";
import { ACCENT } from "@/data/festival";
import ImageSlot from "@/components/ImageSlot";

export default function AboutPreview() {
  return (
    <section
      style={{
        padding: "0 40px 110px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "start",
      }}
      className="about-preview-grid kk-hpad"
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: 560,
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 40px 80px -40px rgba(17,17,17,0.45), 0 2px 0 rgba(255,255,255,0.6)",
        }}
      >
        <ImageSlot src="https://picsum.photos/seed/kkg-tent/900/1200" alt="Reading tent, last edition" />
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-plex-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(17,17,17,0.5)",
            marginBottom: 28,
          }}
        >
          About
        </div>
        <p
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            fontSize: 32,
            lineHeight: 1.3,
            margin: "0 0 28px",
          }}
        >
          KaKhaGa takes its name from the first three letters a Malayali
          child learns to write.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(17,17,17,0.62)", margin: "0 0 20px" }}>
          It began in 2021 as a two-room gathering of translators in
          Thrissur. Four editions later it fills a beachfront with poets,
          publishers, students and readers who argue past midnight.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(17,17,17,0.62)", margin: "0 0 34px" }}>
          Every session is free to attend for students. Everything else is
          paid for by the people who show up.
        </p>
        <Link
          href="/about"
          style={{
            fontFamily: "var(--font-plex-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            cursor: "pointer",
            color: ACCENT,
          }}
        >
          Our history &rarr;
        </Link>
      </div>
      <style>{`
        @media (max-width: 860px) {
          .about-preview-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
