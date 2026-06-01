import * as React from "react";
import { cn } from "../lib/cn";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "min-h-28 w-full resize-none rounded-axie-control border border-axie-line bg-axie-surface-soft px-axie-md py-3 text-[16px] font-bold leading-6 text-axie-ink outline-none transition-[background-color,border-color,box-shadow,transform] duration-300 ease-[var(--axie-motion-spring)] placeholder:text-axie-muted/52 focus:-translate-y-px focus:border-axie-accent/55 focus:bg-axie-surface focus:ring-2 focus:ring-axie-accent/16 disabled:cursor-not-allowed disabled:opacity-55 disabled:focus:translate-y-0",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";
