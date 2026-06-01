import * as React from "react";
import { cn } from "../lib/cn";

export type ToastTone = "neutral" | "accent" | "danger" | "warning" | "info";

export type ToastProps = React.HTMLAttributes<HTMLDivElement> & {
  action?: React.ReactNode;
  description?: React.ReactNode;
  onDismiss?: () => void;
  title: React.ReactNode;
  tone?: ToastTone;
};

const toastToneStyles: Record<ToastTone, string> = {
  neutral: "border-axie-line bg-axie-surface",
  accent: "border-axie-accent/26 bg-axie-accent-soft",
  danger: "border-axie-danger/26 bg-axie-danger-soft",
  warning: "border-axie-warning/28 bg-axie-warning-soft",
  info: "border-axie-info/26 bg-axie-info-soft"
};

export function Toast({
  action,
  className,
  description,
  onDismiss,
  title,
  tone = "neutral",
  ...props
}: ToastProps) {
  return (
    <div
      className={cn(
        "grid min-w-0 gap-3 rounded-axie-card border p-axie-md text-axie-ink shadow-[0_18px_42px_color-mix(in_srgb,var(--axie-color-ink)_10%,transparent)] axie-enter sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start",
        toastToneStyles[tone],
        className
      )}
      role="status"
      {...props}
    >
      <div className="grid min-w-0 gap-1">
        <p className="m-0 text-[14px] font-black leading-5">{title}</p>
        {description ? (
          <p className="m-0 text-[13px] font-bold leading-5 text-axie-muted">{description}</p>
        ) : null}
      </div>
      {action || onDismiss ? (
        <div className="flex shrink-0 items-start gap-2">
          {action ? <div>{action}</div> : null}
          {onDismiss ? (
            <button
              aria-label="Dismiss toast"
              className="grid h-7 w-7 place-items-center rounded-[8px] border border-axie-line bg-axie-surface/70 text-[12px] font-black text-axie-muted transition hover:border-axie-muted/42 hover:text-axie-ink"
              type="button"
              onClick={onDismiss}
            >
              x
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export type ToastStackProps = React.HTMLAttributes<HTMLDivElement> & {
  position?: "top-right" | "bottom-right" | "bottom-left";
};

const toastStackPositions: Record<NonNullable<ToastStackProps["position"]>, string> = {
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-right": "right-4 top-4"
};

export function ToastStack({
  className,
  position = "bottom-right",
  ...props
}: ToastStackProps) {
  return (
    <div
      className={cn(
        "fixed z-40 grid w-[min(380px,calc(100vw-32px))] gap-2",
        toastStackPositions[position],
        className
      )}
      {...props}
    />
  );
}
