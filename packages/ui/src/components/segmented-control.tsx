"use client";

import * as React from "react";
import { cn } from "../lib/cn";

export type SegmentedControlOption = {
  disabled?: boolean;
  label: string;
  value: string;
};

export type SegmentedControlProps = {
  ariaLabel: string;
  className?: string;
  onValueChange: (value: string) => void;
  options: readonly SegmentedControlOption[];
  value: string;
};

export function SegmentedControl({
  ariaLabel,
  className,
  onValueChange,
  options,
  value
}: SegmentedControlProps) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const optionRefs = React.useRef(new Map<string, HTMLButtonElement>());
  const [indicator, setIndicator] = React.useState<SegmentedIndicator | null>(null);

  React.useLayoutEffect(() => {
    function measure() {
      const root = rootRef.current;
      const selectedOption = optionRefs.current.get(value);
      if (!root || !selectedOption) {
        setIndicator(null);
        return;
      }
      const rootBox = root.getBoundingClientRect();
      const optionBox = selectedOption.getBoundingClientRect();
      setIndicator({
        height: optionBox.height,
        width: optionBox.width,
        x: optionBox.left - rootBox.left,
        y: optionBox.top - rootBox.top
      });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [options, value]);

  const indicatorStyle = indicator
    ? ({
        height: `${indicator.height}px`,
        opacity: 1,
        transform: `translate3d(${indicator.x}px, ${indicator.y}px, 0)`,
        width: `${indicator.width}px`
      } satisfies React.CSSProperties)
    : ({ opacity: 0 } satisfies React.CSSProperties);

  return (
    <div
      aria-label={ariaLabel}
      className={cn(
        "relative grid gap-axie-xs rounded-axie-pill border border-axie-line bg-axie-surface p-1 shadow-[0_8px_18px_color-mix(in_srgb,var(--axie-color-ink)_4%,transparent)]",
        className
      )}
      ref={rootRef}
      role="radiogroup"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 rounded-axie-pill bg-axie-ink shadow-[inset_0_1px_0_color-mix(in_srgb,var(--axie-color-surface)_16%,transparent),0_8px_20px_color-mix(in_srgb,var(--axie-color-ink)_12%,transparent)] transition-[height,opacity,transform,width] duration-300 ease-[var(--axie-motion-spring)]"
        style={indicatorStyle}
      />
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            aria-checked={active}
            className={cn(
              "relative z-[1] min-h-10 rounded-axie-pill px-axie-sm text-[13px] font-[850] outline-none transition-[color,transform] duration-300 ease-[var(--axie-motion-spring)] focus-visible:ring-2 focus-visible:ring-axie-accent/20 active:scale-95",
              active
                ? "text-axie-surface"
                : "text-axie-muted hover:bg-axie-surface-soft hover:text-axie-ink"
            )}
            disabled={option.disabled}
            key={option.value}
            ref={(node) => setSegmentedRef(optionRefs.current, option.value, node)}
            role="radio"
            type="button"
            onClick={() => onValueChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

type SegmentedIndicator = {
  height: number;
  width: number;
  x: number;
  y: number;
};

function setSegmentedRef(
  refs: Map<string, HTMLButtonElement>,
  value: string,
  node: HTMLButtonElement | null
) {
  if (node) {
    refs.set(value, node);
    return;
  }
  refs.delete(value);
}
