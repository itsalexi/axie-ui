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
      { defaultValue: "neutral", description: "Controls border, background, and text color.", name: "tone", type: "neutral | accent | danger | warning | info" },
      { description: "Short title for the alert.", name: "title", type: "ReactNode" },
      { description: "Supporting message.", name: "description", type: "ReactNode" }
    ],
    description: "Inline feedback for state changes, warnings, and validation summaries.",
    install: defaultInstall,
    name: "Alert",
    preview: (
      <div className="grid w-full max-w-lg gap-3">
        <Alert description="Three entries will sync when the connection returns." title="Offline changes saved" tone="info" />
        <Alert description="This budget is already over its daily pace." title="Review spending" tone="warning" />
      </div>
    ),
    previewCode: `<div className="grid gap-3">
  <Alert
    description="Three entries will sync when the connection returns."
    title="Offline changes saved"
    tone="info"
  />
  <Alert description="This budget is already over its daily pace." title="Review spending" tone="warning" />
</div>`,
    slug: "alert",
    usage: `import { Alert } from "@axie/ui";

export function Example() {
  return <Alert title="Offline changes saved" description="Three entries will sync later." />;
}`
  };

export default doc;
