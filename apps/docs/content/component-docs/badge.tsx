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
      { defaultValue: "neutral", description: "Controls semantic color treatment.", name: "tone", type: "neutral | accent | danger | warning | info" },
      { description: "Inline span props.", name: "...props", type: "HTMLAttributes<HTMLSpanElement>" }
    ],
    description: "Small semantic labels for status, categories, and compact metadata.",
    install: defaultInstall,
    name: "Badge",
    preview: (
      <div className="flex flex-wrap justify-center gap-2">
        <Badge>Draft</Badge>
        <Badge tone="accent">Synced</Badge>
        <Badge tone="warning">Review</Badge>
        <Badge tone="danger">Failed</Badge>
        <Badge tone="info">Queued</Badge>
      </div>
    ),
    previewCode: `<div className="flex gap-2">
  <Badge>Draft</Badge>
  <Badge tone="accent">Synced</Badge>
  <Badge tone="warning">Review</Badge>
  <Badge tone="danger">Failed</Badge>
</div>`,
    slug: "badge",
    usage: `import { Badge } from "@axie/ui";

export function Example() {
  return <Badge tone="accent">Synced</Badge>;
}`
  };

export default doc;
