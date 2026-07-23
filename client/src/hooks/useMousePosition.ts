import { useState, useEffect, useCallback, RefObject } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}

/**
 * Returns normalized (-1..1) offset of mouse relative to element center.
 * Useful for magnetic hover and 3D tilt effects.
 */
export function useRelativeMouse(ref: RefObject<HTMLElement | null>) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setOffset({
        x: ((e.clientX - cx) / (rect.width / 2)),
        y: ((e.clientY - cy) / (rect.height / 2)),
      });
    },
    [ref]
  );

  const handleLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMove as any, { passive: true });
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove as any);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [ref, handleMove, handleLeave]);

  return offset;
}
