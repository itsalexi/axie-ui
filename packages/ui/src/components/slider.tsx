import * as React from "react";
import { cn } from "../lib/cn";

export type SliderProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: React.ReactNode;
  valueLabel?: React.ReactNode | ((value: string) => React.ReactNode);
};

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, defaultValue, label, min = 0, onChange, value, valueLabel, ...props }, ref) => {
    const [localValue, setLocalValue] = React.useState(() =>
      String(value ?? defaultValue ?? min)
    );
    const currentValue = String(value ?? localValue);
    const renderedValueLabel =
      typeof valueLabel === "function" ? valueLabel(currentValue) : valueLabel;

    const control = (
      <input
        className={cn(
          "h-8 w-full cursor-pointer accent-axie-accent outline-none transition duration-300 ease-[var(--axie-motion-spring)] focus-visible:ring-2 focus-visible:ring-axie-accent/28 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        defaultValue={defaultValue}
        min={min}
        ref={ref}
        type="range"
        value={value}
        onChange={(event) => {
          if (value === undefined) setLocalValue(event.currentTarget.value);
          onChange?.(event);
        }}
        {...props}
      />
    );

    if (!label && !renderedValueLabel) return control;

    return (
      <label className="grid gap-1.5 text-axie-ink">
        <span className="flex items-center justify-between gap-3">
          {label ? <span className="text-[14px] font-black leading-5">{label}</span> : null}
          {renderedValueLabel ? (
            <span className="font-mono text-[12px] font-bold text-axie-muted">{renderedValueLabel}</span>
          ) : null}
        </span>
        {control}
      </label>
    );
  }
);

Slider.displayName = "Slider";
