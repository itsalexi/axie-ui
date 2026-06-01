import { Pagination, PaginationItem } from "@axie/ui";
import { defaultInstall, type ComponentDoc } from "./types";

const doc: ComponentDoc = {
  api: [
    { defaultValue: "Pagination", description: "Accessible nav label.", name: "label", type: "string" },
    { description: "Marks the active page.", name: "current", type: "boolean" },
    { description: "Native button props.", name: "...props", type: "ButtonHTMLAttributes<HTMLButtonElement>" }
  ],
  description: "A small pagination primitive for tables, ledgers, and search results.",
  install: defaultInstall,
  name: "Pagination",
  preview: (
    <Pagination>
      <PaginationItem>Prev</PaginationItem>
      <PaginationItem>1</PaginationItem>
      <PaginationItem current>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>Next</PaginationItem>
    </Pagination>
  ),
  previewCode: `<Pagination>
  <PaginationItem>Prev</PaginationItem>
  <PaginationItem>1</PaginationItem>
  <PaginationItem current>2</PaginationItem>
  <PaginationItem>3</PaginationItem>
  <PaginationItem>Next</PaginationItem>
</Pagination>`,
  slug: "pagination",
  usage: `import { Pagination, PaginationItem } from "@axie/ui";

export function Example() {
  return (
    <Pagination>
      <PaginationItem>Prev</PaginationItem>
      <PaginationItem current>2</PaginationItem>
      <PaginationItem>Next</PaginationItem>
    </Pagination>
  );
}`
};

export default doc;
