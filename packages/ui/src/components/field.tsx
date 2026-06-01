import * as React from "react";
import { cn } from "../lib/cn";

export type FieldProps = {
  children: React.ReactNode;
  className?: string;
  error?: string;
  helper?: string;
  label: string;
};

export function Field({ children, className, error, helper, label }: FieldProps) {
  return (
    <label className={cn("grid gap-axie-xs text-[13px] font-[850] text-axie-muted", className)}>
      <span>{label}</span>
      {children}
      {helper && !error ? (
        <span className="text-[12px] font-bold leading-4 text-axie-muted/76">{helper}</span>
      ) : null}
      {error ? (
        <span className="text-[12px] font-black leading-4 text-axie-danger">{error}</span>
      ) : null}
    </label>
  );
}
