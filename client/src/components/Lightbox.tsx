import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface LightboxProps {
  imageSrc: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ imageSrc, alt, isOpen, onClose }: LightboxProps) {
  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-all duration-200 group"
            aria-label="Close lightbox"
          >
            <X size={20} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Zoom hint */}
          <div className="absolute top-6 left-6 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1]">
            <ZoomIn size={14} className="text-white/40" />
            <span className="text-xs text-white/40 font-medium">Scroll to zoom</span>
          </div>

          {/* Image container */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10 max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6C2BFF]/10 to-[#EC008C]/10 rounded-2xl blur-[60px] -z-10" />

            {/* Image with zoom on scroll */}
            <ZoomableImage src={imageSrc} alt={alt} />

            {/* Image caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl">
              <p className="text-sm text-white/50 text-center font-medium">{alt}</p>
            </div>
          </motion.div>

          {/* Keyboard hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <span className="text-[11px] text-white/30 font-mono">ESC to close</span>
            <span className="w-px h-3 bg-white/10" />
            <span className="text-[11px] text-white/30 font-mono">Click outside to close</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────── Zoomable Image ─────────── */
function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    setScale(1);
  }, [src]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    setScale((prev: number) => Math.min(Math.max(prev + delta, 1), 3));
  };

  return (
    <div
      className="w-full h-full flex items-center justify-center overflow-hidden rounded-2xl cursor-zoom-in"
      onWheel={handleWheel}
      onDoubleClick={() => setScale((prev: number) => (prev > 1 ? 1 : 1.5))}
    >
      <motion.img
        src={src}
        alt={alt}
        className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl shadow-black/50"
        style={{ scale }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        draggable={false}
      />
    </div>
  );
}
