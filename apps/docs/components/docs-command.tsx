"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { CommandMenu, Kbd } from "axie-ui";
import { componentCatalog } from "@axie/registry";

const baseItems = [
  {
    description: "Start here and browse the component index.",
    href: "/",
    title: "Introduction"
  },
  {
    description: "Install Axie UI in a Next.js or React app.",
    href: "/docs/installation",
    title: "Installation"
  },
  {
    description: "Colors, radii, spacing, motion, and CSS variables.",
    href: "/docs/tokens",
    title: "Tokens"
  },
  {
    description: "Tune color, radius, density, and motion tokens.",
    href: "/docs/playground",
    title: "Theme playground"
  },
  {
    description: "Composed Axie UI patterns for product screens.",
    href: "/docs/recipes",
    title: "Recipes"
  },
  {
    description: "Larger app screens composed from Axie primitives.",
    href: "/docs/templates",
    title: "Templates"
  }
];

export function DocsCommand() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const items = useMemo(
    () => [
      ...baseItems.map((item) => ({
        description: item.description,
        group: "Docs",
        id: item.href,
        keywords: [item.title, item.href],
        shortcut: item.href === "/" ? "G I" : undefined,
        title: item.title
      })),
      ...componentCatalog.map((component) => ({
        description: component.description,
        group: component.category,
        id: `/docs/components/${component.slug}`,
        keywords: [component.name, component.slug, component.category, ...component.tags],
        shortcut: "C",
        title: component.name
      }))
    ],
    []
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        className="hidden h-10 w-[min(360px,34vw)] min-w-[300px] items-center justify-between gap-4 rounded-[14px] border border-axie-line bg-[#fffdf7] px-3.5 text-left text-[13px] font-bold text-axie-muted shadow-[0_10px_24px_color-mix(in_srgb,var(--axie-color-ink)_4%,transparent)] axie-pressable hover:border-axie-muted/42 hover:text-axie-ink sm:flex"
        type="button"
        onClick={() => setOpen(true)}
      >
        <span className="inline-flex min-w-0 items-center gap-2">
          <MagnifyingGlassIcon aria-hidden className="shrink-0" />
          <span className="truncate">Search docs...</span>
        </span>
        <span className="shrink-0">
          <Kbd className="bg-[#eee6d9]">⌘ K</Kbd>
        </span>
      </button>
      <button
        aria-label="Search documentation"
        className="ml-auto inline-grid h-9 w-9 place-items-center rounded-[12px] border border-axie-line bg-axie-surface text-axie-muted axie-pressable sm:hidden"
        type="button"
        onClick={() => setOpen(true)}
      >
        <MagnifyingGlassIcon aria-hidden />
      </button>
      <CommandMenu
        items={items}
        open={open}
        placeholder="Search docs and components..."
        title="Axie UI command menu"
        onOpenChange={setOpen}
        onSelect={(item) => router.push(item.id)}
      />
    </>
  );
}
