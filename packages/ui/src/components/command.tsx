"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "../lib/cn";

export const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    className={cn("grid min-h-0 bg-[#fffdf7] text-axie-ink", className)}
    ref={ref}
    {...props}
  />
));

Command.displayName = "Command";

export const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="grid min-h-12 grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-[14px] border border-axie-line bg-[#eee6d9] px-3 shadow-[inset_0_1px_0_color-mix(in_srgb,var(--axie-color-surface)_60%,transparent)] focus-within:border-axie-accent/50 focus-within:ring-2 focus-within:ring-axie-accent/16">
    <span
      aria-hidden
      className="relative h-4 w-4 rounded-full border-2 border-axie-muted/70 after:absolute after:-bottom-1 after:-right-1 after:h-2 after:w-0.5 after:rotate-[-45deg] after:rounded-full after:bg-axie-muted/70"
    />
    <CommandPrimitive.Input
      className={cn(
        "h-11 min-w-0 bg-transparent text-[16px] font-black text-axie-ink outline-none placeholder:text-axie-muted/54 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));

CommandInput.displayName = "CommandInput";

export const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    className={cn("min-h-0 overflow-y-auto bg-[#fffdf7] p-2", className)}
    ref={ref}
    {...props}
  />
));

CommandList.displayName = "CommandList";

export const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Empty
    className={cn("grid justify-items-center gap-2 px-3 py-10 text-center", className)}
    ref={ref}
    {...props}
  />
));

CommandEmpty.displayName = "CommandEmpty";

export const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    className={cn(
      "grid gap-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pt-1 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-black [&_[cmdk-group-heading]]:leading-5 [&_[cmdk-group-heading]]:text-axie-muted",
      className
    )}
    ref={ref}
    {...props}
  />
));

CommandGroup.displayName = "CommandGroup";

export const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    className={cn(
      "grid min-h-14 cursor-pointer select-none grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-[14px] px-3 py-2 text-left outline-none axie-pressable data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-axie-accent-soft data-[selected=true]:text-axie-ink data-[selected=true]:shadow-[inset_0_1px_0_color-mix(in_srgb,var(--axie-color-surface)_65%,transparent)]",
      className
    )}
    ref={ref}
    {...props}
  />
));

CommandItem.displayName = "CommandItem";

export function CommandShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "rounded-[7px] border border-axie-line bg-axie-surface px-1.5 py-1 font-mono text-[11px] font-bold leading-none text-axie-muted",
        className
      )}
      {...props}
    />
  );
}
