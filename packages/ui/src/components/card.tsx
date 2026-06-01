import * as React from "react";
import { cn } from "../lib/cn";

export type CardVariant = "surface" | "soft" | "outline";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

const cardVariants: Record<CardVariant, string> = {
  outline: "border-axie-line bg-transparent shadow-none",
  soft: "border-axie-line/70 bg-axie-surface-soft/54 shadow-none",
  surface: "border-axie-line bg-axie-surface shadow-axie-soft"
};

export function Card({ className, variant = "surface", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-axie-card border text-axie-ink transition duration-300 ease-[var(--axie-motion-spring)] hover:shadow-axie-raised",
        cardVariants[variant],
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid gap-1.5 p-axie-md", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("m-0 text-[18px] font-black leading-none tracking-normal", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("m-0 text-[13px] font-bold leading-5 text-axie-muted", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-axie-md pt-0", className)} {...props} />;
}
