import Link from "next/link";
import { SPEAKERS } from "@/data/festival";
import Image from "next/image";

const CARD_ANIM = [
  "[animation:floatA_7.5s_ease-in-out_0s_infinite]",
  "[animation:floatC_8.5s_ease-in-out_.55s_infinite]",
  "[animation:floatB_9.5s_ease-in-out_1.1s_infinite]",
  "[animation:floatA_8s_ease-in-out_1.65s_infinite]",
];

export default function VoicesPreview() {
  const homeSpeakers = SPEAKERS.filter((s) => s.featuredStar).slice(0, 4);

  return (
    <section className="px-10 pb-27.5 max-[640px]:px-5">
      <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4 border-t border-ink/12 pt-7.5">
        <div>
          <h2 className="m-0 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
            Distinguished Voices &bull; 2027
          </h2>
          <p className="mt-1 text-sm text-ink/60">
            Conversations that inspire curiosity, critical thinking, and diverse perspectives.
          </p>
        </div>
        <Link
          href="/voices"
          className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase hover:underline"
        >
          View All {SPEAKERS.length} Voices &rarr;
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-6 max-[860px]:grid-cols-2 max-[520px]:grid-cols-1">
        {homeSpeakers.map((p, i) => (
          <Link
            key={p.id}
            href="/voices"
            className="group block min-w-0 transition-transform duration-500 ease-out hover:-translate-y-2.5"
          >
            <div
              className={`relative h-80 w-full overflow-hidden rounded-[20px] shadow-[0_34px_60px_-34px_rgba(17,17,17,0.42)] ${CARD_ANIM[i % CARD_ANIM.length]}`}
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 860px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block rounded-full bg-accent/90 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider">
                  {p.category}
                </span>
                <div className="mt-1 font-sans text-[20px] font-extrabold leading-tight">
                  {p.name}
                </div>
              </div>
            </div>
            <div className="mt-3 font-mono text-[11px] tracking-[0.14em] text-gold uppercase">
              {p.role}
            </div>
            {p.conversationTitle && (
              <p className="mt-1.5 line-clamp-2 text-xs text-ink/70">
                &ldquo;{p.conversationTitle}&rdquo;
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
