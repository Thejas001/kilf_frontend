"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { STAR_GUESTS, type Speaker } from "@/data/festival";

export default function StarInteractions({ limit }: { limit?: number }) {
  const [activeGuest, setActiveGuest] = useState<Speaker>(STAR_GUESTS[0]);
  const guests = limit ? STAR_GUESTS.slice(0, limit) : STAR_GUESTS;

  return (
    <section className="relative overflow-hidden px-10 py-24 max-[640px]:px-5">
      {/* Section Header */}
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-8">
        <div>
          <div className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">
            PDF Spotlight • Conversations That Inspire
          </div>
          <h2 className="mt-2 text-[clamp(32px,5vw,56px)] leading-[1.05] font-black tracking-[-0.03em] text-accent">
            Star Interactions &amp; Conversations
          </h2>
          <p className="mt-3 max-w-160 text-[15px] leading-relaxed text-ink/70">
            Unscripted, intimate, and fiery dialogues connecting icons of cinema,
            revolutionary poetry, fearless fiction, and public philosophy with Kerala&apos;s
            passionate reading generation.
          </p>
        </div>
        <Link
          href="/voices"
          className="group inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-6 py-3 font-mono text-[11px] tracking-[0.16em] text-accent uppercase transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
        >
          <span>Meet All {STAR_GUESTS.length} Star Voices</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>

      {/* Featured Star Interactive Showcase */}
      <div className="mb-16 grid grid-cols-[1.1fr_1fr] items-center gap-12 rounded-[32px] border border-ink/10 bg-white/70 p-8 shadow-[0_40px_90px_-40px_rgba(17,17,17,0.35)] backdrop-blur-sm max-[960px]:grid-cols-1 max-[640px]:p-5">
        <div className="relative h-110 w-full overflow-hidden rounded-[24px] shadow-[0_24px_50px_-20px_rgba(111,31,47,0.4)] max-[640px]:h-80">
          <Image
            src={activeGuest.image}
            alt={activeGuest.name}
            fill
            sizes="(max-width: 960px) 100vw, 50vw"
            className="object-cover transition-all duration-700 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block rounded-full bg-accent/90 px-3.5 py-1 font-mono text-[10px] tracking-[0.16em] text-white uppercase backdrop-blur-md">
              {activeGuest.category}
            </span>
            <div className="mt-2 font-sans text-3xl font-extrabold text-white">
              {activeGuest.name}
            </div>
            <div className="mt-1 font-mono text-xs text-gold/90 uppercase tracking-wider">
              {activeGuest.role} &bull; {activeGuest.lang}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            Curated Festival Conversation
          </div>
          <h3 className="mt-3 text-[clamp(24px,3vw,36px)] leading-[1.15] font-extrabold tracking-[-0.02em] text-ink">
            &ldquo;{activeGuest.conversationTitle}&rdquo;
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
            {activeGuest.conversationSummary}
          </p>

          <div className="my-6 border-t border-ink/10 pt-6">
            <div className="font-mono text-[10px] tracking-[0.16em] text-gold uppercase">
              About the Guest
            </div>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/65 italic">
              &ldquo;{activeGuest.bio}&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/programme"
              className="rounded-full bg-accent px-6 py-3 font-mono text-[11px] tracking-[0.16em] text-white uppercase shadow-md transition-all duration-300 hover:bg-accent/90 hover:shadow-lg"
            >
              View Session in Programme &rarr;
            </Link>
            <Link
              href="/venue"
              className="rounded-full border border-ink/20 px-6 py-3 font-mono text-[11px] tracking-[0.16em] text-ink uppercase transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Book Passes
            </Link>
          </div>
        </div>
      </div>

      {/* Guest Carousel / Selector Strip */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {guests.map((g) => {
          const isSelected = activeGuest.id === g.id;
          return (
            <button
              key={g.id}
              type="button"
              onClick={() => setActiveGuest(g)}
              className={clsx(
                "group relative flex flex-col items-center overflow-hidden rounded-[20px] border p-3.5 text-left transition-all duration-300",
                isSelected
                  ? "border-accent bg-accent/8 shadow-md scale-[1.03]"
                  : "border-ink/10 bg-white/40 hover:border-accent/40 hover:bg-white"
              )}
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-accent/20 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={g.image}
                  alt={g.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <span className="mt-3 text-center font-sans text-[14px] font-bold leading-tight text-ink line-clamp-1">
                {g.name}
              </span>
              <span className="mt-1 text-center font-mono text-[9px] tracking-wider text-gold uppercase line-clamp-1">
                {g.role.split("&")[0].trim()}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
