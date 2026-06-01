import * as React from "react";
import { cn } from "../lib/cn";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-axie-pill bg-axie-surface-soft before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--axie-color-surface)_68%,transparent),transparent)] before:animate-[axie-shimmer_1.4s_ease-in-out_infinite]",
        className
      )}
      {...props}
    />
  );
}
