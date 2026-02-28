import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: string;
  className?: string;
  tone?: "default" | "inverse" | "accent";
};

const toneClasses = {
  default: "text-steel/80",
  inverse: "text-stone/72",
  accent: "text-copper-dark"
} as const;

export function SectionLabel({
  children,
  className,
  tone = "default"
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        "font-heading text-[11px] font-semibold uppercase tracking-[0.24em]",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
