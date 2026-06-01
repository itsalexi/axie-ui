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
      { description: "Controls sheet visibility.", name: "open", type: "boolean" },
      { description: "Called with the next open state.", name: "onOpenChange", type: "(open: boolean) => void" },
      { description: "Optional sheet heading.", name: "title", type: "string" },
      { description: "Optional sticky action area rendered after content.", name: "footer", type: "ReactNode" }
    ],
    description: "A mobile-first modal surface for dense forms and focused decisions.",
    install: defaultInstall,
    name: "Bottom Sheet",
    preview: <SheetPreview />,
    previewCode: `"use client";

import { useState } from "react";
import { BottomSheet, Button } from "axie-ui";

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open sheet</Button>
      <BottomSheet open={open} title="Edit plan" onOpenChange={setOpen}>
        Content
      </BottomSheet>
    </>
  );
}`,
    slug: "bottom-sheet",
    usage: `import { BottomSheet } from "axie-ui";

export function Example() {
  return (
    <BottomSheet open={open} title="Edit plan" onOpenChange={setOpen}>
      Content
    </BottomSheet>
  );
}`
  };

export default doc;
