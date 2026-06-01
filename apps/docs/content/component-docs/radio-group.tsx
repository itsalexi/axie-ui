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
      { description: "Shared native radio name.", name: "name", type: "string" },
      { description: "Radio options.", name: "options", type: "RadioGroupOption[]" },
      { description: "Selected value.", name: "value", type: "string" },
      { description: "Called when a radio is selected.", name: "onValueChange", type: "(value: string) => void" }
    ],
    description: "A radio group for settings where every option needs a short explanation.",
    install: defaultInstall,
    name: "Radio Group",
    preview: <RadioGroupPreview />,
    previewCode: `"use client";

import { useState } from "react";
import { RadioGroup } from "axie-ui";

export function Example() {
  const [value, setValue] = useState("daily");

  return (
    <RadioGroup
      name="cadence"
      options={[
        { label: "Daily", value: "daily", description: "Best for fast-moving logs." },
        { label: "Weekly", value: "weekly", description: "Good for lightweight planning." }
      ]}
      value={value}
      onValueChange={setValue}
    />
  );
}`,
    slug: "radio-group",
    usage: `import { RadioGroup } from "axie-ui";

export function Example() {
  return (
    <RadioGroup
      name="cadence"
      options={options}
      value={value}
      onValueChange={setValue}
    />
  );
}`
  };

export default doc;
