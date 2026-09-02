import { JOURNAL } from "@/data/festival";
import { rowInteractive } from "@/lib/ui";

export default function JournalContent() {
  return (
    <section className="px-10 pt-37.5 pb-27.5 max-[640px]:px-5">
      <div className="font-mono text-[11px] tracking-[0.2em] text-ink/50 uppercase">
        /journal
      </div>
      <h1 className="mt-6 mb-12.5 font-sans text-[clamp(48px,8vw,120px)] leading-[0.95] font-extrabold break-words max-[480px]:text-[clamp(34px,11vw,120px)]">
        Notes between
        <br />
        editions.
      </h1>
      <div>
        {JOURNAL.map((j) => (
          <div key={j.id} className={`${rowInteractive} items-start py-7.5`}>
            <span className="w-32.5 flex-none font-mono text-[11px] text-ink/45 max-[700px]:order-2 max-[700px]:w-auto">
              {j.date}
            </span>
            <div
              className="h-25 w-37.5 flex-none overflow-hidden rounded-[20px] bg-cover bg-center shadow-[0_20px_40px_-24px_rgba(17,17,17,0.4)] transition-transform duration-500 ease-out group-hover:scale-[1.04] max-[700px]:order-1 max-[700px]:h-40 max-[700px]:basis-full"
              style={{ backgroundImage: `url(https://picsum.photos/seed/kkg-${j.id}/600/400)` }}
            />
            <div className="flex-1 max-[700px]:order-3 max-[700px]:mt-1.5 max-[700px]:basis-full">
              <div className="font-sans text-[clamp(24px,2.8vw,38px)] leading-[1.15] font-extrabold tracking-[-0.02em]">
                {j.title}
              </div>
              <div className="mt-2 max-w-155 text-sm text-ink/55">{j.excerpt}</div>
            </div>
            <span className="w-30 flex-none text-right font-mono text-[11px] tracking-[0.12em] text-ink/45 uppercase max-[700px]:order-2 max-[700px]:ml-auto max-[700px]:w-auto">
              {j.kind}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
