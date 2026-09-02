"use client";

import { useCallback, useState } from "react";

export function useHoverPeek() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [cx, setCx] = useState(0);
  const [cy, setCy] = useState(0);

  const trackCursor = useCallback((e: React.MouseEvent) => {
    setCx(e.clientX);
    setCy(e.clientY);
  }, []);
  const clearHover = useCallback(() => setHovered(null), []);
  const hoverRow = useCallback((key: string) => setHovered(key), []);

  return { hovered, cx, cy, trackCursor, clearHover, hoverRow };
}
