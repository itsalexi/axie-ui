# axie-ui

[Docs](https://axie.alexi.life) · [Registry](https://axie.alexi.life/r/registry.json) · [Source](https://github.com/itsalexi/axie-ui)

The performative UI library for React product apps. Axie is built for dense interfaces that should feel tactile, animated, and personal.

## Install

```bash
pnpm add axie-ui
```

Other package managers:

```bash
npm install axie-ui
yarn add axie-ui
bun add axie-ui
```

Import the stylesheet once near your app root, then import components from the package.

```css
@import "tailwindcss";
@import "axie-ui/styles.css";
@source "../node_modules/axie-ui/dist";
```

```tsx
import { Button, Field, Input } from "axie-ui";
```

## Example

```tsx
import { Button, Field, Input } from "axie-ui";

export function SignInForm() {
  return (
    <form className="grid gap-4">
      <Field label="Email" helper="Use the email connected to your workspace.">
        <Input placeholder="alexi@example.com" type="email" />
      </Field>
      <Button>Continue</Button>
    </form>
  );
}
```

## Registry

If you prefer shadcn-style ownership, install components from the hosted registry instead of installing this package.

```bash
pnpm dlx shadcn@latest add https://axie.alexi.life/r/button.json
```

Optional shorthand:

```bash
pnpm dlx shadcn@latest registry add @axie=https://axie.alexi.life/r/{name}.json
pnpm dlx shadcn@latest add @axie/button
```

## Components

Axie includes buttons, fields, inputs, autocomplete, OTP inputs, checkboxes, switches, segmented controls, tabs, accordions, command menus, dialogs, selects, radio groups, cards, alerts, badges, avatars, breadcrumbs, popovers, progress, sliders, pagination, steppers, tables, list rows, empty states, skeletons, keyboard hints, mobile docks, code blocks, bottom sheets, tooltips, toasts, separators, and stats.

## Links

- Documentation: https://axie.alexi.life
- Component registry: https://axie.alexi.life/r/registry.json
- AI agent entrypoint: https://axie.alexi.life/llms.txt
