import { Field, Select, type SelectOption } from "@axie/ui";
import { defaultInstall, type ComponentDoc } from "./types";

const cadenceOptions: SelectOption[] = [
  { description: "Send every morning.", label: "Daily", value: "daily" },
  { description: "Batch on Fridays.", label: "Weekly", value: "weekly" },
  { description: "Use the first and fifteenth.", label: "Semi-monthly", value: "semi-monthly" },
  { description: "Close out each month.", label: "Monthly", value: "monthly" }
];

const doc: ComponentDoc = {
  api: [
    { description: "Structured options with labels, values, disabled state, and descriptions.", name: "options", type: "SelectOption[]" },
    { description: "Controlled selected value.", name: "value", type: "string" },
    { description: "Initial selected value for uncontrolled usage.", name: "defaultValue", type: "string" },
    { description: "Called when an option is selected.", name: "onValueChange", type: "(value, option) => void" },
    { defaultValue: "Select an option", description: "Text shown before a value is selected.", name: "placeholder", type: "ReactNode" },
    { description: "Hidden input name for form submissions.", name: "name", type: "string" },
    { description: "Legacy option children are parsed for simple migration from native select.", name: "children", type: "ReactNode" }
  ],
  description: "A styled listbox select with Axie trigger, menu, option descriptions, and keyboard navigation.",
  examples: [
    {
      code: `<Select defaultValue="weekly">
  <option value="daily">Daily</option>
  <option value="weekly">Weekly</option>
  <option value="monthly">Monthly</option>
</Select>`,
      description: "Existing option children still work when you need a quick migration path.",
      preview: (
        <div className="w-full max-w-sm">
          <Select defaultValue="weekly">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </Select>
        </div>
      ),
      title: "Option children"
    }
  ],
  install: defaultInstall,
  name: "Select",
  preview: (
    <div className="w-full max-w-sm">
      <Field helper="Options can carry short descriptions." label="Reset cadence">
        <Select defaultValue="semi-monthly" options={cadenceOptions} />
      </Field>
    </div>
  ),
  previewCode: `<Field helper="Options can carry short descriptions." label="Reset cadence">
  <Select
    defaultValue="semi-monthly"
    options={[
      { description: "Send every morning.", label: "Daily", value: "daily" },
      { description: "Batch on Fridays.", label: "Weekly", value: "weekly" },
      { description: "Use the first and fifteenth.", label: "Semi-monthly", value: "semi-monthly" },
      { description: "Close out each month.", label: "Monthly", value: "monthly" }
    ]}
  />
</Field>`,
  slug: "select",
  usage: `import { Field, Select } from "@axie/ui";

export function Example() {
  return (
    <Field label="Reset cadence">
      <Select
        defaultValue="monthly"
        options={[
          { label: "Weekly", value: "weekly" },
          { label: "Monthly", value: "monthly" }
        ]}
      />
    </Field>
  );
}`
};

export default doc;
