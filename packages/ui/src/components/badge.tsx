import * as React from "react";
import { cn } from "../lib/cn";

export type BadgeTone = "neutral" | "accent" | "danger" | "warning" | "info";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
};

const badgeTones: Record<BadgeTone, string> = {
  neutral: "bg-axie-surface-soft text-axie-muted",
  accent: "bg-axie-accent-soft text-axie-accent",
  danger: "bg-axie-danger-soft text-axie-danger",
  warning: "bg-axie-warning-soft text-axie-warning",
  info: "bg-axie-info-soft text-axie-info"
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-axie-pill px-2.5 text-[11px] font-black uppercase leading-none tracking-normal transition duration-300 ease-[var(--axie-motion-spring)] hover:-translate-y-0.5",
        badgeTones[tone],
        className
      )}
      {...props}
    />
  );
}
