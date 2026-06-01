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
      { description: "Optional label rendered beside the native checkbox.", name: "label", type: "ReactNode" },
      { description: "Optional descriptive copy.", name: "description", type: "ReactNode" },
      { description: "Accepts every native checkbox prop except type.", name: "...props", type: "InputHTMLAttributes<HTMLInputElement>" }
    ],
    description: "A native checkbox with Axie sizing, color, label, and description patterns.",
    install: defaultInstall,
    name: "Checkbox",
    preview: (
      <div className="grid w-full max-w-sm gap-3">
        <Checkbox defaultChecked description="Include committed recurring items." label="Count recurring spend" />
        <Checkbox description="Keep the item visible but inactive." label="Archive this entry" />
      </div>
    ),
    previewCode: `<div className="grid gap-3">
  <Checkbox
    defaultChecked
    description="Include committed recurring items."
    label="Count recurring spend"
  />
  <Checkbox description="Keep the item visible but inactive." label="Archive this entry" />
</div>`,
    slug: "checkbox",
    usage: `import { Checkbox } from "@axie/ui";

export function Example() {
  return <Checkbox label="Count recurring spend" defaultChecked />;
}`
  };

export default doc;
