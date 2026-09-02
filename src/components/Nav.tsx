"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ACCENT, NAV } from "@/data/festival";
import { useMagnetic } from "@/lib/hooks";

export default function Nav() {
  const pathname = usePathname();
  const {
    ref: passesRef,
    onMouseMove: passesMouseMove,
    onMouseLeave: passesMouseLeave,
  } = useMagnetic<HTMLDivElement>();
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "22px 40px",
        backdropFilter: "blur(14px)",
        background: "rgba(244,243,241,0.78)",
        borderBottom: "1px solid rgba(17,17,17,0.09)",
      }}
      className="site-nav"
    >
      <Link
        href="/"
        onClick={() => setOpen(false)}
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 12,
          cursor: "pointer",
          color: "#111111",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-noto-malayalam), serif",
            fontSize: 26,
            lineHeight: 1,
            letterSpacing: "0.04em",
          }}
        >
          ക ഖ ഗ
        </span>
        <span
          style={{
            fontFamily: "var(--font-plex-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(17,17,17,0.5)",
          }}
        >
          KaKhaGa
        </span>
      </Link>

      <div className="site-nav-links" style={{ display: "flex", alignItems: "center", gap: 28 }}>
        {NAV.map((n) => {
          const active = pathname === n.route;
          return (
            <Link
              key={n.route}
              href={n.route}
              style={{
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
                color: active ? ACCENT : "rgba(17,17,17,0.65)",
                transition: "color .3s ease",
              }}
            >
              {n.label}
            </Link>
          );
        })}
        <Link href="/venue" style={{ display: "block" }}>
          <div
            ref={passesRef}
            onMouseMove={passesMouseMove}
            onMouseLeave={passesMouseLeave}
            className="passes-btn"
            style={{
              fontFamily: "var(--font-plex-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "10px 18px",
              border: `1px solid ${ACCENT}`,
              color: ACCENT,
              cursor: "pointer",
              transition: "background .35s ease,color .35s ease,transform .25s ease",
            }}
          >
            Passes
          </div>
        </Link>
      </div>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="nav-burger"
        style={{
          display: "none",
          flexDirection: "column",
          gap: 5,
          background: "none",
          border: "none",
          padding: 8,
          cursor: "pointer",
        }}
      >
        <span style={{ width: 22, height: 2, background: "#111111", display: "block", transition: "transform .25s ease", transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
        <span style={{ width: 22, height: 2, background: "#111111", display: "block", opacity: open ? 0 : 1, transition: "opacity .2s ease" }} />
        <span style={{ width: 22, height: 2, background: "#111111", display: "block", transition: "transform .25s ease", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
      </button>

      <div
        className="nav-mobile-panel"
        style={{
          display: open ? "flex" : "none",
          position: "fixed",
          top: 65,
          left: 0,
          right: 0,
          zIndex: 59,
          flexDirection: "column",
          gap: 2,
          padding: "10px 24px 26px",
          background: "#F4F3F1",
          borderBottom: "1px solid rgba(17,17,17,0.12)",
        }}
      >
        {NAV.map((n) => {
          const active = pathname === n.route;
          return (
            <Link
              key={n.route}
              href={n.route}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 13,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: active ? ACCENT : "#111111",
                padding: "14px 0",
                borderTop: "1px solid rgba(17,17,17,0.1)",
              }}
            >
              {n.label}
            </Link>
          );
        })}
        <Link
          href="/venue"
          onClick={() => setOpen(false)}
          style={{
            fontFamily: "var(--font-plex-mono), monospace",
            fontSize: 13,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: ACCENT,
            padding: "14px 0",
            borderTop: "1px solid rgba(17,17,17,0.1)",
          }}
        >
          Passes
        </Link>
      </div>

      <style>{`
        .passes-btn:hover { background: ${ACCENT}; color: #FFFFFF; }
        @media (max-width: 880px) {
          .site-nav { padding: 18px 20px; }
          .site-nav-links { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
