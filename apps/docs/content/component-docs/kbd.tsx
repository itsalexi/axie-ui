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
      { description: "Keyboard key label.", name: "children", type: "ReactNode" },
      { description: "Native kbd props.", name: "...props", type: "HTMLAttributes<HTMLElement>" }
    ],
    description: "A small keyboard hint primitive for command surfaces and docs.",
    install: defaultInstall,
    name: "Kbd",
    preview: (
      <div className="flex flex-wrap justify-center gap-2">
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
        <Kbd>Esc</Kbd>
      </div>
    ),
    previewCode: `<div className="flex gap-2">
  <Kbd>Ctrl</Kbd>
  <Kbd>K</Kbd>
  <Kbd>Esc</Kbd>
</div>`,
    slug: "kbd",
    usage: `import { Kbd } from "axie-ui";

export function Example() {
  return <Kbd>Ctrl K</Kbd>;
}`
  };

export default doc;
