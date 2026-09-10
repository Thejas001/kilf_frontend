"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, FESTIVAL_PDF, type GalleryItem } from "@/data/gallery";

export default function GalleryPage() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  return (
    <section className="px-10 pt-37.5 pb-27.5 max-[640px]:px-5">
      {/* Page Header */}
      <div className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
        /gallery &bull; festival visual archive
      </div>
      <div className="mt-6 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-ink/10 pb-6">
        <h1 className="m-0 font-sans text-[clamp(44px,7.5vw,100px)] leading-[0.95] font-black break-words text-accent max-[480px]:text-[clamp(34px,10vw,72px)]">
          Moments &amp;
          <br />
          Memories.
        </h1>
        <span className="font-mono text-xs text-ink/50 uppercase tracking-wider">
          {GALLERY_ITEMS.length} Photographs
        </span>
      </div>

      {/* Gallery Photo Grid (No descriptions) */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-[20px] border border-ink/10 bg-white/70 shadow-xs transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Discrete, non-prominent Archive PDF View Section */}
      <div className="mt-20 border-t border-ink/10 pt-12">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-paper/40 p-6">
          <div>
            <div className="font-mono text-[10px] tracking-widest text-ink/50 uppercase">
              Festival Archive Document
            </div>
            <div className="mt-1 text-sm font-semibold text-ink/80">
              Previous Edition Programme Schedule (Flex Reference)
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowPdfViewer((prev) => !prev)}
              className="rounded-full border border-ink/20 bg-white px-5 py-2 font-mono text-xs text-ink/80 hover:border-accent hover:text-accent transition-colors"
            >
              {showPdfViewer ? "Hide Viewer" : "View PDF Document"}
            </button>
            <a
              href={FESTIVAL_PDF.publicPath}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/15 px-4 py-2 font-mono text-xs text-ink/60 hover:text-ink transition-colors"
            >
              Open in Tab &nearr;
            </a>
          </div>
        </div>

        {/* Embedded PDF in viewable manner only */}
        {showPdfViewer && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-ink/15 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-ink/10 bg-paper/60 px-5 py-2.5 font-mono text-xs text-ink/60">
              <span>Document Viewer &bull; {FESTIVAL_PDF.fileName}</span>
              <button
                type="button"
                onClick={() => setShowPdfViewer(false)}
                className="hover:text-accent"
              >
                Close &times;
              </button>
            </div>
            <div className="h-[75vh] w-full bg-ink/5">
              <iframe
                src={`${FESTIVAL_PDF.publicPath}#toolbar=1&navpanes=0`}
                title="Previous Edition Programme Schedule"
                className="h-full w-full border-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal - Clean view only, no descriptions */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[24px] border border-white/20 bg-black/80 p-3 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              aria-label="Close"
              className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 font-mono text-sm text-white hover:bg-accent transition-colors"
            >
              ✕
            </button>

            <div className="relative h-[82vh] w-full overflow-hidden rounded-[18px]">
              <Image
                src={activeItem.image}
                alt={activeItem.alt}
                fill
                sizes="(max-width: 1200px) 95vw, 1100px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
