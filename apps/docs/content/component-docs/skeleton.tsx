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
      { description: "Classes control the skeleton size.", name: "className", type: "string" }
    ],
    description: "A layout-matching loading primitive with a subtle shimmer.",
    install: defaultInstall,
    name: "Skeleton",
    preview: (
      <div className="grid w-full max-w-md gap-3">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-2/3" />
        <Skeleton className="h-24 w-full rounded-axie-card" />
      </div>
    ),
    previewCode: `<div className="grid gap-3">
  <Skeleton className="h-12 w-full" />
  <Skeleton className="h-12 w-2/3" />
  <Skeleton className="h-24 w-full rounded-axie-card" />
</div>`,
    slug: "skeleton",
    usage: `import { Skeleton } from "@axie/ui";

export function Example() {
  return <Skeleton className="h-12 w-full" />;
}`
  };

export default doc;
