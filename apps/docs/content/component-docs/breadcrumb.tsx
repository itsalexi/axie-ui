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
      { description: "Ordered breadcrumb segments.", name: "items", type: "BreadcrumbItem[]" },
      { defaultValue: "/", description: "Visual separator between segments.", name: "separator", type: "ReactNode" },
      { description: "Link destination for non-current items.", name: "href", type: "string" }
    ],
    description: "A compact navigation trail for docs, settings, and nested app pages.",
    install: defaultInstall,
    name: "Breadcrumb",
    preview: (
      <Breadcrumb
        items={[
          { href: "/", label: "Docs" },
          { href: "/docs/components/button", label: "Components" },
          { current: true, label: "Breadcrumb" }
        ]}
      />
    ),
    previewCode: `<Breadcrumb
  items={[
    { href: "/", label: "Docs" },
    { href: "/docs/components/button", label: "Components" },
    { current: true, label: "Breadcrumb" }
  ]}
/>`,
    slug: "breadcrumb",
    usage: `import { Breadcrumb } from "@axie/ui";

export function Example() {
  return (
    <Breadcrumb
      items={[
        { href: "/", label: "Docs" },
        { current: true, label: "Components" }
      ]}
    />
  );
}`
  };

export default doc;
