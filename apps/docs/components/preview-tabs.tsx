"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { highlightCode } from "./code-highlight";
import { CopyButton } from "./copy-button";
import { MorphingPillGroup } from "./morphing-pill-group";

export function PreviewTabs({ code, preview }: { code: string; preview: ReactNode }) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  return (
    <div className="min-w-0 max-w-full overflow-visible rounded-[12px] border border-axie-line bg-axie-surface shadow-[0_12px_30px_color-mix(in_srgb,var(--axie-color-ink)_5%,transparent)] axie-enter">
      <div className="flex min-h-11 items-center justify-between border-b border-axie-line bg-axie-surface/82 px-2">
        <MorphingPillGroup
          ariaLabel="Preview display"
          items={[
            { label: "Preview", value: "preview" },
            { label: "Code", value: "code" }
          ]}
          value={tab}
          onValueChange={setTab}
        />
        <CopyButton text={code} />
      </div>
      {tab === "preview" ? (
        <div className="grid min-h-[220px] place-items-center p-6 md:p-10">{preview}</div>
      ) : (
        <pre className="m-0 max-h-[460px] max-w-full overflow-auto rounded-b-[12px] bg-[#201c19] p-4 font-mono text-[13px] leading-6 text-[#f6efe4]">
          <code>{highlightCode(code)}</code>
        </pre>
      )}
    </div>
  );
}
