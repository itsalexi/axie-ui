import Link from "next/link";
import type { ReactNode } from "react";
import {
  Alert,
  Badge,
  Breadcrumb,
  Button,
  ListRow,
  Progress,
  Stat
} from "@axie/ui";
import { componentCount } from "@axie/registry";
import {
  ArrowRightIcon,
  CodeIcon,
  Component1Icon,
  DashboardIcon,
  DrawingPinIcon
} from "@radix-ui/react-icons";
import { ComponentIndex } from "../components/component-index";
import { DocsShell } from "../components/docs-shell";
import { CodeBlock, DocsSection } from "../components/docs-ui";

export default function HomePage() {
  return (
    <DocsShell
      toc={[
        { href: "#introduction", label: "Introduction" },
        { href: "#start", label: "Start" },
        { href: "#quick-start", label: "Quick start" },
        { href: "#components", label: "Components" },
        { href: "#samples", label: "Samples" }
      ]}
    >
      <article className="grid gap-12">
        <header
          className="grid min-w-0 gap-8 border-b border-axie-line pb-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(340px,0.78fr)] xl:items-start"
          id="introduction"
        >
          <div className="grid min-w-0 gap-5">
            <Breadcrumb
              items={[
                { label: "Docs" },
                { current: true, label: "Introduction" }
              ]}
            />
            <div className="flex flex-wrap gap-2">
              <Badge tone="accent">Axie UI</Badge>
              <Badge>React primitives</Badge>
            </div>
            <div className="grid gap-4">
              <h1 className="m-0 max-w-[680px] text-[42px] font-black leading-[1.02] tracking-normal text-axie-ink md:text-[58px] md:leading-[0.98]">
                Build calm product screens faster.
              </h1>
              <p className="m-0 max-w-[62ch] text-[16px] font-bold leading-7 text-axie-muted md:text-[17px]">
                Axie UI is a tactile component system for forms, settings, dashboards, and internal
                tools that need to feel personal without getting noisy.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <Link href="/docs/installation">
                  Install Axie
                  <ArrowRightIcon />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/docs/components/button">Browse components</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/docs/templates">View templates</Link>
              </Button>
            </div>
          </div>
          <IntroHeroPreview />
        </header>

        <DocsSection
          description="Start small with a primitive, then move up to recipes and full screens when the product needs more structure."
          id="start"
          title="Start"
        >
          <div className="grid overflow-hidden rounded-[16px] border border-axie-line bg-axie-surface">
            <NextStepLink
              description="Add the package and stylesheet once, then start importing primitives."
              href="/docs/installation"
              icon={<CodeIcon />}
              label="01"
              title="Install the library"
            />
            <NextStepLink
              description="Use focused building blocks for inputs, feedback, overlays, navigation, and data display."
              href="/docs/components/button"
              icon={<Component1Icon />}
              label="02"
              title="Pick a component"
            />
            <NextStepLink
              description="Start from composed surfaces when you need a full settings screen, dashboard, or mobile view."
              href="/docs/templates"
              icon={<DashboardIcon />}
              label="03"
              title="Copy a sample"
            />
          </div>
        </DocsSection>

        <DocsSection
          description="Install the package, import the stylesheet, and use the primitives anywhere in your app."
          id="quick-start"
          title="Quick start"
        >
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(260px,0.5fr)] lg:items-start">
            <CodeBlock>{`pnpm add @axie/ui

import "@axie/ui/styles.css";
import { Button, Field, Input } from "@axie/ui";`}</CodeBlock>
            <div className="grid gap-3 border-y border-axie-line py-4">
              <SystemRule title="Tokens first" description="Colors, spacing, radius, and motion are CSS variables." />
              <SystemRule title="Copyable code" description="Every page keeps preview, usage, and API notes close together." />
              <SystemRule title="App-ready states" description="Controls include the focus, disabled, error, and motion details you need." />
            </div>
          </div>
        </DocsSection>

        <DocsSection
          description={`${componentCount} primitives for inputs, overlays, feedback, navigation, and dense app layouts.`}
          id="components"
          title="Components"
        >
          <ComponentIndex />
        </DocsSection>

        <DocsSection
          description="Recipes are smaller product patterns. Templates are larger screens that show spacing, hierarchy, and composition."
          id="samples"
          title="Samples"
        >
          <div className="grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
            <SampleLink
              description="Twelve focused combinations for settings panels, queues, onboarding, upload flows, and empty states."
              href="/docs/recipes"
              label="Recipes"
              title="Patterns you can paste into product work"
            />
            <SampleLink
              description="Eight larger screens for dashboards, billing portals, support inboxes, project boards, and mobile finance."
              href="/docs/templates"
              label="Templates"
              title="Full-page samples with real layout pressure"
            />
          </div>
        </DocsSection>
      </article>
    </DocsShell>
  );
}

function IntroHeroPreview() {
  return (
    <div className="min-w-0 rounded-[24px] border border-axie-line bg-axie-surface p-4 shadow-[0_24px_60px_color-mix(in_srgb,var(--axie-color-ink)_8%,transparent)] axie-enter">
      <div className="grid gap-5 rounded-[18px] border border-axie-line bg-axie-paper p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="grid gap-2">
            <Badge className="w-fit" tone="accent">Workspace</Badge>
            <div>
              <h2 className="m-0 text-[24px] font-black leading-none text-axie-ink">
                North Pier Ops
              </h2>
              <p className="m-0 mt-1 text-[13px] font-bold leading-5 text-axie-muted">
                Billing, review, and support surfaces in one visual language.
              </p>
            </div>
          </div>
          <Button size="sm" variant="soft">Sync</Button>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Stat label="Collected" value="$8.4k" tone="accent" />
          <Stat label="Queued" value="18" />
          <Stat label="Blocked" value="3" tone="danger" />
        </div>

        <Progress value={72} tone="accent" />

        <div className="divide-y divide-axie-line rounded-[14px] border border-axie-line bg-axie-surface px-4">
          <ListRow
            action={<Badge tone="accent">Ready</Badge>}
            detail="Rate table changed by 4.2%."
            title="Merchant review"
            tone="accent"
          />
          <ListRow
            action={<Badge tone="warning">Hold</Badge>}
            detail="Missing approver from finance."
            title="Contract sync"
            tone="info"
          />
        </div>

        <Alert
          description="Use the same primitives for focused forms, review queues, settings panels, and status-heavy dashboards."
          title="Built for real product surfaces"
          tone="info"
        />
      </div>
    </div>
  );
}

function NextStepLink({
  description,
  href,
  icon,
  label,
  title
}: {
  description: string;
  href: string;
  icon: ReactNode;
  label: string;
  title: string;
}) {
  return (
    <Link
      className="grid gap-3 border-b border-axie-line px-4 py-4 transition last:border-b-0 hover:bg-axie-surface-soft/58 sm:grid-cols-[56px_44px_minmax(0,1fr)_auto] sm:items-center"
      href={href}
    >
      <span className="grid h-11 w-11 place-items-center rounded-[12px] border border-axie-line bg-axie-surface-soft text-axie-muted [&>svg]:h-4 [&>svg]:w-4">
        {icon}
      </span>
      <span className="font-mono text-[12px] font-black text-axie-muted">{label}</span>
      <span className="grid gap-1">
        <span className="text-[15px] font-black leading-5 text-axie-ink">{title}</span>
        <span className="text-[13px] font-bold leading-5 text-axie-muted">{description}</span>
      </span>
      <ArrowRightIcon className="hidden text-axie-muted sm:block" />
    </Link>
  );
}

function SystemRule({ description, title }: { description: string; title: string }) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
      <span className="mt-1 h-2 w-2 rounded-full bg-axie-accent" />
      <span className="grid gap-1">
        <span className="text-[14px] font-black leading-5 text-axie-ink">{title}</span>
        <span className="text-[13px] font-bold leading-5 text-axie-muted">{description}</span>
      </span>
    </div>
  );
}

function SampleLink({
  description,
  href,
  label,
  title
}: {
  description: string;
  href: string;
  label: string;
  title: string;
}) {
  return (
    <Link
      className="grid min-w-0 gap-5 rounded-[16px] border border-axie-line bg-axie-surface p-5 shadow-[0_12px_28px_color-mix(in_srgb,var(--axie-color-ink)_4%,transparent)] transition hover:-translate-y-0.5 hover:bg-axie-surface-soft/34"
      href={href}
    >
      <div className="flex items-center justify-between gap-3">
        <Badge tone="accent">{label}</Badge>
        <DrawingPinIcon className="text-axie-muted" />
      </div>
      <div className="grid gap-2">
        <h3 className="m-0 text-[22px] font-black leading-none text-axie-ink">{title}</h3>
        <p className="m-0 max-w-[58ch] text-[14px] font-bold leading-6 text-axie-muted">
          {description}
        </p>
      </div>
      <span className="inline-flex items-center gap-2 text-[13px] font-black text-axie-ink">
        Open {label.toLowerCase()}
        <ArrowRightIcon />
      </span>
    </Link>
  );
}
