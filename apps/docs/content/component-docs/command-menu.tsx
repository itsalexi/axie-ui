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
      { description: "Controls menu visibility.", name: "open", type: "boolean" },
      { description: "Called when the menu should open or close.", name: "onOpenChange", type: "(open: boolean) => void" },
      { description: "Searchable command list.", name: "items", type: "CommandMenuItem[]" },
      { description: "Called when the user chooses an item.", name: "onSelect", type: "(item: CommandMenuItem) => void" }
    ],
    description: "A keyboard-friendly command palette for docs search, navigation, and app commands.",
    install: defaultInstall,
    name: "Command Menu",
    preview: <CommandMenuPreview />,
    previewCode: `"use client";

import { useState } from "react";
import { Button, CommandMenu } from "axie-ui";

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open command menu</Button>
      <CommandMenu
        items={[
          { id: "button", title: "Button", description: "Open Button docs." },
          { id: "tokens", title: "Tokens", description: "Open token docs." }
        ]}
        open={open}
        onOpenChange={setOpen}
        onSelect={() => setOpen(false)}
      />
    </>
  );
}`,
    slug: "command-menu",
    usage: `import { CommandMenu } from "axie-ui";

export function Example() {
  return (
    <CommandMenu
      items={items}
      open={open}
      onOpenChange={setOpen}
      onSelect={handleSelect}
    />
  );
}`
  };

export default doc;
