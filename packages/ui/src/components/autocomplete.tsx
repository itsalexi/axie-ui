"use client";

import * as React from "react";
import { cn } from "../lib/cn";

export type AutocompleteOption = {
  description?: React.ReactNode;
  disabled?: boolean;
  label: string;
  value: string;
};

export type AutocompleteProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "defaultValue" | "onChange" | "value"
> & {
  defaultValue?: string;
  emptyText?: React.ReactNode;
  listClassName?: string;
  onOptionSelect?: (option: AutocompleteOption) => void;
  onValueChange?: (value: string, option?: AutocompleteOption) => void;
  optionClassName?: string;
  options: readonly AutocompleteOption[];
  value?: string;
};

export const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      className,
      defaultValue = "",
      disabled,
      emptyText = "No matches found.",
      listClassName,
      onBlur,
      onFocus,
      onKeyDown,
      onOptionSelect,
      onValueChange,
      optionClassName,
      options,
      placeholder = "Search...",
      value,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const [open, setOpen] = React.useState(false);
    const [highlightedIndex, setHighlightedIndex] = React.useState(0);
    const rootRef = React.useRef<HTMLSpanElement | null>(null);
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const listboxId = React.useId();
    const inputValue = value ?? internalValue;
    const filteredOptions = React.useMemo(
      () => filterOptions(options, inputValue),
      [inputValue, options]
    );
    const activeOption = filteredOptions[highlightedIndex];
    const activeOptionId = activeOption
      ? `${listboxId}-option-${highlightedIndex}`
      : undefined;

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    React.useEffect(() => {
      setHighlightedIndex(getNextEnabledIndex(filteredOptions, 0, 1));
    }, [filteredOptions]);

    React.useEffect(() => {
      if (!open) return undefined;

      function handlePointerDown(event: PointerEvent) {
        if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
      }

      function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape") setOpen(false);
      }

      window.addEventListener("pointerdown", handlePointerDown);
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [open]);

    function setInputValue(nextValue: string, option?: AutocompleteOption) {
      if (value === undefined) setInternalValue(nextValue);
      onValueChange?.(nextValue, option);
    }

    function commitOption(option: AutocompleteOption) {
      if (option.disabled) return;
      setInputValue(option.label, option);
      onOptionSelect?.(option);
      setOpen(false);
      inputRef.current?.focus();
    }

    function moveHighlight(direction: 1 | -1) {
      const nextIndex = getNextEnabledIndex(filteredOptions, highlightedIndex + direction, direction);
      if (nextIndex >= 0) setHighlightedIndex(nextIndex);
    }

    return (
      <span className="relative block w-full min-w-0" ref={rootRef}>
        <span className="pointer-events-none absolute left-3 top-1/2 z-[1] h-4 w-4 -translate-y-1/2 rounded-full border-2 border-axie-muted/64 after:absolute after:-bottom-1 after:-right-1 after:h-2 after:w-0.5 after:rotate-[-45deg] after:rounded-full after:bg-axie-muted/64" />
        <input
          aria-activedescendant={open ? activeOptionId : undefined}
          aria-autocomplete="list"
          aria-controls={listboxId}
          aria-expanded={open}
          className={cn(
            "min-h-12 w-full rounded-axie-control border border-axie-line bg-axie-surface-soft px-axie-md pl-10 text-[16px] font-bold text-axie-ink outline-none transition-[background-color,border-color,box-shadow,transform] duration-300 ease-[var(--axie-motion-spring)] placeholder:text-axie-muted/52 focus:-translate-y-px focus:border-axie-accent/55 focus:bg-axie-surface focus:ring-2 focus:ring-axie-accent/16 disabled:cursor-not-allowed disabled:opacity-55 disabled:focus:translate-y-0",
            open && "border-axie-accent/55 bg-axie-surface ring-2 ring-axie-accent/16",
            className
          )}
          disabled={disabled}
          placeholder={placeholder}
          ref={inputRef}
          role="combobox"
          value={inputValue}
          onBlur={onBlur}
          onChange={(event) => {
            setInputValue(event.currentTarget.value);
            setOpen(true);
          }}
          onFocus={(event) => {
            onFocus?.(event);
            if (!disabled) setOpen(true);
          }}
          onKeyDown={(event) => {
            onKeyDown?.(event);
            if (event.defaultPrevented || disabled) return;
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              if (!open) setOpen(true);
              moveHighlight(event.key === "ArrowDown" ? 1 : -1);
            }
            if (event.key === "Enter" && open) {
              event.preventDefault();
              const option = filteredOptions[highlightedIndex];
              if (option) commitOption(option);
            }
            if (event.key === "Escape") {
              setOpen(false);
            }
          }}
          {...props}
        />
        {open ? (
          <div
            className={cn(
              "absolute left-0 right-0 top-[calc(100%+8px)] z-30 grid max-h-72 min-w-0 gap-1.5 overflow-y-auto rounded-[14px] border border-axie-line bg-axie-surface p-2 text-axie-ink shadow-[0_20px_54px_color-mix(in_srgb,var(--axie-color-ink)_14%,transparent)] axie-pop",
              listClassName
            )}
            id={listboxId}
            role="listbox"
          >
            {filteredOptions.length ? (
              filteredOptions.map((option, index) => {
                const highlighted = index === highlightedIndex;

                return (
                  <button
                    aria-disabled={option.disabled || undefined}
                    aria-selected={highlighted}
                    className={cn(
                      "grid min-h-12 w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-[12px] px-4 py-3 text-left outline-none transition-[background-color,color,transform] duration-200 ease-[var(--axie-motion-spring)]",
                      option.disabled
                        ? "cursor-not-allowed text-axie-muted/42"
                        : "cursor-pointer text-axie-ink hover:bg-axie-surface-soft/72 active:scale-[0.99]",
                      highlighted && !option.disabled && "bg-axie-accent-soft",
                      optionClassName
                    )}
                    disabled={option.disabled}
                    id={`${listboxId}-option-${index}`}
                    key={option.value}
                    role="option"
                    type="button"
                    onClick={() => commitOption(option)}
                    onMouseEnter={() => setHighlightedIndex(index)}
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
                    <span className="font-mono text-[11px] font-black uppercase text-axie-muted/58">
                      {option.value}
                    </span>
                  </button>
                );
              })
            ) : (
              <div className="px-3 py-8 text-center text-[13px] font-bold text-axie-muted">
                {emptyText}
              </div>
            )}
          </div>
        ) : null}
      </span>
    );
  }
);

Autocomplete.displayName = "Autocomplete";

function filterOptions(options: readonly AutocompleteOption[], query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [...options];
  return options.filter((option) => {
    const description =
      typeof option.description === "string" || typeof option.description === "number"
        ? String(option.description)
        : "";
    return `${option.label} ${option.value} ${description}`
      .toLowerCase()
      .includes(normalizedQuery);
  });
}

function getNextEnabledIndex(
  options: readonly AutocompleteOption[],
  startIndex: number,
  direction: 1 | -1
) {
  if (!options.length) return -1;
  for (let offset = 0; offset < options.length; offset += 1) {
    const index = (startIndex + offset * direction + options.length) % options.length;
    if (!options[index]?.disabled) return index;
  }
  return -1;
}
