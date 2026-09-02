// Shared Tailwind class recipes for the hover/focus "row" treatment used by
// session, speaker and journal lists — kept as one constant so the four
// list components stay pixel-identical instead of hand-copying utility
// strings.
export const rowInteractive =
  "group flex w-full items-center gap-6 border-t border-ink/10 py-7 text-left transition-[padding-left,background-color] duration-500 ease-out hover:bg-accent/5 hover:pl-5 focus-visible:bg-accent/5 focus-visible:pl-5 focus-visible:outline-none max-[640px]:flex-wrap max-[640px]:gap-1.5 max-[640px]:py-5.5";

export const rowLabel =
  "flex-none font-mono text-[11px] tracking-[0.14em] text-ink/45 max-[640px]:w-full";

export const rowMeta =
  "flex-none text-right font-mono text-[11px] tracking-[0.12em] text-ink/50 uppercase max-[640px]:w-full max-[640px]:text-left";

export const rowTitle =
  "flex-1 font-sans font-extrabold tracking-[-0.02em] leading-[1.1] transition-colors group-hover:text-accent group-focus-visible:text-accent max-[640px]:basis-full";
