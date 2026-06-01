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
      { description: "Optional label rendered before the switch.", name: "label", type: "ReactNode" },
      { description: "Optional supporting copy.", name: "description", type: "ReactNode" },
      { description: "Accepts native checkbox props except type.", name: "...props", type: "InputHTMLAttributes<HTMLInputElement>" }
    ],
    description: "A compact native switch for binary settings and panel preferences.",
    install: defaultInstall,
    name: "Switch",
    preview: (
      <div className="grid w-full max-w-sm gap-4">
        <Switch defaultChecked description="Send a summary when a budget resets." label="Budget reset alerts" />
        <Switch description="Keep animation subtle on dense screens." label="Reduce motion" />
      </div>
    ),
    previewCode: `<div className="grid gap-4">
  <Switch
    defaultChecked
    description="Send a summary when a budget resets."
    label="Budget reset alerts"
  />
  <Switch description="Keep animation subtle on dense screens." label="Reduce motion" />
</div>`,
    slug: "switch",
    usage: `import { Switch } from "@axie/ui";

export function Example() {
  return <Switch label="Budget reset alerts" defaultChecked />;
}`
  };

export default doc;
