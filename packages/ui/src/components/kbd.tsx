import * as React from "react";
import { cn } from "../lib/cn";

export function Kbd({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      className={cn(
        "inline-flex min-h-6 items-center rounded-[7px] border border-axie-line bg-axie-surface px-1.5 font-mono text-[11px] font-black leading-none text-axie-muted shadow-[inset_0_-1px_0_color-mix(in_srgb,var(--axie-color-ink)_10%,transparent)] transition duration-200 ease-[var(--axie-motion-spring)]",
        className
      )}
      {...props}
    />
  );
}
