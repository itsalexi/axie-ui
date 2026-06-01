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
      { description: "The tab definitions.", name: "items", type: "TabsItem[]" },
      { description: "Controlled tab value.", name: "value", type: "string" },
      { description: "Initial tab for uncontrolled usage.", name: "defaultValue", type: "string" },
      { description: "Called when a tab is selected.", name: "onValueChange", type: "(value: string) => void" }
    ],
    description: "A small tab primitive for previews, settings panels, and compact docs surfaces.",
    install: defaultInstall,
    name: "Tabs",
    preview: <TabsPreview />,
    previewCode: `<Tabs
  defaultValue="preview"
  items={[
    { label: "Preview", value: "preview", content: <div>Preview content</div> },
    { label: "Code", value: "code", content: <div>pnpm add @axie/ui</div> }
  ]}
/>`,
    slug: "tabs",
    usage: `import { Tabs } from "@axie/ui";

export function Example() {
  return (
    <Tabs
      defaultValue="preview"
      items={[
        { label: "Preview", value: "preview", content: <div>Preview</div> },
        { label: "Code", value: "code", content: <div>Code</div> }
      ]}
    />
  );
}`
  };

export default doc;
