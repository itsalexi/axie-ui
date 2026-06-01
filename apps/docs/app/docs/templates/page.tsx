import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Badge, Breadcrumb, Button } from "@axie/ui";
import { DocsShell } from "../../../components/docs-shell";
import { DocsSection } from "../../../components/docs-ui";
import { templates } from "../../../content/templates";

export const metadata = {
  title: "Templates - Axie UI"
};

export default function TemplatesPage() {
  return (
    <DocsShell
      toc={[
        { href: "#templates", label: "Templates" },
        { href: "#coverage", label: "Coverage" }
      ]}
    >
      <article className="grid gap-10">
        <header className="grid min-w-0 gap-4">
          <Breadcrumb
            items={[
              { href: "/", label: "Docs" },
              { current: true, label: "Templates" }
            ]}
          />
          <Badge className="w-fit" tone="accent">Samples</Badge>
          <div className="grid gap-3">
            <h1 className="m-0 text-[38px] font-black leading-none tracking-normal md:text-[44px]">
              Templates
            </h1>
            <p className="m-0 max-w-[66ch] text-[16px] font-bold leading-7 text-axie-muted">
              Larger screen compositions that show how Axie primitives behave in real app layouts.
            </p>
          </div>
        </header>

        <DocsSection
          description="Use these as starting points for complete screens, not one-off component demos."
          id="templates"
          title="Templates"
        >
          <div className="grid gap-5">
            {templates.map((template) => (
              <article
                className="grid min-w-0 overflow-hidden rounded-[16px] border border-axie-line bg-axie-surface shadow-[0_12px_28px_color-mix(in_srgb,var(--axie-color-ink)_4%,transparent)]"
                key={template.slug}
              >
                <div className="pointer-events-none grid min-h-[340px] place-items-center overflow-hidden border-b border-axie-line bg-axie-paper p-5">
                  <div className="w-full max-w-[980px] scale-[0.76] sm:scale-[0.82] lg:scale-90">
                    {template.preview}
                  </div>
                </div>
                <div className="grid gap-4 p-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                  <div className="grid gap-2">
                    <div className="flex flex-wrap gap-2">
                      <Badge tone="info">{template.category}</Badge>
                      {template.ingredients.slice(0, 4).map((ingredient) => (
                        <Badge key={ingredient}>{ingredient}</Badge>
                      ))}
                    </div>
                    <h3 className="m-0 text-[20px] font-black leading-none text-axie-ink">
                      {template.title}
                    </h3>
                    <p className="m-0 max-w-[72ch] text-[13px] font-bold leading-5 text-axie-muted">
                      {template.description}
                    </p>
                  </div>
                  <Button asChild variant="outline">
                    <Link href={`/docs/templates/${template.slug}`}>
                      Open template
                      <ArrowRightIcon />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </DocsSection>

        <DocsSection
          description="Templates pull from the same primitive set as recipes, so the design language stays consistent."
          id="coverage"
          title="Coverage"
        >
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(templates.flatMap((template) => template.ingredients))).map((ingredient) => (
              <Badge key={ingredient}>{ingredient}</Badge>
            ))}
          </div>
        </DocsSection>
      </article>
    </DocsShell>
  );
}
