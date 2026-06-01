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
} from "axie-ui";
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
      { description: "Stat label.", name: "label", type: "string" },
      { description: "Stat value.", name: "value", type: "string" },
      { defaultValue: "neutral", description: "Controls value color.", name: "tone", type: "neutral | accent | danger" }
    ],
    description: "A stable readout for dashboards and compact summary bands.",
    install: defaultInstall,
    name: "Stat",
    preview: (
      <div className="grid w-full max-w-lg grid-cols-3 gap-4 border-y border-axie-line py-4">
        <Stat label="Balance" value="$8,742" />
        <Stat label="Pace" tone="accent" value="$64" />
        <Stat label="Over" tone="danger" value="$18" />
      </div>
    ),
    previewCode: `<div className="grid grid-cols-3 gap-4 border-y border-axie-line py-4">
  <Stat label="Balance" value="$8,742" />
  <Stat label="Pace" tone="accent" value="$64" />
  <Stat label="Over" tone="danger" value="$18" />
</div>`,
    slug: "stat",
    usage: `import { Stat } from "axie-ui";

export function Example() {
  return <Stat label="Pace" tone="accent" value="$64" />;
}`
  };

export default doc;
