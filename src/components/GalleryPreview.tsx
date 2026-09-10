import Image from "next/image";
import Link from "next/link";
import { GALLERY_ITEMS } from "@/data/gallery";

export default function GalleryPreview() {
  const previewImages = GALLERY_ITEMS.slice(0, 8);

  return (
    <section className="px-10 py-24 max-[640px]:px-5 border-t border-ink/10">
      {/* Header */}
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">
            Visual Chronicle &bull; Live Archive
          </div>
          <h2 className="mt-2 text-[clamp(32px,5vw,56px)] leading-[1.05] font-black tracking-[-0.03em] text-accent">
            Moments From The Festival
          </h2>
          <p className="mt-3 max-w-160 text-[15px] leading-relaxed text-ink/70">
            A glimpse into packed amphitheatre halls, coastal readings, night poetry,
            and spontaneous dialogues along Kollam&apos;s waters.
          </p>
        </div>

        <div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-[11px] tracking-wider text-white uppercase hover:bg-accent/90 transition-all shadow-xs"
          >
            <span>View All {GALLERY_ITEMS.length} Photos</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {previewImages.map((item) => (
          <Link
            key={item.id}
            href="/gallery"
            className="group relative aspect-[4/3] overflow-hidden rounded-[20px] border border-ink/10 bg-white/40 shadow-xs transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
