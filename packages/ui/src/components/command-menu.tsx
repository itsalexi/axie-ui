"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut
} from "./command";

export type CommandMenuItem = {
  description?: string;
  group?: string;
  id: string;
  keywords?: string[];
  shortcut?: string;
  title: string;
};

export type CommandMenuProps = {
  emptyText?: string;
  items: readonly CommandMenuItem[];
  onOpenChange: (open: boolean) => void;
  onSelect: (item: CommandMenuItem) => void;
  open: boolean;
  placeholder?: string;
  title?: string;
};

export function CommandMenu({
  emptyText = "No results found.",
  items,
  onOpenChange,
  onSelect,
  open,
  placeholder = "Search commands...",
  title = "Command menu"
}: CommandMenuProps) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const groupedItems = React.useMemo(() => {
    const groups: Array<{ items: CommandMenuItem[]; label: string }> = [];
    for (const item of items) {
      const label = item.group ?? "Commands";
      const existingGroup = groups.find((group) => group.label === label);
      if (existingGroup) existingGroup.items.push(item);
      else groups.push({ items: [item], label });
    }
    return groups;
  }, [items]);

  React.useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => inputRef.current?.focus(), 0);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onOpenChange(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onOpenChange, open]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50 grid place-items-start overflow-hidden bg-[#28231f]/56 p-3 axie-fade sm:p-6">
      <button
        aria-label="Close command menu"
        className="absolute inset-0 cursor-default"
        type="button"
        onClick={() => onOpenChange(false)}
      />
      <section
        aria-label={title}
        aria-modal="true"
        className="relative mx-auto max-h-[min(680px,calc(100dvh-24px))] w-full max-w-[620px] overflow-hidden rounded-[20px] border border-axie-line bg-[#fffdf7] text-axie-ink shadow-[0_30px_90px_color-mix(in_srgb,var(--axie-color-ink)_28%,transparent)] ring-1 ring-white/70 axie-pop sm:max-h-[min(720px,calc(100dvh-48px))]"
        role="dialog"
      >
        <Command className="max-h-[min(680px,calc(100dvh-24px))] grid-rows-[auto_minmax(0,1fr)_auto] sm:max-h-[min(720px,calc(100dvh-48px))]" shouldFilter>
          <div className="grid gap-3 border-b border-axie-line bg-[#fffdf7] px-3 pb-3 pt-3">
            <div className="flex items-center justify-between gap-3 px-1">
              <p className="m-0 text-[12px] font-black leading-none text-axie-muted">{title}</p>
              <kbd className="rounded-[7px] border border-axie-line bg-axie-surface-soft px-1.5 py-1 font-mono text-[11px] font-bold leading-none text-axie-muted">
                Esc
              </kbd>
            </div>
            <CommandInput placeholder={placeholder} ref={inputRef} />
          </div>
          <CommandList>
            <CommandEmpty>
              <div className="h-9 w-9 rounded-[12px] border border-axie-line bg-axie-surface-soft" />
              <p className="m-0 text-[14px] font-black text-axie-ink">{emptyText}</p>
              <p className="m-0 max-w-[34ch] text-[12px] font-bold leading-5 text-axie-muted">
                Try a component name, token, or page title.
              </p>
            </CommandEmpty>
            {groupedItems.map((group) => (
              <CommandGroup heading={group.label} key={group.label}>
                {group.items.map((item) => (
                  <CommandItem
                    key={item.id}
                    keywords={[item.title, item.description ?? "", item.group ?? "", ...(item.keywords ?? [])]}
                    value={item.id}
                    onSelect={() => {
                      onSelect(item);
                      onOpenChange(false);
                    }}
                  >
                    <span className="grid min-w-0 gap-1">
                      <span className="truncate text-[14px] font-black leading-5">{item.title}</span>
                      {item.description ? (
                        <span className="max-h-8 overflow-hidden text-[12px] font-bold leading-4 text-axie-muted">
                          {item.description}
                        </span>
                      ) : null}
                    </span>
                    {item.shortcut ? <CommandShortcut>{item.shortcut}</CommandShortcut> : null}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
          <div className="hidden items-center justify-between border-t border-axie-line bg-[#eee6d9] px-3 py-2 text-[11px] font-bold text-axie-muted sm:flex">
            <span>Arrow keys to move</span>
            <span>Enter to open</span>
          </div>
        </Command>
      </section>
    </div>,
    document.body
  );
}
