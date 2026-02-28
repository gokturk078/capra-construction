import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeroVariant = "home" | "services" | "projects" | "project-detail" | "careers";
type HeroDensity = "compact" | "balanced" | "immersive";
type HeroStackOrder = "content-first" | "art-first";
type HeroWidth = "narrow" | "default" | "wide";

type HeroFrameProps = {
  variant: HeroVariant;
  eyebrow?: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  actions?: ReactNode;
  art: ReactNode;
  supportingPanel?: ReactNode;
  className?: string;
  contentClassName?: string;
  artColumnClassName?: string;
  density?: HeroDensity;
  mobileStackOrder?: HeroStackOrder;
  showTopScrim?: boolean;
  contentWidth?: HeroWidth;
  artWidth?: HeroWidth;
};

const variantClasses: Record<HeroVariant, string> = {
  home:
    "bg-ink bg-[radial-gradient(circle_at_top_right,rgba(49,67,84,0.32),transparent_30%),linear-gradient(135deg,#0f1720_0%,#17212b_52%,#0f1720_100%)]",
  services:
    "bg-ink bg-[radial-gradient(circle_at_top_right,rgba(49,67,84,0.24),transparent_28%),linear-gradient(135deg,#0f1720_0%,#15202b_48%,#0f1720_100%)]",
  projects:
    "bg-ink bg-[radial-gradient(circle_at_top_right,rgba(49,67,84,0.24),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(122,76,43,0.12),transparent_20%),linear-gradient(135deg,#0f1720_0%,#17212b_48%,#101922_100%)]",
  "project-detail":
    "bg-ink bg-[radial-gradient(circle_at_top_right,rgba(49,67,84,0.26),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(122,76,43,0.08),transparent_20%),linear-gradient(145deg,#0f1720_0%,#17212b_44%,#0f1720_100%)]",
  careers:
    "bg-ink bg-[radial-gradient(circle_at_top_right,rgba(49,67,84,0.22),transparent_28%),linear-gradient(135deg,#0f1720_0%,#16202b_50%,#101922_100%)]"
};

const defaultDensities: Record<HeroVariant, HeroDensity> = {
  home: "balanced",
  services: "compact",
  projects: "compact",
  "project-detail": "balanced",
  careers: "balanced"
};

const densityClasses: Record<HeroDensity, string> = {
  compact:
    "min-h-[min(640px,100svh)] px-6 pb-12 pt-[calc(var(--nav-height-mobile)+18px)] lg:min-h-[min(700px,82svh)] lg:px-10 lg:pb-16 lg:pt-[calc(var(--nav-height-desktop)+20px)]",
  balanced:
    "min-h-[min(760px,100svh)] px-6 pb-16 pt-[calc(var(--nav-height-mobile)+24px)] lg:min-h-[min(840px,100svh)] lg:px-10 lg:pb-20 lg:pt-[calc(var(--nav-height-desktop)+28px)]",
  immersive:
    "min-h-[min(860px,100svh)] px-6 pb-20 pt-[calc(var(--nav-height-mobile)+28px)] lg:min-h-[min(920px,100svh)] lg:px-10 lg:pb-24 lg:pt-[calc(var(--nav-height-desktop)+34px)]"
};

const widthClasses: Record<HeroWidth, string> = {
  narrow: "max-w-3xl",
  default: "max-w-4xl",
  wide: "max-w-5xl"
};

export function HeroFrame({
  variant,
  eyebrow,
  title,
  body,
  actions,
  art,
  supportingPanel,
  className,
  contentClassName,
  artColumnClassName,
  density,
  mobileStackOrder = "content-first",
  showTopScrim = true,
  contentWidth = "default",
  artWidth = "default"
}: HeroFrameProps) {
  const resolvedDensity = density ?? defaultDensities[variant];
  const contentOrderClass = mobileStackOrder === "art-first" ? "order-2" : "order-1";
  const artOrderClass = mobileStackOrder === "art-first" ? "order-1" : "order-2";

  return (
    <section
      data-hero-surface="dark"
      className={cn(
        "relative isolate overflow-hidden text-cloud",
        densityClasses[resolvedDensity],
        variantClasses[variant],
        className
      )}
    >
      {showTopScrim ? (
        <div className="absolute inset-x-0 top-0 h-[calc(var(--nav-height-mobile)+40px)] bg-gradient-to-b from-ink/40 via-ink/16 to-transparent lg:h-[calc(var(--nav-height-desktop)+44px)]" />
      ) : null}
      <div className="relative mx-auto grid max-w-shell gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-start lg:gap-12">
        <div
          className={cn(
            "relative z-10 min-w-0",
            contentOrderClass,
            widthClasses[contentWidth],
            "lg:order-1",
            contentClassName
          )}
        >
          {eyebrow}
          {title}
          {body}
          {actions}
        </div>

        <div
          className={cn(
            "relative z-0 min-w-0 space-y-5",
            artOrderClass,
            widthClasses[artWidth],
            "lg:order-2 lg:justify-self-end",
            artColumnClassName
          )}
        >
          {art}
          {supportingPanel}
        </div>
      </div>
      <div data-hero-sentinel="true" className="absolute inset-x-0 bottom-0 h-px" />
    </section>
  );
}
