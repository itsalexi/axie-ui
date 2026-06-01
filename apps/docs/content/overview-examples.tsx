import { Avatar, Badge, Pill, Progress, Skeleton, Toast } from "axie-ui";

export const overviewExamples = (
  <div className="grid gap-4">
    <div className="flex flex-wrap items-center gap-2">
      <Badge tone="accent">Synced</Badge>
      <Badge tone="warning">Review</Badge>
      <Pill selected>Personal</Pill>
      <Pill>Team</Pill>
      <Avatar fallback="Alexi" size="sm" status="online" />
    </div>
    <div className="grid max-w-[560px] gap-3">
      <Progress value={72} />
      <div className="grid grid-cols-3 gap-2">
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
      </div>
    </div>
    <Toast
      description="Command search, component pages, and API tables use Axie primitives."
      title="Docs are part of the system"
      tone="info"
    />
  </div>
);

