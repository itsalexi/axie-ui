"use client";

import * as React from "react";
import { cn } from "../lib/cn";

export type RadioGroupOption = {
  description?: string;
  disabled?: boolean;
  label: string;
  value: string;
};

export type RadioGroupProps = {
  className?: string;
  name: string;
  onValueChange?: (value: string) => void;
  options: readonly RadioGroupOption[];
  value?: string;
};

export function RadioGroup({ className, name, onValueChange, options, value }: RadioGroupProps) {
  return (
    <div className={cn("grid gap-2", className)} role="radiogroup">
      {options.map((option) => {
        const checked = option.value === value;
        return (
          <label
            className={cn(
              "grid cursor-pointer grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-[12px] border p-3 axie-pressable has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-60",
              checked
                ? "border-axie-accent bg-axie-accent-soft/68"
                : "border-axie-line bg-axie-surface hover:bg-axie-surface-soft/70"
            )}
            key={option.value}
          >
            <input
              checked={checked}
              className="mt-0.5 h-5 w-5 accent-axie-accent"
              disabled={option.disabled}
              name={name}
              type="radio"
              value={option.value}
              onChange={() => onValueChange?.(option.value)}
            />
            <span className="grid gap-1">
              <span className="text-[14px] font-black leading-5 text-axie-ink">{option.label}</span>
              {option.description ? (
                <span className="text-[12px] font-bold leading-4 text-axie-muted">
                  {option.description}
                </span>
              ) : null}
            </span>
          </label>
        );
      })}
    </div>
  );
}
