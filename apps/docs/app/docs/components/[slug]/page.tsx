import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge, Breadcrumb, Button } from "@axie/ui";
import { componentCatalog } from "@axie/registry";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { DocsShell } from "../../../../components/docs-shell";
import { CodeBlock, ComponentPreview, DocsSection, PropsTable } from "../../../../components/docs-ui";
import { InstallBlock } from "../../../../components/install-block";
import { getAccessibilityNotes } from "../../../../content/accessibility-notes";
import { getComponentDoc } from "../../../../content/component-docs";

export function generateStaticParams() {
  return componentCatalog.map((component) => ({ slug: component.slug }));
}

type ComponentPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ComponentPageProps) {
  const { slug } = await params;
  const component = componentCatalog.find((item) => item.slug === slug);
  return {
    title: component ? `${component.name} - Axie UI` : "Axie UI"
  };
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params;
  const componentIndex = componentCatalog.findIndex((item) => item.slug === slug);
  const component = await getComponentDoc(slug);
  if (!component) notFound();
  const componentMeta = componentCatalog[componentIndex];
  if (!componentMeta) notFound();
  const accessibilityNotes = getAccessibilityNotes(component.slug);
  const previousComponent = componentCatalog[componentIndex - 1];
  const nextComponent = componentCatalog[componentIndex + 1];
  const toc = [
    { href: "#preview", label: "Preview" },
    { href: "#installation", label: "Installation" },
    { href: "#usage", label: "Usage" },
    { href: "#accessibility", label: "Accessibility" },
    ...(component.examples?.map((example) => ({
      href: `#example-${slugify(example.title)}`,
      label: example.title
    })) ?? []),
    { href: "#api-reference", label: "API Reference" }
  ];

  return (
    <DocsShell toc={toc}>
      <article className="grid gap-10">
        <header className="grid min-w-0 gap-4 pb-2">
          <Breadcrumb
            items={[
              { href: "/", label: "Docs" },
              { href: "/docs/components/button", label: "Components" },
              { current: true, label: component.name }
            ]}
          />
          <div className="grid gap-3">
            <Badge className="w-fit" tone="accent">Component</Badge>
            <h1 className="m-0 text-[38px] font-black leading-none tracking-normal md:text-[44px]">
              {component.name}
            </h1>
          </div>
          <p className="m-0 max-w-[66ch] text-[16px] font-bold leading-7 text-axie-muted">
            {component.description}
          </p>
        </header>

        <DocsSection id="preview" title="Preview">
          <ComponentPreview code={component.previewCode} preview={component.preview} />
        </DocsSection>

        <DocsSection
          description="Install the package, then import the component and shared stylesheet in your app."
          id="installation"
          title="Installation"
        >
          <InstallBlock component={componentMeta} />
        </DocsSection>

        <DocsSection id="usage" title="Usage">
          <CodeBlock>{component.usage}</CodeBlock>
        </DocsSection>

        <DocsSection id="accessibility" title="Accessibility">
          <ul className="m-0 grid gap-3 pl-5 text-[14px] font-bold leading-6 text-axie-muted">
            {accessibilityNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </DocsSection>

        {component.examples?.map((example) => (
          <DocsSection
            description={example.description}
            id={`example-${slugify(example.title)}`}
            key={example.title}
            title={example.title}
          >
            <ComponentPreview code={example.code} preview={example.preview} />
          </DocsSection>
        ))}

        <DocsSection id="api-reference" title="API Reference">
          <PropsTable rows={component.api} />
        </DocsSection>

        <footer className="grid gap-3 border-t border-axie-line pt-6 sm:grid-cols-2">
          {previousComponent ? (
            <Button asChild variant="outline">
              <Link href={`/docs/components/${previousComponent.slug}`}>
                <ArrowLeftIcon />
                {previousComponent.name}
              </Link>
            </Button>
          ) : <span />}
          {nextComponent ? (
            <Button asChild className="sm:justify-self-end" variant="outline">
              <Link href={`/docs/components/${nextComponent.slug}`}>
                {nextComponent.name}
                <ArrowRightIcon />
              </Link>
            </Button>
          ) : null}
        </footer>
      </article>
    </DocsShell>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
