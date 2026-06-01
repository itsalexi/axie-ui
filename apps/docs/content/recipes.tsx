import type { ReactNode } from "react";
import {
  Alert,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Field,
  Input,
  RadioGroup,
  Separator,
  Stat,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Textarea
} from "axie-ui";
import {
  ApprovalTimelineRecipePreview,
  DataToolbarRecipePreview,
  EmptyProjectRecipePreview,
  MobileDockRecipePreview,
  OnboardingChecklistRecipePreview,
  ReviewQueueRecipePreview,
  SecuritySettingsRecipePreview,
  SupportReplyRecipePreview,
  UploadQueueRecipePreview
} from "../components/recipe-previews";

export type Recipe = {
  accessibility: string[];
  code: string;
  description: string;
  ingredients: string[];
  preview: ReactNode;
  slug: string;
  title: string;
};

export const recipes: Recipe[] = [
  {
    accessibility: [
      "Keep labels visible above every input and include helper text when the field changes billing or notification behavior.",
      "Use native checkbox and switch controls so keyboard users can move through the panel without custom key handling.",
      "Reserve the alert for account-level state, not routine helper copy."
    ],
    code: `<Card variant="surface">
  <CardHeader>
    <Badge tone="accent">Workspace</Badge>
    <CardTitle>Notification settings</CardTitle>
    <CardDescription>Control how billing updates reach the team.</CardDescription>
  </CardHeader>
  <CardContent className="grid gap-4">
    <Field label="Workspace name" helper="Shown in receipts and exports.">
      <Input defaultValue="North Pier Ops" />
    </Field>
    <Switch defaultChecked label="Renewal receipts" description="Send a receipt after each renewal." />
    <Checkbox label="Include billing contact" description="Copy the account owner on payment emails." />
    <Alert title="Renewal scheduled" description="The card on file renews on June 18." tone="info" />
  </CardContent>
</Card>`,
    description: "A compact settings panel for forms, binary controls, and account-level status.",
    ingredients: ["Card", "Field", "Input", "Switch", "Checkbox", "Alert"],
    preview: (
      <Card className="w-full max-w-xl" variant="surface">
        <CardHeader>
          <Badge className="w-fit" tone="accent">Workspace</Badge>
          <CardTitle>Notification settings</CardTitle>
          <CardDescription>Control how billing updates reach the team.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Field label="Workspace name" helper="Shown in receipts and exports.">
            <Input defaultValue="North Pier Ops" />
          </Field>
          <Switch defaultChecked label="Renewal receipts" description="Send a receipt after each renewal." />
          <Checkbox label="Include billing contact" description="Copy the account owner on payment emails." />
          <Alert title="Renewal scheduled" description="The card on file renews on June 18." tone="info" />
        </CardContent>
      </Card>
    ),
    slug: "settings-panel",
    title: "Settings panel"
  },
  {
    accessibility: [
      "Use one heading for the queue and keep row labels descriptive enough to stand alone.",
      "Avoid color-only status. Pair progress, badges, and text so state survives low-vision and monochrome contexts.",
      "Keep row actions as buttons or links with clear accessible names."
    ],
    code: `<div className="grid gap-4">
  <div className="grid gap-3 border-y border-axie-line py-4 sm:grid-cols-3">
    <Stat label="Queued" value="18" />
    <Stat label="Ready" value="7" tone="accent" />
    <Stat label="Blocked" value="3" tone="danger" />
  </div>
  <SegmentedControl ariaLabel="Queue filter" options={filters} value="ready" />
  <div className="divide-y divide-axie-line border-y border-axie-line">
    <ListRow title="Merchant review" meta="Ready" description="Rate table changed by 4.2%." />
    <ListRow title="Contract sync" meta="Blocked" description="Missing approver from finance." />
  </div>
</div>`,
    description: "A dense review queue with filters, metrics, progress, and row-level summaries.",
    ingredients: ["Stat", "Segmented Control", "Progress", "List Row", "Badge"],
    preview: <ReviewQueueRecipePreview />,
    slug: "review-queue",
    title: "Review queue"
  },
  {
    accessibility: [
      "Use table headers for every column and keep numeric columns aligned consistently.",
      "Do not hide important payment state inside color. Include status text in the table.",
      "Pair destructive billing actions with a confirmation dialog or secondary review step."
    ],
    code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>AX-1048</TableCell>
      <TableCell><Badge tone="accent">Paid</Badge></TableCell>
      <TableCell>$184.20</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
    description: "A billing view that combines summary stats, table rows, status badges, and inline notes.",
    ingredients: ["Table", "Badge", "Stat", "Separator", "Radio Group"],
    preview: (
      <div className="grid w-full max-w-2xl gap-4">
        <div className="grid gap-3 border-y border-axie-line py-4 sm:grid-cols-3">
          <Stat label="Collected" value="$8,428" tone="accent" />
          <Stat label="Pending" value="$642" />
          <Stat label="Failed" value="2" tone="danger" />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>AX-1048</TableCell>
              <TableCell><Badge tone="accent">Paid</Badge></TableCell>
              <TableCell className="font-mono">$184.20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AX-1047</TableCell>
              <TableCell><Badge tone="warning">Pending</Badge></TableCell>
              <TableCell className="font-mono">$642.18</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AX-1046</TableCell>
              <TableCell><Badge tone="danger">Failed</Badge></TableCell>
              <TableCell className="font-mono">$91.40</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Separator />
        <RadioGroup
          name="invoice-export"
          options={[
            { description: "Include paid and pending invoices.", label: "Standard export", value: "standard" },
            { description: "Include failed invoices and retry notes.", label: "Finance export", value: "finance" }
          ]}
        />
      </div>
    ),
    slug: "billing-table",
    title: "Billing table"
  },
  {
    accessibility: [
      "Keep textarea labels persistent so users do not lose context after typing.",
      "Use helper text for format expectations and errors for validation, not placeholders alone.",
      "Place the primary action after the form fields in DOM order."
    ],
    code: `<Card variant="outline">
  <CardHeader>
    <CardTitle>Publish note</CardTitle>
    <CardDescription>Prepare the update before it reaches the team feed.</CardDescription>
  </CardHeader>
  <CardContent className="grid gap-4">
    <Field label="Title"><Input defaultValue="Policy review" /></Field>
    <Field label="Summary" helper="Keep the note under 240 characters.">
      <Textarea defaultValue="Thresholds changed for partner accounts." />
    </Field>
    <Button>Publish note</Button>
  </CardContent>
</Card>`,
    description: "A focused edit form for short notes, helper copy, and one primary action.",
    ingredients: ["Card", "Field", "Input", "Textarea", "Button"],
    preview: (
      <Card className="w-full max-w-xl" variant="outline">
        <CardHeader>
          <CardTitle>Publish note</CardTitle>
          <CardDescription>Prepare the update before it reaches the team feed.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Field label="Title">
            <Input defaultValue="Policy review" />
          </Field>
          <Field label="Summary" helper="Keep the note under 240 characters.">
            <Textarea defaultValue="Thresholds changed for partner accounts." />
          </Field>
          <Button className="justify-self-start">Publish note</Button>
        </CardContent>
      </Card>
    ),
    slug: "edit-form",
    title: "Edit form"
  },
  {
    accessibility: [
      "Use a real ordered stepper so the current setup position is announced in reading order.",
      "Keep the checklist as native checkboxes with clear labels instead of relying on icons.",
      "Put account-level setup warnings in an alert region near the action it affects."
    ],
    code: `<div className="grid gap-5">
  <Progress value={72} tone="accent" />
  <Stepper current="billing" items={steps} />
  <Checkbox defaultChecked label="Send setup summary" />
  <Checkbox label="Require finance review" />
  <Alert title="Almost ready" tone="info" />
</div>`,
    description: "A launch checklist with setup progress, visible prerequisites, and a clear next action.",
    ingredients: ["Progress", "Stepper", "Checkbox", "Alert", "Button"],
    preview: <OnboardingChecklistRecipePreview />,
    slug: "onboarding-checklist",
    title: "Onboarding checklist"
  },
  {
    accessibility: [
      "Keep filters in the tab order before the table so keyboard users can narrow results first.",
      "Expose table headers and status text; badges should reinforce the state, not replace it.",
      "Use a native combobox pattern for search and a listbox pattern for scoped filters."
    ],
    code: `<div className="grid gap-4">
  <div className="grid gap-3 lg:grid-cols-[1fr_210px_auto]">
    <Autocomplete options={searchOptions} placeholder="Search table..." />
    <Select options={statusOptions} defaultValue="active" />
    <Button variant="soft">Export</Button>
  </div>
  <Table>{/* records */}</Table>
  <Pagination>{/* pages */}</Pagination>
</div>`,
    description: "A searchable table header with scoped filters, status badges, and pagination.",
    ingredients: ["Autocomplete", "Select", "Table", "Badge", "Pagination"],
    preview: <DataToolbarRecipePreview />,
    slug: "data-toolbar",
    title: "Data toolbar"
  },
  {
    accessibility: [
      "Keep the active conversation and reply editor as separate regions with clear headings.",
      "Use tabs for parallel context, such as reply drafts and internal notes.",
      "Keep the final send action after the editor in DOM order."
    ],
    code: `<div className="grid gap-4 lg:grid-cols-[280px_1fr]">
  <div className="divide-y divide-axie-line">
    <ListRow title="Refund timing" />
    <ListRow title="Seat transfer" />
  </div>
  <Tabs defaultValue="reply" items={items} />
</div>`,
    description: "A two-pane support view with conversation rows, draft text, and policy notes.",
    ingredients: ["List Row", "Tabs", "Textarea", "Button", "Badge"],
    preview: <SupportReplyRecipePreview />,
    slug: "support-reply",
    title: "Support reply"
  },
  {
    accessibility: [
      "Keep the dock in a nav landmark with labels for every icon-only item.",
      "Use a raised center action only when it is the most common mobile task.",
      "Leave enough safe-area spacing so the dock does not cover page content."
    ],
    code: `<MobileDock
  action={{ icon: <PlusIcon />, label: "Add item" }}
  defaultValue="stats"
  items={items}
  position="static"
/>`,
    description: "A mobile-first finance shell with summary content and a floating navigation dock.",
    ingredients: ["Mobile Dock", "Stat", "Progress", "List Row", "Badge"],
    preview: <MobileDockRecipePreview />,
    slug: "mobile-dock-shell",
    title: "Mobile dock shell"
  },
  {
    accessibility: [
      "Use ordered steps for approval progress instead of disconnected status chips.",
      "Describe blockers in plain text next to the review action.",
      "Keep the secondary document action separate from the primary approval state."
    ],
    code: `<Card>
  <Badge tone="warning">Review</Badge>
  <Stepper current="legal" items={approvalSteps} />
  <Alert title="One blocker" tone="warning" />
  <Button variant="outline">View packet</Button>
</Card>`,
    description: "A contract timeline that combines review progress, blockers, and document actions.",
    ingredients: ["Stepper", "Alert", "Badge", "Button"],
    preview: <ApprovalTimelineRecipePreview />,
    slug: "approval-timeline",
    title: "Approval timeline"
  },
  {
    accessibility: [
      "Use persistent field labels for sensitive account data.",
      "Use native switches with direct descriptions so security settings are understandable without extra help.",
      "Place positive security state in a status alert, not only a color change."
    ],
    code: `<Card>
  <Field label="Recovery email">
    <Input type="email" />
  </Field>
  <Switch label="Require two-step login" />
  <Switch label="Session review" />
  <Alert title="Passkey ready" tone="accent" />
</Card>`,
    description: "A security settings panel with owner recovery details and account controls.",
    ingredients: ["Card", "Field", "Input", "Switch", "Alert"],
    preview: <SecuritySettingsRecipePreview />,
    slug: "security-settings",
    title: "Security settings"
  },
  {
    accessibility: [
      "Use one direct empty-state heading and explain the next meaningful action.",
      "Offer an import path and a create path without hiding them behind a menu.",
      "Keep dashboard counts visible so the empty state has context."
    ],
    code: `<div className="grid gap-4">
  <Stat label="Projects" value="0" />
  <EmptyState
    title="No active projects"
    description="Create the first project or import a task list."
    action={<Button>Create project</Button>}
  />
</div>`,
    description: "A useful empty state with context metrics and two first-run actions.",
    ingredients: ["Empty State", "Button", "Stat", "Badge"],
    preview: <EmptyProjectRecipePreview />,
    slug: "empty-project",
    title: "Empty project"
  },
  {
    accessibility: [
      "Announce import progress as text next to each file, not only in a bar.",
      "Keep loading rows visually similar to completed rows so layout does not jump.",
      "Use status badges for each file outcome and one progress bar for the batch."
    ],
    code: `<div className="grid gap-4">
  <Progress value={47} tone="accent" />
  <div className="divide-y divide-axie-line">
    <ListRow title="vendor-rates.csv" action={<Badge tone="accent">Done</Badge>} />
    <ListRow title="april-ledger.xlsx" action={<Badge tone="info">47%</Badge>} />
    <Skeleton className="h-4 w-2/3" />
  </div>
</div>`,
    description: "An import queue with mixed completed, active, and loading file rows.",
    ingredients: ["Progress", "List Row", "Badge", "Skeleton", "Button"],
    preview: <UploadQueueRecipePreview />,
    slug: "upload-queue",
    title: "Upload queue"
  }
];

export function getRecipe(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug) ?? null;
}
