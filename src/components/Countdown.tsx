"use client";

import { useNow } from "@/lib/hooks";
import { TARGET_DATE } from "@/data/festival";

export default function Countdown() {
  const now = useNow(1000);
  const target = new Date(TARGET_DATE).getTime();
  const diff = now === null ? null : Math.max(0, target - now);

  const units =
    diff === null
      ? [
          { label: "Days", short: "d", value: 0 },
          { label: "Hours", short: "h", value: 0 },
          { label: "Minutes", short: "m", value: 0 },
          { label: "Seconds", short: "s", value: 0 },
        ]
      : [
          { label: "Days", short: "d", value: Math.floor(diff / 86400000) },
          { label: "Hours", short: "h", value: Math.floor(diff / 3600000) % 24 },
          { label: "Minutes", short: "m", value: Math.floor(diff / 60000) % 60 },
          { label: "Seconds", short: "s", value: Math.floor(diff / 1000) % 60 },
        ];

  return (
    <span style={{ display: "flex", alignItems: "center", gap: 14, color: "#111111" }}>
      {units.map((u) => (
        <span
          key={u.label}
          style={{
            display: "inline-flex",
            alignItems: "baseline",
            gap: 2,
            fontFamily: "var(--font-plex-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.14em",
            color: "rgba(17,17,17,0.45)",
          }}
        >
          <span
            key={u.value}
            style={{
              display: "inline-block",
              minWidth: "2ch",
              textAlign: "right",
              fontFamily: "var(--font-archivo), sans-serif",
              fontWeight: 800,
              fontSize: 15,
              letterSpacing: "-0.01em",
              color: u.label === "Seconds" ? "#EA1F45" : "#111111",
              transformOrigin: "top center",
              animation: `${u.value % 2 === 0 ? "flipPageA" : "flipPageB"} .6s cubic-bezier(.16,1,.3,1)`,
            }}
          >
            {String(u.value).padStart(2, "0")}
          </span>
          {u.short}
        </span>
      ))}
    </span>
  );
}
