"use client";

import * as React from "react";
import { cn } from "../lib/cn";

export type CodeBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  code?: string;
  codeClassName?: string;
  controls?: React.ReactNode;
  copyText?: string;
  label?: React.ReactNode;
  preClassName?: string;
  showCopy?: boolean;
};

export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      children,
      className,
      code,
      codeClassName,
      controls,
      copyText,
      label = "code",
      preClassName,
      showCopy = true,
      ...props
    },
    ref
  ) => {
    const textToCopy =
      copyText ?? code ?? (typeof children === "string" ? children : undefined);
    const content = children ?? code;

    return (
      <div
        className={cn(
          "min-w-0 max-w-full overflow-hidden rounded-[10px] border border-axie-line bg-[#201c19] shadow-[0_14px_32px_color-mix(in_srgb,var(--axie-color-ink)_8%,transparent)]",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="flex min-h-10 flex-wrap items-center justify-between gap-2 border-b border-white/10 px-3 py-2">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            {label ? (
              <span className="font-mono text-[11px] font-bold text-axie-surface/58">
                {label}
              </span>
            ) : null}
            {controls}
          </div>
          {showCopy && textToCopy ? <CodeBlockCopyButton text={textToCopy} /> : null}
        </div>
        <pre
          className={cn(
            "m-0 max-w-full overflow-x-auto p-4 font-mono text-[13px] leading-6 text-[#f6efe4]",
            preClassName
          )}
        >
          <code className={codeClassName}>{content}</code>
        </pre>
      </div>
    );
  }
);

CodeBlock.displayName = "CodeBlock";

export function CodeBlockCopyButton({
  className,
  text
}: {
  className?: string;
  text: string;
}) {
  const [copied, setCopied] = React.useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      aria-label="Copy code"
      className={cn(
        "inline-grid h-8 w-8 place-items-center rounded-[8px] text-axie-surface/58 transition duration-200 ease-[var(--axie-motion-spring)] hover:bg-white/8 hover:text-axie-surface active:scale-[0.96]",
        className
      )}
      type="button"
      onClick={copy}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}

function CopyIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="9"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
        width="7"
        x="5"
        y="4"
      />
      <path
        d="M4 10H3.5C2.67 10 2 9.33 2 8.5V3.5C2 2.67 2.67 2 3.5 2H8.5C9.33 2 10 2.67 10 3.5V4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.25 8.25L6.25 11.25L12.75 4.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
