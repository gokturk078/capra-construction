"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
  inverse?: boolean;
};

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  className,
  inverse = false
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let frame = 0;
    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayValue(Math.round(value * progress));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <p
        className={cn(
          "font-accent text-6xl sm:text-7xl lg:text-8xl",
          inverse ? "text-cloud" : "text-ink"
        )}
      >
        {prefix}
        {Intl.NumberFormat("en-US").format(displayValue)}
        {suffix}
      </p>
      <p
        className={cn(
          "mt-4 font-body text-xs uppercase tracking-[0.28em]",
          inverse ? "text-stone/70" : "text-steel/80"
        )}
      >
        {label}
      </p>
    </div>
  );
}
