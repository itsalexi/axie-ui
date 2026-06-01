import * as React from "react";
import { cn } from "../lib/cn";

export function Table({
  className,
  ...props
}: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="min-w-0 max-w-full overflow-x-auto rounded-axie-card border border-axie-line bg-axie-surface">
      <table
        className={cn("w-full min-w-[620px] border-collapse text-left text-[13px]", className)}
        {...props}
      />
    </div>
  );
}

export function TableHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={cn("bg-axie-surface-soft/66 text-axie-muted", className)}
      {...props}
    />
  );
}

export function TableBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn("divide-y divide-axie-line", className)} {...props} />;
}

export function TableRow({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn("transition hover:bg-axie-surface-soft/34", className)} {...props} />;
}

export function TableHead({
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn("border-b border-axie-line px-3 py-2 font-black", className)}
      {...props}
    />
  );
}

export function TableCell({
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn("px-3 py-3 align-top leading-5", className)} {...props} />;
}

export function TableCaption({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableCaptionElement>) {
  return (
    <caption
      className={cn("caption-bottom px-3 py-3 text-[12px] font-bold text-axie-muted", className)}
      {...props}
    />
  );
}
