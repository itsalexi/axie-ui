import { Badge, Breadcrumb } from "@axie/ui";
import { DocsShell } from "../../../components/docs-shell";
import { DocsSection } from "../../../components/docs-ui";
import { ThemePlayground } from "../../../components/theme-playground";

export default function PlaygroundPage() {
  return (
    <DocsShell
      toc={[
        { href: "#theme", label: "Theme" },
        { href: "#handoff", label: "Handoff" }
      ]}
    >
      <article className="grid gap-10">
        <header className="grid min-w-0 gap-4">
          <Breadcrumb
            items={[
              { href: "/", label: "Docs" },
              { current: true, label: "Playground" }
            ]}
          />
          <Badge className="w-fit" tone="accent">Playground</Badge>
          <div className="grid gap-3">
            <h1 className="m-0 text-[38px] font-black leading-none tracking-normal md:text-[44px]">
              Theme playground
            </h1>
            <p className="m-0 max-w-[66ch] text-[16px] font-bold leading-7 text-axie-muted">
              Tune Axie color, radius, density, and motion tokens against a real product panel.
            </p>
          </div>
        </header>

        <div className="min-w-0 scroll-mt-24" id="theme">
          <ThemePlayground />
        </div>

        <DocsSection
          description="Copy the generated variables into your app stylesheet, or promote the values into a named theme."
          id="handoff"
          title="Handoff"
        >
          <p className="m-0 max-w-[66ch] text-[15px] font-bold leading-7 text-axie-muted">
            The preview uses the same CSS custom properties as the package stylesheet, so changes
            map directly to `--axie-*` variables without a second token layer.
          </p>
        </DocsSection>
      </article>
    </DocsShell>
  );
}
