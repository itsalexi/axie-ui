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
      { defaultValue: "surface", description: "Controls elevation and surface treatment.", name: "variant", type: "surface | soft | outline" },
      { description: "Container element props.", name: "...props", type: "HTMLAttributes<HTMLDivElement>" },
      { description: "Optional classes for spacing and layout.", name: "className", type: "string" }
    ],
    description: "Low-elevation containers for individual repeated items or genuine tool surfaces.",
    install: defaultInstall,
    name: "Card",
    preview: (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Spending plan</CardTitle>
          <CardDescription>Quiet surfaces for grouped controls and small summaries.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Left" tone="accent" value="$428" />
            <Stat label="Reset" value="Jun 15" />
          </div>
        </CardContent>
      </Card>
    ),
    previewCode: `<Card>
  <CardHeader>
    <CardTitle>Spending plan</CardTitle>
    <CardDescription>Quiet surfaces for grouped controls.</CardDescription>
  </CardHeader>
  <CardContent>
    <Stat label="Left" tone="accent" value="$428" />
  </CardContent>
</Card>`,
    examples: [
      {
        code: `<div className="grid gap-3">
  <Card variant="surface"><CardHeader><CardTitle>Surface</CardTitle></CardHeader></Card>
  <Card variant="soft"><CardHeader><CardTitle>Soft</CardTitle></CardHeader></Card>
  <Card variant="outline"><CardHeader><CardTitle>Outline</CardTitle></CardHeader></Card>
</div>`,
        description: "Use softer variants when elevation is not carrying hierarchy.",
        preview: (
          <div className="grid w-full max-w-sm gap-3">
            <Card variant="surface">
              <CardHeader>
                <CardTitle>Surface</CardTitle>
                <CardDescription>Default elevated surface.</CardDescription>
              </CardHeader>
            </Card>
            <Card variant="soft">
              <CardHeader>
                <CardTitle>Soft</CardTitle>
                <CardDescription>Muted grouping without much lift.</CardDescription>
              </CardHeader>
            </Card>
            <Card variant="outline">
              <CardHeader>
                <CardTitle>Outline</CardTitle>
                <CardDescription>Border-only framing.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        ),
        title: "Variants"
      }
    ],
    slug: "card",
    usage: `import { Card, CardContent, CardHeader, CardTitle } from "axie-ui";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending plan</CardTitle>
      </CardHeader>
      <CardContent>Content</CardContent>
    </Card>
  );
}`
  };

export default doc;
