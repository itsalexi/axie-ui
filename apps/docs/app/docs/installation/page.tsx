import { Badge, Breadcrumb } from "@axie/ui";
import { DocsShell } from "../../../components/docs-shell";
import { CodeBlock, DocsSection, InlineCode } from "../../../components/docs-ui";

export default function InstallationPage() {
  return (
    <DocsShell
      toc={[
        { href: "#choose", label: "Choose a path" },
        { href: "#package", label: "Package" },
        { href: "#registry", label: "Registry" },
        { href: "#styles", label: "Styles" }
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
              Axie supports two install paths. Use the package when you want a normal dependency.
              Use the registry when you want shadcn-style source copied into your app.
            </p>
          </div>
        </header>

        <DocsSection
          description="Do not use both paths by default. Pick the one that matches how much ownership you want over the component source."
          id="choose"
          title="Choose a path"
        >
          <div className="grid overflow-hidden rounded-[16px] border border-axie-line bg-axie-surface md:grid-cols-2">
            <div className="grid gap-3 border-b border-axie-line p-4 md:border-b-0 md:border-r">
              <Badge className="w-fit" tone="accent">Package</Badge>
              <h2 className="m-0 text-[20px] font-black leading-none text-axie-ink">
                Install <InlineCode>@axie/ui</InlineCode>
              </h2>
              <p className="m-0 text-[14px] font-bold leading-6 text-axie-muted">
                Best when you want updates through npm and package imports from one stable API.
              </p>
            </div>
            <div className="grid gap-3 p-4">
              <Badge className="w-fit">Registry</Badge>
              <h2 className="m-0 text-[20px] font-black leading-none text-axie-ink">
                Copy source with shadcn
              </h2>
              <p className="m-0 text-[14px] font-bold leading-6 text-axie-muted">
                Best when you want the component files inside your app and plan to customize them.
              </p>
            </div>
          </div>
        </DocsSection>

        <DocsSection
          description={
            <>
              This installs Axie as a dependency. Components stay in <InlineCode>node_modules</InlineCode> and
              you import them from <InlineCode>@axie/ui</InlineCode>.
            </>
          }
          id="package"
          title="Package install"
        >
          <div className="grid w-full min-w-0 gap-4 xl:grid-cols-[minmax(0,0.74fr)_minmax(0,1fr)]">
            <CodeBlock>{`pnpm add @axie/ui
npm install @axie/ui
yarn add @axie/ui
bun add @axie/ui`}</CodeBlock>
            <CodeBlock>{`import "@axie/ui/styles.css";
import { Button, Field, Input } from "@axie/ui";`}</CodeBlock>
          </div>
        </DocsSection>

        <DocsSection
          description={
            <>
              This does not install <InlineCode>@axie/ui</InlineCode>. shadcn downloads the registry item,
              writes component files into your app, and installs only the external dependencies that component needs.
            </>
          }
          id="registry"
          title="Registry install"
        >
          <div className="grid w-full min-w-0 gap-4">
            <CodeBlock>{`pnpm dlx shadcn@latest registry add @axie=https://axie.alexi.life/r/{name}.json
pnpm dlx shadcn@latest add @axie/button`}</CodeBlock>
            <div className="grid min-w-0 gap-4 xl:grid-cols-2">
              <CodeBlock>{`# Or install one component directly.
pnpm dlx shadcn@latest add https://axie.alexi.life/r/button.json`}</CodeBlock>
              <CodeBlock>{`import "@/styles/axie.css";
import { Button } from "@/components/axie/button";`}</CodeBlock>
            </div>
          </div>
        </DocsSection>

        <DocsSection
          description={
            <>
              Either path needs Axie styles imported once near the app root. Package installs import from{" "}
              <InlineCode>@axie/ui</InlineCode>. Registry installs import the copied stylesheet.
            </>
          }
          id="styles"
          title="Styles"
        >
          <CodeBlock>{`/* Package install */
import "@axie/ui/styles.css";

/* Registry install */
import "@/styles/axie.css";`}</CodeBlock>
        </DocsSection>
      </article>
    </DocsShell>
  );
}
