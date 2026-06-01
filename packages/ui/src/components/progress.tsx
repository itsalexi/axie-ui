import * as React from "react";
import { cn } from "../lib/cn";

export type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  max?: number;
  tone?: "accent" | "danger" | "info" | "warning";
  value: number;
};

const progressTones = {
  accent: "bg-axie-accent",
  danger: "bg-axie-danger",
  info: "bg-axie-info",
  warning: "bg-axie-warning"
} as const;

export function Progress({ className, max = 100, tone = "accent", value, ...props }: ProgressProps) {
  const normalizedValue = Math.max(0, Math.min(max, value));
  const width = `${(normalizedValue / Math.max(max, 1)) * 100}%`;

  return (
    <div
      aria-valuemax={max}
      aria-valuemin={0}
      aria-valuenow={normalizedValue}
      className={cn("h-2.5 overflow-hidden rounded-axie-pill bg-axie-surface-soft", className)}
      role="progressbar"
      {...props}
    >
      <div
        className={cn(
          "h-full rounded-axie-pill transition-[width] duration-700 ease-[var(--axie-motion-spring)]",
          progressTones[tone]
        )}
        style={{ width }}
      />
    </div>
  );
}
