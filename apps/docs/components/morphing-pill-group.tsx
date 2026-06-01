"use client";

import type { CSSProperties } from "react";
import { useLayoutEffect, useRef, useState } from "react";
import { cn } from "axie-ui";

export type MorphingPillItem<TValue extends string> = {
  label: string;
  value: TValue;
};

export function MorphingPillGroup<TValue extends string>({
  ariaLabel,
  className,
  itemClassName,
  items,
  onValueChange,
  value,
  variant = "light"
}: {
  ariaLabel: string;
  className?: string;
  itemClassName?: string;
  items: readonly MorphingPillItem<TValue>[];
  onValueChange: (value: TValue) => void;
  value: TValue;
  variant?: "light" | "dark";
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef(new Map<TValue, HTMLButtonElement>());
  const [indicator, setIndicator] = useState<PillIndicator | null>(null);

  useLayoutEffect(() => {
    function measure() {
      const root = rootRef.current;
      const activeItem = itemRefs.current.get(value);
      if (!root || !activeItem) {
        setIndicator(null);
        return;
      }
      const rootBox = root.getBoundingClientRect();
      const itemBox = activeItem.getBoundingClientRect();
      setIndicator({
        height: itemBox.height,
        width: itemBox.width,
        x: itemBox.left - rootBox.left,
        y: itemBox.top - rootBox.top
      });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items, value]);

  const indicatorStyle = indicator
    ? ({
        height: `${indicator.height}px`,
        opacity: 1,
        transform: `translate3d(${indicator.x}px, ${indicator.y}px, 0)`,
        width: `${indicator.width}px`
      } satisfies CSSProperties)
    : ({ opacity: 0 } satisfies CSSProperties);

  return (
    <div
      aria-label={ariaLabel}
      className={cn(
        "relative flex rounded-[8px] p-1",
        variant === "dark" ? "bg-white/6" : "bg-axie-surface-soft/72",
        className
      )}
      ref={rootRef}
      role="group"
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-0 top-0 rounded-[7px] shadow-sm transition-[height,opacity,transform,width] duration-300 ease-[var(--axie-motion-spring)]",
          variant === "dark" ? "bg-[#f6efe4]" : "bg-axie-surface"
        )}
        style={indicatorStyle}
      />
      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            aria-pressed={active}
            className={cn(
              "relative z-[1] min-h-8 rounded-[7px] px-3 text-[13px] font-semibold outline-none transition-[color,transform] duration-300 ease-[var(--axie-motion-spring)] focus-visible:ring-2 focus-visible:ring-axie-accent/20 active:scale-95",
              variant === "dark"
                ? active
                  ? "text-[#201c19]"
                  : "text-[#f6efe4]/58 hover:text-[#f6efe4]"
                : active
                  ? "text-axie-ink"
                  : "text-axie-muted hover:text-axie-ink",
              itemClassName
            )}
            key={item.value}
            ref={(node) => setPillRef(itemRefs.current, item.value, node)}
            type="button"
            onClick={() => onValueChange(item.value)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

type PillIndicator = {
  height: number;
  width: number;
  x: number;
  y: number;
};

function setPillRef<TValue extends string>(
  refs: Map<TValue, HTMLButtonElement>,
  value: TValue,
  node: HTMLButtonElement | null
) {
  if (node) {
    refs.set(value, node);
    return;
  }
  refs.delete(value);
}
