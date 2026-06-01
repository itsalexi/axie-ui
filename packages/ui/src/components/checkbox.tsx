import * as React from "react";
import { cn } from "../lib/cn";

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  description?: React.ReactNode;
  label?: React.ReactNode;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, description, label, ...props }, ref) => {
    const input = (
      <input
        className={cn(
          "mt-0.5 h-5 w-5 shrink-0 rounded-[6px] border border-axie-line bg-axie-surface accent-axie-accent outline-none transition duration-300 ease-[var(--axie-motion-spring)] focus-visible:scale-105 focus-visible:ring-2 focus-visible:ring-axie-accent/28 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        type="checkbox"
        {...props}
      />
    );

    if (!label && !description) return input;

    return (
      <label className="grid cursor-pointer grid-cols-[auto_minmax(0,1fr)] gap-axie-sm text-axie-ink transition duration-300 ease-[var(--axie-motion-spring)] hover:-translate-y-0.5 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-60 has-[:disabled]:hover:translate-y-0">
        {input}
        <span className="grid gap-1">
          {label ? <span className="text-[14px] font-black leading-5">{label}</span> : null}
          {description ? (
            <span className="text-[12px] font-bold leading-4 text-axie-muted">{description}</span>
          ) : null}
        </span>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
