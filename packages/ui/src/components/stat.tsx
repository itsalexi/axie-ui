import * as React from "react";
import { cn } from "../lib/cn";

export type StatProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  tone?: "neutral" | "accent" | "danger";
  value: string;
};

const statTones = {
  neutral: "text-axie-ink",
  accent: "text-axie-accent",
  danger: "text-axie-danger"
} as const;

export function Stat({ className, label, tone = "neutral", value, ...props }: StatProps) {
  return (
    <div className={cn("min-w-0 axie-enter", className)} {...props}>
      <span className="block truncate text-[11px] font-black uppercase leading-none tracking-normal text-axie-muted">
        {label}
      </span>
      <span className={cn("mt-1.5 block truncate text-[24px] font-black leading-none", statTones[tone])}>
        {value}
      </span>
    </div>
  );
}
