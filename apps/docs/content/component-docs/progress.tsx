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
      { description: "Current progress value.", name: "value", type: "number" },
      { defaultValue: "100", description: "Maximum progress value.", name: "max", type: "number" },
      { defaultValue: "accent", description: "Semantic fill color.", name: "tone", type: "accent | danger | info | warning" }
    ],
    description: "A stable progress bar for budget pace, onboarding, and background work.",
    install: defaultInstall,
    name: "Progress",
    preview: (
      <div className="grid w-full max-w-md gap-3">
        <Progress value={68} />
        <Progress tone="warning" value={48} />
        <Progress tone="danger" value={32} />
      </div>
    ),
    previewCode: `<div className="grid gap-3">
  <Progress value={68} />
  <Progress tone="warning" value={48} />
  <Progress tone="danger" value={32} />
</div>`,
    slug: "progress",
    usage: `import { Progress } from "axie-ui";

export function Example() {
  return <Progress value={68} />;
}`
  };

export default doc;
