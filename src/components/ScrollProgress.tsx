"use client";

import { useScrollProgress } from "@/lib/hooks";

export default function ScrollProgress() {
  const { progress } = useScrollProgress();

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 z-[70] h-[3px] bg-[linear-gradient(90deg,var(--color-emerald),var(--color-gold),var(--color-accent))]"
      style={{ width: `${(progress * 100).toFixed(2)}%` }}
    />
  );
}
