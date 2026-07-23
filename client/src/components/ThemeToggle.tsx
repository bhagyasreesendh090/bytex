import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, switchable } = useTheme();

  if (!switchable || !toggleTheme) return null;

  return (
    <button
      onClick={toggleTheme}
      className="relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group"
      style={{
        background: theme === "dark" 
          ? "rgba(255,255,255,0.06)" 
          : "rgba(0,0,0,0.06)",
        border: theme === "dark"
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(0,0,0,0.08)",
      }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{
            opacity: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : 90,
            scale: theme === "dark" ? 1 : 0.5,
          }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0"
        >
          <Moon
            size={18}
            className={theme === "dark" ? "text-white/70" : "text-gray-600"}
          />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            opacity: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : -90,
            scale: theme === "light" ? 1 : 0.5,
          }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0"
        >
          <Sun
            size={18}
            className={theme === "light" ? "text-gray-600" : "text-white/70"}
          />
        </motion.div>
      </div>
    </button>
  );
}
