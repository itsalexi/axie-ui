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
      { defaultValue: "md", description: "Controls the avatar square size.", name: "size", type: "sm | md | lg" },
      { description: "Image source. Falls back to initials when omitted.", name: "src", type: "string" },
      { description: "Accessible image label and fallback source text.", name: "alt", type: "string" },
      { description: "Optional presence dot.", name: "status", type: "online | busy | offline" }
    ],
    description: "A rounded-square avatar with initials fallback and optional presence status.",
    install: defaultInstall,
    name: "Avatar",
    preview: (
      <div className="flex items-center justify-center gap-3">
        <Avatar fallback="Alexi" size="lg" status="online" />
        <Avatar fallback="Mara Chen" status="busy" />
        <Avatar fallback="Rio Tan" size="sm" status="offline" />
      </div>
    ),
    previewCode: `<div className="flex items-center gap-3">
  <Avatar fallback="Alexi" size="lg" status="online" />
  <Avatar fallback="Mara Chen" status="busy" />
  <Avatar fallback="Rio Tan" size="sm" status="offline" />
</div>`,
    slug: "avatar",
    usage: `import { Avatar } from "axie-ui";

export function Example() {
  return <Avatar fallback="Alexi" status="online" />;
}`
  };

export default doc;
