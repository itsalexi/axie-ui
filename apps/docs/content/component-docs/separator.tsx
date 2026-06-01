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
      { defaultValue: "horizontal", description: "Separator axis.", name: "orientation", type: "horizontal | vertical" }
    ],
    description: "A simple separator for lists, panels, and docs layouts.",
    install: defaultInstall,
    name: "Separator",
    preview: (
      <div className="grid w-full max-w-md gap-4">
        <div className="text-[14px] font-semibold text-axie-ink">Above</div>
        <Separator />
        <div className="text-[14px] font-semibold text-axie-muted">Below</div>
      </div>
    ),
    previewCode: `<div className="grid gap-4">
  <div>Above</div>
  <Separator />
  <div>Below</div>
</div>`,
    slug: "separator",
    usage: `import { Separator } from "@axie/ui";

export function Example() {
  return <Separator />;
}`
  };

export default doc;
