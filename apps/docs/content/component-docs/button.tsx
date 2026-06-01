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
      { defaultValue: "solid", description: "Controls color, border, and surface treatment.", name: "variant", type: "solid | soft | outline | ghost | danger" },
      { defaultValue: "md", description: "Changes the control height and horizontal padding.", name: "size", type: "sm | md | lg | icon" },
      { defaultValue: "false", description: "Renders the button styles on a child element through Radix Slot.", name: "asChild", type: "boolean" }
    ],
    description: "A tactile action primitive with solid, soft, outline, ghost, danger, and icon treatments.",
    examples: [
      {
        code: `<div className="flex gap-2">
  <IconButton label="Add item">
    <PlusIcon />
  </IconButton>
  <Button variant="soft">Review queue</Button>
</div>`,
        preview: (
          <div className="flex flex-wrap items-center gap-2">
            <IconButton label="Add item">
              <PlusIcon />
            </IconButton>
            <Button variant="soft">Review queue</Button>
          </div>
        ),
        title: "With icon button"
      }
    ],
    install: defaultInstall,
    name: "Button",
    preview: (
      <div className="flex flex-wrap justify-center gap-2">
        <Button>Save changes</Button>
        <Button variant="soft">Review</Button>
        <Button variant="outline">Cancel</Button>
        <Button variant="ghost">Skip</Button>
        <Button variant="danger">Delete</Button>
      </div>
    ),
    previewCode: `<div className="flex gap-2">
  <Button>Save changes</Button>
  <Button variant="soft">Review</Button>
  <Button variant="outline">Cancel</Button>
  <Button variant="ghost">Skip</Button>
  <Button variant="danger">Delete</Button>
</div>`,
    slug: "button",
    usage: `import { Button } from "@axie/ui";

export function Example() {
  return <Button>Save changes</Button>;
}`
  };

export default doc;
