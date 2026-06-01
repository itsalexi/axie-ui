import * as React from "react";
import { cn } from "../lib/cn";

export type AlertTone = "neutral" | "accent" | "danger" | "warning" | "info";

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  description?: React.ReactNode;
  title?: React.ReactNode;
  tone?: AlertTone;
};

const alertTones: Record<AlertTone, string> = {
  neutral: "border-axie-line bg-axie-surface text-axie-ink",
  accent: "border-axie-accent/25 bg-axie-accent-soft/72 text-axie-accent",
  danger: "border-axie-danger/25 bg-axie-danger-soft/72 text-axie-danger",
  warning: "border-axie-warning/25 bg-axie-warning-soft/72 text-axie-warning",
  info: "border-axie-info/25 bg-axie-info-soft/72 text-axie-info"
};

export function Alert({
  children,
  className,
  description,
  title,
  tone = "neutral",
  ...props
}: AlertProps) {
  return (
    <div
      className={cn(
        "grid gap-1.5 rounded-axie-card border px-axie-md py-3 text-[14px] shadow-[inset_0_1px_0_color-mix(in_srgb,var(--axie-color-surface)_50%,transparent)] axie-enter",
        alertTones[tone],
        className
      )}
      role={tone === "danger" ? "alert" : "status"}
      {...props}
    >
      {title ? <div className="font-black leading-5">{title}</div> : null}
      {description ? <div className="font-bold leading-5 opacity-[0.78]">{description}</div> : null}
      {children}
    </div>
  );
}
