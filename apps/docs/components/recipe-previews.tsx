"use client";

import { useState } from "react";
import {
  Alert,
  Autocomplete,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  EmptyState,
  Field,
  Input,
  ListRow,
  MobileDock,
  Pagination,
  PaginationItem,
  Progress,
  SegmentedControl,
  Select,
  Skeleton,
  Stepper,
  Stat,
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
  GearIcon,
  HomeIcon,
  PlusIcon
} from "@radix-ui/react-icons";

export function ReviewQueueRecipePreview() {
  const [filter, setFilter] = useState("ready");

  return (
    <div className="grid w-full max-w-2xl gap-4">
      <div className="grid gap-3 border-y border-axie-line py-4 sm:grid-cols-3">
        <Stat label="Queued" value="18" />
        <Stat label="Ready" value="7" tone="accent" />
        <Stat label="Blocked" value="3" tone="danger" />
      </div>
      <SegmentedControl
        ariaLabel="Queue filter"
        className="grid-cols-3"
        options={[
          { label: "All", value: "all" },
          { label: "Ready", value: "ready" },
          { label: "Blocked", value: "blocked" }
        ]}
        value={filter}
        onValueChange={setFilter}
      />
      <Progress value={62} tone="accent" />
      <div className="divide-y divide-axie-line border-y border-axie-line">
        <ListRow
          action={<Badge tone="accent">Ready</Badge>}
          detail="Rate table changed by 4.2%."
          title="Merchant review"
          tone="accent"
        />
        <ListRow
          action={<Badge tone="danger">Blocked</Badge>}
          detail="Missing approver from finance."
          title="Contract sync"
          tone="danger"
        />
        <ListRow
          action={<Badge>Draft</Badge>}
          detail="Three invoices need category cleanup."
          title="Invoice audit"
        />
      </div>
    </div>
  );
}

export function OnboardingChecklistRecipePreview() {
  return (
    <div className="grid w-full max-w-2xl gap-5">
      <div className="grid gap-3 border-y border-axie-line py-4 sm:grid-cols-[minmax(0,1fr)_180px] sm:items-center">
        <div className="grid gap-2">
          <Badge className="w-fit" tone="accent">Launch</Badge>
          <h3 className="m-0 text-[24px] font-black leading-none text-axie-ink">
            Workspace setup
          </h3>
          <p className="m-0 text-[13px] font-bold leading-5 text-axie-muted">
            Four required steps before inviting the operations team.
          </p>
        </div>
        <Progress value={72} tone="accent" />
      </div>
      <StepperBlock />
      <div className="grid gap-2 rounded-[14px] border border-axie-line bg-axie-surface p-4">
        <Checkbox defaultChecked label="Send setup summary" description="Email the owner when all launch checks pass." />
        <Checkbox label="Require finance review" description="Hold billing actions until account details are confirmed." />
      </div>
      <Alert title="Almost ready" description="Invite links unlock after the billing contact is verified." tone="info" />
    </div>
  );
}

export function DataToolbarRecipePreview() {
  return (
    <div className="grid w-full max-w-3xl gap-4">
      <div className="grid gap-3 rounded-[14px] border border-axie-line bg-axie-surface p-3 lg:grid-cols-[minmax(0,1fr)_210px_auto] lg:items-center">
        <Autocomplete
          defaultValue="invoice"
          options={[
            { description: "Open invoices and retry notes.", label: "Invoice queue", value: "INV" },
            { description: "Contract changes waiting for review.", label: "Contract changes", value: "CTR" },
            { description: "Accounts with failed payment attempts.", label: "Payment failures", value: "PAY" }
          ]}
          placeholder="Search table..."
        />
        <Select
          defaultValue="active"
          options={[
            { description: "Current work only.", label: "Active records", value: "active" },
            { description: "Completed rows from this month.", label: "Archived records", value: "archived" },
            { description: "Needs human review.", label: "Exceptions", value: "exceptions" }
          ]}
        />
        <Button variant="soft">Export</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Record</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Invoice AX-1192</TableCell>
            <TableCell>Maris Bello</TableCell>
            <TableCell><Badge tone="accent">Ready</Badge></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Contract CL-448</TableCell>
            <TableCell>Ilya Verano</TableCell>
            <TableCell><Badge tone="warning">Review</Badge></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Payment PM-207</TableCell>
            <TableCell>Noor Lazo</TableCell>
            <TableCell><Badge tone="danger">Failed</Badge></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Pagination className="justify-start">
        <PaginationItem current>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
      </Pagination>
    </div>
  );
}

export function SupportReplyRecipePreview() {
  return (
    <div className="grid w-full max-w-3xl gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
      <div className="divide-y divide-axie-line rounded-[14px] border border-axie-line bg-axie-surface px-4">
        <ListRow
          action={<Badge tone="accent">Open</Badge>}
          detail="Waiting 18m"
          title="Refund timing"
          tone="accent"
        />
        <ListRow action={<Badge>Draft</Badge>} detail="Updated 42m ago" title="Seat transfer" />
        <ListRow
          action={<Badge tone="warning">Hold</Badge>}
          detail="Needs invoice"
          title="Tax document"
          tone="info"
        />
      </div>
      <Tabs
        defaultValue="reply"
        items={[
          {
            content: (
              <div className="grid gap-3 rounded-[14px] border border-axie-line bg-axie-surface p-4">
                <Field label="Reply">
                  <Textarea defaultValue="Thanks for sending the receipt. I checked the refund window and your payout is scheduled for Friday." />
                </Field>
                <Button className="justify-self-start">Send reply</Button>
              </div>
            ),
            label: "Reply",
            value: "reply"
          },
          {
            content: (
              <div className="grid gap-2 rounded-[14px] border border-axie-line bg-axie-surface p-4">
                <Alert title="Refund policy" description="Transfers settle two business days after approval." tone="info" />
                <Alert title="Escalation" description="Escalate only if the receipt total changed." tone="warning" />
              </div>
            ),
            label: "Notes",
            value: "notes"
          }
        ]}
      />
    </div>
  );
}

export function MobileDockRecipePreview() {
  const items = [
    { icon: <HomeIcon />, label: "Home", value: "home" },
    { icon: <BarChartIcon />, label: "Stats", value: "stats" },
    { icon: <CalendarIcon />, label: "Plan", value: "plan" },
    { icon: <GearIcon />, label: "Settings", value: "settings" }
  ];

  return (
    <div className="relative min-h-[420px] w-full max-w-sm overflow-hidden rounded-[28px] border border-axie-line bg-axie-paper shadow-axie-soft">
      <div className="grid gap-5 p-5 pb-28">
        <div className="flex items-start justify-between">
          <div className="grid gap-1">
            <Badge className="w-fit" tone="accent">Today</Badge>
            <h3 className="m-0 text-[34px] font-black leading-none text-axie-ink">$482.40</h3>
          </div>
          <span className="rounded-axie-pill border border-axie-line bg-axie-surface px-3 py-2 text-[12px] font-black text-axie-muted">
            Live
          </span>
        </div>
        <div className="grid gap-3">
          <Stat label="Collected" value="$2,184" tone="accent" />
          <Progress value={62} tone="accent" />
          <div className="grid gap-2">
            <ListRow detail="Autopay succeeded" title="North Pier Ops" tone="accent" />
            <ListRow detail="Receipt waiting" title="Harbor Studio" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-4">
        <MobileDock
          action={{ icon: <PlusIcon />, label: "Add item" }}
          className="px-0 py-0"
          defaultValue="stats"
          items={items}
          position="static"
        />
      </div>
    </div>
  );
}

export function ApprovalTimelineRecipePreview() {
  return (
    <div className="grid w-full max-w-2xl gap-5 rounded-[16px] border border-axie-line bg-axie-surface p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="grid gap-1">
          <Badge className="w-fit" tone="warning">Review</Badge>
          <h3 className="m-0 text-[24px] font-black leading-none text-axie-ink">
            Contract approval
          </h3>
        </div>
        <Button variant="outline">View packet</Button>
      </div>
      <Stepper
        current="legal"
        items={[
          { description: "Partner terms were uploaded.", label: "Intake", value: "intake" },
          { description: "Counsel is checking renewal language.", label: "Legal review", value: "legal" },
          { description: "Finance owner confirms the new rate.", label: "Finance", value: "finance" },
          { description: "Send countersigned copy to the account.", label: "Send", value: "send" }
        ]}
      />
      <Alert title="One blocker" description="The renewal cap needs a named approver before sending." tone="warning" />
    </div>
  );
}

export function SecuritySettingsRecipePreview() {
  return (
    <Card className="w-full max-w-2xl" variant="surface">
      <CardHeader>
        <Badge className="w-fit" tone="info">Security</Badge>
        <CardTitle>Access controls</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Field label="Recovery email" helper="Used when an owner loses access.">
          <Input defaultValue="ops@northpier.example" type="email" />
        </Field>
        <Switch defaultChecked label="Require two-step login" description="Ask for a second factor on every new device." />
        <Switch label="Session review" description="Send a weekly report of active sessions." />
        <Alert title="Passkey ready" description="Three owners have a passkey enrolled." tone="accent" />
      </CardContent>
    </Card>
  );
}

export function EmptyProjectRecipePreview() {
  return (
    <div className="grid w-full max-w-2xl gap-4">
      <div className="grid gap-3 border-b border-axie-line pb-4 sm:grid-cols-3">
        <Stat label="Projects" value="0" />
        <Stat label="Members" value="4" tone="accent" />
        <Stat label="Tasks" value="0" />
      </div>
      <EmptyState
        action={
          <div className="flex flex-wrap gap-2">
            <Button>Create project</Button>
            <Button variant="outline">Import CSV</Button>
          </div>
        }
        description="Create the first project or import a task list to start assigning work."
        title="No active projects"
      />
    </div>
  );
}

export function UploadQueueRecipePreview() {
  return (
    <div className="grid w-full max-w-2xl gap-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="grid gap-1">
          <Badge className="w-fit" tone="accent">Files</Badge>
          <h3 className="m-0 text-[24px] font-black leading-none text-axie-ink">
            Import queue
          </h3>
        </div>
        <Button variant="soft">Upload more</Button>
      </div>
      <Progress value={47} tone="accent" />
      <div className="divide-y divide-axie-line rounded-[14px] border border-axie-line bg-axie-surface px-4">
        <ListRow action={<Badge tone="accent">Done</Badge>} detail="2.4 MB" title="vendor-rates.csv" tone="accent" />
        <ListRow action={<Badge tone="info">47%</Badge>} detail="8.8 MB" title="april-ledger.xlsx" tone="info" />
        <div className="grid gap-2 py-4">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </div>
  );
}

function StepperBlock() {
  return (
    <Stepper
      current="billing"
      items={[
        { description: "Name, domain, and time zone are set.", label: "Profile", value: "profile" },
        { description: "Billing contact needs confirmation.", label: "Billing", value: "billing" },
        { description: "Invite links stay locked until setup completes.", label: "Team", value: "team" },
        { description: "Publish the workspace for the whole team.", label: "Launch", value: "launch" }
      ]}
    />
  );
}
