import Image from "next/image";

import capraLogo from "@/logo.png";
import { cn } from "@/lib/utils";

type CapraLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  surface?: "light" | "dark";
  framed?: boolean;
  priority?: boolean;
};

const sizeClasses = {
  sm: "w-[72px] sm:w-[78px] lg:w-[84px]",
  md: "w-[92px] sm:w-[102px] lg:w-[112px]",
  lg: "w-[156px] sm:w-[176px] lg:w-[188px]",
  xl: "w-[220px] sm:w-[250px] lg:w-[280px]"
} as const;

export function CapraLogo({
  className,
  size = "md",
  surface = "light",
  framed = false,
  priority = false
}: CapraLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        framed
          ? surface === "dark"
            ? "rounded-sm border border-white/12 bg-white/[0.96] p-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.14)]"
            : "rounded-sm border border-steel/10 bg-surface-card p-1"
          : "",
        className
      )}
    >
      <Image
        src={capraLogo}
        alt="Capra Building Technology logo"
        priority={priority}
        className={cn("h-auto", sizeClasses[size])}
      />
    </span>
  );
}
