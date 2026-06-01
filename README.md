# Axie UI

[Docs](https://axie.alexi.life) · [Registry](https://axie.alexi.life/r/registry.json) · [npm](https://www.npmjs.com/package/axie-ui)

Axie UI is a warm, tactile React component system for focused product apps. It ships as a normal package and as a shadcn-style registry, so teams can either import components from `axie-ui` or copy the source into their app when they want full ownership.

## What is inside

- 36 React primitives for forms, navigation, overlays, feedback, data display, and mobile surfaces.
- Theme tokens for color, radius, spacing, elevation, and motion.
- A Next.js docs app with examples, recipes, templates, search, and registry output.
- Agent-friendly docs through `llms.txt` and predictable registry URLs.

## Install

Use the package when you want stable imports and npm updates.

```bash
pnpm add axie-ui
```

```css
@import "tailwindcss";
@import "axie-ui/styles.css";
@source "../node_modules/axie-ui/dist";
```

```tsx
import { Button, Field, Input } from "axie-ui";
```

Use the registry when you want the component source copied into your app.

```bash
pnpm dlx shadcn@latest add https://axie.alexi.life/r/button.json
```

After adding the namespace once, shorthand installs work too.

```bash
pnpm dlx shadcn@latest registry add @axie=https://axie.alexi.life/r/{name}.json
pnpm dlx shadcn@latest add @axie/button
```

## Components

Button, Input, Autocomplete, Input OTP, Field, Checkbox, Switch, Segmented Control, Tabs, Accordion, Command Menu, Dialog, Select, Radio Group, Card, Alert, Badge, Avatar, Breadcrumb, Popover, Progress, Slider, Pagination, Stepper, Table, List Row, Empty State, Skeleton, Kbd, Mobile Dock, Code Block, Bottom Sheet, Tooltip, Toast, Separator, and Stat.

## Workspace

```txt
apps/docs          Next.js documentation site
packages/ui        axie-ui React package
packages/registry  component catalog shared by docs, search, and registry builds
registry           generated shadcn registry source
```

The component catalog lives in `packages/registry/src/component-catalog.json`. Rich docs live in `apps/docs/content/component-docs/*.tsx`, one file per component.

## Development

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm build
```

Build the shadcn-compatible registry files with:

```bash
pnpm registry:build
```

This writes `registry/registry.json` and emits static component entries to `apps/docs/public/r`.
