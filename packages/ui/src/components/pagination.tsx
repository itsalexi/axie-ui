import * as React from "react";
import { cn } from "../lib/cn";

export type PaginationProps = React.HTMLAttributes<HTMLElement> & {
  label?: string;
};

export function Pagination({
  className,
  label = "Pagination",
  ...props
}: PaginationProps) {
  return (
    <nav
      aria-label={label}
      className={cn("flex items-center justify-center gap-1", className)}
      {...props}
    />
  );
}

export type PaginationItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  current?: boolean;
};

export const PaginationItem = React.forwardRef<HTMLButtonElement, PaginationItemProps>(
  ({ className, current = false, ...props }, ref) => (
    <button
      aria-current={current ? "page" : undefined}
      className={cn(
        "grid h-9 min-w-9 place-items-center rounded-axie-control border px-2 text-[13px] font-black outline-none axie-pressable focus-visible:ring-2 focus-visible:ring-axie-accent/30",
        current
          ? "border-axie-ink bg-axie-ink text-axie-surface"
          : "border-axie-line bg-axie-surface text-axie-muted hover:bg-axie-surface-soft hover:text-axie-ink",
        className
      )}
      ref={ref}
      type="button"
      {...props}
    />
  )
);

PaginationItem.displayName = "PaginationItem";
