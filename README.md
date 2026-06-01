# Axie UI

Axie UI is a warm, tactile React component system for focused apps. It starts as a package-first library and leaves room for a shadcn-style copy registry once the component API settles.

## Apps and packages

```txt
apps/docs          Next.js documentation site
packages/ui        @axie/ui component package
packages/registry  shared component catalog for docs, nav, search, and registry output
registry           generated shadcn-style registry metadata
```

The component catalog lives in `packages/registry/src/component-catalog.json`. Rich docs live in
`apps/docs/content/component-docs/*.tsx`, one file per component, so the sidebar and command
palette do not import every preview just to render navigation.

## Scripts

```bash
pnpm install
pnpm dev
pnpm registry:build
pnpm typecheck
pnpm build
```

`pnpm registry:build` writes the source registry metadata to `registry/registry.json` and emits
shadcn-compatible static files to `apps/docs/public/r`.

## Package

```tsx
import { Button, Field, Input } from "@axie/ui";
import "@axie/ui/styles.css";
```

## Registry

After the docs app is deployed, the registry is available at:

```txt
https://your-domain.com/r/registry.json
https://your-domain.com/r/button.json
```

Consumers can use Axie as a shadcn namespace:

```bash
pnpm dlx shadcn@latest registry add @axie=https://your-domain.com/r/{name}.json
pnpm dlx shadcn@latest add @axie/button
```

The docs app also exposes `https://your-domain.com/llms.txt` so AI agents can discover install
commands, registry URLs, component links, and usage guidance.
