import { CodeBlock } from "axie-ui";
import { defaultInstall, type ComponentDoc } from "./types";

const exampleCode = `import { Button } from "axie-ui";

export function Example() {
  return <Button>Save changes</Button>;
}`;

const managerControls = (
  <span className="flex rounded-[8px] bg-white/6 p-1">
    {["pnpm", "npm", "yarn", "bun"].map((manager) => (
      <button
        aria-pressed={manager === "pnpm"}
        className={[
          "min-h-7 rounded-[7px] px-2 font-mono text-[11px] font-black transition",
          manager === "pnpm"
            ? "bg-[#f6efe4] text-[#201c19]"
            : "text-[#f6efe4]/58 hover:text-[#f6efe4]"
        ].join(" ")}
        key={manager}
        type="button"
      >
        {manager}
      </button>
    ))}
  </span>
);

const doc: ComponentDoc = {
  api: [
    { description: "Code string to render when children are not supplied.", name: "code", type: "string" },
    { description: "Text copied by the copy button. Defaults to code or string children.", name: "copyText", type: "string" },
    { defaultValue: "code", description: "Small header label above the snippet.", name: "label", type: "ReactNode" },
    { description: "Inline header controls such as package-manager tabs.", name: "controls", type: "ReactNode" },
    { defaultValue: "true", description: "Whether to render the copy action.", name: "showCopy", type: "boolean" },
    { description: "Classes for the wrapper, pre, or code elements.", name: "className / preClassName / codeClassName", type: "string" }
  ],
  description: "A reusable code shell with copy action, header label, and space for inline controls.",
  examples: [
    {
      code: `<CodeBlock
  code="pnpm add axie-ui"
  controls={managerControls}
  label="install"
/>`,
      description: "Use the controls slot for package-manager tabs or related snippet actions.",
      preview: <CodeBlock code="pnpm add axie-ui" controls={managerControls} label="install" />,
      title: "With controls"
    }
  ],
  install: defaultInstall,
  name: "Code Block",
  preview: <CodeBlock code={exampleCode} />,
  previewCode: `<CodeBlock
  code={\`import { Button } from "axie-ui";

export function Example() {
  return <Button>Save changes</Button>;
}\`}
/>`,
  slug: "code-block",
  usage: `import { CodeBlock } from "axie-ui";

export function Example() {
  return (
    <CodeBlock
      code={\`pnpm add axie-ui\`}
      label="install"
    />
  );
}`
};

export default doc;
