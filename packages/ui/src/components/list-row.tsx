import * as React from "react";
import { cn } from "../lib/cn";

export type ListRowTone = "neutral" | "accent" | "danger" | "info";

export type ListRowProps = {
  action?: React.ReactNode;
  className?: string;
  detail?: string;
  meta?: string;
  onClick?: () => void;
  title: string;
  tone?: ListRowTone;
};

const dotTones: Record<ListRowTone, string> = {
  neutral: "bg-axie-muted",
  accent: "bg-axie-accent",
  danger: "bg-axie-danger",
  info: "bg-axie-info"
};

export function ListRow({
  action,
  className,
  detail,
  meta,
  onClick,
  title,
  tone = "neutral"
}: ListRowProps) {
  const content = (
    <>
      <span className={cn("mt-[7px] h-2 w-2 rounded-full", dotTones[tone])} />
      <div className="min-w-0">
        <p className="m-0 truncate text-[15px] font-black leading-5 text-axie-ink">{title}</p>
        {detail || meta ? (
          <p className="m-0 mt-0.5 truncate text-[12px] font-bold text-axie-muted">
            {[detail, meta].filter(Boolean).join(" / ")}
          </p>
        ) : null}
      </div>
      {action ? <div className="min-w-0 text-right">{action}</div> : null}
    </>
  );

  const rowClass = cn(
    "grid w-full grid-cols-[8px_minmax(0,1fr)_auto] items-start gap-3.5 border-b border-axie-line py-[13px] text-left transition duration-300 ease-[var(--axie-motion-spring)] last:border-b-0",
    onClick ? "hover:bg-axie-surface/58 active:scale-[0.995]" : "",
    className
  );

  if (onClick) {
    return (
      <button className={rowClass} type="button" onClick={onClick}>
        {content}
      </button>
    );
  }

  return <div className={rowClass}>{content}</div>;
}
