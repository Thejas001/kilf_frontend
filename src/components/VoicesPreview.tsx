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
  const homeSpeakers = SPEAKERS.slice(0, 4);

  return (
    <section className="px-10 pb-27.5 max-[640px]:px-5">
      <div className="mb-10 flex items-baseline justify-between border-t border-ink/12 pt-7.5">
        <h2 className="m-0 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
          Voices, 2027
        </h2>
        <Link
          href="/voices"
          className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase"
        >
          All {SPEAKERS.length} &rarr;
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-6 max-[860px]:grid-cols-2">
        {homeSpeakers.map((p, i) => (
          <Link
            key={p.id}
            href="/voices"
            className="group block min-w-0 transition-transform duration-500 ease-out hover:-translate-y-2.5"
          >
            <div
              className={`relative h-75 w-full overflow-hidden rounded-[20px] shadow-[0_34px_60px_-34px_rgba(17,17,17,0.42)] ${CARD_ANIM[i]}`}
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 860px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 font-sans text-[22px] font-extrabold tracking-[-0.02em] text-accent">
              {p.name}
            </div>
            <div className="mt-1.5 font-mono text-[10px] tracking-[0.14em] text-gold uppercase">
              {p.role}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
