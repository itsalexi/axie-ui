import * as React from "react";
import { cn } from "../lib/cn";

export type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  description?: React.ReactNode;
  label?: React.ReactNode;
};

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, description, label, ...props }, ref) => {
    const control = (
      <span className="relative inline-flex h-7 w-12 shrink-0 items-center">
        <input
          className={cn("peer sr-only", className)}
          ref={ref}
          role="switch"
          type="checkbox"
          {...props}
        />
        <span className="absolute inset-0 rounded-axie-pill border border-axie-line bg-axie-surface-soft transition duration-300 ease-[var(--axie-motion-spring)] peer-checked:border-axie-accent peer-checked:bg-axie-accent peer-focus-visible:ring-2 peer-focus-visible:ring-axie-accent/28 peer-disabled:opacity-50" />
        <span className="pointer-events-none absolute left-1 h-5 w-5 rounded-axie-pill bg-axie-surface shadow-[0_2px_6px_color-mix(in_srgb,var(--axie-color-ink)_16%,transparent)] transition-transform duration-300 ease-[var(--axie-motion-pop)] peer-checked:translate-x-5 peer-active:scale-90" />
      </span>
    );

    if (!label && !description) return control;

    return (
      <label className="grid cursor-pointer grid-cols-[minmax(0,1fr)_auto] items-center gap-axie-sm text-axie-ink transition duration-300 ease-[var(--axie-motion-spring)] hover:-translate-y-0.5 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-60 has-[:disabled]:hover:translate-y-0">
        <span className="grid gap-1">
          {label ? <span className="text-[14px] font-black leading-5">{label}</span> : null}
          {description ? (
            <span className="text-[12px] font-bold leading-4 text-axie-muted">{description}</span>
          ) : null}
        </span>
        {control}
      </label>
    );
  }
);

Switch.displayName = "Switch";
