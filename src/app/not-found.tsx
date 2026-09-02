import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center px-10 pt-37.5 pb-27.5 max-[640px]:px-5">
      <div className="font-mono text-[11px] tracking-[0.2em] text-ink/50 uppercase">
        404
      </div>
      <h1 className="mt-6 mb-5 font-sans text-[clamp(40px,7vw,96px)] leading-[0.95] font-extrabold break-words">
        This page skipped the programme.
      </h1>
      <p className="m-0 mb-10 max-w-130 text-[15px] text-ink/60">
        The page you&apos;re looking for doesn&apos;t exist, or has moved.
        Try the programme, or head back home.
      </p>
      <div className="flex flex-wrap gap-6 font-mono text-[11px] tracking-[0.14em] uppercase">
        <Link href="/" className="text-accent">
          Home &rarr;
        </Link>
        <Link href="/programme" className="text-ink/65 hover:text-ink">
          Programme &rarr;
        </Link>
      </div>
    </section>
  );
}
