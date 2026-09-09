import Image from "next/image";
import history1 from "@/prev/FB_IMG_1788278764620.jpg.webp";
import history2 from "@/prev/FB_IMG_1788278795785.jpg.webp";
import history3 from "@/prev/FB_IMG_1788278808223.jpg.webp";
import history4 from "@/prev/FB_IMG_1788278824551.jpg.webp";

const images = [history1, history2, history3, history4];

export default function HistoryGallery() {
  return (
    <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className="group relative overflow-hidden rounded-[28px] border border-ink/10 bg-white/40 shadow-[0_24px_50px_-36px_rgba(17,17,17,0.7)]"
        >
          <div className="relative aspect-[4/5]">
            <Image
              src={image}
              alt={`Festival history archive ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
