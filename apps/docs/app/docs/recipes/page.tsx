import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Badge, Breadcrumb, Button } from "@axie/ui";
import { DocsShell } from "../../../components/docs-shell";
import { DocsSection } from "../../../components/docs-ui";
import { recipes } from "../../../content/recipes";

export const metadata = {
  title: "Recipes - Axie UI"
};

export default function RecipesPage() {
  return (
    <DocsShell
      toc={[
        { href: "#recipes", label: "Recipes" },
        { href: "#coverage", label: "Coverage" }
      ]}
    >
      <article className="grid gap-10">
        <header className="grid min-w-0 gap-4">
          <Breadcrumb
            items={[
              { href: "/", label: "Docs" },
              { current: true, label: "Recipes" }
            ]}
          />
          <Badge className="w-fit" tone="accent">Patterns</Badge>
          <div className="grid gap-3">
            <h1 className="m-0 text-[38px] font-black leading-none tracking-normal md:text-[44px]">
              Recipes
            </h1>
            <p className="m-0 max-w-[66ch] text-[16px] font-bold leading-7 text-axie-muted">
              Production-shaped examples that combine Axie primitives into focused app surfaces.
            </p>
          </div>
        </header>

        <DocsSection
          description="Each recipe includes a preview, copyable code, ingredients, and accessibility notes."
          id="recipes"
          title="Recipes"
        >
          <div className="grid gap-4 xl:grid-cols-2">
            {recipes.map((recipe) => (
              <article
                className="grid min-w-0 overflow-hidden rounded-[16px] border border-axie-line bg-axie-surface shadow-[0_12px_28px_color-mix(in_srgb,var(--axie-color-ink)_4%,transparent)]"
                key={recipe.slug}
              >
                <div className="pointer-events-none grid min-h-[260px] place-items-center overflow-hidden border-b border-axie-line bg-axie-paper p-4">
                  <div className="w-full max-w-[720px] scale-[0.84] sm:scale-90">
                    {recipe.preview}
                  </div>
                </div>
                <div className="grid gap-4 p-4">
                  <div className="grid gap-2">
                    <div className="flex flex-wrap gap-2">
                      {recipe.ingredients.slice(0, 3).map((ingredient) => (
                        <Badge key={ingredient}>{ingredient}</Badge>
                      ))}
                    </div>
                    <h3 className="m-0 text-[18px] font-black leading-none text-axie-ink">
                      {recipe.title}
                    </h3>
                    <p className="m-0 text-[13px] font-bold leading-5 text-axie-muted">
                      {recipe.description}
                    </p>
                  </div>
                  <Button asChild className="justify-self-start" variant="outline">
                    <Link href={`/docs/recipes/${recipe.slug}`}>
                      Open recipe
                      <ArrowRightIcon />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </DocsSection>

        <DocsSection
          description="Recipes intentionally use existing primitives, so they stay portable and easy to copy into product screens."
          id="coverage"
          title="Coverage"
        >
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(recipes.flatMap((recipe) => recipe.ingredients))).map((ingredient) => (
              <Badge key={ingredient}>{ingredient}</Badge>
            ))}
          </div>
        </DocsSection>
      </article>
    </DocsShell>
  );
}
