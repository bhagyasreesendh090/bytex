interface LogoProps {
  variant?: "full" | "mark" | "tagline";
  light?: boolean;
  className?: string;
}

export default function Logo({
  variant = "full",
  light = false,
  className = "h-10",
}: LogoProps) {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="AEVIQ Labs Logo"
        className={`h-full w-auto object-contain select-none ${
          light ? "brightness-105 contrast-105" : ""
        }`}
      />
    </div>
  );
}
