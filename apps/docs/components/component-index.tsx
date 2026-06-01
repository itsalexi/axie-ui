"use client";

import Link from "next/link";
import { ArrowRightIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "axie-ui";
import { componentCatalog, componentCategories, type ComponentCategory } from "@axie/registry";
import { useMemo, useState } from "react";
import { MorphingPillGroup } from "./morphing-pill-group";

type CategoryFilter = "All" | ComponentCategory;

export function ComponentIndex() {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredComponents = useMemo(
    () =>
      componentCatalog.filter((component) => {
        const matchesCategory = category === "All" || component.category === category;
        const searchText = [
          component.name,
          component.description,
          component.category,
          ...component.tags
        ].join(" ").toLowerCase();

        return matchesCategory && (!normalizedQuery || searchText.includes(normalizedQuery));
      }),
    [category, normalizedQuery]
  );

  const filters: CategoryFilter[] = ["All", ...componentCategories];

  return (
    <div className="grid min-w-0 gap-4">
      <div className="grid gap-3 rounded-[12px] border border-axie-line bg-axie-surface p-3">
        <label className="grid gap-2">
          <span className="text-[12px] font-black leading-none text-axie-muted">Find a primitive</span>
          <span className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-2 rounded-[11px] border border-axie-line bg-axie-surface-soft px-3">
            <MagnifyingGlassIcon aria-hidden className="text-axie-muted" />
            <Input
              className="min-h-10 border-0 bg-transparent px-0 shadow-none focus:translate-y-0 focus:bg-transparent focus:ring-0"
              placeholder="Search by name, tag, or use case..."
              value={query}
              onChange={(event) => setQuery(event.currentTarget.value)}
            />
          </span>
        </label>
        <MorphingPillGroup
          ariaLabel="Component category"
          className="w-fit flex-wrap gap-1 border border-axie-line bg-axie-surface"
          itemClassName="min-h-9 font-black"
          items={filters.map((filter) => ({ label: filter, value: filter }))}
          value={category}
          onValueChange={setCategory}
        />
      </div>

      <div className="grid overflow-hidden rounded-[12px] border border-axie-line bg-axie-surface">
        {filteredComponents.length > 0 ? (
          filteredComponents.map((component) => (
            <Link
              className="grid gap-2 border-b border-axie-line px-4 py-3 transition last:border-b-0 hover:bg-axie-surface-soft/58 sm:grid-cols-[160px_minmax(0,1fr)_auto] sm:items-center sm:gap-4"
              href={`/docs/components/${component.slug}`}
              key={component.slug}
            >
              <span className="grid gap-1">
                <span className="text-[14px] font-black text-axie-ink">{component.name}</span>
                <span className="text-[11px] font-black leading-none text-axie-muted">{component.category}</span>
              </span>
              <span className="text-[13px] font-bold leading-5 text-axie-muted">{component.description}</span>
              <ArrowRightIcon className="hidden text-axie-muted sm:block" />
            </Link>
          ))
        ) : (
          <div className="grid gap-2 px-4 py-10 text-center">
            <p className="m-0 text-[15px] font-black text-axie-ink">No components found</p>
            <p className="m-0 text-[13px] font-bold text-axie-muted">
              Try a shorter search or switch categories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
