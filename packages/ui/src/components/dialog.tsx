"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/cn";

export type DialogProps = {
  children: React.ReactNode;
  className?: string;
  description?: string;
  footer?: React.ReactNode;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  title?: string;
};

export function Dialog({
  children,
  className,
  description,
  footer,
  onOpenChange,
  open,
  title
}: DialogProps) {
  React.useEffect(() => {
    if (!open) return undefined;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onOpenChange(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onOpenChange, open]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50 grid place-items-center bg-axie-ink/24 p-4 backdrop-blur-sm axie-fade">
      <button
        aria-label="Close dialog"
        className="absolute inset-0 cursor-default"
        type="button"
        onClick={() => onOpenChange(false)}
      />
      <section
        aria-modal="true"
        className={cn(
          "relative grid w-full max-w-[460px] gap-axie-md rounded-[20px] border border-axie-line bg-axie-surface p-axie-lg text-axie-ink shadow-[0_28px_70px_color-mix(in_srgb,var(--axie-color-ink)_18%,transparent)] axie-pop",
          className
        )}
        role="dialog"
      >
        {title || description ? (
          <header className="grid gap-2">
            {title ? <h2 className="m-0 text-[22px] font-black leading-none">{title}</h2> : null}
            {description ? (
              <p className="m-0 text-[13px] font-bold leading-5 text-axie-muted">{description}</p>
            ) : null}
          </header>
        ) : null}
        {children}
        {footer ? <footer className="grid gap-axie-xs">{footer}</footer> : null}
      </section>
    </div>,
    document.body
  );
}
