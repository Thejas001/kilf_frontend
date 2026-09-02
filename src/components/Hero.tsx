"use client";

import { useCallback, useMemo, useState } from "react";
import { useScrollProgress } from "@/lib/hooks";
import { ACCENT } from "@/data/festival";
import Countdown from "@/components/Countdown";
import ImageSlot from "@/components/ImageSlot";

const HERO_CARDS = [
  { src: "https://picsum.photos/seed/kkg-ground/1200/800", alt: "Wide shot of the festival ground", left: "0%", top: "8%", w: "52%", h: "72%", anim: "floatA 7s", f: 9, rot: -1.4 },
  { src: "https://picsum.photos/seed/kkg-reading/700/1000", alt: "A reading, close up", left: "49%", top: "0%", w: "25%", h: "54%", anim: "floatB 8.5s", f: 16, rot: 2.6 },
  { src: "https://picsum.photos/seed/kkg-audience/900/700", alt: "The audience", left: "61%", top: "42%", w: "33%", h: "50%", anim: "floatC 9.5s", f: 22, rot: -2.2 },
];

function letterRow(word: string, hx: number) {
  const heroActive = hx !== 0;
  const chars = word.split("");
  return chars.map((ch, i) => {
    const t = chars.length > 1 ? i / (chars.length - 1) : 0.5;
    const prox = heroActive ? Math.max(0, 1 - Math.abs(t - (hx + 1) / 2) * 4.5) : 0;
    return {
      ch,
      style: {
        display: "inline-block",
        transform: `translateY(${(-prox * 18).toFixed(1)}px)`,
        color: prox > 0.7 ? ACCENT : "#111111",
        transition: "transform .4s cubic-bezier(.16,1,.3,1), color .35s ease",
      } as React.CSSProperties,
    };
  });
}

export default function Hero() {
  const { scrollY: sy } = useScrollProgress();
  const [hx, setHx] = useState(0);
  const [hy, setHy] = useState(0);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setHx(((e.clientX - r.left) / r.width) * 2 - 1);
    setHy(((e.clientY - r.top) / r.height) * 2 - 1);
  }, []);
  const onMouseLeave = useCallback(() => {
    setHx(0);
    setHy(0);
  }, []);

  const smooth = "transform .7s cubic-bezier(.16,1,.3,1)";
  const par = (fx: number, fy: number, extra?: string) =>
    `translate3d(${(hx * fx).toFixed(2)}px, ${(hy * fy).toFixed(2)}px, 0)${extra || ""}`;
  const cursorT = (hx + 1) / 2;

  const heroLettersTop = useMemo(() => letterRow("LITERATURE", hx), [hx]);
  const heroLettersBottom = useMemo(() => letterRow("FESTIVAL", hx), [hx]);

  return (
    <section
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="kk-hpad"
      style={{ padding: "150px 40px 0", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          left: "-7%",
          top: 110,
          width: "34vw",
          height: 640,
          maxWidth: 520,
          background: "#FFFFFF",
          borderRadius: "6px 14px 14px 6px",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.85,
          boxShadow: "0 60px 100px -60px rgba(17,17,17,0.5)",
          transform: `${par(-9, -7)} rotate(-6.5deg) translateY(${(sy * -0.045).toFixed(1)}px)`,
          transition: smooth,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "16%",
          top: 190,
          width: "30vw",
          height: 560,
          maxWidth: 460,
          background: "linear-gradient(105deg,#FFFFFF,#F3F1ED)",
          borderRadius: "14px 6px 6px 14px",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.7,
          boxShadow: "0 50px 90px -60px rgba(17,17,17,0.45)",
          transform: `${par(-14, -10)} rotate(4.5deg) translateY(${(sy * -0.07).toFixed(1)}px)`,
          transition: smooth,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "31%",
          top: 150,
          width: "23vw",
          height: 600,
          maxWidth: 360,
          transformOrigin: "left center",
          zIndex: 0,
          pointerEvents: "none",
          background: "linear-gradient(100deg,#FFFFFF 0%,#FBFAF8 62%,#EDEBE6 100%)",
          borderRadius: "4px 18px 18px 4px",
          overflow: "hidden",
          boxShadow: "0 70px 110px -60px rgba(17,17,17,0.55), -1px 0 0 rgba(17,17,17,0.06)",
          transform: `perspective(1400px) rotateY(${(-6 - cursorT * 46).toFixed(1)}deg) translateY(${(sy * -0.055).toFixed(1)}px)`,
          transition: "transform .8s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(100deg, rgba(17,17,17,0.10) 0 3%, transparent 22%, transparent 78%, rgba(17,17,17,${(0.05 + cursorT * 0.12).toFixed(3)}) 100%)`,
            transition: "background .8s ease",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: -220,
          right: -200,
          width: 640,
          height: 640,
          borderRadius: "50%",
          border: "64px solid #2FE08A",
          zIndex: 0,
          pointerEvents: "none",
          transform: `${par(-22, -16)} rotate(${(sy * 0.03).toFixed(2)}deg)`,
          transition: smooth,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: -320,
          width: 480,
          height: 480,
          borderRadius: "50%",
          border: "52px solid #2FE08A",
          zIndex: 0,
          pointerEvents: "none",
          transform: `${par(18, 14)} rotate(${(sy * -0.025).toFixed(2)}deg)`,
          transition: smooth,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 96,
          right: -80,
          width: 230,
          height: 230,
          zIndex: 0,
          pointerEvents: "none",
          animation: "floatB 9s ease-in-out infinite",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "linear-gradient(140deg,#FFC61A,#F2295B 55%,#B02BE0)",
            filter: "saturate(1.05)",
            boxShadow: "0 40px 90px -30px rgba(242,41,91,0.45)",
            transform: `${par(-34, -24)} translateY(${(sy * -0.06).toFixed(1)}px)`,
            transition: smooth,
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-plex-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(17,17,17,0.5)",
          borderBottom: "1px solid rgba(17,17,17,0.12)",
          paddingBottom: 14,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span>Capital Media presents</span>
        <Countdown />
        <span>15&ndash;18 Jan 2027 &middot; Karunagappally</span>
      </div>

      <div style={{ position: "relative", zIndex: 2, margin: "52px 0 0" }}>
        <div
          style={{
            fontFamily: "var(--font-noto-malayalam), serif",
            fontSize: "clamp(64px,11vw,176px)",
            lineHeight: 1,
            letterSpacing: "0.02em",
            color: "#111111",
          }}
        >
          ക ഖ ഗ
        </div>
        <div
          style={{
            fontFamily: "var(--font-plex-mono), monospace",
            fontSize: 13,
            letterSpacing: "0.34em",
            textTransform: "uppercase",
            color: ACCENT,
            margin: "22px 0 10px",
          }}
        >
          The Mirror Mind
        </div>
        <h1
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 900,
            fontSize: "clamp(44px,8.4vw,132px)",
            lineHeight: 0.94,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          <span style={{ display: "flex", flexWrap: "nowrap" }}>
            {heroLettersTop.map((l, i) => (
              <span key={i} style={l.style}>
                {l.ch}
              </span>
            ))}
          </span>
          <span style={{ display: "flex", flexWrap: "nowrap" }}>
            {heroLettersBottom.map((l, i) => (
              <span key={i} style={l.style}>
                {l.ch}
              </span>
            ))}
          </span>
        </h1>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 60,
          alignItems: "end",
          marginTop: 52,
          paddingBottom: 60,
        }}
        className="hero-subgrid"
      >
        <div
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            fontSize: "clamp(24px,3vw,40px)",
            lineHeight: 1.25,
            color: "rgba(17,17,17,0.9)",
            maxWidth: 760,
          }}
        >
          Four days for the written word &mdash; in Malayalam, and everything
          it listens to.
        </div>
        <div style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(17,17,17,0.6)" }}>
          A festival of readings, arguments, translation and late-night
          poetry in Karunagappally. Ninety sessions. Six stages. One shared
          language of attention.
        </div>
      </div>

      <div
        style={{ position: "relative", zIndex: 2, height: "72vh", minHeight: 520, marginBottom: 20 }}
        className="hero-cluster"
      >
        {HERO_CARDS.map((c, i) => (
          <div
            key={c.src}
            style={{
              position: "absolute",
              left: c.left,
              top: c.top,
              width: c.w,
              height: c.h,
              animation: `${c.anim} ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,
                overflow: "hidden",
                transform: `${par(c.f * -1, c.f * -0.7)} rotate(${c.rot}deg) translateY(${(sy * -0.035 * (1 + i * 0.5)).toFixed(1)}px)`,
                transition: smooth,
                boxShadow: "0 50px 90px -44px rgba(17,17,17,0.5), 0 8px 24px -14px rgba(17,17,17,0.25)",
              }}
            >
              <ImageSlot src={c.src} alt={c.alt} radius={20} />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-subgrid { grid-template-columns: 1fr !important; }
          .hero-cluster { height: 60vh !important; min-height: 420px !important; }
        }
      `}</style>
    </section>
  );
}
