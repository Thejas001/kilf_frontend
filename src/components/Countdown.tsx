"use client";

import clsx from "clsx";
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

  const spoken =
    diff === null
      ? "Loading countdown"
      : `${units.map((u) => `${u.value} ${u.label.toLowerCase()}`).join(", ")} until the festival opens`;

  return (
    <span
      role="timer"
      aria-label={spoken}
      className="flex items-center gap-3.5 text-ink"
    >
      {units.map((u) => (
        <span
          key={u.label}
          aria-hidden
          className="inline-flex items-baseline gap-0.5 font-mono text-[11px] tracking-[0.14em] text-ink/45"
        >
          <span
            key={u.value}
            style={{
              animation: `${u.value % 2 === 0 ? "flipPageA" : "flipPageB"} .6s cubic-bezier(.16,1,.3,1)`,
            }}
            className={clsx(
              "inline-block min-w-[2ch] origin-top text-right font-sans text-[15px] font-extrabold tracking-[-0.01em]",
              u.label === "Seconds" ? "text-accent" : "text-ink"
            )}
          >
            {String(u.value).padStart(2, "0")}
          </span>
          {u.short}
        </span>
      ))}
    </span>
  );
}
