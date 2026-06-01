"use client";

import { CheckIcon, ClipboardCopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  return (
    <button
      aria-label="Copy code"
      className="inline-grid h-8 w-8 place-items-center rounded-[8px] text-axie-muted transition hover:bg-axie-surface-soft hover:text-axie-ink active:scale-[0.96]"
      type="button"
      onClick={copy}
    >
      {copied ? <CheckIcon aria-hidden /> : <ClipboardCopyIcon aria-hidden />}
    </button>
  );
}
