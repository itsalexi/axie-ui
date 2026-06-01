import { SliderPreview } from "../../components/live-examples";
import { defaultInstall, type ComponentDoc } from "./types";

const doc: ComponentDoc = {
  api: [
    { description: "Optional label rendered above the range input.", name: "label", type: "ReactNode" },
    { description: "Optional value label aligned to the right. Pass a function to render the live range value.", name: "valueLabel", type: "ReactNode | (value: string) => ReactNode" },
    { description: "Native range props.", name: "...props", type: "InputHTMLAttributes<HTMLInputElement>" }
  ],
  description: "A native range input for compact numeric preferences and settings.",
  install: defaultInstall,
  name: "Slider",
  preview: <SliderPreview />,
  previewCode: `<div className="grid gap-4">
  <Slider
    defaultValue={68}
    label="Monthly pace"
    max={100}
    valueLabel={(value) => \`\${value}%\`}
  />
  <Field helper="Controlled values can drive nearby copy." label="Buffer">
    <Slider value={value} max={80} valueLabel={\`\${value} days\`} />
  </Field>
</div>`,
  slug: "slider",
  usage: `import { Slider } from "@axie/ui";

export function Example() {
  return (
    <Slider
      defaultValue={68}
      label="Monthly pace"
      max={100}
      valueLabel={(value) => \`\${value}%\`}
    />
  );
}`
};

export default doc;
