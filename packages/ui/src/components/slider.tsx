import * as React from "react";
import { cn } from "../lib/cn";

export type SliderProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: React.ReactNode;
  valueLabel?: React.ReactNode | ((value: string) => React.ReactNode);
};

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      className,
      defaultValue,
      label,
      max = 100,
      min = 0,
      onChange,
      style,
      value,
      valueLabel,
      ...props
    },
    ref
  ) => {
    const [localValue, setLocalValue] = React.useState(() =>
      String(value ?? defaultValue ?? min)
    );
    const currentValue = String(value ?? localValue);
    const minNumber = Number(min);
    const maxNumber = Number(max);
    const valueNumber = Number(currentValue);
    const fillPercent =
      Number.isFinite(minNumber) &&
      Number.isFinite(maxNumber) &&
      Number.isFinite(valueNumber) &&
      maxNumber > minNumber
        ? Math.min(100, Math.max(0, ((valueNumber - minNumber) / (maxNumber - minNumber)) * 100))
        : 0;
    const renderedValueLabel =
      typeof valueLabel === "function" ? valueLabel(currentValue) : valueLabel;

    const control = (
      <input
        className={cn(
          "axie-slider outline-none transition duration-300 ease-[var(--axie-motion-spring)]",
          className
        )}
        defaultValue={defaultValue}
        max={max}
        min={min}
        ref={ref}
        style={
          {
            ...style,
            "--axie-slider-fill": `${fillPercent}%`
          } as React.CSSProperties
        }
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
