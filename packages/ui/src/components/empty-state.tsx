import * as React from "react";
import { cn } from "../lib/cn";

export type EmptyStateProps = React.HTMLAttributes<HTMLDivElement> & {
  action?: React.ReactNode;
  description: string;
  title: string;
};

export function EmptyState({
  action,
  className,
  description,
  title,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "grid justify-items-start gap-axie-sm rounded-axie-card border border-dashed border-axie-line bg-axie-surface/72 p-axie-lg text-left axie-enter",
        className
      )}
      {...props}
    >
      <div className="h-2 w-12 rounded-axie-pill bg-axie-accent transition duration-500 ease-[var(--axie-motion-spring)]" />
      <div className="grid gap-1.5">
        <h3 className="m-0 text-[18px] font-black leading-none text-axie-ink">{title}</h3>
        <p className="m-0 max-w-[48ch] text-[14px] font-bold leading-5 text-axie-muted">
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}
