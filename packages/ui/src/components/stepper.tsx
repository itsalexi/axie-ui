import * as React from "react";
import { cn } from "../lib/cn";

export type StepperItem = {
  description?: React.ReactNode;
  label: React.ReactNode;
  value: string;
};

export type StepperProps = React.HTMLAttributes<HTMLOListElement> & {
  current: string;
  items: readonly StepperItem[];
};

export function Stepper({ className, current, items, ...props }: StepperProps) {
  const currentIndex = Math.max(0, items.findIndex((item) => item.value === current));

  return (
    <ol className={cn("m-0 grid list-none gap-3 p-0", className)} {...props}>
      {items.map((item, index) => {
        const complete = index < currentIndex;
        const active = index === currentIndex;

        return (
          <li
            className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 axie-enter"
            key={item.value}
            style={{ animationDelay: `${index * 45}ms` }}
          >
            <span
              className={cn(
                "grid h-8 w-8 place-items-center rounded-axie-pill border text-[12px] font-black transition duration-300 ease-[var(--axie-motion-spring)]",
                complete || active
                  ? "border-axie-accent bg-axie-accent text-axie-surface"
                  : "border-axie-line bg-axie-surface-soft text-axie-muted"
              )}
            >
              {complete ? "OK" : index + 1}
            </span>
            <span className="grid gap-1 pt-1">
              <span className="text-[14px] font-black leading-5 text-axie-ink">{item.label}</span>
              {item.description ? (
                <span className="text-[12px] font-bold leading-4 text-axie-muted">
                  {item.description}
                </span>
              ) : null}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
