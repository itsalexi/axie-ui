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
      { description: "Table wrapper and native table props.", name: "Table", type: "TableHTMLAttributes<HTMLTableElement>" },
      { description: "Semantic table sections.", name: "TableHeader, TableBody", type: "HTMLAttributes<HTMLTableSectionElement>" },
      { description: "Header cells and body cells.", name: "TableHead, TableCell", type: "ThHTMLAttributes | TdHTMLAttributes" },
      { description: "Rows with hover treatment.", name: "TableRow", type: "HTMLAttributes<HTMLTableRowElement>" }
    ],
    description: "Composable table pieces for compact API references, ledgers, and settings matrices.",
    install: defaultInstall,
    name: "Table",
    preview: (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Entry</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold text-axie-ink">Lunch with Mara</TableCell>
            <TableCell className="text-axie-muted">Food</TableCell>
            <TableCell className="text-right font-mono text-axie-danger">$18.40</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-axie-ink">Design invoice</TableCell>
            <TableCell className="text-axie-muted">Income</TableCell>
            <TableCell className="text-right font-mono text-axie-accent">$2,450</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    previewCode: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Entry</TableHead>
      <TableHead>Type</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Lunch with Mara</TableCell>
      <TableCell>Food</TableCell>
      <TableCell className="text-right">$18.40</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
    slug: "table",
    usage: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@axie/ui";

export function Example() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Entry</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Lunch with Mara</TableCell>
          <TableCell>$18.40</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`
  };

export default doc;
