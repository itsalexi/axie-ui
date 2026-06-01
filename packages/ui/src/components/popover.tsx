"use client";

import * as React from "react";
import { cn } from "../lib/cn";

export type PopoverProps = {
  align?: "start" | "center" | "end";
  children: React.ReactNode;
  className?: string;
  content: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const alignStyles = {
  center: "left-1/2 -translate-x-1/2",
  end: "right-0",
  start: "left-0"
} as const;

export function Popover({
  align = "center",
  children,
  className,
  content,
  open,
  onOpenChange
}: PopoverProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLSpanElement | null>(null);
  const isOpen = open ?? internalOpen;

  function setOpen(nextOpen: boolean) {
    if (open === undefined) setInternalOpen(nextOpen);
    onOpenChange?.(nextOpen);
  }

  React.useEffect(() => {
    if (!isOpen) return undefined;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const trigger = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
        "aria-expanded": isOpen,
        onClick: (event: React.MouseEvent<HTMLElement>) => {
          (children as React.ReactElement<React.HTMLAttributes<HTMLElement>>).props.onClick?.(event);
          setOpen(!isOpen);
        }
      })
    : children;

  return (
    <span className={cn("relative inline-flex", className)} ref={rootRef}>
      {trigger}
      {isOpen ? (
        <span
          className={cn(
            "absolute top-[calc(100%+8px)] z-30 grid min-w-64 rounded-[14px] border border-axie-line bg-axie-surface p-2 text-axie-ink shadow-[0_20px_54px_color-mix(in_srgb,var(--axie-color-ink)_14%,transparent)] axie-pop",
            alignStyles[align]
          )}
          role="dialog"
        >
          {content}
        </span>
      ) : null}
    </span>
  );
}
