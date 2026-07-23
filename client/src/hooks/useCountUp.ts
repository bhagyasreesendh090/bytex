import { useState, useEffect, useRef, RefObject } from "react";

interface CountUpOptions {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

/**
 * Animates a number from 0 to `end` when the element scrolls into view.
 * Returns [displayValue, ref] — attach ref to the element to observe.
 */
export function useCountUp({
  end,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
}: CountUpOptions): [string, RefObject<HTMLElement | null>] {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  // Intersection observer to trigger animation when visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  // Animate the value
  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    let rafId: number;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * end);

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [started, end, duration]);

  const display = `${prefix}${value.toFixed(decimals)}${suffix}`;
  return [display, ref];
}
