"use client";

import * as React from "react";
import { cn } from "../lib/cn";

export type SelectOption = {
  description?: React.ReactNode;
  disabled?: boolean;
  label: React.ReactNode;
  value: string;
};

type OptionElementProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  value?: string | number | readonly string[];
};

export type SelectProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "defaultValue" | "name" | "onChange" | "value"
> & {
  children?: React.ReactNode;
  defaultValue?: string;
  listClassName?: string;
  name?: string;
  onValueChange?: (value: string, option: SelectOption) => void;
  optionClassName?: string;
  options?: readonly SelectOption[];
  placeholder?: React.ReactNode;
  value?: string;
};

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      children,
      className,
      defaultValue,
      disabled,
      listClassName,
      name,
      onBlur,
      onClick,
      onKeyDown,
      onValueChange,
      optionClassName,
      options,
      placeholder = "Select an option",
      value,
      ...props
    },
    ref
  ) => {
    const parsedOptions = React.useMemo(
      () => (options ? [...options] : getOptionsFromChildren(children)),
      [children, options]
    );
    const firstEnabledOption = parsedOptions.find((option) => !option.disabled);
    const [internalValue, setInternalValue] = React.useState(
      defaultValue ?? (!placeholder ? firstEnabledOption?.value ?? "" : "")
    );
    const [open, setOpen] = React.useState(false);
    const [highlightedValue, setHighlightedValue] = React.useState<string | null>(null);
    const rootRef = React.useRef<HTMLSpanElement | null>(null);
    const triggerRef = React.useRef<HTMLButtonElement | null>(null);
    const listboxId = React.useId();
    const selectedValue = value ?? internalValue;
    const selectedOption = parsedOptions.find((option) => option.value === selectedValue);
    const activeIndex = parsedOptions.findIndex((option) => option.value === highlightedValue);
    const activeOptionId = activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined;

    React.useImperativeHandle(ref, () => triggerRef.current as HTMLButtonElement);

    React.useEffect(() => {
      if (!open) return;
      setHighlightedValue(selectedOption?.value ?? firstEnabledOption?.value ?? null);
    }, [firstEnabledOption?.value, open, selectedOption?.value]);

    React.useEffect(() => {
      if (!open) return undefined;

      function handlePointerDown(event: PointerEvent) {
        if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
      }

      function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape") {
          event.preventDefault();
          setOpen(false);
          triggerRef.current?.focus();
        }
      }

      window.addEventListener("pointerdown", handlePointerDown);
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [open]);

    function commitOption(option: SelectOption) {
      if (option.disabled) return;
      if (value === undefined) setInternalValue(option.value);
      onValueChange?.(option.value, option);
      setOpen(false);
      triggerRef.current?.focus();
    }

    function moveHighlight(direction: 1 | -1) {
      const enabledOptions = parsedOptions.filter((option) => !option.disabled);
      if (!enabledOptions.length) return;
      const currentIndex = enabledOptions.findIndex((option) => option.value === highlightedValue);
      const nextIndex =
        currentIndex === -1
          ? direction === 1
            ? 0
            : enabledOptions.length - 1
          : (currentIndex + direction + enabledOptions.length) % enabledOptions.length;
      setHighlightedValue(enabledOptions[nextIndex]?.value ?? null);
    }

    return (
      <span className="relative block w-full min-w-0" ref={rootRef}>
        {name ? <input name={name} type="hidden" value={selectedValue} /> : null}
        <button
          aria-activedescendant={open ? activeOptionId : undefined}
          aria-controls={listboxId}
          aria-expanded={open}
          aria-haspopup="listbox"
          className={cn(
            "grid min-h-12 w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-axie-control border border-axie-line bg-axie-surface-soft px-axie-md text-left text-[16px] font-bold text-axie-ink outline-none transition-[background-color,border-color,box-shadow,transform] duration-300 ease-[var(--axie-motion-spring)] focus:-translate-y-px focus:border-axie-accent/55 focus:bg-axie-surface focus:ring-2 focus:ring-axie-accent/16 disabled:cursor-not-allowed disabled:opacity-55 disabled:focus:translate-y-0",
            open && "border-axie-accent/55 bg-axie-surface ring-2 ring-axie-accent/16",
            className
          )}
          disabled={disabled}
          ref={triggerRef}
          role="combobox"
          type="button"
          onBlur={onBlur}
          onClick={(event) => {
            onClick?.(event);
            if (event.defaultPrevented || disabled) return;
            setOpen((current) => !current);
          }}
          onKeyDown={(event) => {
            onKeyDown?.(event);
            if (event.defaultPrevented || disabled) return;
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              if (!open) setOpen(true);
              moveHighlight(event.key === "ArrowDown" ? 1 : -1);
            }
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              if (!open) {
                setOpen(true);
                return;
              }
              const highlightedOption = parsedOptions.find(
                (option) => option.value === highlightedValue
              );
              if (highlightedOption) commitOption(highlightedOption);
            }
          }}
          {...props}
        >
          <span
            className={cn(
              "min-w-0 truncate",
              !selectedOption && "text-axie-muted/58"
            )}
          >
            {selectedOption?.label ?? placeholder}
          </span>
          <span
            aria-hidden
            className={cn(
              "relative h-5 w-5 rounded-full border border-axie-line bg-axie-surface transition duration-300 ease-[var(--axie-motion-spring)] before:absolute before:left-1/2 before:top-[45%] before:h-1.5 before:w-1.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:border-b-2 before:border-r-2 before:border-axie-muted",
              open && "rotate-180 border-axie-accent/45 bg-axie-accent-soft"
            )}
          />
        </button>
        {open ? (
          <div
            className={cn(
              "absolute left-0 right-0 top-[calc(100%+8px)] z-30 grid max-h-72 min-w-0 gap-1.5 overflow-y-auto rounded-[14px] border border-axie-line bg-axie-surface p-2 text-axie-ink shadow-[0_20px_54px_color-mix(in_srgb,var(--axie-color-ink)_14%,transparent)] axie-pop",
              listClassName
            )}
            id={listboxId}
            role="listbox"
            tabIndex={-1}
          >
            {parsedOptions.map((option, index) => {
              const selected = option.value === selectedValue;
              const highlighted = option.value === highlightedValue;

              return (
                <button
                  aria-disabled={option.disabled || undefined}
                  aria-selected={selected}
                  className={cn(
                    "grid min-h-12 w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-[12px] px-4 py-3 text-left outline-none transition-[background-color,color,transform] duration-200 ease-[var(--axie-motion-spring)]",
                    option.disabled
                      ? "cursor-not-allowed text-axie-muted/42"
                      : "cursor-pointer text-axie-ink hover:bg-axie-surface-soft/72 active:scale-[0.99]",
                    highlighted && !option.disabled && "bg-axie-surface-soft",
                    selected && "bg-axie-accent-soft text-axie-ink",
                    optionClassName
                  )}
                  disabled={option.disabled}
                  id={`${listboxId}-option-${index}`}
                  key={option.value}
                  role="option"
                  type="button"
                  onClick={() => commitOption(option)}
                  onMouseEnter={() => setHighlightedValue(option.value)}
                >
                  <span className="grid min-w-0 gap-0.5">
                    <span className="truncate text-[14px] font-black leading-5">
                      {option.label}
                    </span>
                    {option.description ? (
                      <span className="truncate text-[12px] font-bold leading-4 text-axie-muted">
                        {option.description}
                      </span>
                    ) : null}
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "h-2.5 w-2.5 rounded-full border border-axie-line transition",
                      selected ? "border-axie-accent bg-axie-accent" : "bg-transparent"
                    )}
                  />
                </button>
              );
            })}
          </div>
        ) : null}
      </span>
    );
  }
);

Select.displayName = "Select";

function getOptionsFromChildren(children: React.ReactNode): SelectOption[] {
  return React.Children.toArray(children)
    .map<SelectOption | null>((child) => {
      if (!React.isValidElement<OptionElementProps>(child)) return null;
      const rawValue = child.props.value ?? getTextFromNode(child.props.children);
      const value = Array.isArray(rawValue) ? rawValue.join(",") : String(rawValue ?? "");
      if (!value) return null;

      return {
        disabled: child.props.disabled,
        label: child.props.children,
        value
      };
    })
    .filter((option): option is SelectOption => option !== null);
}

function getTextFromNode(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getTextFromNode).join("");
  return "";
}
