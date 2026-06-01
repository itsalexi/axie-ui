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
      { description: "Visible field label.", name: "label", type: "string" },
      { description: "Optional supporting copy under the control.", name: "helper", type: "string" },
      { description: "Inline validation message. Overrides helper text.", name: "error", type: "string" }
    ],
    description: "A form wrapper for labels, helper copy, error copy, inputs, and textareas.",
    install: defaultInstall,
    name: "Field",
    preview: (
      <div className="grid w-full max-w-sm gap-4">
        <Field helper="Use a name you can scan later." label="Entry name">
          <Input placeholder="Lunch with Mara" />
        </Field>
        <Field error="Amount is required." label="Amount">
          <Input inputMode="decimal" placeholder="180" />
        </Field>
        <Field label="Notes">
          <Textarea placeholder="Add context without turning the form into a document." />
        </Field>
      </div>
    ),
    previewCode: `<div className="grid gap-4">
  <Field helper="Use a name you can scan later." label="Entry name">
    <Input placeholder="Lunch with Mara" />
  </Field>
  <Field error="Amount is required." label="Amount">
    <Input inputMode="decimal" placeholder="180" />
  </Field>
</div>`,
    slug: "field",
    usage: `import { Field, Input } from "axie-ui";

export function Example() {
  return (
    <Field helper="Use a name you can scan later." label="Entry name">
      <Input placeholder="Lunch with Mara" />
    </Field>
  );
}`
  };

export default doc;
