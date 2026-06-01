"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import type { DocsNavGroup } from "./docs-sidebar";

const drawerCloseMs = 280;
const drawerOpenFocusMs = 340;

export function DocsMobileNav({ groups }: { groups: DocsNavGroup[] }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [drawerState, setDrawerState] = useState<"closed" | "closing" | "open">("closed");
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const drawerVisible = drawerState !== "closed";
  const drawerOpen = drawerState === "open";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(
    () => () => {
      if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    },
    []
  );

  function openDrawer() {
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    setDrawerState("open");
  }

  function closeDrawer() {
    if (drawerState === "closed") return;
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    setDrawerState("closing");
    closeTimerRef.current = window.setTimeout(() => {
      setDrawerState("closed");
      closeTimerRef.current = null;
    }, drawerCloseMs);
  }

  useEffect(() => {
    if (!drawerVisible) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    let focusTimer: number | null = null;
    if (drawerOpen) {
      focusTimer = window.setTimeout(() => closeButtonRef.current?.focus({ preventScroll: true }), drawerOpenFocusMs);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeDrawer();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (focusTimer !== null) window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [drawerOpen, drawerVisible]);

  useEffect(() => {
    setDrawerState("closed");
  }, [pathname]);

  return (
    <>
      <button
        aria-expanded={drawerOpen}
        aria-label="Open documentation navigation"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-[12px] border border-axie-line bg-axie-surface text-axie-muted shadow-[0_8px_18px_color-mix(in_srgb,var(--axie-color-ink)_4%,transparent)] outline-none axie-pressable hover:text-axie-ink focus-visible:ring-2 focus-visible:ring-axie-accent/28 min-[600px]:hidden"
        type="button"
        onClick={openDrawer}
      >
        <HamburgerMenuIcon aria-hidden />
      </button>
      {mounted && drawerVisible ? createPortal(
        <div className="fixed inset-0 z-50 min-[600px]:hidden" role="presentation">
          <button
            aria-label="Close documentation navigation"
            className="axie-drawer-backdrop absolute inset-0 h-full w-full bg-[#201c19]/24 backdrop-blur-[3px]"
            data-state={drawerState}
            type="button"
            onClick={closeDrawer}
          />
          <aside
            aria-label="Documentation navigation"
            aria-modal="true"
            className="axie-drawer-panel absolute bottom-0 left-0 top-0 grid w-[min(360px,calc(100vw-24px))] grid-rows-[auto_minmax(0,1fr)] border-r border-axie-line bg-[#fbfaf7] shadow-[22px_0_60px_color-mix(in_srgb,var(--axie-color-ink)_18%,transparent)]"
            data-state={drawerState}
            role="dialog"
          >
            <div className="flex h-14 items-center justify-between gap-3 border-b border-axie-line px-4">
              <Link
                className="text-[17px] font-black leading-none text-axie-ink"
                href="/"
                onClick={closeDrawer}
              >
                Axie UI
              </Link>
              <button
                aria-label="Close documentation navigation"
                className="grid h-9 w-9 place-items-center rounded-[12px] border border-axie-line bg-axie-surface text-axie-muted outline-none axie-pressable hover:text-axie-ink focus-visible:ring-2 focus-visible:ring-axie-accent/28"
                ref={closeButtonRef}
                type="button"
                onClick={closeDrawer}
              >
                <Cross2Icon aria-hidden />
              </button>
            </div>
            <nav aria-label="Documentation" className="overflow-y-auto px-4 py-5">
              <div className="grid gap-7">
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
                              "rounded-[9px] px-2.5 py-2 text-[14px] font-bold transition",
                              isActive
                                ? "bg-axie-accent-soft text-axie-ink shadow-[inset_0_1px_0_color-mix(in_srgb,var(--axie-color-surface)_70%,transparent)]"
                                : "text-axie-muted hover:bg-axie-surface hover:text-axie-ink"
                            ].join(" ")}
                            href={item.href}
                            key={item.href}
                            onClick={closeDrawer}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </nav>
          </aside>
        </div>,
        document.body
      ) : null}
    </>
  );
}
