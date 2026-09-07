"use client";

import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] flex-col justify-center px-10 pt-37.5 pb-27.5 max-[640px]:px-5">
      <div className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
        Error
      </div>
      <h1 className="mt-6 mb-5 font-sans text-[clamp(40px,7vw,96px)] leading-[0.95] font-extrabold break-words text-accent">
        Something went wrong.
      </h1>
      <p className="m-0 mb-10 max-w-130 text-[15px] text-ink/60">
        An unexpected error stopped this page from loading. You can try
        again, or come back later.
      </p>
      <button
        type="button"
        onClick={() => retry()}
        className="w-fit border border-accent px-4.5 py-2.5 font-mono text-[11px] tracking-[0.14em] text-accent uppercase transition-colors hover:bg-accent hover:text-white"
      >
        Try again
      </button>
    </section>
  );
}
