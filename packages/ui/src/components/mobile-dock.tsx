"use client";

import * as React from "react";
import { cn } from "../lib/cn";

export type MobileDockItem = {
  ariaLabel?: string;
  disabled?: boolean;
  href?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
};

export type MobileDockAction = {
  ariaLabel?: string;
  disabled?: boolean;
  href?: string;
  icon: React.ReactNode;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export type MobileDockProps = Omit<React.HTMLAttributes<HTMLElement>, "onChange"> & {
  action?: MobileDockAction;
  ariaLabel?: string;
  defaultValue?: string;
  items: readonly MobileDockItem[];
  onValueChange?: (value: string, item: MobileDockItem) => void;
  position?: "fixed" | "static";
  value?: string;
};

type DockIndicator = {
  height: number;
  width: number;
  x: number;
  y: number;
};

export function MobileDock({
  action,
  ariaLabel = "Primary navigation",
  className,
  defaultValue,
  items,
  onValueChange,
  position = "fixed",
  value,
  ...props
}: MobileDockProps) {
  const firstEnabledItem = items.find((item) => !item.disabled);
  const [internalValue, setInternalValue] = React.useState(
    defaultValue ?? firstEnabledItem?.value ?? ""
  );
  const navRef = React.useRef<HTMLDivElement | null>(null);
  const itemRefs = React.useRef(new Map<string, HTMLElement>());
  const [indicator, setIndicator] = React.useState<DockIndicator | null>(null);
  const selectedValue = value ?? internalValue;
  const splitIndex = action ? Math.ceil(items.length / 2) : items.length;

  React.useLayoutEffect(() => {
    function measure() {
      const nav = navRef.current;
      const selectedItem = itemRefs.current.get(selectedValue);
      if (!nav || !selectedItem) {
        setIndicator(null);
        return;
      }
      const navBox = nav.getBoundingClientRect();
      const itemBox = selectedItem.getBoundingClientRect();
      setIndicator({
        height: itemBox.height,
        width: itemBox.width,
        x: itemBox.left - navBox.left,
        y: itemBox.top - navBox.top
      });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items, selectedValue]);

  const indicatorStyle = indicator
    ? ({
        height: `${indicator.height}px`,
        opacity: 1,
        transform: `translate3d(${indicator.x}px, ${indicator.y}px, 0)`,
        width: `${indicator.width}px`
      } satisfies React.CSSProperties)
    : ({ opacity: 0 } satisfies React.CSSProperties);

  function selectItem(item: MobileDockItem) {
    if (item.disabled) return;
    if (value === undefined) setInternalValue(item.value);
    onValueChange?.(item.value, item);
  }

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        position === "fixed"
          ? "pointer-events-none fixed inset-x-0 bottom-[calc(18px+env(safe-area-inset-bottom))] z-30 flex justify-center px-axie-page"
          : "pointer-events-none relative flex justify-center px-axie-page py-4",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-auto relative flex items-center gap-2 rounded-axie-pill border border-axie-line bg-axie-surface/92 p-[7px] shadow-axie-nav backdrop-blur-xl min-[390px]:gap-3"
        ref={navRef}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 rounded-axie-pill bg-axie-ink shadow-[inset_0_1px_0_color-mix(in_srgb,var(--axie-color-surface)_16%,transparent),0_8px_22px_color-mix(in_srgb,var(--axie-color-ink)_13%,transparent)] transition-[height,opacity,transform,width] duration-300 ease-[var(--axie-motion-spring)]"
          style={indicatorStyle}
        />
        {items.slice(0, splitIndex).map((item) => (
          <MobileDockLink
            item={item}
            key={item.value}
            selected={selectedValue === item.value}
            setRef={(node) => setDockItemRef(itemRefs.current, item.value, node)}
            onSelect={selectItem}
          />
        ))}
        {action ? <MobileDockCenterAction action={action} /> : null}
        {items.slice(splitIndex).map((item) => (
          <MobileDockLink
            item={item}
            key={item.value}
            selected={selectedValue === item.value}
            setRef={(node) => setDockItemRef(itemRefs.current, item.value, node)}
            onSelect={selectItem}
          />
        ))}
      </div>
    </nav>
  );
}

function MobileDockLink({
  item,
  onSelect,
  selected,
  setRef
}: {
  item: MobileDockItem;
  onSelect: (item: MobileDockItem) => void;
  selected: boolean;
  setRef: (node: HTMLElement | null) => void;
}) {
  const className = cn(
    "relative z-[1] grid h-[45px] w-[52px] place-items-center rounded-axie-pill outline-none transition-[color,transform] duration-300 ease-[var(--axie-motion-spring)] focus-visible:ring-2 focus-visible:ring-axie-accent/20 active:scale-95 min-[390px]:w-[58px]",
    selected ? "text-axie-surface" : "text-axie-muted hover:text-axie-ink",
    item.disabled && "cursor-not-allowed opacity-45 hover:text-axie-muted"
  );
  const content = (
    <>
      <span
        aria-hidden
        className={cn(
          "grid h-5 w-5 place-items-center transition-transform duration-300 ease-[var(--axie-motion-spring)] [&>svg]:h-5 [&>svg]:w-5",
          selected && "scale-105"
        )}
      >
        {item.icon}
      </span>
      <span className="sr-only">{item.label}</span>
    </>
  );

  if (item.href) {
    return (
      <a
        aria-current={selected ? "page" : undefined}
        aria-disabled={item.disabled || undefined}
        aria-label={item.ariaLabel ?? item.label}
        className={className}
        href={item.disabled ? undefined : item.href}
        ref={setRef}
        onClick={(event) => {
          if (item.disabled) {
            event.preventDefault();
            return;
          }
          onSelect(item);
        }}
        onPointerDown={() => onSelect(item)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      aria-label={item.ariaLabel ?? item.label}
      aria-pressed={selected}
      className={className}
      disabled={item.disabled}
      ref={setRef}
      type="button"
      onClick={() => onSelect(item)}
      onPointerDown={() => onSelect(item)}
    >
      {content}
    </button>
  );
}

function MobileDockCenterAction({ action }: { action: MobileDockAction }) {
  const className =
    "relative z-[1] -my-[22px] grid h-[68px] w-[68px] place-items-center rounded-axie-pill bg-axie-ink text-axie-surface shadow-[0_18px_34px_color-mix(in_srgb,var(--axie-color-ink)_22%,transparent)] outline-none transition duration-200 ease-[var(--axie-motion-spring)] focus-visible:ring-2 focus-visible:ring-axie-accent/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-55 [&>svg]:h-7 [&>svg]:w-7";

  if (action.href) {
    return (
      <a
        aria-disabled={action.disabled || undefined}
        aria-label={action.ariaLabel ?? action.label}
        className={className}
        href={action.disabled ? undefined : action.href}
        onClick={(event) => {
          if (action.disabled) {
            event.preventDefault();
            return;
          }
          action.onClick?.(event as React.MouseEvent<HTMLElement>);
        }}
      >
        {action.icon}
      </a>
    );
  }

  return (
    <button
      aria-label={action.ariaLabel ?? action.label}
      className={className}
      disabled={action.disabled}
      type="button"
      onClick={(event) => action.onClick?.(event as React.MouseEvent<HTMLElement>)}
    >
      {action.icon}
    </button>
  );
}

function setDockItemRef(
  refs: Map<string, HTMLElement>,
  value: string,
  node: HTMLElement | null
) {
  if (node) {
    refs.set(value, node);
    return;
  }
  refs.delete(value);
}
