import * as React from "react";
import { cn } from "../lib/cn";

export type PillProps = React.HTMLAttributes<HTMLDivElement> & {
  selected?: boolean;
};

export function Pill({ className, selected = false, ...props }: PillProps) {
  return (
    <div
      className={cn(
        "inline-flex min-h-10 items-center gap-2 rounded-axie-pill border px-3 text-[13px] font-black leading-none shadow-[0_8px_18px_color-mix(in_srgb,var(--axie-color-ink)_4%,transparent)] axie-pressable",
        selected
          ? "border-axie-ink bg-axie-ink text-axie-surface"
          : "border-axie-line bg-axie-surface text-axie-muted",
        className
      )}
      {...props}
    />
  );
}
