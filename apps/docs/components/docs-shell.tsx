import Link from "next/link";
import type { ReactNode } from "react";
import { componentsByCategory } from "@axie/registry";
import { DocsCommand } from "./docs-command";
import { DocsMobileNav } from "./docs-mobile-nav";
import { DocsSidebar } from "./docs-sidebar";

const navGroups = [
  {
    title: "Getting Started",
    items: [
      { href: "/", label: "Introduction" },
      { href: "/docs/installation", label: "Installation" },
      { href: "/docs/tokens", label: "Tokens" },
      { href: "/docs/playground", label: "Playground" },
      { href: "/docs/recipes", label: "Recipes" },
      { href: "/docs/templates", label: "Templates" }
    ]
  },
  ...componentsByCategory.map((group) => ({
    title: group.category,
    items: group.items.map((component) => ({
      href: `/docs/components/${component.slug}`,
      label: component.name
    }))
  }))
];

export type TocItem = {
  href: string;
  label: string;
};

export function DocsShell({ children, toc = [] }: { children: ReactNode; toc?: TocItem[] }) {
  const shellClassName = [
    "grid w-full grid-cols-1 px-4 min-[600px]:h-[calc(100dvh-56px)] min-[600px]:grid-cols-[150px_minmax(0,1fr)] min-[600px]:gap-4 min-[600px]:overflow-hidden md:grid-cols-[180px_minmax(0,1fr)] md:gap-5 md:px-6 xl:grid-cols-[220px_minmax(0,1fr)] xl:gap-7",
    toc.length > 0
      ? "2xl:grid-cols-[220px_minmax(0,1fr)_200px] 2xl:gap-8"
      : ""
  ].join(" ");

  return (
    <main className="min-h-dvh bg-[#fbfaf7] text-axie-ink">
      <header className="sticky top-0 z-30 border-b border-axie-line/82 bg-[#fbfaf7]/88 backdrop-blur-xl">
        <div className="flex h-14 w-full items-center gap-3 px-4 md:gap-4 md:px-6">
          <DocsMobileNav groups={navGroups} />
          <Link
            className="inline-flex items-center text-[17px] font-black tracking-normal text-axie-ink"
            href="/"
          >
            Axie UI
          </Link>
          <nav aria-label="Top navigation" className="hidden items-center gap-4 text-[13px] font-bold text-axie-muted md:flex">
            <Link className="transition hover:text-axie-ink" href="/">
              Docs
            </Link>
            <Link className="transition hover:text-axie-ink" href="/docs/components/button">
              Components
            </Link>
            <Link className="transition hover:text-axie-ink" href="/docs/tokens">
              Tokens
            </Link>
            <Link className="transition hover:text-axie-ink" href="/docs/playground">
              Playground
            </Link>
            <Link className="transition hover:text-axie-ink" href="/docs/recipes">
              Recipes
            </Link>
            <Link className="transition hover:text-axie-ink" href="/docs/templates">
              Templates
            </Link>
          </nav>
          <div className="ml-auto">
            <DocsCommand />
          </div>
        </div>
      </header>
      <div className={shellClassName}>
        <DocsSidebar groups={navGroups} />
        <section className="w-full min-w-0 overflow-x-clip py-8 min-[600px]:h-full min-[600px]:overflow-y-auto min-[600px]:pr-2 min-[600px]:[scrollbar-gutter:stable] lg:py-10">
          <div className="w-full min-w-0 max-w-full">{children}</div>
        </section>
        {toc.length > 0 ? (
          <aside className="hidden h-full overflow-y-auto py-10 2xl:block">
            <div className="grid gap-3 border-l border-axie-line pl-5">
              <p className="m-0 text-[12px] font-black text-axie-ink">On this page</p>
              <nav aria-label="On this page" className="grid gap-2">
                {toc.map((item) => (
                  <a
                    className="text-[13px] font-bold leading-5 text-axie-muted transition hover:text-axie-ink"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        ) : null}
      </div>
    </main>
  );
}
