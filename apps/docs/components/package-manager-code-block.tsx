"use client";

import { CodeBlock } from "axie-ui";
import { highlightCode } from "./code-highlight";
import { MorphingPillGroup } from "./morphing-pill-group";

export type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

export const packageManagers: PackageManager[] = ["pnpm", "npm", "yarn", "bun"];

export type PackageManagerCommands = Record<PackageManager, string>;

export function PackageManagerCodeBlock({
  commands,
  label,
  manager,
  onManagerChange
}: {
  commands: PackageManagerCommands;
  label: string;
  manager: PackageManager;
  onManagerChange: (manager: PackageManager) => void;
}) {
  const code = commands[manager];
  const controls = (
    <MorphingPillGroup
      ariaLabel={`${label} package manager`}
      itemClassName="min-h-7 px-2 font-mono text-[11px] font-black"
      items={packageManagers.map((item) => ({ label: item, value: item }))}
      value={manager}
      variant="dark"
      onValueChange={onManagerChange}
    />
  );

  return (
    <CodeBlock controls={controls} copyText={code} label={label}>
      {highlightCode(code)}
    </CodeBlock>
  );
}
