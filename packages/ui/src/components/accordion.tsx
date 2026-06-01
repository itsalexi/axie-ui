"use client";

import * as React from "react";
import { cn } from "../lib/cn";

export type AccordionType = "single" | "multiple";

export type AccordionItem = {
  content: React.ReactNode;
  disabled?: boolean;
  title: React.ReactNode;
  value: string;
};

export type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  defaultValue?: string | string[];
  items: readonly AccordionItem[];
  onValueChange?: (value: string | string[]) => void;
  type?: AccordionType;
  value?: string | string[];
};

function toArray(value: string | string[] | undefined) {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

export function Accordion({
  className,
  defaultValue,
  items,
  onValueChange,
  type = "single",
  value,
  ...props
}: AccordionProps) {
  const [internalValue, setInternalValue] = React.useState<string[]>(() => toArray(defaultValue));
  const selectedValues = value === undefined ? internalValue : toArray(value);

  function updateValue(nextValues: string[]) {
    if (value === undefined) setInternalValue(nextValues);
    onValueChange?.(type === "single" ? (nextValues[0] ?? "") : nextValues);
  }

  function toggleItem(item: AccordionItem) {
    if (item.disabled) return;
    const isOpen = selectedValues.includes(item.value);
    if (type === "single") {
      updateValue(isOpen ? [] : [item.value]);
      return;
    }
    updateValue(
      isOpen
        ? selectedValues.filter((selectedValue) => selectedValue !== item.value)
        : [...selectedValues, item.value]
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-axie-card border border-axie-line bg-axie-surface",
        className
      )}
      {...props}
    >
      {items.map((item) => {
        const isOpen = selectedValues.includes(item.value);
        return (
          <div className="border-b border-axie-line last:border-b-0" key={item.value}>
            <button
              aria-expanded={isOpen}
              className={cn(
                "flex min-h-12 w-full items-center justify-between gap-4 px-axie-md py-3 text-left text-[14px] font-black text-axie-ink outline-none axie-pressable focus-visible:bg-axie-surface-soft/68 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-axie-accent/28",
                item.disabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-axie-surface-soft/62 active:bg-axie-surface-soft"
              )}
              disabled={item.disabled}
              type="button"
              onClick={() => toggleItem(item)}
            >
              <span>{item.title}</span>
              <span
                aria-hidden
                className={cn(
                  "grid h-6 w-6 shrink-0 place-items-center rounded-full border border-axie-line text-[16px] leading-none text-axie-muted transition duration-300 ease-[var(--axie-motion-spring)]",
                  isOpen ? "rotate-45 bg-axie-ink text-axie-surface" : "bg-axie-surface"
                )}
              >
                +
              </span>
            </button>
            {isOpen ? (
              <div className="border-t border-axie-line bg-axie-surface-soft/36 px-axie-md py-axie-md text-[14px] font-bold leading-6 text-axie-muted animate-[axie-accordion-down_var(--axie-motion-base)_var(--axie-motion-spring)_both]">
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
