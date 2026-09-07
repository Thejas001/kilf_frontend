"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV } from "@/data/festival";
import { useMagnetic } from "@/lib/hooks";

export default function Nav() {
  const pathname = usePathname();
  const {
    ref: passesRef,
    onMouseMove: passesMouseMove,
    onMouseLeave: passesMouseLeave,
  } = useMagnetic<HTMLAnchorElement>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between border-b border-ink/10 bg-paper/80 px-10 py-5.5 backdrop-blur-md max-[880px]:px-5 max-[880px]:py-4.5">
      <Link
        href="/"
        className="flex shrink-0 items-baseline gap-3 whitespace-nowrap text-ink"
      >
        <span className="font-display text-[26px] leading-none font-black tracking-[0.01em] text-accent">
          KILF
        </span>
        <span className="font-mono text-[11px] tracking-[0.18em] text-gold uppercase">
          Kerala Int&apos;l Lit Fest
        </span>
      </Link>

      <div className="flex items-center gap-7 max-[880px]:hidden">
        {NAV.map((n) => {
          const active = pathname === n.route;
          return (
            <Link
              key={n.route}
              href={n.route}
              aria-current={active ? "page" : undefined}
              className={clsx(
                "font-mono text-[11px] tracking-[0.14em] uppercase transition-colors",
                active ? "text-accent" : "text-ink/65 hover:text-ink"
              )}
            >
              {n.label}
            </Link>
          );
        })}
        <Link
          ref={passesRef}
          href="/venue"
          onMouseMove={passesMouseMove}
          onMouseLeave={passesMouseLeave}
          className="border border-accent px-4.5 py-2.5 font-mono text-[11px] tracking-[0.14em] text-accent uppercase transition-[background-color,color] duration-300 hover:bg-accent hover:text-white"
        >
          Passes
        </Link>
      </div>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className="hidden flex-col gap-1.5 border-none bg-none p-2 max-[880px]:flex"
      >
        <span
          className={clsx(
            "block h-0.5 w-5.5 bg-ink transition-transform duration-300",
            open && "translate-y-2 rotate-45"
          )}
        />
        <span
          className={clsx(
            "block h-0.5 w-5.5 bg-ink transition-opacity duration-200",
            open && "opacity-0"
          )}
        />
        <span
          className={clsx(
            "block h-0.5 w-5.5 bg-ink transition-transform duration-300",
            open && "-translate-y-2 -rotate-45"
          )}
        />
      </button>

      <div
        id="mobile-nav-panel"
        className={clsx(
          "fixed inset-x-0 top-16 z-[59] flex-col gap-0.5 border-b border-ink/10 bg-paper px-6 pt-2.5 pb-6",
          open ? "flex" : "hidden"
        )}
      >
        {NAV.map((n) => {
          const active = pathname === n.route;
          return (
            <Link
              key={n.route}
              href={n.route}
              onClick={() => setOpen(false)}
              aria-current={active ? "page" : undefined}
              className={clsx(
                "border-t border-ink/10 py-3.5 font-mono text-[13px] tracking-[0.14em] uppercase",
                active ? "text-accent" : "text-ink"
              )}
            >
              {n.label}
            </Link>
          );
        })}
        <Link
          href="/venue"
          onClick={() => setOpen(false)}
          className="border-t border-ink/10 py-3.5 font-mono text-[13px] tracking-[0.14em] text-accent uppercase"
        >
          Passes
        </Link>
      </div>
    </nav>
  );
}
