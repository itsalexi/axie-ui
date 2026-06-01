import * as React from "react";
import { cn } from "../lib/cn";

export type BreadcrumbItem = {
  current?: boolean;
  href?: string;
  label: React.ReactNode;
};

export type BreadcrumbProps = React.HTMLAttributes<HTMLElement> & {
  items: readonly BreadcrumbItem[];
  separator?: React.ReactNode;
};

export function Breadcrumb({
  className,
  items,
  separator = "/",
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("min-w-0 text-[13px] font-bold text-axie-muted", className)}
      {...props}
    >
      <ol className="m-0 flex min-w-0 list-none flex-wrap items-center gap-2 p-0">
        {items.map((item, index) => {
          const isCurrent = item.current || index === items.length - 1;
          return (
            <li className="inline-flex min-w-0 items-center gap-2" key={index}>
              {index > 0 ? <span className="text-axie-line">{separator}</span> : null}
              {item.href && !isCurrent ? (
                <a
                  className="truncate transition hover:text-axie-ink"
                  href={item.href}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  aria-current={isCurrent ? "page" : undefined}
                  className={cn("truncate", isCurrent ? "text-axie-ink" : "")}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
