"use client";

import * as React from "react";
import { cn } from "../lib/cn";

export type TabsItem = {
  content: React.ReactNode;
  disabled?: boolean;
  label: string;
  value: string;
};

export type TabsProps = {
  className?: string;
  defaultValue?: string;
  items: readonly TabsItem[];
  onValueChange?: (value: string) => void;
  value?: string;
};

export function Tabs({ className, defaultValue, items, onValueChange, value }: TabsProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? items[0]?.value ?? "");
  const tablistRef = React.useRef<HTMLDivElement | null>(null);
  const tabRefs = React.useRef(new Map<string, HTMLButtonElement>());
  const [indicator, setIndicator] = React.useState<TabsIndicator | null>(null);
  const selectedValue = value ?? internalValue;
  const selectedItem = items.find((item) => item.value === selectedValue) ?? items[0];

  React.useLayoutEffect(() => {
    function measure() {
      const tablist = tablistRef.current;
      const selectedTab = tabRefs.current.get(selectedValue);
      if (!tablist || !selectedTab) {
        setIndicator(null);
        return;
      }
      const tablistBox = tablist.getBoundingClientRect();
      const tabBox = selectedTab.getBoundingClientRect();
      setIndicator({
        height: tabBox.height,
        width: tabBox.width,
        x: tabBox.left - tablistBox.left,
        y: tabBox.top - tablistBox.top
      });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items, selectedValue]);

  function updateValue(nextValue: string) {
    if (value === undefined) setInternalValue(nextValue);
    onValueChange?.(nextValue);
  }

  const indicatorStyle = indicator
    ? ({
        height: `${indicator.height}px`,
        opacity: 1,
        transform: `translate3d(${indicator.x}px, ${indicator.y}px, 0)`,
        width: `${indicator.width}px`
      } satisfies React.CSSProperties)
    : ({ opacity: 0 } satisfies React.CSSProperties);

  return (
    <div className={cn("grid gap-axie-md", className)}>
      <div
        className="relative flex w-fit rounded-axie-pill border border-axie-line bg-axie-surface p-1 shadow-[0_8px_18px_color-mix(in_srgb,var(--axie-color-ink)_4%,transparent)]"
        ref={tablistRef}
        role="tablist"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 rounded-axie-pill bg-axie-ink shadow-[inset_0_1px_0_color-mix(in_srgb,var(--axie-color-surface)_16%,transparent),0_8px_20px_color-mix(in_srgb,var(--axie-color-ink)_12%,transparent)] transition-[height,opacity,transform,width] duration-300 ease-[var(--axie-motion-spring)]"
          style={indicatorStyle}
        />
        {items.map((item) => (
          <button
            aria-selected={item.value === selectedValue}
            className={cn(
              "relative z-[1] min-h-9 rounded-axie-pill px-3 text-[13px] font-black outline-none transition-[color,transform] duration-300 ease-[var(--axie-motion-spring)] focus-visible:ring-2 focus-visible:ring-axie-accent/20 active:scale-95",
              item.value === selectedValue
                ? "text-axie-surface"
                : "text-axie-muted hover:bg-axie-surface-soft hover:text-axie-ink"
            )}
            disabled={item.disabled}
            key={item.value}
            ref={(node) => setTabsRef(tabRefs.current, item.value, node)}
            role="tab"
            type="button"
            onClick={() => updateValue(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="transition-[transform] duration-300 ease-[var(--axie-motion-spring)]" role="tabpanel">
        {selectedItem?.content}
      </div>
    </div>
  );
}

type TabsIndicator = {
  height: number;
  width: number;
  x: number;
  y: number;
};

function setTabsRef(
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
