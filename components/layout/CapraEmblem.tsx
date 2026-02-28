import { cn } from "@/lib/utils";

type CapraEmblemProps = {
  className?: string;
  tone?: "light" | "dark" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
  outlined?: boolean;
};

const toneClasses = {
  light: "text-cloud",
  dark: "text-ink",
  accent: "text-copper-dark"
} as const;

const detailToneClasses = {
  light: "text-stone/70",
  dark: "text-copper-dark/70",
  accent: "text-copper-dark"
} as const;

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14",
  xl: "h-24 w-24"
} as const;

export function CapraEmblem({
  className,
  tone = "dark",
  size = "md",
  outlined = false
}: CapraEmblemProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        sizeClasses[size],
        toneClasses[tone],
        outlined ? "opacity-80" : "",
        className
      )}
    >
      <svg viewBox="0 0 128 128" fill="none" className="h-full w-full">
        <path
          d="M28 108V58c0-22 16-38 36-38s36 16 36 38v50"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={outlined ? 0.55 : 0.38}
        />
        <path
          d="M42 54c0-12 8-22 22-22 14 0 22 10 22 22"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={outlined ? 0.9 : 1}
        />
        <path
          d="M52 63c0-7 5-13 12-13s12 6 12 13-5 13-12 13"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={outlined ? 0.9 : 1}
        />
        <path
          d="M64 76v18"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          opacity={outlined ? 0.9 : 1}
        />
        <path
          d="M64 87l-9 7"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          opacity={outlined ? 0.9 : 1}
        />
        <path
          d="M50 50c-10-2-16-9-16-18 0-10 8-18 18-18 9 0 17 6 18 15"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={outlined ? 0.75 : 0.9}
        />
        <path
          d="M78 50c10-2 16-9 16-18 0-10-8-18-18-18-9 0-17 6-18 15"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={outlined ? 0.75 : 0.9}
        />
        <path
          className={detailToneClasses[tone]}
          d="M34 108h60"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          opacity={outlined ? 0.45 : 0.7}
        />
      </svg>
    </span>
  );
}
