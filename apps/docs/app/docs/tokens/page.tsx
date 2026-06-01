import { axieTokens, Badge, Breadcrumb, Separator } from "axie-ui";
import { DocsShell } from "../../../components/docs-shell";
import { CodeBlock, DocsSection } from "../../../components/docs-ui";

export default function TokensPage() {
  return (
    <DocsShell
      toc={[
        { href: "#colors", label: "Colors" },
        { href: "#radii", label: "Radii" },
        { href: "#css", label: "CSS variables" }
      ]}
    >
      <article className="grid gap-10">
        <header className="grid min-w-0 gap-4">
          <Breadcrumb
            items={[
              { href: "/", label: "Docs" },
              { current: true, label: "Tokens" }
            ]}
          />
          <Badge className="w-fit" tone="accent">Foundation</Badge>
          <div className="grid gap-3">
            <h1 className="m-0 text-[38px] font-black leading-none tracking-normal md:text-[44px]">
              Tokens
            </h1>
            <p className="m-0 max-w-[66ch] text-[16px] font-bold leading-7 text-axie-muted">
              Axie tokens are CSS variables first, with TypeScript values exported for tooling and
              registry generation.
            </p>
          </div>
        </header>

        <DocsSection id="colors" title="Colors">
          <div className="grid overflow-hidden rounded-[12px] border border-axie-line bg-axie-surface">
            {Object.entries(axieTokens.colors).map(([name, value]) => (
              <div
                className="grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-3 border-b border-axie-line px-4 py-3 last:border-b-0"
                key={name}
              >
                <span
                  aria-hidden
                  className="h-8 w-8 rounded-[8px] border border-axie-line"
                  style={{ background: value }}
                />
                <span className="font-mono text-[13px] font-semibold text-axie-ink">{name}</span>
                <span className="font-mono text-[12px] text-axie-muted">{value}</span>
              </div>
            ))}
          </div>
        </DocsSection>

        <DocsSection id="radii" title="Radii">
          <div className="grid gap-4">
            {Object.entries(axieTokens.radii).map(([name, value]) => (
              <div className="grid gap-2" key={name}>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[13px] font-semibold text-axie-ink">{name}</span>
                  <span className="font-mono text-[12px] text-axie-muted">{value}</span>
                </div>
                <div className="h-12 border border-axie-line bg-axie-surface" style={{ borderRadius: value }} />
              </div>
            ))}
          </div>
        </DocsSection>

        <DocsSection
          description="The same values are available as CSS variables and Tailwind theme tokens."
          id="css"
          title="CSS variables"
        >
          <CodeBlock>{`:root {
  --axie-color-ink: #263024;
  --axie-color-paper: #f4f1e6;
  --axie-color-accent: #6f7f3f;
  --axie-radius-card: 10px;
}

/* Tailwind */
className="bg-axie-paper text-axie-ink rounded-axie-card"`}</CodeBlock>
          <Separator className="mt-6" />
        </DocsSection>
      </article>
    </DocsShell>
  );
}
