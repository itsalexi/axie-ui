import * as React from "react";
import { cn } from "../lib/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      className={cn(
        "min-h-12 w-full rounded-axie-control border border-axie-line bg-axie-surface-soft px-axie-md text-[16px] font-bold text-axie-ink outline-none transition-[background-color,border-color,box-shadow,transform] duration-300 ease-[var(--axie-motion-spring)] placeholder:text-axie-muted/52 focus:-translate-y-px focus:border-axie-accent/55 focus:bg-axie-surface focus:ring-2 focus:ring-axie-accent/16 disabled:cursor-not-allowed disabled:opacity-55 disabled:focus:translate-y-0",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

Input.displayName = "Input";
