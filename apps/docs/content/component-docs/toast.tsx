import { ToastPreview } from "../../components/live-examples";
import { defaultInstall, type ComponentDoc } from "./types";

const doc: ComponentDoc = {
  api: [
    { defaultValue: "neutral", description: "Controls background and border tone.", name: "tone", type: "neutral | accent | danger | warning | info" },
    { description: "Toast heading.", name: "title", type: "ReactNode" },
    { description: "Supporting toast copy.", name: "description", type: "ReactNode" },
    { description: "Optional trailing action.", name: "action", type: "ReactNode" },
    { defaultValue: "4200", description: "Milliseconds before a dispatched toast closes.", name: "duration", type: "number" },
    { description: "Dispatches a toast from inside ToastProvider.", name: "useToast", type: "() => { toast, dismiss, toasts }" }
  ],
  description: "A compact notification system for saved states, sync updates, and warnings.",
  install: defaultInstall,
  name: "Toast",
  preview: <ToastPreview />,
  previewCode: `<ToastProvider position="bottom-right">
  <ToastButton />
</ToastProvider>

function ToastButton() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          action: <Button size="sm" variant="outline">View</Button>,
          description: "Three entries are ready to review.",
          title: "Sync finished",
          tone: "accent"
        })
      }
    >
      Show toast
    </Button>
  );
}`,
  slug: "toast",
  usage: `import { Button, ToastProvider, useToast } from "@axie/ui";

export function Example() {
  return (
    <ToastProvider>
      <ToastButton />
    </ToastProvider>
  );
}

function ToastButton() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          description: "Three entries are ready to review.",
          title: "Sync finished",
          tone: "accent"
        })
      }
    >
      Show toast
    </Button>
  );
}`
};

export default doc;
