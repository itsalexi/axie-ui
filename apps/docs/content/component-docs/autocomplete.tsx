import { Autocomplete, Field, type AutocompleteOption } from "axie-ui";
import { defaultInstall, type ComponentDoc } from "./types";

const peopleOptions: AutocompleteOption[] = [
  { description: "Budget review", label: "Mira Vale", value: "mira" },
  { description: "Design pass", label: "Talia Nox", value: "talia" },
  { description: "Launch notes", label: "Oren Pike", value: "oren" },
  { description: "QA sweep", label: "Iris Calder", value: "iris" },
  { description: "Ops handoff", label: "Noa Kit", value: "noa" }
];

const doc: ComponentDoc = {
  api: [
    { description: "Suggested items shown in the listbox.", name: "options", type: "AutocompleteOption[]" },
    { description: "Controlled input text.", name: "value", type: "string" },
    { description: "Initial input text for uncontrolled usage.", name: "defaultValue", type: "string" },
    { description: "Called when the input text changes or an option is selected.", name: "onValueChange", type: "(value, option?) => void" },
    { description: "Called with the full option after selection.", name: "onOptionSelect", type: "(option) => void" },
    { defaultValue: "No matches found.", description: "Empty-state content for a filtered list.", name: "emptyText", type: "ReactNode" },
    { description: "Native input props like name, disabled, placeholder, and aria attributes.", name: "...props", type: "InputHTMLAttributes<HTMLInputElement>" }
  ],
  description: "A combobox input for filtering suggestions, selecting an option, and keeping keyboard control intact.",
  examples: [
    {
      code: `<Autocomplete
  emptyText="No matching project."
  options={[
    { description: "Design system", label: "Axie UI", value: "axie" },
    { description: "Docs shell", label: "Atlas Docs", value: "atlas" }
  ]}
  placeholder="Search projects..."
/>`,
      description: "Use concise empty text when a query has no matches.",
      preview: (
        <div className="w-full max-w-sm">
          <Autocomplete
            emptyText="No matching project."
            options={[
              { description: "Design system", label: "Axie UI", value: "axie" },
              { description: "Docs shell", label: "Atlas Docs", value: "atlas" },
              { description: "Payment states", label: "Mint Ledger", value: "mint" }
            ]}
            placeholder="Search projects..."
          />
        </div>
      ),
      title: "Empty state"
    }
  ],
  install: defaultInstall,
  name: "Autocomplete",
  preview: (
    <div className="w-full max-w-sm">
      <Field helper="Type to filter the suggestion list." label="Assignee">
        <Autocomplete options={peopleOptions} placeholder="Search people..." />
      </Field>
    </div>
  ),
  previewCode: `<Field helper="Type to filter the suggestion list." label="Assignee">
  <Autocomplete
    options={[
      { description: "Budget review", label: "Mira Vale", value: "mira" },
      { description: "Design pass", label: "Talia Nox", value: "talia" },
      { description: "Launch notes", label: "Oren Pike", value: "oren" }
    ]}
    placeholder="Search people..."
  />
</Field>`,
  slug: "autocomplete",
  usage: `import { Autocomplete, Field } from "axie-ui";

export function Example() {
  return (
    <Field label="Assignee">
      <Autocomplete
        options={[
          { label: "Mira Vale", value: "mira" },
          { label: "Talia Nox", value: "talia" }
        ]}
        placeholder="Search people..."
      />
    </Field>
  );
}`
};

export default doc;
