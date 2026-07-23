import { motion } from "framer-motion";

interface LogoProps {
  variant?: "full" | "mark" | "tagline";
  light?: boolean;
  className?: string;
}

export default function Logo({ variant = "full", light = false, className = "h-9" }: LogoProps) {
  const textColor = light ? "#FFFFFF" : "#0D1127";
  const subtextColor = light ? "rgba(255,255,255,0.7)" : "#0D1127";

  if (variant === "mark") {
    return (
      <div className={`relative inline-block ${className}`}>
        <svg viewBox="0 0 120 100" className="h-full w-auto overflow-visible">
          <defs>
            <linearGradient id="markGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#2B36FF" />
              <stop offset="45%" stop-color="#7C2BFF" />
              <stop offset="85%" stop-color="#EC1B8A" />
              <stop offset="100%" stop-color="#FF2A6D" />
            </linearGradient>
          </defs>
          <g>
            <path d="M 12 85 L 48 10 L 82 10 L 46 85 Z" fill="url(#markGrad)" />
            <path d="M 12 10 L 48 85 L 82 85 L 46 10 Z" fill="url(#markGrad)" />

            {/* Pixels */}
            <rect x="76" y="2" width="10" height="10" fill="#FF2A6D" rx="1.5" />
            <rect x="90" y="-6" width="9" height="9" fill="#FF2A6D" rx="1.5" />
            <rect x="92" y="10" width="8" height="8" fill="#EC1B8A" rx="1.5" />
            <rect x="104" y="-12" width="7" height="7" fill="#FF2A6D" rx="1.5" />
            <rect x="105" y="4" width="6" height="6" fill="#EC1B8A" rx="1.5" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <svg viewBox="0 0 360 115" className="h-full w-auto overflow-visible">
        <defs>
          <linearGradient id="logoXGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#2B36FF" />
            <stop offset="45%" stop-color="#7C2BFF" />
            <stop offset="85%" stop-color="#EC1B8A" />
            <stop offset="100%" stop-color="#FF2A6D" />
          </linearGradient>

          <linearGradient id="logoLineLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#2B36FF" />
            <stop offset="100%" stop-color="#7C2BFF" />
          </linearGradient>

          <linearGradient id="logoLineRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#7C2BFF" />
            <stop offset="100%" stop-color="#EC1B8A" />
          </linearGradient>
        </defs>

        <g>
          {/* "Byte" Text */}
          <text
            x="0"
            y="72"
            fontFamily="'Space Grotesk', 'Inter', sans-serif"
            fontWeight="700"
            fontStyle="italic"
            fontSize="78"
            fill={textColor}
            letter-spacing="-2"
          >
            Byte
          </text>

          {/* The Pixelated "X" Symbol */}
          <g transform="translate(216, -2)">
            <path d="M 12 80 L 46 10 L 78 10 L 44 80 Z" fill="url(#logoXGrad)" />
            <path d="M 12 10 L 46 80 L 78 80 L 44 10 Z" fill="url(#logoXGrad)" />

            {/* Floating Pixel Particles */}
            <motion.rect
              x="72"
              y="2"
              width="9"
              height="9"
              fill="#FF2A6D"
              rx="1.5"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.rect
              x="85"
              y="-6"
              width="8"
              height="8"
              fill="#FF2A6D"
              rx="1.5"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.rect
              x="87"
              y="10"
              width="7"
              height="7"
              fill="#EC1B8A"
              rx="1.5"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />
            <motion.rect
              x="98"
              y="-12"
              width="6"
              height="6"
              fill="#FF2A6D"
              rx="1.5"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            />
            <motion.rect
              x="99"
              y="4"
              width="5"
              height="5"
              fill="#EC1B8A"
              rx="1"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />
          </g>

          {/* "SOLUTIONS" Row with flanked lines */}
          <g transform="translate(0, 98)">
            <line x1="2" y1="4" x2="58" y2="4" stroke="url(#logoLineLeft)" strokeWidth="2.5" strokeLinecap="round" />
            <text
              x="78"
              y="10"
              fontFamily="'Space Grotesk', 'Inter', sans-serif"
              fontWeight="700"
              fontSize="16"
              fill={subtextColor}
              letterSpacing="9"
            >
              SOLUTIONS
            </text>
            <line x1="262" y1="4" x2="318" y2="4" stroke="url(#logoLineRight)" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}
