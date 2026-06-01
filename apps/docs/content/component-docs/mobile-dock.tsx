import { MobileDock, type MobileDockItem } from "axie-ui";
import {
  ActivityLogIcon,
  BarChartIcon,
  CalendarIcon,
  DashboardIcon,
  PlusIcon
} from "@radix-ui/react-icons";
import { defaultInstall, type ComponentDoc } from "./types";

const dockItems: MobileDockItem[] = [
  { icon: <DashboardIcon />, label: "Home", value: "home" },
  { icon: <BarChartIcon />, label: "Overview", value: "overview" },
  { icon: <CalendarIcon />, label: "Plan", value: "plan" },
  { icon: <ActivityLogIcon />, label: "Activity", value: "activity" }
];

const doc: ComponentDoc = {
  api: [
    { description: "Navigation items with value, label, icon, optional href, and disabled state.", name: "items", type: "MobileDockItem[]" },
    { description: "Raised center action rendered between the item groups.", name: "action", type: "MobileDockAction" },
    { description: "Controlled active item value.", name: "value", type: "string" },
    { description: "Initial active item value for uncontrolled usage.", name: "defaultValue", type: "string" },
    { description: "Called when a dock item is selected.", name: "onValueChange", type: "(value, item) => void" },
    { defaultValue: "fixed", description: "Use fixed viewport placement or static placement for previews.", name: "position", type: "\"fixed\" | \"static\"" },
    { defaultValue: "Primary navigation", description: "Accessible label for the nav landmark.", name: "ariaLabel", type: "string" }
  ],
  description: "A floating mobile dock with a moving active indicator, spaced icon targets, and a raised center action.",
  examples: [
    {
      code: `<MobileDock
  defaultValue="overview"
  items={items}
  position="static"
/>`,
      description: "Use static placement when the dock belongs inside a preview, drawer, or demo frame.",
      preview: (
        <div className="grid w-full max-w-sm gap-5 rounded-[24px] border border-axie-line bg-axie-paper p-5 shadow-axie-soft">
          <div className="grid gap-2">
            <div className="h-3 w-20 rounded-axie-pill bg-axie-line" />
            <div className="h-20 rounded-[18px] border border-axie-line bg-axie-surface" />
          </div>
          <MobileDock defaultValue="overview" items={dockItems} position="static" />
        </div>
      ),
      title: "Static"
    }
  ],
  install: defaultInstall,
  name: "Mobile Dock",
  preview: (
    <div className="relative min-h-[360px] w-full max-w-[360px] overflow-hidden rounded-[32px] border border-axie-line bg-axie-paper shadow-axie-soft">
      <div className="grid gap-4 p-5 pb-28">
        <div className="flex items-center justify-between">
          <div>
            <p className="m-0 text-[12px] font-black uppercase text-axie-muted">Today</p>
            <h3 className="m-0 text-[28px] font-black leading-none text-axie-ink">$482.40</h3>
          </div>
          <span className="rounded-axie-pill border border-axie-line bg-axie-surface px-3 py-2 text-[12px] font-black text-axie-muted">
            Live
          </span>
        </div>
        <div className="grid gap-2">
          <div className="h-16 rounded-[18px] bg-axie-surface" />
          <div className="h-16 rounded-[18px] bg-axie-accent-soft" />
          <div className="h-16 rounded-[18px] bg-axie-surface-soft" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-3">
        <MobileDock
          action={{ icon: <PlusIcon />, label: "Add entry" }}
          className="px-0 py-0"
          defaultValue="home"
          items={dockItems}
          position="static"
        />
      </div>
    </div>
  ),
  previewCode: `<MobileDock
  action={{ icon: <PlusIcon />, label: "Add entry" }}
  defaultValue="home"
  items={[
    { icon: <DashboardIcon />, label: "Home", value: "home" },
    { icon: <BarChartIcon />, label: "Overview", value: "overview" },
    { icon: <CalendarIcon />, label: "Plan", value: "plan" },
    { icon: <ActivityLogIcon />, label: "Activity", value: "activity" }
  ]}
/>`,
  slug: "mobile-dock",
  usage: `import { MobileDock } from "axie-ui";
import {
  ActivityLogIcon,
  BarChartIcon,
  CalendarIcon,
  DashboardIcon,
  PlusIcon
} from "@radix-ui/react-icons";

export function Example() {
  return (
    <MobileDock
      action={{ icon: <PlusIcon />, label: "Add entry" }}
      defaultValue="home"
      items={[
        { icon: <DashboardIcon />, label: "Home", value: "home", href: "/" },
        { icon: <BarChartIcon />, label: "Overview", value: "overview", href: "/overview" },
        { icon: <CalendarIcon />, label: "Plan", value: "plan", href: "/plan" },
        { icon: <ActivityLogIcon />, label: "Activity", value: "activity", href: "/activity" }
      ]}
    />
  );
}`
};

export default doc;
