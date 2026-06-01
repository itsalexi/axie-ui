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
      { description: "Empty state heading.", name: "title", type: "string" },
      { description: "Supporting empty state copy.", name: "description", type: "string" },
      { description: "Optional call to action.", name: "action", type: "ReactNode" }
    ],
    description: "A composed empty state with one visual signal and one clear action.",
    install: defaultInstall,
    name: "Empty State",
    preview: (
      <EmptyState
        action={
          <Button size="sm">
            <PlusIcon /> Add item
          </Button>
        }
        description="Use this when a list needs a first action instead of a blank panel."
        title="Nothing tracked yet"
      />
    ),
    previewCode: `<EmptyState
  action={<Button size="sm">Add item</Button>}
  description="Use this when a list needs a first action instead of a blank panel."
  title="Nothing tracked yet"
/>`,
    slug: "empty-state",
    usage: `import { EmptyState } from "axie-ui";

export function Example() {
  return <EmptyState title="Nothing tracked yet" description="Add your first item." />;
}`
  };

export default doc;
