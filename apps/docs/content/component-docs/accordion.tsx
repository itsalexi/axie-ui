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
      { defaultValue: "single", description: "Allows one open item or multiple open items.", name: "type", type: "single | multiple" },
      { description: "Accordion item definitions.", name: "items", type: "AccordionItem[]" },
      { description: "Controlled open value.", name: "value", type: "string | string[]" },
      { description: "Called when the open value changes.", name: "onValueChange", type: "(value: string | string[]) => void" }
    ],
    description: "A disclosure primitive for progressive settings, FAQs, and compact help.",
    install: defaultInstall,
    name: "Accordion",
    preview: (
      <Accordion
        className="w-full max-w-lg"
        defaultValue="tokens"
        items={[
          {
            content: "Use the token sheet to keep color, radius, spacing, and motion consistent across app surfaces.",
            title: "How should tokens be used?",
            value: "tokens"
          },
          {
            content: "Keep long explanations collapsed until the user asks for more detail.",
            title: "When does accordion work best?",
            value: "density"
          },
          {
            content: "Use multiple mode for checklist-style help where more than one item can stay open.",
            title: "Can several rows stay open?",
            value: "multiple"
          }
        ]}
      />
    ),
    previewCode: `<Accordion
  defaultValue="tokens"
  items={[
    {
      title: "How should tokens be used?",
      value: "tokens",
      content: "Use the token sheet to keep color, radius, spacing, and motion consistent."
    },
    {
      title: "When does accordion work best?",
      value: "density",
      content: "Keep long explanations collapsed until the user asks for more detail."
    }
  ]}
/>`,
    slug: "accordion",
    usage: `import { Accordion } from "axie-ui";

export function Example() {
  return (
    <Accordion
      items={[
        { title: "Tokens", value: "tokens", content: "Use shared Axie tokens." }
      ]}
    />
  );
}`
  };

export default doc;
