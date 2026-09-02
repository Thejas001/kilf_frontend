"use client";

import Link from "next/link";
import { useMagnetic } from "@/lib/hooks";

export default function Footer() {
  const {
    ref: joinRef,
    onMouseMove: joinMouseMove,
    onMouseLeave: joinMouseLeave,
  } = useMagnetic<HTMLButtonElement>();

  return (
    <footer className="bg-charcoal px-10 pt-24 pb-10 text-paper max-[640px]:px-5">
      <div className="grid grid-cols-[1.6fr_1fr_1fr_1.4fr] gap-12.5 max-[860px]:grid-cols-2 max-[860px]:gap-y-10 max-[560px]:grid-cols-1">
        <div>
          <div className="mb-5 font-malayalam text-4xl leading-none tracking-[0.04em]">
            ക ഖ ഗ
          </div>
          <p className="max-w-70 text-sm leading-relaxed text-paper/55">
            The Mirror Mind Literature Festival. Fourth edition, 15&ndash;18
            January 2027, Karunagappally.
          </p>
        </div>
        <nav aria-label="Festival">
          <div className="mb-4 font-mono text-[10px] tracking-[0.18em] text-paper/45 uppercase">
            Festival
          </div>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link className="text-paper/82 hover:text-emerald" href="/programme">
              Programme
            </Link>
            <Link className="text-paper/82 hover:text-emerald" href="/voices">
              Voices
            </Link>
            <Link className="text-paper/82 hover:text-emerald" href="/venue">
              Venue &amp; passes
            </Link>
          </div>
        </nav>
        <nav aria-label="More">
          <div className="mb-4 font-mono text-[10px] tracking-[0.18em] text-paper/45 uppercase">
            More
          </div>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link className="text-paper/82 hover:text-emerald" href="/journal">
              Journal
            </Link>
            <Link className="text-paper/82 hover:text-emerald" href="/about">
              About
            </Link>
            <a className="text-paper/82 hover:text-emerald" href="#">
              Volunteer
            </a>
          </div>
        </nav>
        <div>
          <div className="mb-4 font-mono text-[10px] tracking-[0.18em] text-paper/45 uppercase">
            Programme drops in October
          </div>
          <form
            className="flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="your email"
              autoComplete="email"
              className="min-w-0 flex-1 border border-paper/24 bg-transparent px-4 py-3.5 font-mono text-xs text-paper outline-none placeholder:text-paper/35 focus-visible:border-paper/60"
            />
            <button
              ref={joinRef}
              type="submit"
              onMouseMove={joinMouseMove}
              onMouseLeave={joinMouseLeave}
              className="border-none bg-accent px-5 py-3.5 font-mono text-[11px] tracking-[0.14em] text-white uppercase transition-transform duration-[250ms]"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="mt-15 flex justify-between border-t border-paper/14 pt-5.5 font-mono text-[10px] tracking-[0.14em] text-paper/40 uppercase max-[860px]:flex-col max-[860px]:gap-2">
        <span>&copy; 2027 KaKhaGa</span>
        <span>Karunagappally &mdash; 9.0544&deg; N, 76.5352&deg; E</span>
      </div>
    </footer>
  );
}
