import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Badge, Breadcrumb, Button } from "@axie/ui";
import { CodeBlock, ComponentPreview, DocsSection } from "../../../../components/docs-ui";
import { DocsShell } from "../../../../components/docs-shell";
import { getTemplate, templates } from "../../../../content/templates";

type TemplatePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return templates.map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({ params }: TemplatePageProps) {
  const { slug } = await params;
  const template = getTemplate(slug);
  return {
    title: template ? `${template.title} - Axie UI` : "Axie UI"
  };
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { slug } = await params;
  const templateIndex = templates.findIndex((item) => item.slug === slug);
  const template = getTemplate(slug);
  if (!template) notFound();

  const previousTemplate = templates[templateIndex - 1];
  const nextTemplate = templates[templateIndex + 1];

  return (
    <DocsShell
      toc={[
        { href: "#preview", label: "Preview" },
        { href: "#ingredients", label: "Ingredients" },
        { href: "#code", label: "Code" }
      ]}
    >
      <article className="grid gap-10">
        <header className="grid min-w-0 gap-4">
          <Breadcrumb
            items={[
              { href: "/", label: "Docs" },
              { href: "/docs/templates", label: "Templates" },
              { current: true, label: template.title }
            ]}
          />
          <div className="flex flex-wrap gap-2">
            <Badge tone="accent">Template</Badge>
            <Badge tone="info">{template.category}</Badge>
          </div>
          <div className="grid gap-3">
            <h1 className="m-0 text-[38px] font-black leading-none tracking-normal md:text-[44px]">
              {template.title}
            </h1>
            <p className="m-0 max-w-[66ch] text-[16px] font-bold leading-7 text-axie-muted">
              {template.description}
            </p>
          </div>
        </header>

        <DocsSection id="preview" title="Preview">
          <ComponentPreview code={template.code} preview={template.preview} />
        </DocsSection>

        <DocsSection
          description="These are the primitive pieces used by the template."
          id="ingredients"
          title="Ingredients"
        >
          <div className="flex flex-wrap gap-2">
            {template.ingredients.map((ingredient) => (
              <Badge key={ingredient}>{ingredient}</Badge>
            ))}
          </div>
        </DocsSection>

        <DocsSection id="code" title="Code">
          <CodeBlock>{template.code}</CodeBlock>
        </DocsSection>

        <footer className="grid gap-3 border-t border-axie-line pt-6 sm:grid-cols-2">
          {previousTemplate ? (
            <Button asChild variant="outline">
              <Link href={`/docs/templates/${previousTemplate.slug}`}>
                <ArrowLeftIcon />
                {previousTemplate.title}
              </Link>
            </Button>
          ) : <span />}
          {nextTemplate ? (
            <Button asChild className="sm:justify-self-end" variant="outline">
              <Link href={`/docs/templates/${nextTemplate.slug}`}>
                {nextTemplate.title}
                <ArrowRightIcon />
              </Link>
            </Button>
          ) : null}
        </footer>
      </article>
    </DocsShell>
  );
}
