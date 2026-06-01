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
      { defaultValue: "6", description: "Number of visible slots.", name: "length", type: "number" },
      { defaultValue: "/\\d/", description: "Character filter used before committing a value.", name: "pattern", type: "RegExp" },
      { description: "Controlled input value.", name: "value", type: "string" },
      { description: "Called with the sanitized value.", name: "onValueChange", type: "(value: string) => void" }
    ],
    description: "A compact one-time code input with copy-paste support through a hidden native input.",
    examples: [
      {
        code: `<InputOtp aria-invalid length={6} value="000000" readOnly />`,
        description: "Use aria-invalid to show an error state on every slot.",
        preview: <InputOtp aria-invalid length={6} value="000000" readOnly />,
        title: "Invalid"
      },
      {
        code: `<InputOtp disabled length={4} value="1234" readOnly />`,
        description: "Disabled slots keep their dimensions stable.",
        preview: <InputOtp disabled length={4} value="1234" readOnly />,
        title: "Disabled"
      }
    ],
    install: defaultInstall,
    name: "Input OTP",
    preview: <OtpPreview />,
    previewCode: `"use client";

import { useState } from "react";
import { InputOtp } from "axie-ui";

export function Example() {
  const [value, setValue] = useState("427");

  return <InputOtp length={6} value={value} onValueChange={setValue} />;
}`,
    slug: "input-otp",
    usage: `import { InputOtp } from "axie-ui";

export function Example() {
  return <InputOtp length={6} />;
}`
  };

export default doc;
