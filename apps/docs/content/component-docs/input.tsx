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
      { description: "Accepts every native input prop.", name: "...props", type: "InputHTMLAttributes<HTMLInputElement>" },
      { description: "Additional classes for layout-specific sizing.", name: "className", type: "string" }
    ],
    description: "A dense input primitive with Axie focus, disabled, placeholder, and invalid states.",
    examples: [
      {
        code: `<Input aria-invalid placeholder="alexi@example.com" />`,
        description: "Use aria-invalid to trigger the error treatment.",
        preview: <Input aria-invalid placeholder="alexi@example.com" />,
        title: "Invalid"
      }
    ],
    install: defaultInstall,
    name: "Input",
    preview: (
      <div className="grid w-full max-w-sm gap-3">
        <Input placeholder="alexi@example.com" />
        <Input disabled placeholder="Disabled input" />
      </div>
    ),
    previewCode: `<div className="grid gap-3">
  <Input placeholder="alexi@example.com" />
  <Input disabled placeholder="Disabled input" />
</div>`,
    slug: "input",
    usage: `import { Input } from "axie-ui";

export function Example() {
  return <Input placeholder="alexi@example.com" />;
}`
  };

export default doc;
