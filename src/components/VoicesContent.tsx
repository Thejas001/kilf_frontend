"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { SPEAKERS, STAR_GUESTS, type Speaker } from "@/data/festival";
import { rowInteractive, rowLabel, rowMeta, rowTitle } from "@/lib/ui";
import { useHoverPeek } from "@/lib/useHoverPeek";

const CATEGORIES = [
  "All",
  "Literature",
  "Cinema & Theatre",
  "Poetry & Music",
  "Public Thought & Academia",
  "Arts & Technology",
] as const;

const FESTIVAL_PLATFORMS = [
  "Author Conversations",
  "Keynote Lectures",
  "Literary Debates",
  "Poetry Readings",
  "Book Launches",
  "Translation Dialogues",
  "Youth Forums",
  "Meet-the-Author Sessions",
];

export default function VoicesContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"cards" | "list">("cards");
  const [selectedGuest, setSelectedGuest] = useState<Speaker | null>(null);

  const { hovered, cx, cy, trackCursor, clearHover, hoverRow } = useHoverPeek();
  const hoveredSpeaker = SPEAKERS.find((p) => p.id === hovered);

  const filteredSpeakers =
    selectedCategory === "All"
      ? SPEAKERS
      : SPEAKERS.filter((s) => s.category === selectedCategory);

  return (
    <section
      onMouseMove={trackCursor}
      className="px-10 pt-37.5 pb-27.5 max-[640px]:px-5"
    >
      {/* Header (PDF Page 6) */}
      <div className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
        /distinguished voices
      </div>
      <h1 className="mt-6 mb-4 font-sans text-[clamp(44px,7.5vw,110px)] leading-[0.95] font-black break-words text-accent max-[480px]:text-[clamp(34px,10vw,80px)]">
        Conversations
        <br />
        That Inspire.
      </h1>
      <p className="m-0 mb-8 max-w-180 text-[16px] leading-relaxed text-ink/75 font-medium">
        KILF invites celebrated authors, poets, journalists, filmmakers, historians,
        philosophers, educators, translators, and public intellectuals from India and
        across the world. Every conversation is designed to inspire curiosity, encourage
        critical thinking, and celebrate diverse perspectives.
      </p>

      {/* 8 Festival Platforms (PDF Page 6) */}
      <div className="mb-16 rounded-[28px] border border-ink/10 bg-white/60 p-6 md:p-8 backdrop-blur-sm shadow-xs">
        <div className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase font-bold mb-4">
          The Festival Creates A Unique Platform For
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {FESTIVAL_PLATFORMS.map((plat) => (
            <div
              key={plat}
              className="flex items-center gap-2.5 rounded-xl border border-ink/10 bg-white px-3.5 py-2.5 shadow-2xs"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
              <span className="text-xs font-semibold text-ink">{plat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Star Interactions Highlight Banner */}
      <div className="mb-16 rounded-[30px] border border-accent/20 bg-[linear-gradient(135deg,rgba(111,31,47,0.05)_0%,rgba(156,122,60,0.06)_100%)] p-8 md:p-10">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/10 pb-4">
          <div>
            <span className="font-mono text-[10px] tracking-[0.24em] text-gold uppercase">
              Spotlight Program
            </span>
            <h2 className="mt-1 font-sans text-2xl md:text-3xl font-black text-accent">
              Star Interactions &amp; Conversations
            </h2>
          </div>
          <span className="font-mono text-xs text-ink/60 uppercase tracking-wider">
            {STAR_GUESTS.length} Featured Headliners
          </span>
        </div>
        <p className="mt-4 max-w-180 text-sm leading-relaxed text-ink/70">
          Intimate, masterclass conversations pairing legendary creative titans with cultural
          interlocutors. Each session is accompanied by dedicated audience Q&amp;A and signed book interactions.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {STAR_GUESTS.slice(0, 5).map((star) => (
            <button
              key={star.id}
              type="button"
              onClick={() => setSelectedGuest(star)}
              className="group flex flex-col items-center rounded-2xl border border-ink/10 bg-white/80 p-4 text-center transition-all duration-300 hover:border-accent hover:shadow-md"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full border border-accent/20">
                <Image
                  src={star.image}
                  alt={star.name}
                  fill
                  sizes="80px"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="mt-3 font-sans text-sm font-bold text-ink leading-tight">
                {star.name}
              </span>
              <span className="mt-1 font-mono text-[10px] text-accent font-medium line-clamp-1">
                {star.role}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Directory Filter & Controls */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-ink/12 pb-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={clsx(
                  "rounded-full px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-300",
                  active
                    ? "bg-accent text-white shadow-xs"
                    : "border border-ink/15 bg-white/50 text-ink/70 hover:border-accent/40 hover:text-ink"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode("cards")}
            className={clsx(
              "rounded-lg px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors",
              viewMode === "cards" ? "bg-accent text-white" : "border border-ink/15 text-ink/60"
            )}
          >
            Profiles
          </button>
          <button
            type="button"
            onClick={() => setViewMode("list")}
            className={clsx(
              "rounded-lg px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors",
              viewMode === "list" ? "bg-accent text-white" : "border border-ink/15 text-ink/60"
            )}
          >
            List
          </button>
        </div>
      </div>

      {/* View Mode 1: Detailed Profiles Grid ("Say about them") */}
      {viewMode === "cards" ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredSpeakers.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col justify-between rounded-[28px] border border-ink/10 bg-white/70 p-6 shadow-[0_30px_60px_-36px_rgba(17,17,17,0.3)] backdrop-blur-xs transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-white hover:shadow-[0_38px_70px_-30px_rgba(111,31,47,0.35)]"
            >
              <div>
                <div className="relative mb-5 h-72 w-full overflow-hidden rounded-[20px]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block rounded-full bg-accent/90 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white backdrop-blur-md">
                      {p.category}
                    </span>
                    <h3 className="mt-1 font-sans text-2xl font-black text-white">
                      {p.name}
                    </h3>
                    <div className="font-mono text-[11px] text-gold uppercase tracking-wider">
                      {p.role} &bull; {p.lang}
                    </div>
                  </div>
                </div>

                {/* Conversation focus */}
                {p.conversationTitle && (
                  <div className="mb-4 rounded-xl border border-accent/15 bg-accent/5 p-3.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-bold">
                      Festival Conversation
                    </span>
                    <div className="mt-1 text-xs font-bold leading-snug text-ink">
                      &ldquo;{p.conversationTitle}&rdquo;
                    </div>
                    {p.conversationSummary && (
                      <p className="mt-1 text-[11px] leading-relaxed text-ink/70">
                        {p.conversationSummary}
                      </p>
                    )}
                  </div>
                )}

                {/* Elaborated bio: "say about them" */}
                <div className="mt-3">
                  <div className="font-mono text-[10px] tracking-wider text-gold uppercase font-bold">
                    About {p.name}
                  </div>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink/75">
                    {p.bio}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                <span className="font-mono text-[10px] uppercase text-ink/40">
                  KILF 2027 Guest
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedGuest(p)}
                  className="font-mono text-[11px] tracking-wider text-accent uppercase hover:underline"
                >
                  Full Bio &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* View Mode 2: Interactive List with Hover Peek */
        <div onMouseLeave={clearHover}>
          {filteredSpeakers.map((p, i) => (
            <div
              key={p.id}
              onMouseEnter={() => hoverRow(p.id)}
              onClick={() => setSelectedGuest(p)}
              className={clsx(rowInteractive, "py-6.5 cursor-pointer")}
            >
              <span className={`${rowLabel} w-15 text-ink/40`}>
                {(i + 1 < 10 ? "00" : "0") + (i + 1)}
              </span>
              <div className="flex-1">
                <span className={`${rowTitle} text-[clamp(24px,3vw,42px)] leading-[1.05]`}>
                  {p.name}
                </span>
                {p.conversationTitle && (
                  <div className="mt-1 text-xs text-accent font-medium">
                    &ldquo;{p.conversationTitle}&rdquo;
                  </div>
                )}
              </div>
              <span className={`${rowMeta} w-75`}>
                {p.role} &mdash; {p.lang}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Floating Hover Peek for List Mode */}
      {viewMode === "list" && (
        <div
          aria-hidden
          style={{
            left: cx + 24,
            top: cy - 160,
            backgroundImage: hoveredSpeaker ? `url(${hoveredSpeaker.image.src})` : undefined,
          }}
          className={clsx(
            "fixed z-[50] h-80 w-60 items-end overflow-hidden rounded-[20px] bg-[#E9E7E4] bg-cover bg-center shadow-[0_40px_70px_-34px_rgba(17,17,17,0.55)] transition-opacity duration-300",
            hoveredSpeaker ? "flex opacity-100" : "hidden opacity-0"
          )}
        >
          <div className="w-full bg-[linear-gradient(to_top,rgba(17,17,17,0.78),transparent)] p-4 font-sans text-base font-extrabold text-white">
            {hoveredSpeaker ? hoveredSpeaker.name : ""}
          </div>
        </div>
      )}

      {/* Modal Dialog for Full Guest Biography */}
      {selectedGuest && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedGuest(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[32px] border border-ink/12 bg-paper p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedGuest(null)}
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 font-mono text-sm text-ink hover:bg-accent hover:text-white transition-colors"
            >
              ✕
            </button>

            <div className="grid grid-cols-[160px_1fr] gap-6 max-[600px]:grid-cols-1">
              <div className="relative h-48 w-40 overflow-hidden rounded-2xl max-[600px]:h-60 max-[600px]:w-full">
                <Image
                  src={selectedGuest.image}
                  alt={selectedGuest.name}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="inline-block rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white">
                  {selectedGuest.category}
                </span>
                <h3 className="mt-3 font-sans text-3xl font-black text-ink">
                  {selectedGuest.name}
                </h3>
                <div className="font-mono text-xs text-gold uppercase tracking-wider">
                  {selectedGuest.role} &bull; {selectedGuest.lang}
                </div>
              </div>
            </div>

            {selectedGuest.conversationTitle && (
              <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">
                  Star Conversation at KILF 2027
                </div>
                <h4 className="mt-1 text-base font-bold text-ink">
                  &ldquo;{selectedGuest.conversationTitle}&rdquo;
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-ink/75">
                  {selectedGuest.conversationSummary}
                </p>
              </div>
            )}

            <div className="mt-6">
              <div className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
                Biography &amp; Contribution
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                {selectedGuest.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
