import { componentCatalog, isComponentSlug } from "@axie/registry";
import type { ComponentDoc } from "./types";

type ComponentDocModule = { default: ComponentDoc };
type ComponentDocLoader = () => Promise<ComponentDocModule>;

export const componentDocLoaders: Record<string, ComponentDocLoader> = {
  "button": () => import("./button"),
  "input": () => import("./input"),
  "autocomplete": () => import("./autocomplete"),
  "input-otp": () => import("./input-otp"),
  "field": () => import("./field"),
  "checkbox": () => import("./checkbox"),
  "switch": () => import("./switch"),
  "segmented-control": () => import("./segmented-control"),
  "tabs": () => import("./tabs"),
  "accordion": () => import("./accordion"),
  "command-menu": () => import("./command-menu"),
  "dialog": () => import("./dialog"),
  "select": () => import("./select"),
  "radio-group": () => import("./radio-group"),
  "card": () => import("./card"),
  "code-block": () => import("./code-block"),
  "alert": () => import("./alert"),
  "badge": () => import("./badge"),
  "avatar": () => import("./avatar"),
  "breadcrumb": () => import("./breadcrumb"),
  "popover": () => import("./popover"),
  "progress": () => import("./progress"),
  "slider": () => import("./slider"),
  "pagination": () => import("./pagination"),
  "stepper": () => import("./stepper"),
  "table": () => import("./table"),
  "list-row": () => import("./list-row"),
  "empty-state": () => import("./empty-state"),
  "skeleton": () => import("./skeleton"),
  "kbd": () => import("./kbd"),
  "mobile-dock": () => import("./mobile-dock"),
  "bottom-sheet": () => import("./bottom-sheet"),
  "tooltip": () => import("./tooltip"),
  "toast": () => import("./toast"),
  "separator": () => import("./separator"),
  "stat": () => import("./stat"),
};

export async function getComponentDoc(slug: string): Promise<ComponentDoc | null> {
  if (!isComponentSlug(slug)) return null;
  const loader = componentDocLoaders[slug];
  if (!loader) return null;
  return (await loader()).default;
}

export async function getComponentDocs() {
  return Promise.all(
    componentCatalog.map(async (component) => {
      const loader = componentDocLoaders[component.slug];
      if (!loader) throw new Error(`Missing docs for ${component.slug}`);
      return (await loader()).default;
    })
  );
}

export type { ComponentDoc, ComponentExample } from "./types";
