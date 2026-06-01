import { Badge, Breadcrumb } from "axie-ui";
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
                Install <InlineCode>axie-ui</InlineCode>
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
              you import them from <InlineCode>axie-ui</InlineCode>. Point Tailwind at the package output so
              Axie utility classes are included.
            </>
          }
          id="package"
          title="Package install"
        >
          <div className="grid w-full min-w-0 gap-4 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
            <CodeBlock>{`pnpm add axie-ui
npm install axie-ui
yarn add axie-ui
bun add axie-ui`}</CodeBlock>
            <div className="grid min-w-0 gap-4">
              <CodeBlock>{`@import "tailwindcss";
@import "axie-ui/styles.css";
@source "../node_modules/axie-ui/dist";`}</CodeBlock>
              <CodeBlock>{`import { Button, Field, Input } from "axie-ui";`}</CodeBlock>
            </div>
          </div>
        </DocsSection>

        <DocsSection
          description={
            <>
              This does not install <InlineCode>axie-ui</InlineCode>. shadcn can add Axie from a URL today,
              even before Axie is listed in the official shadcn registry.
            </>
          }
          id="registry"
          title="Registry install"
        >
          <div className="grid w-full min-w-0 gap-4">
            <div className="grid gap-2">
              <p className="m-0 text-[14px] font-black text-axie-ink">Recommended: use the direct URL</p>
              <p className="m-0 max-w-[72ch] text-[13px] font-bold leading-5 text-axie-muted">
                Use this when you want to install one component without setting up a shorthand namespace.
              </p>
            </div>
            <CodeBlock>{`pnpm dlx shadcn@latest add https://axie.alexi.life/r/button.json`}</CodeBlock>

            <div className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)]">
              <div className="grid min-w-0 gap-3">
                <div className="grid gap-2">
                  <p className="m-0 text-[14px] font-black text-axie-ink">Optional: add the namespace once</p>
                  <p className="m-0 text-[13px] font-bold leading-5 text-axie-muted">
                    Do this only if you want shorthand commands like <InlineCode>@axie/button</InlineCode> in that project.
                  </p>
                </div>
                <CodeBlock>{`pnpm dlx shadcn@latest registry add @axie=https://axie.alexi.life/r/{name}.json
pnpm dlx shadcn@latest add @axie/button`}</CodeBlock>
              </div>
              <div className="grid min-w-0 gap-3">
                <div className="grid gap-2">
                  <p className="m-0 text-[14px] font-black text-axie-ink">Import copied source</p>
                  <p className="m-0 text-[13px] font-bold leading-5 text-axie-muted">
                    Registry components are local files, so imports point at your app, not <InlineCode>axie-ui</InlineCode>.
                  </p>
                </div>
                <CodeBlock>{`import "@/styles/axie.css";
import { Button } from "@/components/axie/button";`}</CodeBlock>
              </div>
            </div>
          </div>
        </DocsSection>

        <DocsSection
          description={
            <>
              Either path needs Axie styles in your global CSS. Package installs import from{" "}
              <InlineCode>axie-ui</InlineCode>. Registry installs import the copied stylesheet.
            </>
          }
          id="styles"
          title="Styles"
        >
          <CodeBlock>{`/* Package install */
@import "tailwindcss";
@import "axie-ui/styles.css";
@source "../node_modules/axie-ui/dist";

/* Registry install */
@import "tailwindcss";
@import "@/styles/axie.css";`}</CodeBlock>
        </DocsSection>
      </article>
    </DocsShell>
  );
}
