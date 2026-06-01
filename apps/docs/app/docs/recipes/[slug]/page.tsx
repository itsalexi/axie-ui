import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Badge, Breadcrumb, Button } from "@axie/ui";
import { CodeBlock, ComponentPreview, DocsSection } from "../../../../components/docs-ui";
import { DocsShell } from "../../../../components/docs-shell";
import { getRecipe, recipes } from "../../../../content/recipes";

type RecipePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  return {
    title: recipe ? `${recipe.title} - Axie UI` : "Axie UI"
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipeIndex = recipes.findIndex((item) => item.slug === slug);
  const recipe = getRecipe(slug);
  if (!recipe) notFound();

  const previousRecipe = recipes[recipeIndex - 1];
  const nextRecipe = recipes[recipeIndex + 1];

  return (
    <DocsShell
      toc={[
        { href: "#preview", label: "Preview" },
        { href: "#ingredients", label: "Ingredients" },
        { href: "#accessibility", label: "Accessibility" },
        { href: "#code", label: "Code" }
      ]}
    >
      <article className="grid gap-10">
        <header className="grid min-w-0 gap-4">
          <Breadcrumb
            items={[
              { href: "/", label: "Docs" },
              { href: "/docs/recipes", label: "Recipes" },
              { current: true, label: recipe.title }
            ]}
          />
          <Badge className="w-fit" tone="accent">Recipe</Badge>
          <div className="grid gap-3">
            <h1 className="m-0 text-[38px] font-black leading-none tracking-normal md:text-[44px]">
              {recipe.title}
            </h1>
            <p className="m-0 max-w-[66ch] text-[16px] font-bold leading-7 text-axie-muted">
              {recipe.description}
            </p>
          </div>
        </header>

        <DocsSection id="preview" title="Preview">
          <ComponentPreview code={recipe.code} preview={recipe.preview} />
        </DocsSection>

        <DocsSection
          description="The recipe only uses documented Axie primitives."
          id="ingredients"
          title="Ingredients"
        >
          <div className="flex flex-wrap gap-2">
            {recipe.ingredients.map((ingredient) => (
              <Badge key={ingredient}>{ingredient}</Badge>
            ))}
          </div>
        </DocsSection>

        <DocsSection id="accessibility" title="Accessibility">
          <ul className="m-0 grid gap-3 pl-5 text-[14px] font-bold leading-6 text-axie-muted">
            {recipe.accessibility.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </DocsSection>

        <DocsSection id="code" title="Code">
          <CodeBlock>{recipe.code}</CodeBlock>
        </DocsSection>

        <footer className="grid gap-3 border-t border-axie-line pt-6 sm:grid-cols-2">
          {previousRecipe ? (
            <Button asChild variant="outline">
              <Link href={`/docs/recipes/${previousRecipe.slug}`}>
                <ArrowLeftIcon />
                {previousRecipe.title}
              </Link>
            </Button>
          ) : <span />}
          {nextRecipe ? (
            <Button asChild className="sm:justify-self-end" variant="outline">
              <Link href={`/docs/recipes/${nextRecipe.slug}`}>
                {nextRecipe.title}
                <ArrowRightIcon />
              </Link>
            </Button>
          ) : null}
        </footer>
      </article>
    </DocsShell>
  );
}
