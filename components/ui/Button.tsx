"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  ariaLabel?: string;
};

type LinkProps = SharedProps & {
  href: string;
  target?: string;
};

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const baseClasses =
  "inline-flex items-center justify-center gap-3 rounded-none border px-6 py-4 font-heading text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-500 ease-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-page)]";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-ink bg-ink text-cloud hover:border-slate hover:bg-slate",
  secondary:
    "border-steel/18 bg-surface-card text-ink hover:border-steel/28 hover:bg-surface-muted",
  ghost:
    "border-steel/18 bg-transparent text-steel hover:border-steel/35 hover:text-ink"
};

function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  icon,
  target,
  ariaLabel
}: LinkProps) {
  return (
    <Link
      href={href}
      target={target}
      aria-label={ariaLabel}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      <span>{children}</span>
      {icon}
    </Link>
  );
}

function ButtonNative({
  children,
  className,
  variant = "primary",
  icon,
  ariaLabel,
  ...props
}: NativeButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
}

export function Button(props: LinkProps | NativeButtonProps) {
  if ("href" in props && typeof props.href === "string") {
    return <ButtonLink {...props} />;
  }

  return <ButtonNative {...props} />;
}
