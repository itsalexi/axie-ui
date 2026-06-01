"use client";

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
  ListRow,
  MobileDock,
  Progress,
  RadioGroup,
  Select,
  Stat,
  Stepper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  Textarea
} from "axie-ui";
import {
  BarChartIcon,
  CalendarIcon,
  HomeIcon,
  PlusIcon
} from "@radix-ui/react-icons";

export function OpsDashboardTemplatePreview() {
  return (
    <div className="grid w-full max-w-5xl gap-5">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-axie-line pb-5">
        <div className="grid gap-2">
          <Badge className="w-fit" tone="accent">Operations</Badge>
          <h3 className="m-0 text-[30px] font-black leading-none text-axie-ink">Daily control room</h3>
          <p className="m-0 max-w-[58ch] text-[13px] font-bold leading-5 text-axie-muted">
            Track revenue, open reviews, and exception work in one compact dashboard.
          </p>
        </div>
        <Button variant="soft">Export day</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <Stat label="Collected" value="$18.4k" tone="accent" />
        <Stat label="Pending" value="$2.7k" />
        <Stat label="Exceptions" value="14" />
        <Stat label="Failed" value="3" tone="danger" />
      </div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Account</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>North Pier Ops</TableCell>
              <TableCell>Maris Bello</TableCell>
              <TableCell><Badge tone="accent">Paid</Badge></TableCell>
              <TableCell className="font-mono">$4,820</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Harbor Studio</TableCell>
              <TableCell>Ilya Verano</TableCell>
              <TableCell><Badge tone="warning">Review</Badge></TableCell>
              <TableCell className="font-mono">$1,744</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cinder Works</TableCell>
              <TableCell>Noor Lazo</TableCell>
              <TableCell><Badge tone="danger">Failed</Badge></TableCell>
              <TableCell className="font-mono">$892</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="grid content-start gap-3 rounded-[14px] border border-axie-line bg-axie-surface p-4">
          <Badge className="w-fit" tone="info">Queue</Badge>
          <ListRow title="Rate changes" detail="8 waiting" action={<Badge tone="warning">High</Badge>} tone="info" />
          <ListRow title="Contract sync" detail="2 blocked" action={<Badge tone="danger">Block</Badge>} tone="danger" />
          <ListRow title="Receipt audit" detail="12 ready" action={<Badge tone="accent">Ready</Badge>} tone="accent" />
        </div>
      </div>
    </div>
  );
}

export function BillingPortalTemplatePreview() {
  return (
    <div className="grid w-full max-w-5xl gap-5">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <Card variant="surface">
          <CardHeader>
            <Badge className="w-fit" tone="accent">Billing</Badge>
            <CardTitle>Renewal workspace</CardTitle>
            <CardDescription>Prepare invoices, retry failed cards, and export finance packets.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-3 sm:grid-cols-3">
              <Stat label="Collected" value="$42.8k" tone="accent" />
              <Stat label="Open" value="$7.3k" />
              <Stat label="Failed" value="$918" tone="danger" />
            </div>
            <Progress value={84} tone="accent" />
          </CardContent>
        </Card>
        <Card variant="soft">
          <CardHeader>
            <CardTitle>Export type</CardTitle>
            <CardDescription>Choose the packet for the next finance handoff.</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              name="billing-template-export"
              options={[
                { description: "Paid and pending invoices.", label: "Standard packet", value: "standard" },
                { description: "Failed cards and retry notes.", label: "Risk packet", value: "risk" }
              ]}
              value="standard"
            />
          </CardContent>
        </Card>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>AX-2049</TableCell>
            <TableCell>North Pier Ops</TableCell>
            <TableCell><Badge tone="accent">Paid</Badge></TableCell>
            <TableCell className="font-mono">$2,480</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>AX-2048</TableCell>
            <TableCell>Foundry Desk</TableCell>
            <TableCell><Badge tone="warning">Pending</Badge></TableCell>
            <TableCell className="font-mono">$840</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export function SupportInboxTemplatePreview() {
  return (
    <div className="grid w-full max-w-5xl gap-5 lg:grid-cols-[300px_minmax(0,1fr)]">
      <aside className="divide-y divide-axie-line rounded-[14px] border border-axie-line bg-axie-surface px-4">
        <ListRow title="Refund timing" detail="Open for 18m" action={<Badge tone="accent">Open</Badge>} tone="accent" />
        <ListRow title="Tax receipt" detail="Needs invoice" action={<Badge tone="warning">Hold</Badge>} />
        <ListRow title="Seat transfer" detail="Draft ready" action={<Badge>Draft</Badge>} />
        <ListRow title="Plan downgrade" detail="Assigned to Cielo" action={<Badge tone="info">Info</Badge>} tone="info" />
      </aside>
      <section className="grid gap-4">
        <Card variant="surface">
          <CardHeader>
            <Badge className="w-fit" tone="accent">Conversation</Badge>
            <CardTitle>Refund timing</CardTitle>
            <CardDescription>Customer is asking when the renewal refund settles.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="reply"
              items={[
                {
                  content: (
                    <Field label="Reply draft">
                      <Textarea defaultValue="I checked the refund record. The payout is approved and should settle on Friday." />
                    </Field>
                  ),
                  label: "Reply",
                  value: "reply"
                },
                {
                  content: <Alert title="Policy note" description="Refunds settle two business days after approval." tone="info" />,
                  label: "Notes",
                  value: "notes"
                }
              ]}
            />
          </CardContent>
        </Card>
        <div className="flex flex-wrap gap-2">
          <Button>Send reply</Button>
          <Button variant="outline">Assign</Button>
          <Button variant="ghost">Snooze</Button>
        </div>
      </section>
    </div>
  );
}

export function TeamSettingsTemplatePreview() {
  return (
    <div className="grid w-full max-w-5xl gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
      <Card variant="surface">
        <CardHeader>
          <Badge className="w-fit" tone="accent">Workspace</Badge>
          <CardTitle>Team settings</CardTitle>
          <CardDescription>Update workspace identity, owner recovery, and member defaults.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Field label="Workspace name" helper="Shown in receipts, exports, and invites.">
            <Input defaultValue="North Pier Ops" />
          </Field>
          <Field label="Recovery email" helper="Used when all owners lose access.">
            <Input defaultValue="ops@northpier.example" />
          </Field>
          <Select
            defaultValue="member"
            options={[
              { description: "Can view records and leave notes.", label: "Member", value: "member" },
              { description: "Can approve work and change billing settings.", label: "Manager", value: "manager" }
            ]}
          />
        </CardContent>
      </Card>
      <Card variant="soft">
        <CardHeader>
          <CardTitle>Defaults</CardTitle>
          <CardDescription>Applied to new members and invite links.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Switch defaultChecked label="Require two-step login" />
          <Switch label="Weekly access digest" />
          <Checkbox defaultChecked label="Allow CSV exports" description="Managers can export filtered tables." />
          <Button>Save changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export function MobileFinanceTemplatePreview() {
  const items = [
    { icon: <HomeIcon />, label: "Home", value: "home" },
    { icon: <BarChartIcon />, label: "Stats", value: "stats" },
    { icon: <CalendarIcon />, label: "Plan", value: "plan" }
  ];

  return (
    <div className="relative min-h-[500px] w-full max-w-[370px] overflow-hidden rounded-[32px] border border-axie-line bg-axie-paper shadow-axie-soft">
      <div className="grid gap-5 p-5 pb-32">
        <div className="flex items-start justify-between">
          <div className="grid gap-1">
            <Badge className="w-fit" tone="accent">June</Badge>
            <h3 className="m-0 text-[38px] font-black leading-none text-axie-ink">$9,482</h3>
          </div>
          <Button size="sm" variant="soft">Sync</Button>
        </div>
        <Progress value={68} tone="accent" />
        <div className="grid grid-cols-2 gap-3">
          <Stat label="Paid" value="42" tone="accent" />
          <Stat label="Open" value="7" />
        </div>
        <div className="divide-y divide-axie-line rounded-[18px] border border-axie-line bg-axie-surface px-4">
          <ListRow title="North Pier" detail="$482.40" tone="accent" />
          <ListRow title="Harbor Studio" detail="$218.90" />
          <ListRow title="Cinder Works" detail="retry card" tone="danger" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-5">
        <MobileDock
          action={{ icon: <PlusIcon />, label: "Add payment" }}
          className="px-0 py-0"
          defaultValue="home"
          items={items}
          position="static"
        />
      </div>
    </div>
  );
}

export function AnalyticsReportTemplatePreview() {
  const bars = [58, 74, 42, 88, 63, 79, 51, 92, 69, 84, 47, 73];

  return (
    <div className="grid w-full max-w-5xl gap-5">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
        <Card variant="surface">
          <CardHeader>
            <Badge className="w-fit" tone="info">Report</Badge>
            <CardTitle>Revenue quality</CardTitle>
            <CardDescription>Settlement velocity and exception rate for the current period.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex h-44 items-end gap-2 border-b border-axie-line pb-3">
              {bars.map((height, index) => (
                <span
                  aria-hidden
                  className="flex-1 rounded-t-[10px] bg-axie-accent-soft transition duration-300 hover:bg-axie-accent"
                  key={`${height}-${index}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <Stat label="Capture" value="92.4%" tone="accent" />
              <Stat label="Retry lift" value="14.8%" />
              <Stat label="Disputes" value="0.7%" tone="danger" />
            </div>
          </CardContent>
        </Card>
        <Card variant="soft">
          <CardHeader>
            <CardTitle>Notes</CardTitle>
            <CardDescription>Signals worth reviewing before the next export.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            <Alert title="Retry lift improved" tone="accent" />
            <Alert title="Dispute rate flat" tone="info" />
            <Alert title="Two accounts need review" tone="warning" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function ProjectBoardTemplatePreview() {
  return (
    <div className="grid w-full max-w-5xl gap-5">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-axie-line pb-4">
        <div className="grid gap-2">
          <Badge className="w-fit" tone="accent">Projects</Badge>
          <h3 className="m-0 text-[30px] font-black leading-none text-axie-ink">Launch board</h3>
        </div>
        <Button>New task</Button>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {([
          ["Backlog", "8", "Invoice import", "Contract copy"],
          ["Active", "5", "Role audit", "Billing QA"],
          ["Done", "14", "Receipt template", "Invite polish"]
        ] as const).map(([title, count, first, second]) => (
          <section className="grid content-start gap-3 rounded-[14px] border border-axie-line bg-axie-surface p-4" key={title}>
            <div className="flex items-center justify-between">
              <h4 className="m-0 text-[16px] font-black text-axie-ink">{title}</h4>
              <Badge>{count}</Badge>
            </div>
            <ListRow title={first} detail="Owner: Cielo Vance" tone={title === "Done" ? "accent" : "neutral"} />
            <ListRow title={second} detail="Due Friday" tone={title === "Active" ? "info" : "neutral"} />
          </section>
        ))}
      </div>
    </div>
  );
}

export function LaunchChecklistTemplatePreview() {
  return (
    <div className="grid w-full max-w-5xl gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
      <Card variant="surface">
        <CardHeader>
          <Badge className="w-fit" tone="accent">Launch</Badge>
          <CardTitle>Product readiness</CardTitle>
          <CardDescription>Track the last checks before the workspace goes live.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Stepper
            current="qa"
            items={[
              { description: "Core routes and auth screens are ready.", label: "Build", value: "build" },
              { description: "Keyboard and responsive checks are in progress.", label: "QA", value: "qa" },
              { description: "Write release notes and owner handoff.", label: "Docs", value: "docs" },
              { description: "Publish and monitor the first accounts.", label: "Ship", value: "ship" }
            ]}
          />
        </CardContent>
      </Card>
      <Card variant="soft">
        <CardHeader>
          <CardTitle>Release gates</CardTitle>
          <CardDescription>Required before publishing.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Checkbox defaultChecked label="Design review" />
          <Checkbox defaultChecked label="Keyboard pass" />
          <Checkbox label="Release notes" />
          <Alert title="Two checks left" description="Docs and monitoring are still open." tone="warning" />
        </CardContent>
      </Card>
    </div>
  );
}
