"use client";

import { useState } from "react";
import { type ComponentCatalogItem, getComponentImportName } from "@axie/registry";
import { CodeBlock } from "./docs-ui";
import {
  PackageManagerCodeBlock,
  type PackageManager,
  type PackageManagerCommands
} from "./package-manager-code-block";

const packageCommands: PackageManagerCommands = {
  bun: "bun add @axie/ui",
  npm: "npm install @axie/ui",
  pnpm: "pnpm add @axie/ui",
  yarn: "yarn add @axie/ui"
};

function registryCommands(registryUrl: string): PackageManagerCommands {
  return {
    bun: `bunx --bun shadcn@latest add ${registryUrl}`,
    npm: `npx shadcn@latest add ${registryUrl}`,
    pnpm: `pnpm dlx shadcn@latest add ${registryUrl}`,
    yarn: `yarn dlx shadcn@latest add ${registryUrl}`
  };
}

export function InstallBlock({ component }: { component: ComponentCatalogItem }) {
  const [manager, setManager] = useState<PackageManager>("pnpm");
  const importName = getComponentImportName(component);
  const registryUrl = `http://localhost:8091/r/${component.slug}`;

  return (
    <div className="grid gap-5">
      <PackageManagerCodeBlock
        commands={packageCommands}
        label="install"
        manager={manager}
        onManagerChange={setManager}
      />

      <div className="grid gap-2">
        <p className="m-0 text-[12px] font-black uppercase leading-none text-axie-muted">Import</p>
        <CodeBlock>{`import "@axie/ui/styles.css";
import { ${importName} } from "@axie/ui";`}</CodeBlock>
      </div>

      <PackageManagerCodeBlock
        commands={registryCommands(registryUrl)}
        label="registry"
        manager={manager}
        onManagerChange={setManager}
      />
    </div>
  );
}
