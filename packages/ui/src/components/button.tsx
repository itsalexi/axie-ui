import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "../lib/cn";

export type ButtonVariant = "solid" | "soft" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const buttonVariants: Record<ButtonVariant, string> = {
  solid:
    "border-transparent bg-axie-ink text-axie-surface shadow-[inset_0_1px_0_color-mix(in_srgb,var(--axie-color-surface)_16%,transparent),0_10px_22px_color-mix(in_srgb,var(--axie-color-ink)_12%,transparent)] hover:bg-axie-ink/92",
  soft:
    "border-axie-line bg-axie-surface text-axie-ink shadow-axie-soft hover:border-axie-muted/35 hover:bg-axie-surface",
  outline:
    "border-axie-line bg-transparent text-axie-ink hover:bg-axie-surface/72",
  ghost:
    "border-transparent bg-transparent text-axie-muted hover:bg-axie-surface hover:text-axie-ink",
  danger:
    "border-transparent bg-axie-danger-soft text-axie-danger hover:bg-axie-danger-soft/78"
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-[13px]",
  md: "min-h-11 px-4 text-[14px]",
  lg: "min-h-12 px-5 text-[15px]",
  icon: "h-11 w-11 p-0"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      className,
      size = "md",
      type,
      variant = "solid",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex shrink-0 items-center justify-center gap-2 rounded-axie-pill border font-black leading-none tracking-normal outline-none axie-pressable focus-visible:ring-2 focus-visible:ring-axie-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-axie-paper disabled:pointer-events-none disabled:opacity-50 disabled:hover:transform-none",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        type={asChild ? undefined : (type ?? "button")}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export type IconButtonProps = Omit<ButtonProps, "size"> & {
  label: string;
  size?: "sm" | "md" | "lg";
};

const iconButtonSizes = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-12 w-12"
} as const;

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, className, label, size = "md", ...props }, ref) => (
    <Button
      aria-label={label}
      className={cn(iconButtonSizes[size], className)}
      ref={ref}
      size="icon"
      {...props}
    >
      {children}
    </Button>
  )
);

IconButton.displayName = "IconButton";
