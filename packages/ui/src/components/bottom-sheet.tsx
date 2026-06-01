"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/cn";

export type BottomSheetProps = {
  children: React.ReactNode;
  className?: string;
  description?: string;
  footer?: React.ReactNode;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  title?: string;
};

let bodyLockCount = 0;
let previousOverflow = "";

export function BottomSheet({
  children,
  className,
  description,
  footer,
  onOpenChange,
  open,
  title
}: BottomSheetProps) {
  React.useEffect(() => {
    if (!open) return undefined;
    const unlock = lockBodyScroll();

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onOpenChange(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      unlock();
    };
  }, [onOpenChange, open]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50 grid items-end bg-axie-ink/26 axie-sheet-backdrop">
      <button
        aria-label="Close sheet"
        className="absolute inset-0 cursor-default"
        type="button"
        onClick={() => onOpenChange(false)}
      />
      <section
        aria-modal="true"
        className={cn(
          "relative mx-auto max-h-[calc(100dvh-18px)] w-full max-w-[680px] overflow-y-auto rounded-t-axie-sheet bg-axie-surface px-axie-page pb-[max(28px,env(safe-area-inset-bottom))] pt-axie-sm text-axie-ink shadow-[0_-18px_50px_color-mix(in_srgb,var(--axie-color-ink)_12%,transparent)] axie-sheet-panel",
          className
        )}
        role="dialog"
      >
        <div className="-mx-axie-page -mt-axie-sm flex justify-center px-axie-page pb-axie-sm pt-axie-sm">
          <div className="h-1.5 w-11 rounded-axie-pill bg-axie-line" />
        </div>
        {title || description ? (
          <header className="mb-axie-md grid gap-1.5">
            {title ? <h2 className="m-0 text-[22px] font-black leading-none">{title}</h2> : null}
            {description ? (
              <p className="m-0 text-[13px] font-bold leading-5 text-axie-muted">{description}</p>
            ) : null}
          </header>
        ) : null}
        <div className="grid gap-axie-md">{children}</div>
        {footer ? <footer className="mt-axie-md grid gap-axie-xs">{footer}</footer> : null}
      </section>
    </div>,
    document.body
  );
}

function lockBodyScroll() {
  if (bodyLockCount === 0) {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  bodyLockCount += 1;

  let released = false;
  return () => {
    if (released) return;
    released = true;
    bodyLockCount = Math.max(0, bodyLockCount - 1);
    if (bodyLockCount === 0) {
      document.body.style.overflow = previousOverflow;
      previousOverflow = "";
    }
  };
}
