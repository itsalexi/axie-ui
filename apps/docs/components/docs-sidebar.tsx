"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export type DocsNavGroup = {
  items: Array<{
    href: string;
    label: string;
  }>;
  title: string;
};

const sidebarScrollKey = "axie-docs-sidebar-scroll";

export function DocsSidebar({ groups }: { groups: DocsNavGroup[] }) {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLElement | null>(null);
  const restoredRef = useRef(false);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const savedScroll = window.sessionStorage.getItem(sidebarScrollKey);
    window.requestAnimationFrame(() => {
      if (savedScroll !== null) {
        sidebar.scrollTop = Number(savedScroll);
        restoredRef.current = true;
        return;
      }

      const activeLink = sidebar.querySelector<HTMLAnchorElement>('a[aria-current="page"]');
      activeLink?.scrollIntoView({ block: "nearest" });
    });
  }, []);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar || restoredRef.current) return;

    const activeLink = sidebar.querySelector<HTMLAnchorElement>('a[aria-current="page"]');
    activeLink?.scrollIntoView({ block: "nearest" });
  }, [pathname]);

  function rememberScroll() {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;
    window.sessionStorage.setItem(sidebarScrollKey, String(sidebar.scrollTop));
  }

  return (
    <aside
      className="hidden h-full overflow-y-auto border-r border-axie-line/70 py-6 pr-3 min-[600px]:block md:pr-4 xl:pr-5"
      ref={sidebarRef}
      onScroll={rememberScroll}
    >
      <nav aria-label="Documentation" className="grid gap-7">
        {groups.map((group) => (
          <div className="grid gap-2" key={group.title}>
            <p className="m-0 px-2 text-[12px] font-black leading-none text-axie-ink">
              {group.title}
            </p>
            <div className="grid gap-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "rounded-[8px] px-2 py-1.5 text-[13px] font-bold transition",
                      isActive
                        ? "bg-axie-accent-soft text-axie-ink shadow-[inset_0_1px_0_color-mix(in_srgb,var(--axie-color-surface)_70%,transparent)]"
                        : "text-axie-muted hover:bg-axie-surface hover:text-axie-ink"
                    ].join(" ")}
                    href={item.href}
                    key={item.href}
                    onClick={rememberScroll}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
