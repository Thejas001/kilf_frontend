import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";

export default function AboutPreview() {
  return (
    <section className="grid grid-cols-2 items-start gap-20 px-10 pb-27.5 max-[860px]:grid-cols-1 max-[640px]:px-5">
      <div className="relative z-[2] h-140 w-full overflow-hidden rounded-[20px] shadow-[0_40px_80px_-40px_rgba(17,17,17,0.45),0_2px_0_rgba(255,255,255,0.6)]">
        <ImageSlot
          src="https://picsum.photos/seed/kkg-tent/900/1200"
          alt="Reading tent, last edition"
        />
      </div>
      <div>
        <div className="mb-7 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
          About
        </div>
        <p className="m-0 mb-7 font-sans text-[32px] leading-[1.3] font-extrabold tracking-[-0.02em]">
          KILF stands for the Kollam International Literature Festival.
        </p>
        <p className="m-0 mb-5 text-[15px] leading-loose text-ink/62">
          It began in 2021 as a two-room gathering of translators in
          Thrissur. Four editions later it fills a beachfront with poets,
          publishers, students and readers who argue past midnight.
        </p>
        <p className="m-0 mb-8.5 text-[15px] leading-loose text-ink/62">
          Every session is free to attend for students. Everything else is
          paid for by the people who show up.
        </p>
        <Link
          href="/about"
          className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase"
        >
          Our history &rarr;
        </Link>
      </div>
    </section>
  );
}
