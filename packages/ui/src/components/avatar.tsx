import * as React from "react";
import { cn } from "../lib/cn";

export type AvatarSize = "sm" | "md" | "lg";
export type AvatarStatus = "online" | "busy" | "offline";

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  alt?: string;
  fallback?: string;
  size?: AvatarSize;
  src?: string;
  status?: AvatarStatus;
};

const avatarSizes: Record<AvatarSize, string> = {
  sm: "h-8 w-8 rounded-[10px] text-[12px]",
  md: "h-10 w-10 rounded-[12px] text-[14px]",
  lg: "h-12 w-12 rounded-[14px] text-[16px]"
};

const statusStyles: Record<AvatarStatus, string> = {
  online: "bg-axie-accent",
  busy: "bg-axie-warning",
  offline: "bg-axie-muted"
};

function getInitials(value: string | undefined) {
  if (!value) return "AX";
  return value
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Avatar({
  alt,
  className,
  fallback,
  size = "md",
  src,
  status,
  ...props
}: AvatarProps) {
  const label = alt ?? fallback;

  return (
    <div
      aria-label={src ? undefined : label}
      className={cn(
        "relative inline-grid shrink-0 place-items-center overflow-hidden border border-axie-line bg-axie-surface-soft font-black leading-none text-axie-ink shadow-[inset_0_1px_0_color-mix(in_srgb,var(--axie-color-surface)_80%,transparent)] transition duration-300 ease-[var(--axie-motion-spring)] hover:-translate-y-0.5 hover:shadow-axie-soft",
        avatarSizes[size],
        className
      )}
      role={src ? undefined : "img"}
      {...props}
    >
      {src ? (
        <img alt={alt ?? ""} className="h-full w-full object-cover" src={src} />
      ) : (
        <span>{getInitials(fallback ?? alt)}</span>
      )}
      {status ? (
        <span
          aria-label={`${status} status`}
          className={cn(
            "absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full border-2 border-axie-surface",
            statusStyles[status],
            status === "online" ? "animate-[axie-pulse-dot_1.8s_ease-in-out_infinite]" : ""
          )}
          role="img"
        />
      ) : null}
    </div>
  );
}
