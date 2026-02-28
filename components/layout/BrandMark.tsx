"use client";

import Link from "next/link";

import { CapraLogo } from "@/components/layout/CapraLogo";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  href?: string;
  className?: string;
  inverted?: boolean;
  showEmblem?: boolean;
  layout?: "stacked" | "compact";
};

export function BrandMark({
  href = "/tr",
  className,
  inverted = true,
  showEmblem = true,
  layout = "compact"
}: BrandMarkProps) {
  const isCompact = layout === "compact";
  const fallbackPrimary = inverted ? "text-cloud" : "text-ink";
  const fallbackSecondary = inverted ? "text-stone/74" : "text-steel/78";
  const fallbackAccent = inverted ? "bg-stone/28" : "bg-steel/14";

  return (
    <Link
      href={href}
      aria-label="Capra Construction home"
      className={cn(
        "inline-flex items-center leading-none",
        className
      )}
    >
      {showEmblem ? (
        <CapraLogo
          size={isCompact ? "sm" : "md"}
          surface={inverted ? "dark" : "light"}
          framed={inverted}
          className={cn(inverted ? "drop-shadow-[0_10px_24px_rgba(0,0,0,0.18)]" : "")}
        />
      ) : (
        <span className="flex flex-col items-start leading-none">
          <span className={cn("font-heading text-lg font-semibold uppercase tracking-[0.24em]", fallbackPrimary)}>
            Capra
          </span>
          <span className={cn("mt-2 h-px w-full", fallbackAccent)} aria-hidden="true" />
          <span className={cn("mt-2 font-heading text-[9px] uppercase tracking-[0.38em]", fallbackSecondary)}>
            Construction
          </span>
        </span>
      )}
    </Link>
  );
}
