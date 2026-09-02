"use client";

import { useScrollProgress } from "@/lib/hooks";

export default function ScrollProgress() {
  const { progress } = useScrollProgress();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 3,
        zIndex: 70,
        width: `${(progress * 100).toFixed(2)}%`,
        background: "linear-gradient(90deg,#2FE08A,#FFC61A,#EA1F45)",
      }}
    />
  );
}
