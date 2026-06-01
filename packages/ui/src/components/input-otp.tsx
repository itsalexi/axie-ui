"use client";

import * as React from "react";
import { cn } from "../lib/cn";

export type InputOtpProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "maxLength" | "onChange" | "value"
> & {
  length?: number;
  onValueChange?: (value: string) => void;
  pattern?: RegExp;
  value?: string;
};

export const InputOtp = React.forwardRef<HTMLInputElement, InputOtpProps>(
  (
    {
      className,
      disabled,
      length = 6,
      onValueChange,
      pattern = /\d/,
      value,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const currentValue = value ?? internalValue;
    const activeIndex = Math.min(currentValue.length, length - 1);

    function setRefs(node: HTMLInputElement | null) {
      inputRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    }

    function sanitize(nextValue: string) {
      return Array.from(nextValue)
        .filter((character) => {
          pattern.lastIndex = 0;
          return pattern.test(character);
        })
        .join("")
        .slice(0, length);
    }

    function updateValue(nextValue: string) {
      const sanitized = sanitize(nextValue);
      if (value === undefined) setInternalValue(sanitized);
      onValueChange?.(sanitized);
    }

    return (
      <div
        className={cn(
          "relative inline-grid min-w-0 cursor-text grid-flow-col gap-1 rounded-axie-control outline-none",
          disabled ? "cursor-not-allowed opacity-55" : "",
          className
        )}
        onClick={() => inputRef.current?.focus()}
      >
        <input
          aria-label="One-time code"
          autoComplete="one-time-code"
          className="absolute inset-0 h-full w-full cursor-text opacity-0 disabled:cursor-not-allowed"
          disabled={disabled}
          inputMode="numeric"
          maxLength={length}
          ref={setRefs}
          value={currentValue}
          onChange={(event) => updateValue(event.target.value)}
          {...props}
        />
        {Array.from({ length }).map((_, index) => {
          const character = currentValue[index] ?? "";
          return (
            <span
              aria-hidden
              className={cn(
                "grid h-11 w-10 place-items-center rounded-axie-control border bg-axie-surface text-[18px] font-black text-axie-ink shadow-[inset_0_1px_0_color-mix(in_srgb,var(--axie-color-surface)_80%,transparent)] transition duration-300 ease-[var(--axie-motion-spring)]",
                props["aria-invalid"]
                  ? "border-axie-danger bg-axie-danger-soft/28 text-axie-danger"
                  : index === activeIndex
                    ? "scale-[1.03] border-axie-accent/55 ring-2 ring-axie-accent/16"
                    : "border-axie-line"
              )}
              key={index}
            >
              {character}
            </span>
          );
        })}
      </div>
    );
  }
);

InputOtp.displayName = "InputOtp";
