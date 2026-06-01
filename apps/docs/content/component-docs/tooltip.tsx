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
      { description: "Small hover/focus content.", name: "content", type: "ReactNode" },
      { description: "Trigger element.", name: "children", type: "ReactNode" }
    ],
    description: "A lightweight tooltip for icon buttons and compact controls.",
    install: defaultInstall,
    name: "Tooltip",
    preview: (
      <Tooltip content="Review syncing status before closing.">
        <Button variant="outline">
          <InfoCircledIcon /> Hover me
        </Button>
      </Tooltip>
    ),
    previewCode: `<Tooltip content="Review syncing status before closing.">
  <Button variant="outline">
    <InfoCircledIcon /> Hover me
  </Button>
</Tooltip>`,
    slug: "tooltip",
    usage: `import { Tooltip } from "axie-ui";

export function Example() {
  return (
    <Tooltip content="Review syncing status before closing.">
      <button type="button">Hover me</button>
    </Tooltip>
  );
}`
  };

export default doc;
