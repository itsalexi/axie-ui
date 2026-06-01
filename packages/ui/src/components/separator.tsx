import * as React from "react";
import { cn } from "../lib/cn";

export type SeparatorProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
};

export function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <div
      aria-orientation={orientation}
      className={cn(
        "shrink-0 bg-axie-line axie-enter",
        orientation === "horizontal" ? "h-px w-full" : "h-full min-h-6 w-px",
        className
      )}
      role="separator"
      {...props}
    />
  );
}
