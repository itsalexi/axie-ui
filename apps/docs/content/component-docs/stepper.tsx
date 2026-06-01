import { Stepper } from "axie-ui";
import { defaultInstall, type ComponentDoc } from "./types";

const doc: ComponentDoc = {
  api: [
    { description: "Current step value.", name: "current", type: "string" },
    { description: "Ordered step definitions.", name: "items", type: "StepperItem[]" },
    { description: "Step label.", name: "label", type: "ReactNode" },
    { description: "Optional helper copy.", name: "description", type: "ReactNode" }
  ],
  description: "A compact progress list for setup flows, review queues, and staged forms.",
  install: defaultInstall,
  name: "Stepper",
  preview: (
    <Stepper
      className="w-full max-w-sm"
      current="review"
      items={[
        { description: "Name, category, and reset rhythm.", label: "Details", value: "details" },
        { description: "Check thresholds before saving.", label: "Review", value: "review" },
        { description: "Send the plan to active tracking.", label: "Publish", value: "publish" }
      ]}
    />
  ),
  previewCode: `<Stepper
  current="review"
  items={[
    { label: "Details", value: "details", description: "Name, category, and reset rhythm." },
    { label: "Review", value: "review", description: "Check thresholds before saving." },
    { label: "Publish", value: "publish", description: "Send the plan to active tracking." }
  ]}
/>`,
  slug: "stepper",
  usage: `import { Stepper } from "axie-ui";

export function Example() {
  return <Stepper current="review" items={steps} />;
}`
};

export default doc;
