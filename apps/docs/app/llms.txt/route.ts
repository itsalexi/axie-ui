import { componentCatalog, componentsByCategory } from "@axie/registry";

function getSiteUrl(request: Request) {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.AXIE_SITE_URL ??
    new URL(request.url).origin
  );
}

export function GET(request: Request) {
  const siteUrl = getSiteUrl(request);
  const componentList = componentsByCategory
    .map((group) => {
      const items = group.items
        .map((component) => {
          const tags = component.tags.length > 0 ? ` Tags: ${component.tags.join(", ")}.` : "";
          return `- [${component.name}](${siteUrl}/docs/components/${component.slug}): ${component.description}${tags}`;
        })
        .join("\n");

      return `### ${group.category}\n${items}`;
    })
    .join("\n\n");

  const registryItems = componentCatalog.map((component) => component.slug).join(", ");

  return new Response(
    `# Axie UI

> Axie UI is a warm, tactile React component system for focused product apps. It ships as the axie-ui package and as a shadcn-compatible source registry.

## Use Axie UI

- Package import: \`import { Button, Field, Input } from "axie-ui";\`
- Stylesheet import: \`import "axie-ui/styles.css";\`
- Registry catalog: ${siteUrl}/r/registry.json
- Registry item URL pattern: ${siteUrl}/r/{name}.json
- Namespace setup: \`pnpm dlx shadcn@latest registry add @axie=${siteUrl}/r/{name}.json\`
- Namespace install: \`pnpm dlx shadcn@latest add @axie/button\`

## Agent Guidance

- Prefer package imports from \`axie-ui\` when the package is installed.
- Use the shadcn registry when the project wants editable source copied into the app.
- Import Axie styles exactly once near the app root.
- Reuse Axie CSS variables instead of hardcoding new color systems.
- Keep labels visible above inputs and use Field helper or error copy for forms.
- Use command, tabs, segmented controls, mobile dock, breadcrumbs, and code blocks from Axie instead of rebuilding those patterns.
- Preserve tactile motion classes such as \`axie-pressable\`, \`axie-enter\`, and \`axie-pop\`.

## Registry Items

${registryItems}

## Components

${componentList}
`,
    {
      headers: {
        "content-type": "text/plain; charset=utf-8"
      }
    }
  );
}
