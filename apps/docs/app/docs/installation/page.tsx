import { Badge, Breadcrumb } from "@axie/ui";
import { DocsShell } from "../../../components/docs-shell";
import { CodeBlock, DocsSection } from "../../../components/docs-ui";

export default function InstallationPage() {
  return (
    <DocsShell
      toc={[
        { href: "#installation", label: "Installation" },
        { href: "#tailwind", label: "Tailwind" },
        { href: "#package-imports", label: "Package imports" }
      ]}
    >
      <article className="grid gap-10">
        <header className="grid min-w-0 gap-4">
          <Breadcrumb
            items={[
              { href: "/", label: "Docs" },
              { current: true, label: "Installation" }
            ]}
          />
          <Badge className="w-fit" tone="accent">Start</Badge>
          <div className="grid gap-3">
            <h1 className="m-0 text-[38px] font-black leading-none tracking-normal md:text-[44px]">
              Installation
            </h1>
            <p className="m-0 max-w-[66ch] text-[16px] font-bold leading-7 text-axie-muted">
              Axie UI is source-first in this workspace. Import the CSS once and use package
              imports for components.
            </p>
          </div>
        </header>

        <DocsSection
          description="Install the package in your app workspace."
          id="installation"
          title="Installation"
        >
          <CodeBlock>{`pnpm add @axie/ui`}</CodeBlock>
        </DocsSection>

        <DocsSection
          description="Tailwind v4 apps should import Tailwind, import Axie styles, and scan package source while developing in a monorepo."
          id="tailwind"
          title="Tailwind"
        >
          <CodeBlock>{`@import "tailwindcss";
@import "@axie/ui/styles.css";

@source "../../../packages/ui/src";`}</CodeBlock>
        </DocsSection>

        <DocsSection
          description="Import primitives directly from the package entrypoint."
          id="package-imports"
          title="Package imports"
        >
          <CodeBlock>{`import "@axie/ui/styles.css";
import { Button, Field, Input } from "@axie/ui";`}</CodeBlock>
        </DocsSection>
      </article>
    </DocsShell>
  );
}
