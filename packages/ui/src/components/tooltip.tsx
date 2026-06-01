import * as React from "react";
import { cn } from "../lib/cn";

export type TooltipProps = {
  children: React.ReactNode;
  className?: string;
  content: React.ReactNode;
};

export function Tooltip({ children, className, content }: TooltipProps) {
  return (
    <span className={cn("group relative inline-flex", className)}>
      {children}
      <span
        className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-20 w-max max-w-56 -translate-x-1/2 translate-y-1 scale-95 rounded-[8px] bg-axie-ink px-2.5 py-1.5 text-[12px] font-bold leading-4 text-axie-surface opacity-0 shadow-axie-soft transition duration-200 ease-[var(--axie-motion-spring)] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100"
        role="tooltip"
      >
        {content}
      </span>
    </span>
  );
}
