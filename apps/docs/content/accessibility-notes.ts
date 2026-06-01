import type { ComponentSlug } from "@axie/registry";

export const accessibilityNotes: Record<ComponentSlug, string[]> = {
  accordion: [
    "Use a real button for each trigger and keep the trigger text specific.",
    "Expose expanded state with `aria-expanded` when the primitive is made fully controlled.",
    "Keep panel content in DOM order immediately after its trigger."
  ],
  alert: [
    "Use `role=\"status\"` for neutral updates and `role=\"alert\"` only for urgent messages.",
    "Do not rely on tone alone. The title should describe the state clearly.",
    "Keep alerts near the field, panel, or workflow they affect."
  ],
  autocomplete: [
    "Keep a visible label outside the input.",
    "Make arrow keys, Enter, and Escape work predictably for the suggestion list.",
    "Do not hide required choices in autocomplete when the list is short enough for radio or select."
  ],
  avatar: [
    "Use meaningful alt text when the avatar is an image of a person.",
    "Initials fallback should match the visible account or person name.",
    "Do not use presence color alone without supporting text nearby."
  ],
  badge: [
    "Badges should supplement nearby text, not replace it.",
    "Avoid communicating critical state with color only.",
    "Keep badge labels short so they remain readable at small sizes."
  ],
  "bottom-sheet": [
    "Move focus into the sheet when it opens and return focus to the trigger when it closes.",
    "Lock background scrolling while the sheet is open.",
    "Use a clear title so screen reader users understand the temporary context."
  ],
  breadcrumb: [
    "Wrap breadcrumbs in a named navigation landmark.",
    "Mark the current item with `aria-current=\"page\"`.",
    "Keep labels short enough to scan at small viewport widths."
  ],
  button: [
    "Use native button behavior for actions and links for navigation.",
    "Icon-only buttons need an accessible label.",
    "Keep disabled buttons out of critical flows unless another path explains why the action is unavailable."
  ],
  card: [
    "Cards should not become generic clickable divs; wrap the correct inner action in a link or button.",
    "Use heading levels that fit the surrounding page structure.",
    "Avoid nesting cards inside other cards because hierarchy becomes hard to parse."
  ],
  checkbox: [
    "Keep the checkbox label visible and clickable.",
    "Use helper text for consequences, not placeholder copy.",
    "Group related checkboxes with a fieldset and legend when the set has shared meaning."
  ],
  "code-block": [
    "Keep copied text equivalent to the visible snippet.",
    "Use the copy button as a convenience, not the only way to access code.",
    "Avoid placing required instructions only inside a horizontally scrolling snippet."
  ],
  "command-menu": [
    "Open the menu with a keyboard shortcut and keep Escape available to close it.",
    "Use `role=\"dialog\"` for the overlay and focus the search input on open.",
    "Return focus to the trigger after selection or dismissal."
  ],
  dialog: [
    "Use dialogs for focused decisions and keep the title descriptive.",
    "Trap focus while the dialog is open.",
    "Make Escape and a visible cancel/dismiss path available unless the action is destructive and requires a deliberate choice."
  ],
  "empty-state": [
    "Describe what is empty and provide one clear next action.",
    "Avoid decorative-only visuals that carry important meaning.",
    "Keep empty state copy concise so it does not read like onboarding documentation."
  ],
  field: [
    "Associate labels, helper text, and errors with the input using ids when wiring complex forms.",
    "Keep the label visible above the control.",
    "Reserve error text for actionable validation messages."
  ],
  input: [
    "Use labels outside the input; placeholders are not labels.",
    "Expose invalid state with `aria-invalid` and connect error text with `aria-describedby`.",
    "Choose the correct input type for email, URL, number, search, and password fields."
  ],
  "input-otp": [
    "Keep the hidden native input available for paste and mobile keyboard behavior.",
    "Use a label or surrounding field that explains which code is expected.",
    "Do not auto-submit without giving users a way to correct the code."
  ],
  kbd: [
    "Use keyboard hints as supporting text only.",
    "Prefer platform-aware shortcut labels where possible.",
    "Do not hide primary actions behind shortcuts."
  ],
  "mobile-dock": [
    "Keep icon-only items labeled with accessible names.",
    "Use `aria-current` for navigational links and `aria-pressed` for local state buttons.",
    "Respect safe-area spacing so the dock does not collide with mobile browser chrome."
  ],
  "list-row": [
    "Use buttons for actionable rows and links for navigational rows.",
    "Keep the title readable without depending on the metadata.",
    "Avoid truncating the only text that explains the row state."
  ],
  pagination: [
    "Use links when pages are navigable URLs and buttons when pagination is local state.",
    "Mark the current page with `aria-current=\"page\"`.",
    "Keep previous and next labels available to assistive technology."
  ],
  popover: [
    "Use popovers for supplemental content, not required form steps.",
    "Close on Escape and outside interaction.",
    "Keep the trigger and floating content close in the DOM when possible."
  ],
  progress: [
    "Use `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` for determinate progress.",
    "Pair progress bars with text when the value affects a decision.",
    "Avoid animating progress indefinitely unless the work is actually indeterminate."
  ],
  "radio-group": [
    "Group related radio items with a shared accessible name.",
    "Use radio buttons when exactly one option must be selected.",
    "Keep descriptions short so keyboard users can scan the group quickly."
  ],
  "segmented-control": [
    "Use segmented controls for small mutually exclusive sets.",
    "Expose the group as radio semantics or tabs depending on whether the control changes a view.",
    "Keep labels short enough to fit without truncation."
  ],
  select: [
    "Provide a visible label and avoid placeholder-only selects.",
    "Keep Escape and arrow-key behavior predictable.",
    "Use shorter option labels first, then descriptions for extra context."
  ],
  separator: [
    "Decorative separators should be hidden from assistive technology.",
    "Use semantic section headings when the divider separates major content.",
    "Do not use separators as the only signal for grouped controls."
  ],
  skeleton: [
    "Skeletons should match the approximate shape of the loading content.",
    "Avoid announcing every skeleton element to screen readers.",
    "Replace skeletons with content or an error state once loading finishes."
  ],
  slider: [
    "Expose a visible label and a text value for the current setting.",
    "Use sensible min, max, and step values for keyboard control.",
    "Avoid sliders for exact values when a number input would be faster."
  ],
  stat: [
    "Pair numbers with labels that explain the unit or measure.",
    "Use tabular numbers for changing values.",
    "Do not use color alone to signal positive or negative movement."
  ],
  stepper: [
    "Mark the current step with text, not just a colored marker.",
    "Keep completed and upcoming step labels visible.",
    "Use ordered list semantics when the sequence is meaningful."
  ],
  switch: [
    "Use switches for immediate on/off settings, not multi-step choices.",
    "Keep the label visible and specific.",
    "Use `role=\"switch\"` and reflect checked state with the native input."
  ],
  table: [
    "Use table headers for every data column.",
    "Keep horizontal scrolling inside the table wrapper instead of the page.",
    "Align numeric values consistently and include units in headers or cells."
  ],
  tabs: [
    "Use tabs when panels share the same context.",
    "Expose selected state and connect each tab to its panel.",
    "Keep keyboard navigation predictable with arrow keys when building custom tab behavior."
  ],
  toast: [
    "Use toasts for non-blocking feedback, not required decisions.",
    "Do not disappear critical errors before users can read them.",
    "Keep actions short and make dismissal available."
  ],
  tooltip: [
    "Tooltips should supplement visible UI, not contain required instructions.",
    "Make tooltip content available on focus as well as hover.",
    "Keep tooltip copy short enough to read before pointer movement closes it."
  ]
};

export function getAccessibilityNotes(slug: string) {
  return accessibilityNotes[slug as ComponentSlug] ?? [];
}
