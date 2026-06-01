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
      { description: "Controls dialog visibility.", name: "open", type: "boolean" },
      { description: "Called when the dialog should open or close.", name: "onOpenChange", type: "(open: boolean) => void" },
      { description: "Optional heading.", name: "title", type: "string" },
      { description: "Optional action area.", name: "footer", type: "ReactNode" }
    ],
    description: "A centered modal for confirmation and compact focused tasks.",
    install: defaultInstall,
    name: "Dialog",
    preview: <DialogPreview />,
    previewCode: `"use client";

import { useState } from "react";
import { Button, Dialog } from "axie-ui";

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog open={open} title="Archive entry" onOpenChange={setOpen}>
        Dialog content
      </Dialog>
    </>
  );
}`,
    slug: "dialog",
    usage: `import { Dialog } from "axie-ui";

export function Example() {
  return (
    <Dialog open={open} title="Archive entry" onOpenChange={setOpen}>
      Dialog content
    </Dialog>
  );
}`
  };

export default doc;
