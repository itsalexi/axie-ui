import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const catalogPath = join(root, "packages/registry/src/component-catalog.json");
const registryPath = join(root, "registry/registry.json");
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));

function getHomepage() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.AXIE_SITE_URL) {
    return process.env.AXIE_SITE_URL;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:8091";
}

const externalDependencies = {
  button: ["@radix-ui/react-slot"],
  "command-menu": ["cmdk"]
};

const extraComponentFiles = {
  "command-menu": ["command"],
  toast: ["toast-provider"]
};

const importNameOverrides = {
  "bottom-sheet": "BottomSheet",
  "command-menu": "CommandMenu",
  "empty-state": "EmptyState",
  "input-otp": "InputOtp",
  "list-row": "ListRow",
  "radio-group": "RadioGroup",
  "segmented-control": "SegmentedControl"
};

function getImportName(component) {
  return importNameOverrides[component.slug] ?? component.name.replace(/\s+/g, "");
}

function getFiles(component) {
  const componentNames = [component.slug, ...(extraComponentFiles[component.slug] ?? [])];
  return [
    ...componentNames.map((name) => ({
      path: `packages/ui/src/components/${name}.tsx`,
      target: `components/axie/${name}.tsx`,
      type: "registry:ui"
    })),
    {
      path: "packages/ui/src/lib/cn.ts",
      target: "lib/axie-cn.ts",
      type: "registry:lib"
    },
    {
      path: "packages/ui/src/styles.css",
      target: "styles/axie.css",
      type: "registry:style"
    }
  ];
}

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "axie",
  homepage: getHomepage(),
  items: catalog.map((component) => ({
    name: component.slug,
    type: component.type,
    title: component.title,
    description: component.description,
    categories: [component.category],
    dependencies: externalDependencies[component.slug] ?? [],
    files: getFiles(component),
    meta: {
      importName: getImportName(component),
      tags: component.tags
    }
  }))
};

await writeFile(registryPath, `${JSON.stringify(registry, null, 2)}\n`);
