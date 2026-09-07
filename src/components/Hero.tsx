"use client";

import { useCallback, useState } from "react";
import { useScrollProgress } from "@/lib/hooks";
import Countdown from "@/components/Countdown";
import ImageSlot from "@/components/ImageSlot";

const HERO_CARDS = [
  { src: "https://picsum.photos/seed/kkg-ground/1200/800", alt: "Wide shot of the festival ground", left: "0%", top: "8%", w: "52%", h: "72%", anim: "[animation:floatA_7s_ease-in-out_0s_infinite]", f: 9, rot: -1.4 },
  { src: "https://picsum.photos/seed/kkg-reading/700/1000", alt: "A reading, close up", left: "49%", top: "0%", w: "25%", h: "54%", anim: "[animation:floatB_8.5s_ease-in-out_.7s_infinite]", f: 16, rot: 2.6 },
  { src: "https://picsum.photos/seed/kkg-audience/900/700", alt: "The audience", left: "61%", top: "42%", w: "33%", h: "50%", anim: "[animation:floatC_9.5s_ease-in-out_1.4s_infinite]", f: 22, rot: -2.2 },
];

const EASE_SMOOTH = "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]";

function HeroWord({ word, split }: { word: string; split: number }) {
  return (
    <span className="flex flex-nowrap">
      <span className="text-accent">{word.slice(0, split)}</span>
      <span className="text-ink">{word.slice(split)}</span>
    </span>
  );
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

  const par = (fx: number, fy: number, extra?: string) =>
    `translate3d(${(hx * fx).toFixed(2)}px, ${(hy * fy).toFixed(2)}px, 0)${extra || ""}`;
  const cursorT = (hx + 1) / 2;

  return (
    <section
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative overflow-hidden px-10 pt-37.5 max-[640px]:px-5"
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute top-27.5 -left-[7%] z-0 h-160 w-[34vw] max-w-130 rounded-[6px_14px_14px_6px] bg-white opacity-85 shadow-[0_60px_100px_-60px_rgba(17,17,17,0.5)] ${EASE_SMOOTH}`}
        style={{ transform: `${par(-9, -7)} rotate(-6.5deg) translateY(${(sy * -0.045).toFixed(1)}px)` }}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute top-47.5 left-[16%] z-0 h-140 w-[30vw] max-w-115 rounded-[14px_6px_6px_14px] bg-[linear-gradient(105deg,#FFFFFF,#F3F1ED)] opacity-70 shadow-[0_50px_90px_-60px_rgba(17,17,17,0.45)] ${EASE_SMOOTH}`}
        style={{ transform: `${par(-14, -10)} rotate(4.5deg) translateY(${(sy * -0.07).toFixed(1)}px)` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-37.5 left-[31%] z-0 h-150 w-[23vw] max-w-90 origin-left overflow-hidden rounded-[4px_18px_18px_4px] bg-[linear-gradient(100deg,#FFFFFF_0%,#FBFAF8_62%,#EDEBE6_100%)] shadow-[0_70px_110px_-60px_rgba(17,17,17,0.55),-1px_0_0_rgba(17,17,17,0.06)] transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: `perspective(1400px) rotateY(${(-6 - cursorT * 46).toFixed(1)}deg) translateY(${(sy * -0.055).toFixed(1)}px)`,
        }}
      >
        <div
          className="absolute inset-0 transition-[background] duration-[800ms]"
          style={{
            background: `linear-gradient(100deg, rgba(17,17,17,0.10) 0 3%, transparent 22%, transparent 78%, rgba(17,17,17,${(0.05 + cursorT * 0.12).toFixed(3)}) 100%)`,
          }}
        />
      </div>

      <div
        aria-hidden
        className={`pointer-events-none absolute -top-55 -right-50 z-0 h-160 w-160 rounded-full border-[64px] border-emerald ${EASE_SMOOTH}`}
        style={{ transform: `${par(-22, -16)} rotate(${(sy * 0.03).toFixed(2)}deg)` }}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute -bottom-50 -left-80 z-0 h-120 w-120 rounded-full border-[52px] border-emerald ${EASE_SMOOTH}`}
        style={{ transform: `${par(18, 14)} rotate(${(sy * -0.025).toFixed(2)}deg)` }}
      />
      <div
        aria-hidden
        className="animate-float-b pointer-events-none absolute top-24 -right-20 z-0 h-57.5 w-57.5"
      >
        <div
          className={`h-full w-full rounded-full bg-[linear-gradient(135deg,var(--color-amber)_0%,var(--color-accent)_48%,#4a1420_100%)] shadow-[0_40px_90px_-30px_rgba(143,44,52,0.45)] saturate-[1.05] ${EASE_SMOOTH}`}
          style={{ transform: `${par(-34, -24)} translateY(${(sy * -0.06).toFixed(1)}px)` }}
        />
      </div>

      <div className="relative z-[2] flex flex-wrap justify-between gap-3 border-b border-ink/12 pb-3.5 font-mono text-[11px] tracking-[0.18em] text-gold uppercase">
        <span>Capital Media presents</span>
        <Countdown />
        <span>15&ndash;18 Jan 2027 &middot; Karunagappally</span>
      </div>

      <div className="relative z-[2] mt-13">
        <div className="font-display text-[clamp(64px,11vw,176px)] leading-none font-black tracking-[0.01em] text-accent">
          KILF
        </div>
        <div className="mt-5.5 mb-2.5 font-mono text-[13px] tracking-[0.34em] text-gold uppercase">
          Kerala International Literature Fest
        </div>
        <h1 className="m-0 font-sans text-[clamp(44px,8.4vw,132px)] leading-[0.94] font-black tracking-[-0.03em] uppercase">
          <HeroWord word="LITERATURE" split={2} />
          <HeroWord word="FESTIVAL" split={2} />
        </h1>
      </div>

      <div className="relative z-[2] mt-13 grid grid-cols-[1.4fr_1fr] items-end gap-15 pb-15 max-[860px]:grid-cols-1">
        <div className="max-w-190 font-sans text-[clamp(24px,3vw,40px)] leading-[1.25] font-extrabold tracking-[-0.02em] text-ink/90">
          Four days for the written word &mdash; in Malayalam, and everything
          it listens to.
        </div>
        <div className="text-[15px] leading-relaxed text-ink/60">
          A festival of readings, arguments, translation and late-night
          poetry in Karunagappally. Ninety sessions. Six stages. One shared
          language of attention.
        </div>
      </div>

      <div className="relative z-[2] mb-5 h-[72vh] min-h-130 max-[860px]:h-[60vh] max-[860px]:min-h-105">
        {HERO_CARDS.map((c, i) => (
          <div
            key={c.src}
            className={`absolute ${c.anim}`}
            style={{ left: c.left, top: c.top, width: c.w, height: c.h }}
          >
            <div
              className={`h-full w-full overflow-hidden rounded-[20px] shadow-[0_50px_90px_-44px_rgba(17,17,17,0.5),0_8px_24px_-14px_rgba(17,17,17,0.25)] ${EASE_SMOOTH}`}
              style={{
                transform: `${par(c.f * -1, c.f * -0.7)} rotate(${c.rot}deg) translateY(${(sy * -0.035 * (1 + i * 0.5)).toFixed(1)}px)`,
              }}
            >
              <ImageSlot src={c.src} alt={c.alt} radius={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
