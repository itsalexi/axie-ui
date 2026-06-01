"use client";

import { useState } from "react";
import { type ComponentCatalogItem, getComponentImportName } from "@axie/registry";
import { CodeBlock, InlineCode } from "./docs-ui";
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
  const registryUrl = `https://axie.alexi.life/r/${component.slug}.json`;

  return (
    <div className="grid gap-5">
      <div className="grid gap-1">
        <p className="m-0 text-[14px] font-black text-axie-ink">Package install</p>
        <p className="m-0 text-[13px] font-bold leading-5 text-axie-muted">
          Install the package when you want components imported from @axie/ui.
        </p>
      </div>
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

      <div className="grid gap-1 border-t border-axie-line pt-5">
        <p className="m-0 text-[14px] font-black text-axie-ink">Registry install</p>
        <p className="m-0 text-[13px] font-bold leading-5 text-axie-muted">
          Use the direct URL when you want shadcn to copy editable source into your app. This works without the official registry and does not install <InlineCode>@axie/ui</InlineCode>.
        </p>
      </div>
      <PackageManagerCodeBlock
        commands={registryCommands(registryUrl)}
        label="registry"
        manager={manager}
        onManagerChange={setManager}
      />

      <div className="grid gap-2">
        <p className="m-0 text-[12px] font-black uppercase leading-none text-axie-muted">Copied source import</p>
        <CodeBlock>{`import "@/styles/axie.css";
import { ${importName} } from "@/components/axie/${component.slug}";`}</CodeBlock>
        <p className="m-0 text-[13px] font-bold leading-5 text-axie-muted">
          Prefer <InlineCode>@axie/{component.slug}</InlineCode>? Add the Axie namespace once from the Installation page, then use that shorthand.
        </p>
      </div>
    </div>
  );
}
