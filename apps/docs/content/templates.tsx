import type { ReactNode } from "react";
import {
  AnalyticsReportTemplatePreview,
  BillingPortalTemplatePreview,
  LaunchChecklistTemplatePreview,
  MobileFinanceTemplatePreview,
  OpsDashboardTemplatePreview,
  ProjectBoardTemplatePreview,
  SupportInboxTemplatePreview,
  TeamSettingsTemplatePreview
} from "../components/template-previews";

export type Template = {
  category: string;
  code: string;
  description: string;
  ingredients: string[];
  preview: ReactNode;
  slug: string;
  title: string;
};

export const templates: Template[] = [
  {
    category: "Dashboard",
    code: `<div className="grid gap-5">
  <header className="flex items-start justify-between border-b border-axie-line pb-5">
    <div>
      <Badge tone="accent">Operations</Badge>
      <h1>Daily control room</h1>
    </div>
    <Button variant="soft">Export day</Button>
  </header>
  <div className="grid gap-4 md:grid-cols-4">
    <Stat label="Collected" value="$18.4k" tone="accent" />
    <Stat label="Pending" value="$2.7k" />
    <Stat label="Exceptions" value="14" tone="warning" />
    <Stat label="Failed" value="3" tone="danger" />
  </div>
  <Table>{/* account rows */}</Table>
</div>`,
    description: "A compact operations dashboard for revenue, exceptions, and daily review queues.",
    ingredients: ["Stat", "Table", "Badge", "List Row", "Button"],
    preview: <OpsDashboardTemplatePreview />,
    slug: "ops-dashboard",
    title: "Operations dashboard"
  },
  {
    category: "Billing",
    code: `<div className="grid gap-5">
  <Card>
    <CardHeader>
      <Badge tone="accent">Billing</Badge>
      <CardTitle>Renewal workspace</CardTitle>
    </CardHeader>
    <CardContent>
      <Stat label="Collected" value="$42.8k" tone="accent" />
      <Progress value={84} tone="accent" />
    </CardContent>
  </Card>
  <RadioGroup name="export" options={exportOptions} value="standard" />
  <Table>{/* invoice rows */}</Table>
</div>`,
    description: "A billing portal with renewal metrics, export controls, and invoice rows.",
    ingredients: ["Card", "Stat", "Progress", "Radio Group", "Table"],
    preview: <BillingPortalTemplatePreview />,
    slug: "billing-portal",
    title: "Billing portal"
  },
  {
    category: "Support",
    code: `<div className="grid gap-5 lg:grid-cols-[300px_1fr]">
  <aside className="divide-y divide-axie-line">
    <ListRow title="Refund timing" />
    <ListRow title="Tax receipt" />
  </aside>
  <Card>
    <Tabs defaultValue="reply" items={replyTabs} />
    <Button>Send reply</Button>
  </Card>
</div>`,
    description: "A support inbox with ticket rows, reply drafting, internal notes, and actions.",
    ingredients: ["List Row", "Tabs", "Textarea", "Alert", "Button"],
    preview: <SupportInboxTemplatePreview />,
    slug: "support-inbox",
    title: "Support inbox"
  },
  {
    category: "Settings",
    code: `<div className="grid gap-5 lg:grid-cols-[1fr_320px]">
  <Card>
    <Field label="Workspace name"><Input /></Field>
    <Field label="Recovery email"><Input type="email" /></Field>
    <Select options={roleOptions} />
  </Card>
  <Card variant="soft">
    <Switch label="Require two-step login" />
    <Checkbox label="Allow CSV exports" />
    <Button>Save changes</Button>
  </Card>
</div>`,
    description: "A workspace settings template for profile, access defaults, and security toggles.",
    ingredients: ["Field", "Input", "Select", "Switch", "Checkbox"],
    preview: <TeamSettingsTemplatePreview />,
    slug: "team-settings",
    title: "Team settings"
  },
  {
    category: "Mobile",
    code: `<div className="relative min-h-[500px]">
  <Stat label="Paid" value="42" tone="accent" />
  <ListRow title="North Pier" detail="$482.40" />
  <MobileDock
    action={{ icon: <PlusIcon />, label: "Add payment" }}
    defaultValue="home"
    items={items}
  />
</div>`,
    description: "A mobile finance home screen with summary metrics, recent payments, and a floating dock.",
    ingredients: ["Mobile Dock", "Stat", "Progress", "List Row", "Button"],
    preview: <MobileFinanceTemplatePreview />,
    slug: "mobile-finance",
    title: "Mobile finance"
  },
  {
    category: "Analytics",
    code: `<div className="grid gap-5">
  <Card>
    <CardHeader>
      <Badge tone="info">Report</Badge>
      <CardTitle>Revenue quality</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex h-44 items-end gap-2">{/* bars */}</div>
      <Stat label="Capture" value="92.4%" tone="accent" />
    </CardContent>
  </Card>
</div>`,
    description: "An analytics report screen with bar visualization, metrics, and review notes.",
    ingredients: ["Card", "Badge", "Stat", "Alert"],
    preview: <AnalyticsReportTemplatePreview />,
    slug: "analytics-report",
    title: "Analytics report"
  },
  {
    category: "Project",
    code: `<div className="grid gap-5">
  <header className="flex items-start justify-between">
    <Badge tone="accent">Projects</Badge>
    <Button>New task</Button>
  </header>
  <div className="grid gap-4 lg:grid-cols-3">
    <section><ListRow title="Invoice import" /></section>
    <section><ListRow title="Role audit" /></section>
    <section><ListRow title="Receipt template" /></section>
  </div>
</div>`,
    description: "A project board template with three focused lanes and task summary rows.",
    ingredients: ["List Row", "Badge", "Button"],
    preview: <ProjectBoardTemplatePreview />,
    slug: "project-board",
    title: "Project board"
  },
  {
    category: "Launch",
    code: `<div className="grid gap-5 lg:grid-cols-[1fr_320px]">
  <Card>
    <Stepper current="qa" items={releaseSteps} />
  </Card>
  <Card variant="soft">
    <Checkbox defaultChecked label="Design review" />
    <Checkbox label="Release notes" />
    <Alert title="Two checks left" tone="warning" />
  </Card>
</div>`,
    description: "A launch readiness screen with ordered progress, release gates, and status notes.",
    ingredients: ["Stepper", "Checkbox", "Alert", "Card"],
    preview: <LaunchChecklistTemplatePreview />,
    slug: "launch-checklist",
    title: "Launch checklist"
  }
];

export function getTemplate(slug: string) {
  return templates.find((template) => template.slug === slug) ?? null;
}
