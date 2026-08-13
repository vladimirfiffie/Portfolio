"use client";
import { useEffect } from "react";

/**
 * Lands the page at the top on a fresh load instead of restoring a stale
 * offset. Lives in its own client component so the root layout can stay a
 * server component — `export const metadata` only works there.
 */
export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
