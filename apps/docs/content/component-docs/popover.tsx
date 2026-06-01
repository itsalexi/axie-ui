import { Button, Popover, Separator } from "@axie/ui";
import { defaultInstall, type ComponentDoc } from "./types";

const doc: ComponentDoc = {
  api: [
    { defaultValue: "center", description: "Horizontal alignment against the trigger.", name: "align", type: "start | center | end" },
    { description: "Popover content.", name: "content", type: "ReactNode" },
    { description: "Controlled open state.", name: "open", type: "boolean" },
    { description: "Called when open state changes.", name: "onOpenChange", type: "(open: boolean) => void" }
  ],
  description: "A lightweight floating surface for compact actions and contextual details.",
  install: defaultInstall,
  name: "Popover",
  preview: (
    <Popover
      align="center"
      content={
        <div className="grid gap-2 p-1">
          <p className="m-0 text-[14px] font-black text-axie-ink">Plan tools</p>
          <p className="m-0 max-w-[24ch] text-[12px] font-bold leading-5 text-axie-muted">
            Keep quick actions close without opening a full dialog.
          </p>
          <Separator />
          <Button size="sm" variant="soft">Archive</Button>
        </div>
      }
    >
      <Button variant="outline">Open popover</Button>
    </Popover>
  ),
  previewCode: `<Popover
  content={
    <div className="grid gap-2 p-1">
      <p className="m-0 text-[14px] font-black">Plan tools</p>
      <Separator />
      <Button size="sm" variant="soft">Archive</Button>
    </div>
  }
>
  <Button variant="outline">Open popover</Button>
</Popover>`,
  slug: "popover",
  usage: `import { Button, Popover } from "@axie/ui";

export function Example() {
  return (
    <Popover content={<div>Content</div>}>
      <Button>Open</Button>
    </Popover>
  );
}`
};

export default doc;
