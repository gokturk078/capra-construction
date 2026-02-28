import { cn } from "@/lib/utils";

type GoldDividerProps = {
  className?: string;
};

export function GoldDivider({ className }: GoldDividerProps) {
  return <div className={cn("h-px w-full bg-steel/18", className)} aria-hidden="true" />;
}
