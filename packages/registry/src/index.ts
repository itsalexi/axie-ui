import componentCatalogJson from "./component-catalog.json";

export const componentCategories = [
  "Forms",
  "Overlays",
  "Feedback",
  "Navigation",
  "Data Display"
] as const;

export type ComponentCategory = (typeof componentCategories)[number];

export type ComponentCatalogItem = {
  category: ComponentCategory;
  description: string;
  name: string;
  slug: string;
  tags: string[];
  title: string;
  type: "registry:ui";
};

export const componentCatalog = componentCatalogJson as readonly ComponentCatalogItem[];
export type ComponentSlug = (typeof componentCatalog)[number]["slug"];

const componentSlugSet = new Set(componentCatalog.map((component) => component.slug));

export function isComponentSlug(slug: string): slug is ComponentSlug {
  return componentSlugSet.has(slug);
}

export function getComponentMeta(slug: string) {
  return componentCatalog.find((component) => component.slug === slug) ?? null;
}

export const componentCount = componentCatalog.length;

export const componentsByCategory = componentCategories.map((category) => ({
  category,
  items: componentCatalog.filter((component) => component.category === category)
}));

const externalDependencies: Partial<Record<ComponentSlug, string[]>> = {
  button: ["@radix-ui/react-slot"],
  "command-menu": ["cmdk"]
};

const extraComponentFiles: Partial<Record<ComponentSlug, string[]>> = {
  "command-menu": ["command"],
  toast: ["toast-provider"]
};

const importNameOverrides: Partial<Record<ComponentSlug, string>> = {
  "input-otp": "InputOtp",
  "bottom-sheet": "BottomSheet",
  "command-menu": "CommandMenu",
  "empty-state": "EmptyState",
  "list-row": "ListRow",
  "radio-group": "RadioGroup",
  "segmented-control": "SegmentedControl"
};

export function getComponentImportName(component: Pick<ComponentCatalogItem, "name" | "slug">) {
  return importNameOverrides[component.slug] ?? component.name.replace(/\s+/g, "");
}

export function getComponentRegistryFiles(component: Pick<ComponentCatalogItem, "slug">) {
  const componentNames = [component.slug, ...(extraComponentFiles[component.slug as ComponentSlug] ?? [])];
  return [
    ...componentNames.map((name) => ({
      path: `packages/ui/src/components/${name}.tsx`,
      target: `components/axie/${name}.tsx`,
      type: "registry:ui" as const
    })),
    {
      path: "packages/ui/src/lib/cn.ts",
      target: "lib/axie-cn.ts",
      type: "registry:lib" as const
    },
    {
      path: "packages/ui/src/styles.css",
      target: "styles/axie.css",
      type: "registry:style" as const
    }
  ];
}

export function getComponentRegistryItem(component: ComponentCatalogItem) {
  return {
    name: component.slug,
    type: component.type,
    title: component.title,
    description: component.description,
    categories: [component.category],
    dependencies: externalDependencies[component.slug] ?? [],
    files: getComponentRegistryFiles(component),
    meta: {
      importName: getComponentImportName(component),
      tags: component.tags
    }
  };
}

export const shadcnRegistry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "axie",
  homepage: "https://axie-ui.local",
  items: componentCatalog.map((component) => getComponentRegistryItem(component))
} as const;
