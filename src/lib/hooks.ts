"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useScrollProgress() {
  const [scrollY, setScrollY] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      setScrollY(window.scrollY);
      setProgress(Math.min(1, window.scrollY / max));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollY, progress };
}

export function useNow(intervalMs = 1000) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    // Deliberately null-until-mounted: Date.now() differs between server
    // render and client hydration, so setting it only after mount (instead
    // of in useState's initializer) avoids a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}

export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<T>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    e.currentTarget.style.transform = `translate(${(dx * 14).toFixed(1)}px,${(dy * 10).toFixed(1)}px)`;
  }, []);

  const onMouseLeave = useCallback((e: React.MouseEvent<T>) => {
    e.currentTarget.style.transform = "translate(0,0)";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
