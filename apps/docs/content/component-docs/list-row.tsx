import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  EmptyState,
  Field,
  IconButton,
  Input,
  InputOtp,
  Kbd,
  ListRow,
  Pill,
  Progress,
  RadioGroup,
  SegmentedControl,
  Select,
  Separator,
  Skeleton,
  Stat,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
  Toast,
  Tooltip
} from "@axie/ui";
import { ArrowRightIcon, InfoCircledIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  CommandMenuPreview,
  DialogPreview,
  OtpPreview,
  RadioGroupPreview,
  SegmentedPreview,
  SheetPreview,
  TabsPreview
} from "../../components/live-examples";
import { defaultInstall, type ComponentDoc } from "./types";

const doc: ComponentDoc = {
    api: [
      { description: "Main row text.", name: "title", type: "string" },
      { description: "Secondary row text.", name: "detail", type: "string" },
      { description: "Trailing metadata.", name: "meta", type: "string" },
      { defaultValue: "neutral", description: "Controls the row dot color.", name: "tone", type: "neutral | accent | danger | info" }
    ],
    description: "A dense row primitive for ledgers, settings lists, feeds, and command rows.",
    install: defaultInstall,
    name: "List Row",
    preview: (
      <div className="w-full max-w-lg divide-y divide-axie-line border-y border-axie-line">
        <ListRow action={<strong>$18.40</strong>} detail="Food" meta="Today" title="Lunch with Mara" tone="danger" />
        <ListRow action={<strong>$2,450</strong>} detail="Income" meta="May 30" title="Design invoice" tone="accent" />
        <ListRow action={<ArrowRightIcon />} detail="Settings" meta="2 min" title="Review automations" tone="info" />
      </div>
    ),
    previewCode: `<div className="divide-y divide-axie-line border-y border-axie-line">
  <ListRow action={<strong>$18.40</strong>} detail="Food" meta="Today" title="Lunch with Mara" tone="danger" />
  <ListRow action={<strong>$2,450</strong>} detail="Income" meta="May 30" title="Design invoice" tone="accent" />
</div>`,
    slug: "list-row",
    usage: `import { ListRow } from "@axie/ui";

export function Example() {
  return <ListRow detail="Food" meta="Today" title="Lunch with Mara" tone="danger" />;
}`
  };

export default doc;
