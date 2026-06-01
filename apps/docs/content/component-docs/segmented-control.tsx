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
      { description: "Accessible label for the group.", name: "ariaLabel", type: "string" },
      { description: "Option list rendered as radio-like buttons.", name: "options", type: "SegmentedControlOption[]" },
      { description: "Selected option value.", name: "value", type: "string" },
      { description: "Called when a segment is selected.", name: "onValueChange", type: "(value: string) => void" }
    ],
    description: "A compact control for switching between a small set of mutually exclusive choices.",
    install: defaultInstall,
    name: "Segmented Control",
    preview: <SegmentedPreview />,
    previewCode: `"use client";

import { useState } from "react";
import { SegmentedControl } from "@axie/ui";

export function Example() {
  const [value, setValue] = useState("daily");

  return (
    <SegmentedControl
      ariaLabel="Budget rhythm"
      className="grid-cols-3"
      options={[
        { label: "Daily", value: "daily" },
        { label: "Weekly", value: "weekly" },
        { label: "Monthly", value: "monthly" }
      ]}
      value={value}
      onValueChange={setValue}
    />
  );
}`,
    slug: "segmented-control",
    usage: `import { SegmentedControl } from "@axie/ui";

<SegmentedControl
  ariaLabel="Budget rhythm"
  options={[
    { label: "Daily", value: "daily" },
    { label: "Weekly", value: "weekly" }
  ]}
  value={value}
  onValueChange={setValue}
/>`
  };

export default doc;
